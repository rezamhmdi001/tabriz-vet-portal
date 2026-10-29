#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Project exporter for AI evaluation
==================================
Collects project documentation, source code, structure, and metadata into a
single Markdown file that can be shared with other AI tools for review.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path

# ---------------------------------------------------------
# Limits and classification
# ---------------------------------------------------------

MAX_SINGLE_FILE_BYTES = 3 * 1024 * 1024
MAX_TOTAL_SOURCE_BYTES = 200 * 1024 * 1024
MAX_DOC_PREVIEW_CHARS = 1200

LANGUAGE_MAP = {
    ".py": "python",
    ".pyi": "python",
    ".js": "javascript",
    ".jsx": "jsx",
    ".mjs": "javascript",
    ".cjs": "javascript",
    ".ts": "typescript",
    ".tsx": "tsx",
    ".html": "html",
    ".htm": "html",
    ".css": "css",
    ".scss": "scss",
    ".sass": "sass",
    ".vue": "vue",
    ".svelte": "svelte",
    ".java": "java",
    ".kt": "kotlin",
    ".kts": "kotlin",
    ".go": "go",
    ".rs": "rust",
    ".c": "c",
    ".h": "c",
    ".cpp": "cpp",
    ".hpp": "cpp",
    ".cc": "cpp",
    ".cs": "csharp",
    ".php": "php",
    ".rb": "ruby",
    ".swift": "swift",
    ".dart": "dart",
    ".scala": "scala",
    ".r": "r",
    ".sql": "sql",
    ".sh": "bash",
    ".bash": "bash",
    ".zsh": "bash",
    ".ps1": "powershell",
    ".toml": "toml",
    ".ini": "ini",
    ".cfg": "ini",
    ".conf": "conf",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".json": "json",
    ".jsonc": "json",
    ".xml": "xml",
    ".md": "markdown",
    ".mdc": "markdown",
    ".rst": "rst",
    ".txt": "text",
    ".prisma": "prisma",
    ".graphql": "graphql",
    ".gql": "graphql",
    ".proto": "protobuf",
    "Dockerfile": "dockerfile",
    "Makefile": "makefile",
    ".gitkeep": "text",
}

SAFE_CONFIG_FILENAMES = {
    "Dockerfile",
    "Makefile",
    "Procfile",
    "requirements.txt",
    "Pipfile",
    "pyproject.toml",
    "setup.py",
    "setup.cfg",
    ".gitignore",
    ".gitkeep",
    ".dockerignore",
    ".editorconfig",
    ".env.example",
    "package.json",
    "tsconfig.json",
    "jsconfig.json",
    "vite.config.ts",
    "vite.config.js",
    "next.config.ts",
    "next.config.js",
    "next.config.mjs",
    "eslint.config.js",
    "eslint.config.mjs",
    "eslint.config.ts",
    "postcss.config.js",
    "postcss.config.mjs",
    "tailwind.config.js",
    "tailwind.config.ts",
    "docker-compose.yml",
    "docker-compose.yaml",
    "compose.yml",
    "compose.yaml",
    "Cargo.toml",
    "go.mod",
    "go.sum",
    "composer.json",
    "pubspec.yaml",
    "CMakeLists.txt",
}

LOCK_FILENAMES = {
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "bun.lockb",
    "Cargo.lock",
    "Pipfile.lock",
    "poetry.lock",
    "uv.lock",
    "composer.lock",
}

EXCLUDED_DIRS = {
    ".git",
    ".hg",
    ".svn",
    ".venv",
    "venv",
    "env",
    "__pycache__",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    ".tox",
    "node_modules",
    ".next",
    ".nuxt",
    ".output",
    ".turbo",
    ".cache",
    "dist",
    "build",
    "target",
    "out",
    "bin",
    "obj",
    ".dart_tool",
    "Pods",
    ".gradle",
    "vendor",
    ".idea",
    ".vscode",
    "logs",
    "log",
    "coverage",
    "htmlcov",
    "uploads",
    "downloads",
    "playwright-report",
    "test-results",
}

EXPORT_OUTPUT_FILENAMES = {
    "export_tbzvetportal.md",
    "project_code_export.md",
}

# Runtime / local persistence paths that must never be exported
EXCLUDED_PATH_PREFIXES = (
    "cms/data/",
    "cms/uploads/",
    "cms/backups/",
)

EXCLUDED_SUFFIXES = {
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ico",
    ".svg",
    ".bmp",
    ".mp3",
    ".mp4",
    ".wav",
    ".avi",
    ".mov",
    ".mkv",
    ".zip",
    ".rar",
    ".7z",
    ".tar",
    ".gz",
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",
    ".wasm",
    ".db",
    ".sqlite",
    ".sqlite3",
    ".pyc",
    ".pyo",
    ".class",
    ".jar",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".tsbuildinfo",
}

SENSITIVE_FILENAMES = {
    ".env",
    "credentials.json",
    "service-account.json",
    "secrets.json",
    "id_rsa",
    "id_ed25519",
    "known_hosts",
    "authorized_keys",
}

SECRET_PATTERNS = [
    re.compile(
        r"""(?i)\b(?:api[_-]?key|access[_-]?token|client[_-]?secret|password|passwd|secret[_-]?key)\b\s*[:=]\s*(["']?)[^\s"'<>]{8,}"""
    ),
    re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    re.compile(r"(?i)\bAIza[0-9A-Za-z_-]{35,}\b"),
    re.compile(r"\bsk-[A-Za-z0-9_-]{20,}\b"),
]

DOC_FILENAMES = {
    "readme.md",
    "agents.md",
    "product-vision.md",
    "development-workflow.md",
    "changelog.md",
    "contributing.md",
    "license",
    "license.md",
}

DOC_DIR_PREFIXES = (
    "docs/",
    ".cursor/",
)


# ---------------------------------------------------------
# Models
# ---------------------------------------------------------

@dataclass
class FileRecord:
    rel_path: str
    content: str
    size_bytes: int
    language: str
    category: str  # documentation | source | config
    source_ref: str = ""
    variants: list[str] = field(default_factory=list)


@dataclass
class GitInfo:
    available: bool
    branch: str = "unknown"
    commit: str = "unknown"
    commit_subject: str = ""
    remotes: list[str] = field(default_factory=list)
    status_summary: str = ""
    tracked_count: int | None = None
    dirty: bool | None = None


@dataclass
class BranchInfo:
    name: str
    commit: str
    subject: str
    date: str
    file_count: int
    is_head: bool = False
    kind: str = "local"  # local | remote-diverged | remote-only
    remote_name: str | None = None
    ahead: int | None = None
    behind: int | None = None
    note: str = ""


@dataclass
class EnvKeyInfo:
    name: str
    has_value: bool
    in_example: bool | None = None


@dataclass
class EnvInventory:
    path: str
    present: bool
    size_bytes: int = 0
    key_count: int = 0
    keys: list[EnvKeyInfo] = field(default_factory=list)
    example_path: str | None = None
    example_present: bool = False
    missing_from_example: list[str] = field(default_factory=list)
    missing_from_env: list[str] = field(default_factory=list)
    note: str = ""


@dataclass
class DirInventory:
    path: str
    present: bool
    file_count: int = 0
    dir_count: int = 0
    total_bytes: int = 0
    top_level: list[str] = field(default_factory=list)
    shallow_tree: str = ""
    note: str = ""


@dataclass
class LocalRuntimeInventory:
    env: EnvInventory
    data_dir: DirInventory
    uploads_dir: DirInventory


# ---------------------------------------------------------
# Helpers
# ---------------------------------------------------------

def format_bytes(num: int) -> str:
    value = float(num)
    for unit in ("B", "KB", "MB", "GB"):
        if value < 1024 or unit == "GB":
            if unit == "B":
                return f"{int(value)} {unit}"
            return f"{value:.2f} {unit}"
        value /= 1024
    return f"{num} B"

def get_markdown_fence(content: str) -> str:
    backticks = re.findall(r"`+", content)
    max_len = max((len(b) for b in backticks), default=0)
    return "`" * max(3, max_len + 1)


def detect_language(path: Path | str) -> str:
    name = Path(path).name
    if name in LANGUAGE_MAP:
        return LANGUAGE_MAP[name]
    return LANGUAGE_MAP.get(Path(path).suffix.lower(), "")


def posix_rel(path: str | Path) -> str:
    return str(path).replace("\\", "/")


def is_sensitive(path: Path | str) -> bool:
    name = Path(path).name.lower()
    if name in SENSITIVE_FILENAMES:
        return True
    if name.startswith(".env") and name != ".env.example":
        return True
    if name.endswith((".pem", ".key", ".p12", ".pfx")):
        return True
    if any(k in name for k in ("credential", "secret", "private_key")):
        return True
    return False


def is_excluded_path(rel_path: str) -> bool:
    rel = posix_rel(rel_path)
    return any(rel == prefix.rstrip("/") or rel.startswith(prefix) for prefix in EXCLUDED_PATH_PREFIXES)


def classify_file(rel_path: str) -> str:
    rel = posix_rel(rel_path)
    name = Path(rel).name.lower()
    if name in DOC_FILENAMES or any(rel.startswith(prefix) for prefix in DOC_DIR_PREFIXES):
        return "documentation"
    if name in SAFE_CONFIG_FILENAMES or name in LOCK_FILENAMES:
        return "config"
    if Path(rel).suffix.lower() in {".md", ".rst", ".txt"}:
        return "documentation"
    return "source"


def is_candidate_file(rel_path: str, include_locks: bool) -> tuple[bool, str]:
    rel = posix_rel(rel_path)
    name = Path(rel).name

    if rel.endswith(".tmp") or name.startswith(".export_"):
        return False, "Temporary file"
    if is_sensitive(rel):
        return False, "Sensitive file"
    if is_excluded_path(rel):
        return False, "Excluded local/runtime path"
    if not include_locks and name in LOCK_FILENAMES:
        return False, "Lockfile excluded by default"
    if Path(rel).suffix.lower() in EXCLUDED_SUFFIXES:
        return False, "Binary or non-text suffix"
    if name in SAFE_CONFIG_FILENAMES or name == ".env.example":
        return True, ""
    if Path(rel).suffix.lower() in LANGUAGE_MAP or name in LANGUAGE_MAP:
        return True, ""
    return False, "Ignored by file policy"


def redact_secrets(text: str) -> tuple[str, int]:
    count = 0
    for pattern in SECRET_PATTERNS:
        text, n = pattern.subn("[REDACTED_SECRET]", text)
        count += n
    return text, count


def build_tree_str(paths: list[str], root_name: str) -> str:
    tree: dict = {}
    for rel in paths:
        curr = tree
        for part in Path(rel).parts:
            curr = curr.setdefault(part, {})

    lines: list[str] = [f"{root_name}/"]

    def _render(node: dict, prefix: str = "") -> None:
        items = sorted(node.keys(), key=str.casefold)
        for idx, key in enumerate(items):
            is_last = idx == len(items) - 1
            connector = "└── " if is_last else "├── "
            lines.append(f"{prefix}{connector}{key}")
            extension = "    " if is_last else "│   "
            _render(node[key], prefix + extension)

    _render(tree)
    return "\n".join(lines)


def run_git(args: list[str], cwd: Path, *, strip_output: bool = True) -> tuple[int, str]:
    try:
        completed = subprocess.run(
            ["git", *args],
            cwd=cwd,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            check=False,
        )
        stdout = completed.stdout or ""
        if strip_output:
            stdout = stdout.strip()
        return completed.returncode, stdout
    except OSError:
        return 1, ""


def collect_git_info(project_root: Path) -> GitInfo:
    code, inside = run_git(["rev-parse", "--is-inside-work-tree"], project_root)
    if code != 0 or inside != "true":
        return GitInfo(available=False)

    _, branch = run_git(["rev-parse", "--abbrev-ref", "HEAD"], project_root)
    _, commit = run_git(["rev-parse", "--short", "HEAD"], project_root)
    _, subject = run_git(["log", "-1", "--pretty=%s"], project_root)
    _, remotes_raw = run_git(["remote", "-v"], project_root)
    remotes = sorted({line.split()[0] for line in remotes_raw.splitlines() if line.strip()})
    _, porcelain = run_git(["status", "--porcelain"], project_root)
    dirty = bool(porcelain)
    _, tracked_raw = run_git(["ls-files"], project_root)
    tracked_count = len([line for line in tracked_raw.splitlines() if line.strip()])

    if dirty:
        changed = len(porcelain.splitlines())
        status_summary = f"Working tree dirty ({changed} changed/untracked paths)"
    else:
        status_summary = "Working tree clean"

    return GitInfo(
        available=True,
        branch=branch or "unknown",
        commit=commit or "unknown",
        commit_subject=subject,
        remotes=remotes,
        status_summary=status_summary,
        tracked_count=tracked_count,
        dirty=dirty,
    )


def content_sha(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8", errors="replace")).hexdigest()[:12]


def parse_porcelain_z(output: str) -> set[str]:
    """Repo-relative paths from `git status --porcelain -z` that are dirty or untracked."""
    paths: set[str] = set()
    tokens = output.split("\0")
    index = 0
    while index < len(tokens):
        entry = tokens[index]
        index += 1
        if len(entry) < 3:
            continue
        status = entry[:2]
        if "!" in status:
            continue
        path = entry[3:] if entry[2] == " " else entry[2:]
        if status[0] in {"R", "C"} or status[1] in {"R", "C"}:
            if index < len(tokens):
                path = tokens[index]
            index += 1
        path = posix_rel(path)
        if path and not path.endswith("/"):
            paths.add(path)
    return paths


def list_dirty_worktree_paths(project_root: Path) -> set[str]:
    """Modified, added, renamed, unmerged, or untracked paths. Clean tracked files are omitted."""
    code, output = run_git(
        ["status", "--porcelain", "-z", "--untracked-files=all"],
        project_root,
        strip_output=False,
    )
    if code != 0 or not output:
        return set()
    return parse_porcelain_z(output)


def git_path_skip_reason(rel_path: str) -> str | None:
    parts = Path(rel_path).parts
    for idx, part in enumerate(parts[:-1]):
        prefix = "/".join(parts[: idx + 1]) + "/"
        if part.lower() in {x.lower() for x in EXCLUDED_DIRS}:
            return "Excluded directory pattern"
        if is_excluded_path(prefix):
            return "Excluded local/runtime path"
        if part.startswith(".") and part.lower() not in {
            ".github",
            ".husky",
            ".cursor",
            ".exporter",
        }:
            return "Hidden system directory"
    return None


def list_local_branch_names(project_root: Path) -> list[str]:
    code, raw = run_git(
        ["for-each-ref", "--format=%(refname:short)", "refs/heads"],
        project_root,
    )
    if code != 0 or not raw:
        return []
    return [line.strip() for line in raw.splitlines() if line.strip()]


def collect_branch_catalog(project_root: Path) -> list[BranchInfo]:
    code, inside = run_git(["rev-parse", "--is-inside-work-tree"], project_root)
    if code != 0 or inside != "true":
        return []

    _, head_branch = run_git(["rev-parse", "--abbrev-ref", "HEAD"], project_root)
    local_names = list_local_branch_names(project_root)
    catalog: list[BranchInfo] = []
    local_tips: dict[str, str] = {}

    for name in local_names:
        _, commit = run_git(["rev-parse", "--short", name], project_root)
        _, subject = run_git(["log", "-1", "--pretty=%s", name], project_root)
        _, date = run_git(["log", "-1", "--pretty=%cs", name], project_root)
        _, listing = run_git(["ls-tree", "-r", "--name-only", name], project_root)
        file_count = len([line for line in listing.splitlines() if line.strip()])

        remote_name = f"origin/{name}"
        ahead: int | None = None
        behind: int | None = None
        code_remote, remote_commit = run_git(["rev-parse", "--short", remote_name], project_root)
        if code_remote == 0 and remote_commit:
            _, counts = run_git(
                ["rev-list", "--left-right", "--count", f"{name}...{remote_name}"],
                project_root,
            )
            if counts:
                parts = counts.split()
                if len(parts) == 2 and parts[0].isdigit() and parts[1].isdigit():
                    ahead, behind = int(parts[0]), int(parts[1])
            if ahead or behind:
                note = f"tracks `{remote_name}` (ahead {ahead or 0}, behind {behind or 0})"
            else:
                note = f"tracks `{remote_name}` (in sync)"
        else:
            note = "no matching origin/* remote-tracking branch"

        catalog.append(
            BranchInfo(
                name=name,
                commit=commit or "unknown",
                subject=subject,
                date=date,
                file_count=file_count,
                is_head=(name == head_branch),
                kind="local",
                remote_name=remote_name if code_remote == 0 else None,
                ahead=ahead,
                behind=behind,
                note=note,
            )
        )
        if commit:
            local_tips[name] = commit

    code_remotes, remotes_raw = run_git(
        ["for-each-ref", "--format=%(refname:short)", "refs/remotes"],
        project_root,
    )
    if code_remotes == 0 and remotes_raw:
        for remote_ref in remotes_raw.splitlines():
            remote_ref = remote_ref.strip()
            if not remote_ref or remote_ref.endswith("/HEAD"):
                continue
            if "/" not in remote_ref:
                continue
            remote_prefix, local_name = remote_ref.split("/", 1)
            if remote_prefix != "origin":
                continue

            _, remote_commit = run_git(["rev-parse", "--short", remote_ref], project_root)
            if not remote_commit:
                continue
            if local_name in local_tips and local_tips[local_name] == remote_commit:
                continue

            _, subject = run_git(["log", "-1", "--pretty=%s", remote_ref], project_root)
            _, date = run_git(["log", "-1", "--pretty=%cs", remote_ref], project_root)
            _, listing = run_git(["ls-tree", "-r", "--name-only", remote_ref], project_root)
            file_count = len([line for line in listing.splitlines() if line.strip()])

            if local_name in local_tips:
                kind = "remote-diverged"
                note = f"differs from local `{local_name}` ({local_tips[local_name]})"
            else:
                kind = "remote-only"
                note = "no local branch with this name"

            catalog.append(
                BranchInfo(
                    name=remote_ref,
                    commit=remote_commit,
                    subject=subject,
                    date=date,
                    file_count=file_count,
                    is_head=False,
                    kind=kind,
                    remote_name=remote_ref,
                    note=note,
                )
            )

    catalog.sort(key=lambda item: (0 if item.kind == "local" else 1, item.name.casefold()))
    return catalog


def detect_stack(files: dict[str, str]) -> list[str]:
    signals: list[str] = []

    if "web/package.json" in files or "package.json" in files:
        pkg_raw = files.get("web/package.json") or files.get("package.json") or "{}"
        try:
            pkg = json.loads(pkg_raw)
        except json.JSONDecodeError:
            pkg = {}
        deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
        if "next" in deps:
            signals.append(f"Next.js ({deps.get('next', '?')})")
        if "react" in deps:
            signals.append(f"React ({deps.get('react', '?')})")
        if "typescript" in deps or "web/tsconfig.json" in files or "tsconfig.json" in files:
            signals.append("TypeScript")
        if any(k.startswith("@directus") for k in deps):
            signals.append("Directus client libraries")

    compose = files.get("docker-compose.yml") or files.get("docker-compose.yaml") or ""
    if "directus" in compose.lower():
        signals.append("Directus CMS (Docker Compose)")
    if "postgres" in compose.lower() or "postgresql" in compose.lower():
        signals.append("PostgreSQL")

    if any(name.endswith(".py") for name in files):
        signals.append("Python tooling/scripts")

    if any(name.startswith("docs/") for name in files):
        signals.append("Project documentation set")

    return signals or ["Not confidently detected from available manifests"]


def first_meaningful_paragraph(text: str, limit: int = MAX_DOC_PREVIEW_CHARS) -> str:
    lines = []
    for line in text.splitlines():
        stripped = line.strip()
        if not stripped:
            if lines:
                break
            continue
        if stripped.startswith("#"):
            continue
        lines.append(stripped)
    preview = " ".join(lines).strip()
    if len(preview) > limit:
        return preview[: limit - 1].rstrip() + "…"
    return preview


def parse_env_key_names(text: str) -> list[tuple[str, bool]]:
    """Return (key_name, has_nonempty_value) pairs. Values themselves are discarded."""
    keys: list[tuple[str, bool]] = []
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if line.startswith("\ufeff"):
            line = line.lstrip("\ufeff").strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, value = line.split("=", 1)
        name = name.strip()
        if not name:
            continue
        cleaned = value.strip()
        if len(cleaned) >= 2 and cleaned[0] == cleaned[-1] and cleaned[0] in {"'", '"'}:
            cleaned = cleaned[1:-1]
        keys.append((name, bool(cleaned)))
    return keys


def build_shallow_dir_tree(
    root: Path,
    *,
    max_depth: int = 2,
    max_entries_per_dir: int = 12,
) -> str:
    lines: list[str] = [f"{root.name}/"]

    def _immediate_counts(path: Path) -> tuple[int, int]:
        files = 0
        dirs = 0
        try:
            for child in path.iterdir():
                if child.is_dir():
                    dirs += 1
                elif child.is_file():
                    files += 1
        except OSError:
            return 0, 0
        return files, dirs

    def _walk(current: Path, prefix: str, depth: int) -> None:
        if depth > max_depth:
            return
        try:
            children = sorted(current.iterdir(), key=lambda p: (not p.is_dir(), p.name.casefold()))
        except OSError:
            lines.append(f"{prefix}└── [unreadable]")
            return

        visible = children[:max_entries_per_dir]
        hidden = len(children) - len(visible)
        for idx, child in enumerate(visible):
            is_last = idx == len(visible) - 1 and hidden <= 0
            connector = "└── " if is_last else "├── "
            if child.is_dir():
                files, dirs = _immediate_counts(child)
                summary = f" ({files} files, {dirs} dirs immediately inside)"
                lines.append(f"{prefix}{connector}{child.name}/{summary}")
                extension = "    " if is_last else "│   "
                _walk(child, prefix + extension, depth + 1)
            else:
                try:
                    size = format_bytes(child.stat().st_size)
                except OSError:
                    size = "?"
                lines.append(f"{prefix}{connector}{child.name} ({size})")

        if hidden > 0:
            lines.append(f"{prefix}└── ... +{hidden} more entries (omitted)")

    _walk(root, "", 1)
    return "\n".join(lines)


def inventory_directory(project_root: Path, rel_path: str, note: str = "") -> DirInventory:
    path = project_root / rel_path
    if not path.exists():
        return DirInventory(path=rel_path, present=False, note=note or "Not present in the local worktree.")
    if not path.is_dir():
        return DirInventory(
            path=rel_path,
            present=True,
            note="Path exists but is not a directory.",
        )

    file_count = 0
    dir_count = 0
    total_bytes = 0
    try:
        for item in path.rglob("*"):
            try:
                if item.is_file():
                    file_count += 1
                    total_bytes += item.stat().st_size
                elif item.is_dir():
                    dir_count += 1
            except OSError:
                continue
        top_level = sorted(
            (
                f"{child.name}/" if child.is_dir() else child.name
                for child in path.iterdir()
            ),
            key=str.casefold,
        )
        shallow_tree = build_shallow_dir_tree(path)
    except OSError as exc:
        return DirInventory(
            path=rel_path,
            present=True,
            note=f"Present but inventory failed: {exc}",
        )

    return DirInventory(
        path=rel_path,
        present=True,
        file_count=file_count,
        dir_count=dir_count,
        total_bytes=total_bytes,
        top_level=top_level,
        shallow_tree=shallow_tree,
        note=note
        or "Content intentionally omitted from export; only metadata is reported.",
    )


def inventory_env_file(
    project_root: Path,
    *,
    example_text: str | None = None,
) -> EnvInventory:
    env_path = project_root / ".env"
    example_path = project_root / ".env.example"
    example_present = example_path.is_file() or bool(example_text)

    example_keys: list[str] = []
    if example_path.is_file():
        try:
            example_keys = [name for name, _ in parse_env_key_names(example_path.read_text(encoding="utf-8-sig"))]
        except OSError:
            example_keys = []
    elif example_text:
        example_keys = [name for name, _ in parse_env_key_names(example_text)]

    if not env_path.is_file():
        return EnvInventory(
            path=".env",
            present=False,
            example_path=".env.example",
            example_present=example_present,
            missing_from_env=example_keys,
            note="No local `.env` file found. Values are never exported even when present.",
        )

    try:
        raw = env_path.read_text(encoding="utf-8-sig")
        size_bytes = env_path.stat().st_size
    except OSError as exc:
        return EnvInventory(
            path=".env",
            present=True,
            example_path=".env.example",
            example_present=example_present,
            note=f"Present but unreadable: {exc}",
        )

    parsed = parse_env_key_names(raw)
    example_set = set(example_keys)
    keys = [
        EnvKeyInfo(
            name=name,
            has_value=has_value,
            in_example=(name in example_set) if example_keys else None,
        )
        for name, has_value in parsed
    ]
    env_names = [name for name, _ in parsed]
    missing_from_example = sorted(set(env_names) - example_set) if example_keys else []
    missing_from_env = sorted(example_set - set(env_names)) if example_keys else []

    return EnvInventory(
        path=".env",
        present=True,
        size_bytes=size_bytes,
        key_count=len(keys),
        keys=keys,
        example_path=".env.example",
        example_present=example_present,
        missing_from_example=missing_from_example,
        missing_from_env=missing_from_env,
        note=(
            "Key names and presence flags only. Secret values are never written into the export."
        ),
    )


def collect_local_runtime_inventory(
    project_root: Path,
    *,
    example_text: str | None = None,
) -> LocalRuntimeInventory:
    return LocalRuntimeInventory(
        env=inventory_env_file(project_root, example_text=example_text),
        data_dir=inventory_directory(
            project_root,
            "cms/data",
            note="Local PostgreSQL/Directus persistence. File contents are not exported.",
        ),
        uploads_dir=inventory_directory(
            project_root,
            "cms/uploads",
            note="Local CMS media uploads. File contents are not exported.",
        ),
    )


def render_local_runtime_inventory(inventory: LocalRuntimeInventory) -> str:
    parts: list[str] = []
    parts.append("## Local Runtime Inventory\n\n")
    parts.append(
        "These entities exist (or are expected) on the developer machine but are **not** "
        "embedded as content in this export. The AI should treat them as known local "
        "runtime assets and evaluate setup/operations accordingly.\n\n"
    )

    env = inventory.env
    parts.append("### `.env` (secrets file)\n\n")
    parts.append(f"- **Present locally:** {'yes' if env.present else 'no'}\n")
    if env.present:
        parts.append(f"- **File size:** {format_bytes(env.size_bytes)}\n")
        parts.append(f"- **Keys found:** {env.key_count}\n")
    parts.append(f"- **`.env.example` present:** {'yes' if env.example_present else 'no'}\n")
    parts.append(f"- **Export policy:** {env.note}\n")
    if env.keys:
        parts.append("\n| Key | Value present | In `.env.example` |\n")
        parts.append("|---|---|---|\n")
        for key in env.keys:
            if key.in_example is None:
                example_cell = "n/a"
            else:
                example_cell = "yes" if key.in_example else "no"
            parts.append(
                f"| `{key.name}` | {'yes' if key.has_value else 'no'} | {example_cell} |\n"
            )
    if env.missing_from_env:
        parts.append("\nKeys in `.env.example` but missing from `.env`:\n\n")
        for name in env.missing_from_env:
            parts.append(f"- `{name}`\n")
    if env.missing_from_example:
        parts.append("\nKeys in `.env` but missing from `.env.example`:\n\n")
        for name in env.missing_from_example:
            parts.append(f"- `{name}`\n")
    parts.append("\n")

    for label, directory in (
        ("`cms/data/` (local database persistence)", inventory.data_dir),
        ("`cms/uploads/` (local media uploads)", inventory.uploads_dir),
    ):
        parts.append(f"### {label}\n\n")
        parts.append(f"- **Present locally:** {'yes' if directory.present else 'no'}\n")
        if directory.present:
            parts.append(f"- **Files:** {directory.file_count:,}\n")
            parts.append(f"- **Directories:** {directory.dir_count:,}\n")
            parts.append(f"- **Total size:** {format_bytes(directory.total_bytes)}\n")
            if directory.top_level:
                listed = ", ".join(f"`{name}`" for name in directory.top_level[:20])
                extra = len(directory.top_level) - min(len(directory.top_level), 20)
                if extra > 0:
                    listed += f", … (+{extra} more)"
                parts.append(f"- **Top-level entries:** {listed}\n")
            if directory.shallow_tree:
                parts.append("\nShallow structure (content omitted):\n\n")
                parts.append("```text\n")
                parts.append(directory.shallow_tree)
                parts.append("\n```\n")
        parts.append(f"- **Export policy:** {directory.note}\n\n")

    return "".join(parts)


# ---------------------------------------------------------
# File gathering
# ---------------------------------------------------------

def gather_from_workdir(
    project_root: Path,
    output_path: Path,
    include_locks: bool,
    *,
    path_filter: set[str] | None = None,
) -> tuple[list[FileRecord], list[tuple[str, str]], int]:
    included: list[FileRecord] = []
    excluded: list[tuple[str, str]] = []
    redacted_total = 0
    output_resolved = output_path.resolve()

    for current, dirs, files in os.walk(project_root, followlinks=False):
        curr_path = Path(current)
        retained: list[str] = []
        for d in dirs:
            dir_path = curr_path / d
            rel_dir = posix_rel(dir_path.relative_to(project_root))
            if d.lower() in {x.lower() for x in EXCLUDED_DIRS}:
                excluded.append((rel_dir + "/", "Excluded directory pattern"))
            elif is_excluded_path(rel_dir + "/"):
                excluded.append((rel_dir + "/", "Excluded local/runtime path"))
            elif d.startswith(".") and d.lower() not in {
                ".github",
                ".husky",
                ".cursor",
                ".exporter",
            }:
                excluded.append((rel_dir + "/", "Hidden system directory"))
            elif dir_path.is_symlink():
                excluded.append((rel_dir + "/", "Symbolic link ignored"))
            else:
                retained.append(d)
        dirs[:] = retained

        for f in files:
            p = curr_path / f
            rel = posix_rel(p.relative_to(project_root))
            try:
                if p.resolve() == output_resolved:
                    excluded.append((rel, "Export output file"))
                    continue
            except OSError:
                pass

            if f in EXPORT_OUTPUT_FILENAMES:
                excluded.append((rel, "Export output file"))
                continue

            if p.is_symlink():
                excluded.append((rel, "Symbolic link"))
                continue

            if path_filter is not None and rel not in path_filter:
                continue

            ok, reason = is_candidate_file(rel, include_locks)
            if not ok:
                excluded.append((rel, reason))
                continue

            try:
                size = p.stat().st_size
            except OSError as exc:
                excluded.append((rel, f"Stat failed: {exc}"))
                continue

            if size > MAX_SINGLE_FILE_BYTES:
                excluded.append((rel, f"Exceeds single-file size limit ({MAX_SINGLE_FILE_BYTES / 1024 / 1024:.1f} MB)"))
                continue

            try:
                raw = p.read_bytes()
                if b"\x00" in raw:
                    excluded.append((rel, "Binary content detected"))
                    continue
                text = raw.decode("utf-8-sig")
            except (OSError, UnicodeDecodeError) as exc:
                excluded.append((rel, f"Read/decode failed: {exc}"))
                continue

            text, count = redact_secrets(text)
            redacted_total += count
            included.append(
                FileRecord(
                    rel_path=rel,
                    content=text,
                    size_bytes=size,
                    language=detect_language(rel),
                    category=classify_file(rel),
                    source_ref="worktree",
                )
            )

    included.sort(key=lambda item: item.rel_path.casefold())
    return included, excluded, redacted_total


def _read_git_text_file(
    project_root: Path,
    git_ref: str,
    rel: str,
) -> tuple[str | None, str | None]:
    """Return (text, error_reason)."""
    show_code, content = run_git(
        ["show", f"{git_ref}:{rel}"],
        project_root,
        strip_output=False,
    )
    if show_code != 0:
        return None, "git show failed"
    if content.startswith("\ufeff"):
        content = content.lstrip("\ufeff")
    raw = content.encode("utf-8", errors="replace")
    if b"\x00" in raw:
        return None, "Binary content detected"
    if len(raw) > MAX_SINGLE_FILE_BYTES:
        return None, f"Exceeds single-file size limit ({MAX_SINGLE_FILE_BYTES / 1024 / 1024:.1f} MB)"
    return content, None


def gather_from_git_ref(
    project_root: Path,
    git_ref: str,
    include_locks: bool,
) -> tuple[list[FileRecord], list[tuple[str, str]], int]:
    code, listing = run_git(["ls-tree", "-r", "--name-only", git_ref], project_root)
    if code != 0 or not listing:
        raise RuntimeError(f"Unable to list files for git ref '{git_ref}'. Is the ref valid?")

    included: list[FileRecord] = []
    excluded: list[tuple[str, str]] = []
    redacted_total = 0

    for rel in listing.splitlines():
        rel = posix_rel(rel.strip())
        if not rel:
            continue

        skip_reason = git_path_skip_reason(rel)
        if skip_reason:
            excluded.append((rel, skip_reason))
            continue

        ok, reason = is_candidate_file(rel, include_locks)
        if not ok:
            excluded.append((rel, reason))
            continue

        content, err = _read_git_text_file(project_root, git_ref, rel)
        if err or content is None:
            excluded.append((rel, err or "git show failed"))
            continue

        text, count = redact_secrets(content)
        redacted_total += count
        included.append(
            FileRecord(
                rel_path=rel,
                content=text,
                size_bytes=len(text.encode("utf-8", errors="replace")),
                language=detect_language(rel),
                category=classify_file(rel),
                source_ref=git_ref,
            )
        )

    included.sort(key=lambda item: item.rel_path.casefold())
    return included, excluded, redacted_total


def gather_union_from_branches(
    project_root: Path,
    include_locks: bool,
    include_absent_from_head: bool = False,
) -> tuple[list[FileRecord], list[tuple[str, str]], int, list[str]]:
    """
    Union candidate files across all local branches.
    Newest branch tip commit wins; differing branch variants are noted.
    Paths missing from HEAD are omitted unless include_absent_from_head is set.
    """
    branches = list_local_branch_names(project_root)
    if not branches:
        raise RuntimeError("No local git branches found for union export.")

    branch_meta: dict[str, tuple[int, str]] = {}
    for name in branches:
        _, ts_raw = run_git(["log", "-1", "--pretty=%ct", name], project_root)
        _, short = run_git(["rev-parse", "--short", name], project_root)
        try:
            ts = int(ts_raw) if ts_raw else 0
        except ValueError:
            ts = 0
        branch_meta[name] = (ts, short or "unknown")

    # path -> list of (timestamp, branch, commit, sha, text)
    versions: dict[str, list[tuple[int, str, str, str, str]]] = defaultdict(list)
    excluded: list[tuple[str, str]] = []
    seen_excluded: set[tuple[str, str]] = set()

    def add_excluded(rel: str, reason: str) -> None:
        item = (rel, reason)
        if item not in seen_excluded:
            seen_excluded.add(item)
            excluded.append(item)

    for branch in branches:
        code, listing = run_git(["ls-tree", "-r", "--name-only", branch], project_root)
        if code != 0:
            add_excluded(branch, "Unable to list branch files")
            continue
        ts, short = branch_meta[branch]
        for rel in listing.splitlines():
            rel = posix_rel(rel.strip())
            if not rel:
                continue
            skip_reason = git_path_skip_reason(rel)
            if skip_reason:
                add_excluded(rel, skip_reason)
                continue
            ok, reason = is_candidate_file(rel, include_locks)
            if not ok:
                add_excluded(rel, reason)
                continue
            content, err = _read_git_text_file(project_root, branch, rel)
            if err or content is None:
                add_excluded(rel, err or "git show failed")
                continue
            text, _ = redact_secrets(content)
            versions[rel].append((ts, branch, short, content_sha(text), text))

    _, head_branch = run_git(["rev-parse", "--abbrev-ref", "HEAD"], project_root)
    head_branch = head_branch or ""

    included: list[FileRecord] = []
    redacted_total = 0
    for rel, entries in versions.items():
        # Newest commit timestamp wins; tie-break by branch name
        entries_sorted = sorted(entries, key=lambda item: (-item[0], item[1].casefold()))
        on_head = any(branch == head_branch for _, branch, _, _, _ in entries_sorted)
        if not on_head:
            only_on = ", ".join(
                sorted({branch for _, branch, _, _, _ in entries_sorted})
            )
            if not include_absent_from_head:
                add_excluded(rel, f"absent from HEAD; only on {only_on}")
                continue
        winner = entries_sorted[0]
        _, win_branch, win_commit, win_sha, win_text = winner
        win_text, count = redact_secrets(win_text)
        redacted_total += count
        source_ref = f"{win_branch}@{win_commit}"
        if not on_head:
            source_ref = f"{source_ref} (absent from HEAD)"

        variants: list[str] = []
        seen_variant_keys: set[str] = set()
        for _, branch, commit, sha, _text in entries_sorted[1:]:
            if sha == win_sha:
                continue
            key = f"{branch}:{sha}"
            if key in seen_variant_keys:
                continue
            seen_variant_keys.add(key)
            variants.append(f"{branch} ({commit}, content {sha})")

        included.append(
            FileRecord(
                rel_path=rel,
                content=win_text,
                size_bytes=len(win_text.encode("utf-8", errors="replace")),
                language=detect_language(rel),
                category=classify_file(rel),
                source_ref=source_ref,
                variants=variants,
            )
        )

    included.sort(key=lambda item: item.rel_path.casefold())
    return included, excluded, redacted_total, branches


# ---------------------------------------------------------
# Markdown rendering
# ---------------------------------------------------------

def render_branch_catalog(branches: list[BranchInfo]) -> str:
    parts: list[str] = []
    parts.append("## Git Branches\n\n")
    if not branches:
        parts.append("_No git branches were discovered for this export._\n\n")
        return "".join(parts)

    parts.append(
        "Local branches are the primary export sources. Matching `origin/*` refs are "
        "listed only when they diverge from the local tip or have no local counterpart. "
        "File contents below are a **union** of local branches (newest tip wins). "
        "Paths that exist only on older branches, and not on HEAD, are omitted unless "
        "`--include-absent-from-head` is set. The export is not a full duplicate of every branch.\n\n"
    )
    parts.append("| Branch | Kind | HEAD | Commit | Date | Files | Notes |\n")
    parts.append("|---|---|---|---|---|---:|---|\n")
    for item in branches:
        head = "yes" if item.is_head else ""
        subject = item.subject.replace("|", "\\|") if item.subject else ""
        note = item.note.replace("|", "\\|") if item.note else ""
        if subject and note:
            sep = " " if subject.endswith((".", "!", "?")) else ". "
            note = f"{subject}{sep}{note}"
        elif subject:
            note = subject
        parts.append(
            f"| `{item.name}` | {item.kind} | {head} | `{item.commit}` | "
            f"{item.date or '-'} | {item.file_count} | {note or '-'} |\n"
        )
    parts.append("\n")
    return "".join(parts)


def render_file_section(record: FileRecord) -> str:
    fence = get_markdown_fence(record.content)
    lang = record.language
    body = record.content if record.content.endswith("\n") else record.content + "\n"
    meta = (
        f"> **Path:** `{record.rel_path}` | **Size:** {record.size_bytes:,} bytes | "
        f"**Language:** {lang or 'plain text'} | **Category:** {record.category}"
    )
    if record.source_ref:
        meta += f" | **Source:** `{record.source_ref}`"
    meta += "\n"
    if record.variants:
        meta += "> **Also differs on:** " + "; ".join(f"`{v}`" for v in record.variants) + "\n"
    meta += "\n"
    return (
        f"### File: `{record.rel_path}`\n\n"
        f"{meta}"
        f"{fence}{lang}\n"
        f"{body}"
        f"{fence}\n\n"
    )


def build_markdown(
    project_name: str,
    project_root: Path,
    records: list[FileRecord],
    excluded: list[tuple[str, str]],
    git_info: GitInfo,
    source_label: str,
    redacted_total: int,
    local_runtime: LocalRuntimeInventory,
    branch_catalog: list[BranchInfo] | None = None,
) -> str:
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    total_bytes = sum(item.size_bytes for item in records)
    by_category = Counter(item.category for item in records)
    by_language = Counter(item.language or "plain text" for item in records)
    content_map = {item.rel_path: item.content for item in records}
    stack = detect_stack(content_map)

    docs = [item for item in records if item.category == "documentation"]
    configs = [item for item in records if item.category == "config"]
    sources = [item for item in records if item.category == "source"]

    parts: list[str] = []
    parts.append(f"# Project Export for AI Evaluation: `{project_name}`\n\n")
    parts.append(
        "This document is a self-contained snapshot of the repository for external AI "
        "review and technical evaluation. It includes project context, documentation, "
        "configuration, and source files. Secrets and local runtime data are not embedded; "
        "they are summarized in the Local Runtime Inventory section.\n\n"
    )

    parts.append("## Evaluator Brief\n\n")
    parts.append(
        "Please evaluate the project using only the evidence in this export. "
        "Distinguish verified facts from assumptions. Record unknowns explicitly. "
        "Do not invent institutional statistics, credentials, or unimplemented features.\n\n"
    )
    parts.append("Suggested evaluation focus:\n\n")
    parts.append("1. Product stage, goals, and open decisions\n")
    parts.append("2. Architecture and technology choices actually present in the files\n")
    parts.append("3. Completeness of documentation versus implementation\n")
    parts.append("4. Maintainability, security posture, and operational readiness\n")
    parts.append("5. Recommended next steps with evidence-based confidence levels\n\n")

    parts.append("## Project Snapshot\n\n")
    parts.append(f"- **Generated On:** {timestamp}\n")
    parts.append(f"- **Project Root:** `{project_root}`\n")
    parts.append(f"- **Export Source:** {source_label}\n")
    parts.append(f"- **Files Included:** {len(records)}\n")
    parts.append(f"- **Total Text Size:** {total_bytes / 1024:.2f} KB\n")
    parts.append(
        f"- **By Category:** documentation={by_category.get('documentation', 0)}, "
        f"config={by_category.get('config', 0)}, source={by_category.get('source', 0)}\n"
    )
    parts.append(f"- **Secrets Redacted:** {redacted_total}\n")
    parts.append(
        "- **Local Runtime Inventory:** "
        f"`.env`={'present' if local_runtime.env.present else 'absent'}, "
        f"`cms/data/`={'present' if local_runtime.data_dir.present else 'absent'}, "
        f"`cms/uploads/`={'present' if local_runtime.uploads_dir.present else 'absent'} "
        "(metadata only; contents not exported)\n"
    )

    if git_info.available:
        parts.append(f"- **Git Branch:** `{git_info.branch}`\n")
        parts.append(f"- **Git Commit:** `{git_info.commit}`")
        if git_info.commit_subject:
            parts.append(f" — {git_info.commit_subject}")
        parts.append("\n")
        if git_info.remotes:
            parts.append(f"- **Git Remotes:** {', '.join(f'`{r}`' for r in git_info.remotes)}\n")
        if git_info.tracked_count is not None:
            parts.append(f"- **Tracked Files (worktree):** {git_info.tracked_count}\n")
        parts.append(f"- **Worktree Status:** {git_info.status_summary}\n")
    else:
        parts.append("- **Git:** not available / not a git worktree\n")
    parts.append("\n")

    parts.append("## Detected Stack Signals\n\n")
    for signal in stack:
        parts.append(f"- {signal}\n")
    parts.append("\n")

    parts.append(render_branch_catalog(branch_catalog or []))

    parts.append(render_local_runtime_inventory(local_runtime))

    overview_sources = [
        "README.md",
        "product-vision.md",
        "AGENTS.md",
        "development-workflow.md",
        "docs/evaluation/prototype-evaluation.md",
    ]
    parts.append("## High-Level Project Context\n\n")
    any_overview = False
    for rel in overview_sources:
        if rel in content_map:
            any_overview = True
            preview = first_meaningful_paragraph(content_map[rel])
            parts.append(f"### From `{rel}`\n\n")
            parts.append(f"{preview}\n\n" if preview else "_No extractable summary text._\n\n")
    if not any_overview:
        parts.append("_No primary documentation files were found in this export._\n\n")

    parts.append("## Documentation Index\n\n")
    if docs:
        for item in docs:
            parts.append(f"- `{item.rel_path}` ({item.size_bytes:,} bytes)\n")
    else:
        parts.append("_No documentation files included._\n")
    parts.append("\n")

    parts.append("## Configuration Index\n\n")
    if configs:
        for item in configs:
            parts.append(f"- `{item.rel_path}` ({item.size_bytes:,} bytes)\n")
    else:
        parts.append("_No configuration files included._\n")
    parts.append("\n")

    parts.append("## Source Index\n\n")
    if sources:
        for item in sources:
            parts.append(f"- `{item.rel_path}` ({item.language or 'plain text'}, {item.size_bytes:,} bytes)\n")
    else:
        parts.append("_No source files included._\n")
    parts.append("\n")

    parts.append("## Language Breakdown\n\n")
    for lang, count in sorted(by_language.items(), key=lambda pair: (-pair[1], pair[0])):
        parts.append(f"- {lang}: {count}\n")
    parts.append("\n")

    parts.append("## Project Structure\n\n")
    parts.append("```text\n")
    parts.append(build_tree_str([item.rel_path for item in records], project_name))
    parts.append("\n```\n\n")

    if docs:
        parts.append("## Documentation Contents\n\n")
        for item in docs:
            parts.append(render_file_section(item))

    if configs:
        parts.append("## Configuration Contents\n\n")
        for item in configs:
            parts.append(render_file_section(item))

    if sources:
        parts.append("## Source Contents\n\n")
        for item in sources:
            parts.append(render_file_section(item))

    parts.append("## Diagnostics & Exclusions\n\n")
    parts.append("<details>\n<summary>Excluded paths and policy notes</summary>\n\n")
    if excluded:
        for path, reason in sorted(excluded, key=lambda pair: pair[0].casefold()):
            parts.append(f"- `{path}` — *{reason}*\n")
    else:
        parts.append("_No exclusions recorded._\n")
    parts.append("\n</details>\n")

    return "".join(parts)


def atomic_write(output_path: Path, content: str) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    temp_file: Path | None = None
    try:
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            newline="\n",
            dir=output_path.parent,
            prefix=".export_",
            suffix=".tmp",
            delete=False,
        ) as tmp:
            temp_file = Path(tmp.name)
            tmp.write(content)
            tmp.flush()
            os.fsync(tmp.fileno())
        os.replace(temp_file, output_path)
    except Exception:
        if temp_file and temp_file.exists():
            temp_file.unlink(missing_ok=True)
        raise


# ---------------------------------------------------------
# Worktree overlay
# ---------------------------------------------------------

def overlay_dirty_worktree(
    project_root: Path,
    output_path: Path,
    include_locks: bool,
    records: list[FileRecord],
    excluded: list[tuple[str, str]],
    redacted_total: int,
    source_label: str,
) -> tuple[list[FileRecord], list[tuple[str, str]], int, str]:
    """Overlay only modified or untracked worktree files onto a git-based export."""
    dirty_paths = list_dirty_worktree_paths(project_root)
    worktree_records, worktree_excluded, worktree_redacted = gather_from_workdir(
        project_root,
        output_path,
        include_locks,
        path_filter=dirty_paths,
    )
    before = {item.rel_path for item in records}
    records = merge_records(records, worktree_records)
    overlay_paths = {item.rel_path for item in worktree_records}
    added = sorted(overlay_paths - before)
    updated = sorted(overlay_paths & before)
    excluded.extend(worktree_excluded)
    excluded = _dedupe_excluded(excluded)
    redacted_total += worktree_redacted
    extra_bits = []
    if added:
        extra_bits.append(f"{len(added)} worktree-only files")
    if updated:
        extra_bits.append(f"{len(updated)} worktree overlays")
    if extra_bits:
        source_label += " + " + ", ".join(extra_bits)
    return records, excluded, redacted_total, source_label


def merge_records(
    base: list[FileRecord],
    overlay: list[FileRecord],
) -> list[FileRecord]:
    merged = {item.rel_path: item for item in base}
    for item in overlay:
        previous = merged.get(item.rel_path)
        variants = list(previous.variants) if previous else []
        if previous and previous.content != item.content and previous.source_ref:
            note = f"{previous.source_ref} (overlaid by worktree)"
            if note not in variants:
                variants.append(note)
        merged[item.rel_path] = FileRecord(
            rel_path=item.rel_path,
            content=item.content,
            size_bytes=item.size_bytes,
            language=item.language,
            category=item.category,
            source_ref=item.source_ref or "worktree",
            variants=variants,
        )
    return sorted(merged.values(), key=lambda item: item.rel_path.casefold())


def _dedupe_excluded(excluded: list[tuple[str, str]]) -> list[tuple[str, str]]:
    seen: set[tuple[str, str]] = set()
    out: list[tuple[str, str]] = []
    for item in excluded:
        if item in seen:
            continue
        seen.add(item)
        out.append(item)
    return out


def export_project(
    project_root: Path,
    output_path: Path,
    include_locks: bool = False,
    git_ref: str | None = None,
    overlay_worktree: bool = True,
    worktree_only: bool = False,
    include_absent_from_head: bool = False,
) -> int:
    if not project_root.is_dir():
        print(f"Error: Directory not found: {project_root}", file=sys.stderr)
        return 1

    git_info = collect_git_info(project_root)
    branch_catalog = collect_branch_catalog(project_root) if git_info.available else []

    try:
        if worktree_only:
            records, excluded, redacted_total = gather_from_workdir(
                project_root, output_path, include_locks
            )
            for item in records:
                if not item.source_ref:
                    item.source_ref = "worktree"
            source_label = "working tree only"
        elif git_ref:
            records, excluded, redacted_total = gather_from_git_ref(
                project_root, git_ref, include_locks
            )
            source_label = f"git ref `{git_ref}`"
            if overlay_worktree:
                records, excluded, redacted_total, source_label = overlay_dirty_worktree(
                    project_root,
                    output_path,
                    include_locks,
                    records,
                    excluded,
                    redacted_total,
                    source_label,
                )
        else:
            records, excluded, redacted_total, union_branches = gather_union_from_branches(
                project_root, include_locks, include_absent_from_head
            )
            source_label = f"union of {len(union_branches)} local branches"
            if overlay_worktree:
                records, excluded, redacted_total, source_label = overlay_dirty_worktree(
                    project_root,
                    output_path,
                    include_locks,
                    records,
                    excluded,
                    redacted_total,
                    source_label,
                )
    except RuntimeError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    total_bytes = sum(item.size_bytes for item in records)
    if total_bytes > MAX_TOTAL_SOURCE_BYTES:
        print(
            f"Error: Total export size exceeds safety limit "
            f"({total_bytes / 1024 / 1024:.1f} MB)",
            file=sys.stderr,
        )
        return 1

    example_text = next(
        (item.content for item in records if item.rel_path == ".env.example"),
        None,
    )
    local_runtime = collect_local_runtime_inventory(
        project_root,
        example_text=example_text,
    )

    markdown = build_markdown(
        project_name=project_root.resolve().name,
        project_root=project_root.resolve(),
        records=records,
        excluded=excluded,
        git_info=git_info,
        source_label=source_label,
        redacted_total=redacted_total,
        local_runtime=local_runtime,
        branch_catalog=branch_catalog,
    )

    try:
        atomic_write(output_path, markdown)
    except OSError as err:
        print(f"Error writing export file: {err}", file=sys.stderr)
        return 1

    variant_files = sum(1 for item in records if item.variants)
    print("\n[OK] Project exported for AI evaluation.")
    print(f"  Output File:      {output_path.resolve()}")
    print(f"  Export Source:    {source_label}")
    print(f"  Files Exported:   {len(records)}")
    print(f"  Branch Catalog:   {len(branch_catalog)} refs")
    print(f"  Variant Files:    {variant_files}")
    print(f"  Secrets Redacted: {redacted_total}")
    print(
        "  Local Inventory:  "
        f".env={'yes' if local_runtime.env.present else 'no'}, "
        f"cms/data={'yes' if local_runtime.data_dir.present else 'no'} "
        f"({local_runtime.data_dir.file_count} files), "
        f"cms/uploads={'yes' if local_runtime.uploads_dir.present else 'no'} "
        f"({local_runtime.uploads_dir.file_count} files)"
    )
    if git_info.available:
        print(f"  Git Branch:       {git_info.branch} @ {git_info.commit}")
    return 0


# ---------------------------------------------------------
# Entrypoint
# ---------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Export the full project into one Markdown file for external AI evaluation. "
            "Default: union of all local git branches, overlay of modified or untracked "
            "worktree files, and a local runtime inventory."
        )
    )
    parser.add_argument(
        "project_path",
        nargs="?",
        default=".",
        help="Path to project directory (default: current working directory)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default=None,
        help="Output Markdown path (default: <project_dir>/project_code_export.md)",
    )
    parser.add_argument(
        "--include-locks",
        action="store_true",
        help="Include lockfiles such as package-lock.json",
    )
    parser.add_argument(
        "--ref",
        default=None,
        help=(
            "Export files from a single git ref/branch/commit instead of the branch union "
            "(example: cursor/prototype-evaluation-process). "
            "Only modified or untracked worktree files are overlaid by default."
        ),
    )
    parser.add_argument(
        "--worktree-only",
        action="store_true",
        help="Export only the current working tree (skip branch union)",
    )
    parser.add_argument(
        "--no-overlay-worktree",
        action="store_true",
        help="Do not overlay modified or untracked worktree files on git-based exports",
    )
    parser.add_argument(
        "--include-absent-from-head",
        action="store_true",
        help=(
            "Include files that exist only on older local branches and not on HEAD. "
            "Those files are marked absent from HEAD. Default is to omit them."
        ),
    )

    args = parser.parse_args()
    if args.worktree_only and args.ref:
        print("Error: --worktree-only and --ref cannot be used together.", file=sys.stderr)
        return 2

    project_root = Path(args.project_path).resolve()
    output_path = (
        Path(args.output).resolve()
        if args.output
        else project_root / "project_code_export.md"
    )
    return export_project(
        project_root=project_root,
        output_path=output_path,
        include_locks=args.include_locks,
        git_ref=args.ref,
        overlay_worktree=not args.no_overlay_worktree,
        worktree_only=args.worktree_only,
        include_absent_from_head=args.include_absent_from_head,
    )


if __name__ == "__main__":
    raise SystemExit(main())
    