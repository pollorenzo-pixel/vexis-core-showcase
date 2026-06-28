# Architecture Overview

VEXIS Core uses a web-based architecture that separates the user-facing experience, authentication, persistence, and deployment concerns.

```text
User
  ↓
VEXIS Core frontend
  ↓
Supabase Auth
  ↓
PostgreSQL database
  ↓
Vercel deployment
```

## Responsibilities

- **VEXIS Core frontend:** Presents the responsive training experience and connects user actions to authenticated services.
- **Supabase Auth:** Handles user identity and authenticated access.
- **PostgreSQL database:** Supports persisted user and session data.
- **Vercel:** Hosts and deploys the web experience through an iterative GitHub-based workflow.

This overview is deliberately conceptual. No schema definitions, environment configuration, security policies, credentials, internal endpoints, or production implementation code are included.
