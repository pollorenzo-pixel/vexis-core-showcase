# VEXIS Core — Employer-Facing Engineering Showcase

A privacy-safe React and TypeScript reconstruction demonstrating frontend implementation, typed service boundaries, testing, accessibility and engineering judgement behind the VEXIS product.

[Live VEXIS React application](https://vexis-app-private-j0chh6inx-pol-s-projects5.vercel.app/) · [60-second review guide](docs/EMPLOYER_REVIEW_GUIDE.md) · [Engineering decisions](docs/ENGINEERING_DECISIONS.md) · [Debugging case study](docs/DEBUGGING_CASE_STUDY.md) · [Repository boundary](docs/PRIVACY_AND_SCOPE.md)

> This repository is not the production VEXIS codebase. The public demo was independently reconstructed with synthetic data so employers can inspect representative engineering work without exposing commercial source code, user data, credentials or proprietary training content.

## Review this repository in 60 seconds

1. Open [`src/components/PracticeLibrary.tsx`](src/components/PracticeLibrary.tsx) to see typed React composition, category filtering and loading, empty, error and retry states.
2. Open [`src/services/practice-service.ts`](src/services/practice-service.ts) to see runtime validation and user-safe service errors.
3. Open the [component and service tests](#tests-and-quality-gates) to see behaviour-focused coverage.
4. Read the [sanitised debugging case study](docs/DEBUGGING_CASE_STUDY.md) for an example of evidence-led root-cause analysis.
5. Read the [extraction method](docs/EXTRACTION_METHOD.md) to understand how confidentiality was protected.

A more detailed reviewer path is available in [`docs/EMPLOYER_REVIEW_GUIDE.md`](docs/EMPLOYER_REVIEW_GUIDE.md).

## What this repository demonstrates

- React component composition with TypeScript
- explicit domain and transport types
- separation between UI, hooks, services and mock transport
- loading, success, empty, unavailable and recoverable error states
- accessible controls, live-status messaging and visible keyboard focus
- responsive layout behaviour
- runtime validation of unknown transport data
- component and service tests with Vitest and Testing Library
- deterministic dependency installation through `package-lock.json` and `npm ci`
- automated lint, type-check, test and production-build validation in GitHub Actions
- privacy-aware technical communication

## Public reconstructed demo

The demo presents a synthetic practice library organised around three generic categories:

- Awareness
- Intuition
- Performance

It includes reusable practice cards, filtering, disabled states, selection feedback and recoverable data-loading behaviour. The titles, descriptions, identifiers and service responses are synthetic and do not reproduce the private VEXIS catalogue.

### Code map

| Area | Evidence |
| --- | --- |
| Application composition | [`src/App.tsx`](src/App.tsx) |
| Practice-library interaction | [`src/components/PracticeLibrary.tsx`](src/components/PracticeLibrary.tsx) |
| Reusable typed card | [`src/components/PracticeCard.tsx`](src/components/PracticeCard.tsx) |
| Loading and error presentation | [`src/components/StatusPanel.tsx`](src/components/StatusPanel.tsx) |
| Data lifecycle | [`src/hooks/usePracticeLibrary.ts`](src/hooks/usePracticeLibrary.ts) |
| Runtime validation and service errors | [`src/services/practice-service.ts`](src/services/practice-service.ts) |
| Synthetic transport | [`src/services/mock-api.ts`](src/services/mock-api.ts) |
| Domain types | [`src/types/practice.ts`](src/types/practice.ts) |
| Synthetic fixtures | [`src/data/sample-practices.ts`](src/data/sample-practices.ts) |

## Tests and quality gates

The public reconstruction includes behaviour-focused coverage for:

- accessible start actions
- unavailable practices
- loading-state announcements
- category filtering
- recoverable errors and retry
- malformed transport data
- safe mapping of internal failures to user-facing messages

Relevant files:

- [`src/components/PracticeCard.test.tsx`](src/components/PracticeCard.test.tsx)
- [`src/components/PracticeLibrary.test.tsx`](src/components/PracticeLibrary.test.tsx)
- [`src/services/practice-service.test.ts`](src/services/practice-service.test.ts)
- [`.github/workflows/validate.yml`](.github/workflows/validate.yml)

Every pull request and relevant branch update runs:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Run locally

Requirements:

- Node.js 22
- npm

Install and validate:

```bash
npm ci
npm run validate
```

Start the local development server:

```bash
npm run dev
```

## Engineering decisions

The showcase uses React, TypeScript, Vite, Vitest, Testing Library and ESLint. The structure deliberately keeps UI rendering separate from data lifecycle and transport validation.

Key decisions and trade-offs are documented in [`docs/ENGINEERING_DECISIONS.md`](docs/ENGINEERING_DECISIONS.md).

## Accessibility and responsive quality

Implemented evidence includes:

- semantic sections and headings
- accessible button names
- disabled-state semantics
- `aria-pressed` filter state
- polite live-region feedback
- visible keyboard focus
- reduced-motion handling
- responsive one-, two- and three-column layouts

The current QA record, including checks that remain manual rather than claimed as complete, is documented in [`docs/ACCESSIBILITY_AND_RESPONSIVE_QA.md`](docs/ACCESSIBILITY_AND_RESPONSIVE_QA.md).

## Debugging evidence

[`docs/DEBUGGING_CASE_STUDY.md`](docs/DEBUGGING_CASE_STUDY.md) describes a sanitised incident where an apparent platform or caching issue was traced to Git branch ancestry and deployment provenance.

The case study demonstrates:

- maintaining competing hypotheses
- collecting repository and configuration evidence
- locating the actual failing boundary
- applying a focused correction
- validating the fix
- documenting a prevention lesson

## Production product and my role

VEXIS is a deployed mental-performance product. I am the founder and developer and took the product from concept to deployment: defining scope, implementing interfaces, integrating authentication and persistence, testing releases, investigating production issues and iterating from observed behaviour.

The deployed system and this reconstruction serve different purposes:

| Production VEXIS | Public showcase |
| --- | --- |
| Active commercial product | Employer-facing engineering evidence |
| Real authentication and persistence | Mocked service and synthetic data |
| Proprietary product content | Generic placeholder content |
| Private infrastructure and configuration | Inspectable public React/TypeScript patterns |
| Private repository | Public clean-room reconstruction |

The live React application is available at [VEXIS React application](https://vexis-app-private-j0chh6inx-pol-s-projects5.vercel.app/).

## Confidentiality boundary

The public repository intentionally excludes:

- production source files copied wholesale
- credentials and environment configuration
- Supabase project details, schemas and access policies
- customer, session, analytics or behavioural data
- payment configuration
- proprietary practice scripts and protected audio
- SignAI recommendation logic and private prompts
- unreleased implementation details

Read [`docs/EXTRACTION_METHOD.md`](docs/EXTRACTION_METHOD.md) and [`docs/PRIVACY_AND_SCOPE.md`](docs/PRIVACY_AND_SCOPE.md) for the complete boundary.

## Additional documentation

- [Product overview](docs/PRODUCT_OVERVIEW.md)
- [Architecture overview](architecture/README.md)
- [Engineering decisions](docs/ENGINEERING_DECISIONS.md)
- [Extraction method](docs/EXTRACTION_METHOD.md)
- [Debugging case study](docs/DEBUGGING_CASE_STUDY.md)
- [Accessibility and responsive QA](docs/ACCESSIBILITY_AND_RESPONSIVE_QA.md)
- [Employer review guide](docs/EMPLOYER_REVIEW_GUIDE.md)
- [Privacy and showcase scope](docs/PRIVACY_AND_SCOPE.md)

## AI-assisted development

AI-assisted development was used to explore approaches and accelerate implementation. I remained responsible for requirements, technical choices, reviewing generated changes, testing, debugging and release decisions.

## Licence

The original public documentation and clean-room demonstration code in this repository are available under the [MIT License](LICENSE). VEXIS names, branding, proprietary product content and the private production application are not granted for reuse by that licence.