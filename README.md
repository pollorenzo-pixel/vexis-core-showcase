# VEXIS Core — Mental Performance Platform

An engineering case study of a deployed mental performance web application.

[Live application](https://www.vexistech.co.uk/) · [Architecture](architecture/README.md) · [Engineering case study](docs/PRODUCT_OVERVIEW.md) · [Repository scope](docs/PRIVACY_AND_SCOPE.md)

## Overview

VEXIS Core makes structured mental training available through a responsive web application. The deployed product includes a practice library organised around Foundation, Intuition, and Performance, with authenticated user access and persisted user/session data.

This repository documents the engineering work behind the shipped application. It is not the production codebase.

## My Role

I am the founder and developer. I took the product from concept to deployment: defining the initial scope, implementing the frontend, integrating authentication and persistence, testing releases, investigating production issues, and iterating from observed behaviour.

I used AI-assisted development to explore approaches and accelerate implementation. I remained responsible for requirements, technical choices, code review, testing, debugging, and release decisions.

## Shipped System

- Responsive browser-based training experience
- Structured practice library
- Supabase authentication
- PostgreSQL-backed user and session data
- GitHub-based source control workflow
- Vercel deployment
- Progressive Web App considerations in the application structure

## Technology and Rationale

| Area | Technology | Reasoning and trade-off |
| --- | --- | --- |
| Frontend | HTML, CSS, JavaScript | Kept the shipped application simple and browser-native. This reduced framework overhead, but required more manual organisation as the interface grew. |
| Authentication | Supabase Auth | Provided managed identity and session handling without building a custom authentication service. The trade-off is dependency on a platform-specific integration. |
| Persistence | Supabase / PostgreSQL | Combined a relational data model with managed infrastructure. This reduced operational work while still requiring careful data modelling and access-control decisions. |
| Hosting | Vercel | Supported repeatable web deployments and a short feedback loop from repository changes to production. |
| Workflow | Git and GitHub | Provided version history, isolated changes, and a recoverable deployment workflow. |
| UX | Responsive design and PWA concepts | Prioritised access across mobile and desktop browsers. PWA readiness is an architectural direction, not a claim of complete offline support. |

## Architecture

```text
                         ┌──────────────────────┐
                         │   Supabase Auth      │
                         └──────────▲───────────┘
                                    │
User ──► VEXIS Core frontend ───────┤
             │                      │
             │                      ▼
             │           ┌──────────────────────┐
             │           │ PostgreSQL database  │
             │           └──────────────────────┘
             ▼
       Vercel hosting
```

Vercel hosts the frontend; the application uses Supabase for authentication and access to PostgreSQL-backed data. The diagram is intentionally conceptual because deployment configuration, database design, and access policies belong to the private production repository.

See the [architecture overview](architecture/README.md) for component responsibilities, request flow, and trade-offs.

## Engineering Approach

Development followed small, testable increments:

1. Define a user-facing problem and the smallest useful change.
2. Implement and test the change locally.
3. Commit the change with Git and deploy through the GitHub/Vercel workflow.
4. Verify behaviour in the deployed environment.
5. Diagnose regressions by separating frontend, authentication, persistence, and deployment concerns.
6. Use the result to choose the next improvement.

This process made failures easier to isolate and kept product decisions connected to working software rather than speculative scope.

## Technical Lessons

- Shipping exposed integration problems that were not visible when frontend, authentication, and data persistence were considered separately.
- Production debugging improved when I identified the failing boundary first—browser state, authentication, database interaction, or deployment—before changing code.
- Managed services reduced the amount of infrastructure I needed to operate, but did not remove responsibility for session behaviour, data access, error handling, or configuration.
- Small commits and repeatable deployments made iteration safer and regressions easier to trace.
- Responsive behaviour needs testing at realistic viewport sizes and interaction states, not only visual inspection at desktop width.
- AI assistance is most useful when paired with explicit requirements, review, verification, and ownership of the final decision.

## Current Status and Scope

VEXIS Core is deployed at [vexistech.co.uk](https://www.vexistech.co.uk/). A newer React migration is in progress and is intentionally excluded because it is not the deployed system documented here.

The production repository remains private because VEXIS is an active commercial project. This public case study excludes source code, credentials, database schemas, access policies, environment configuration, prototypes, customer data, and commercially sensitive implementation details. The full boundary is documented in [Privacy and Showcase Scope](docs/PRIVACY_AND_SCOPE.md).

Screenshots are also intentionally omitted for now: the live application is available, and static images would add little engineering evidence unless they demonstrate a specific responsive, accessibility, performance, or debugging decision.

## Licence

The original documentation in this repository is available under the [MIT License](LICENSE). VEXIS names, branding, product content, and the private production application are not granted for reuse by this licence.
