# Prototype Technical Evaluation

## 1. Purpose

This document defines a structured process for evaluating an independently developed software prototype before deciding whether to reuse, adapt, migrate, or replace it.

The prototype is not part of this repository unless an explicit decision is made. No source code should be copied or merged during the initial evaluation.

## 2. Evaluation Rules

- Evaluate the prototype based on observable evidence, not appearance or assumptions.
- Do not assume that a feature is functional merely because it appears in the user interface.
- Do not expose secrets, credentials, real patient data, or other sensitive information to AI tools.
- Do not run unknown code on a production system or a machine containing sensitive data.
- Record missing information as unknown rather than guessing.
- Do not choose a technology stack solely because the prototype already uses it.
- Keep the evaluation report separate from the prototype source code.

## 3. Information to Collect

### 3.1 Product and Requirements

- Intended users and their primary tasks.
- Features currently implemented.
- Features demonstrated only through mock data or static interfaces.
- Known limitations and unfinished functionality.
- Intended first-release scope.
- Available requirements, designs, and acceptance criteria.

### 3.2 Technical Structure

- Programming languages and frameworks.
- Repository structure and application entry points.
- Frontend and backend architecture.
- Database and data model, if present.
- External services and integrations.
- Dependency manifests and lockfiles.
- Configuration and environment-variable requirements.
- Build, test, and deployment instructions.

### 3.3 Operational Status

- Can the application be installed and started from a clean environment?
- Does the documented build process succeed?
- Are the primary user flows functional?
- Are errors visible and diagnosable?
- Are setup instructions reproducible?
- Are backup, recovery, and deployment procedures documented, if applicable?

### 3.4 Code Quality and Maintainability

- Separation of responsibilities.
- Duplication and unnecessary complexity.
- Naming, consistency, and readability.
- Error handling and input validation.
- Test coverage and quality.
- Documentation quality.
- Presence of abandoned, placeholder, or incomplete code.

### 3.5 Security and Privacy

- Authentication and authorization, where applicable.
- Secret and credential handling.
- Input validation and output encoding.
- Dependency and configuration risks.
- Logging of sensitive information.
- Data access boundaries and permissions.
- Use of synthetic versus real personal or clinical data.

Do not claim that an application is secure merely because no obvious issue was found. A full security assessment may require specialist review.

### 3.6 User Interface and Accessibility

- Responsive behavior across screen sizes.
- Accessibility and keyboard navigation.
- Persian and right-to-left (RTL) support, if required.
- Loading, empty, error, and success states.
- Consistency and usability of navigation.
- Search engine optimization requirements for public-facing websites.

## 4. Evaluation Method

For each relevant criterion, record one status:

- **Pass:** Supported by observable evidence.
- **Partial:** Implemented incompletely or with limitations.
- **Fail:** A demonstrated requirement is not met.
- **Unknown:** Insufficient evidence to make a determination.
- **Not applicable:** The criterion does not apply to the prototype's intended scope.

Record the evidence and any follow-up action for every significant finding.

## 5. Findings Register

Use the following fields for each finding:

| Field | Description |
|---|---|
| ID | Unique finding identifier |
| Area | Product, architecture, quality, security, operations, or UI |
| Finding | Concise description of the observed condition |
| Evidence | File, test result, reproducible behavior, or documented limitation |
| Severity | Critical, High, Medium, or Low |
| Confidence | High, Medium, or Low |
| Recommended action | Fix, investigate, retain, replace, or defer |
| Effort | Rough estimate after sufficient inspection |

Severity must reflect actual impact and plausible risk. Do not classify an unverified concern as a confirmed vulnerability.

## 6. Decision Framework

After the evaluation, select one of the following outcomes:

1. **Reuse:** The prototype meets the relevant requirements and can be adopted with acceptable risk.
2. **Adapt:** The existing implementation is suitable after bounded modifications.
3. **Migrate selectively:** Specific components or ideas are useful, but the codebase should not be adopted as a whole.
4. **Rewrite:** The implementation is unsuitable for the intended product, and replacement is justified by documented evidence.
5. **Defer:** There is insufficient evidence to make a responsible decision.

The decision must consider functional suitability, maintainability, security, operational reproducibility, migration cost, and future requirements.

## 7. Required Deliverables

The evaluation is complete when the following outputs are available:

- A concise description of the prototype and its actual capabilities.
- A repository and dependency overview.
- A reproducible build or execution result, if feasible.
- A findings register with evidence and severity.
- A list of unknowns and unresolved risks.
- A recommendation with explicit reasoning.
- An estimated effort and risk summary for the recommended path.

## 8. Scope Limitations

This document defines the evaluation process; it does not assert that any prototype has already been inspected, tested, or approved.

No production deployment, code migration, or architectural commitment is authorized by this evaluation document alone.