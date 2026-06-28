# Architecture Overview

This document describes the deployed VEXIS Core system at a conceptual level. Implementation details and operational configuration remain in the private production repository.

## System Context

```text
                         ┌──────────────────────┐
                         │   Supabase Auth      │
                         └──────────▲───────────┘
                                    │ identity and session
                                    │
User ──► VEXIS Core frontend ───────┤
             │                      │ authenticated data access
             │                      ▼
             │           ┌──────────────────────┐
             │           │ PostgreSQL database  │
             │           └──────────────────────┘
             ▼
       Vercel hosting
```

Vercel serves the frontend to the user's browser. The running application uses Supabase services for identity, session handling, and access to PostgreSQL-backed data. Vercel is therefore a hosting and deployment concern rather than a downstream step after the database.

## Component Responsibilities

| Component | Responsibility |
| --- | --- |
| Browser frontend | Renders the interface, manages interaction state, adapts to viewport size, and initiates authenticated operations. |
| Supabase Auth | Establishes user identity and manages authentication sessions. |
| PostgreSQL | Persists the user and session-related data required by the application. |
| Vercel | Hosts the web application and provides the deployment target for repository changes. |
| GitHub | Maintains version history and connects the development workflow to deployment. |

## Typical Request Flow

1. A user loads the frontend from the Vercel-hosted deployment.
2. The frontend establishes or restores authentication state through Supabase Auth.
3. Authenticated application actions read or write the required PostgreSQL-backed data through the managed Supabase integration.
4. The frontend handles the result and updates the user interface.

This description deliberately avoids claiming details that cannot be demonstrated in a public case study, such as schema design, policy definitions, endpoint structure, or token storage strategy.

## Engineering Decisions and Trade-offs

### Browser-native frontend

The deployed version uses HTML, CSS, and JavaScript. This kept the initial system approachable and reduced build-time complexity. As application state and interface behaviour grew, the cost of manually maintaining structure also increased. That experience informed—but does not yet validate—the separate React migration now in progress.

### Managed backend services

Supabase reduced the need to build and operate separate authentication and database infrastructure. The benefit was a faster route to a working product; the trade-off was tighter coupling to the service and continued responsibility for access control, error states, session behaviour, and configuration.

### Deployment through Vercel

Connecting repository changes to a managed deployment platform shortened the feedback loop between implementation and production verification. The workflow still required explicit post-deployment checks because a successful build does not prove that authentication, data access, and browser behaviour work together correctly.

## Public Documentation Boundary

The following are intentionally excluded:

- Source code and internal endpoints
- Environment variables and project identifiers
- Database schemas, migrations, and access policies
- Authentication configuration and token-handling details
- Production logs, user data, and operational procedures

These exclusions protect the active product without changing the high-level account of the engineering decisions.
