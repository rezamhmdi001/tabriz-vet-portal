#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Export the Tabriz Vet Portal repository into one Markdown file for LLM review.

Default output (this folder):
  export_tbzvetportal.md

Usage:
  python export_tbzvetportal.py
  python export_tbzvetportal.py --include-locks
  python export_tbzvetportal.py --ref main
  python export_tbzvetportal.py --worktree-only
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

EXPORTER_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = EXPORTER_DIR.parent
DEFAULT_OUTPUT = EXPORTER_DIR / "export_tbzvetportal.md"

sys.path.insert(0, str(PROJECT_ROOT))

from export_project import export_project  # noqa: E402


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Export tabriz-vet-portal into export_tbzvetportal.md for Gemini or other LLMs. "
            "Default: full working tree (current files on disk)."
        )
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output Markdown path (default: {DEFAULT_OUTPUT.name} in .exporter/)",
    )
    parser.add_argument(
        "--include-locks",
        action="store_true",
        help="Include lockfiles (package-lock.json, etc.)",
    )
    parser.add_argument(
        "--ref",
        default=None,
        help="Export a git ref/branch instead of the working tree",
    )
    parser.add_argument(
        "--git-union",
        action="store_true",
        help="Union all local git branches instead of the working tree",
    )
    parser.add_argument(
        "--no-overlay-worktree",
        action="store_true",
        help="With --ref or --git-union, do not overlay dirty/untracked worktree files",
    )
    parser.add_argument(
        "--include-absent-from-head",
        action="store_true",
        help="With --git-union, include files that exist only on non-HEAD branches",
    )

    args = parser.parse_args()

    worktree_only = not args.git_union and not args.ref
    if args.git_union and args.ref:
        print("Error: --git-union and --ref cannot be used together.", file=sys.stderr)
        return 2

    return export_project(
        project_root=PROJECT_ROOT,
        output_path=args.output.resolve(),
        include_locks=args.include_locks,
        git_ref=args.ref,
        overlay_worktree=not args.no_overlay_worktree,
        worktree_only=worktree_only,
        include_absent_from_head=args.include_absent_from_head,
    )


if __name__ == "__main__":
    raise SystemExit(main())
