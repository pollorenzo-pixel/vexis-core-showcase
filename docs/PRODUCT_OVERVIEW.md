# Engineering Case Study

## Problem and Scope

Mental training material is often fragmented or difficult to turn into a repeatable practice. VEXIS Core tests a focused product idea: organise that material into a structured browser-based experience that people can return to over time.

The initial scope was deliberately narrow:

- Make the training structure understandable.
- Provide a usable practice library.
- Support authenticated users and persisted session-related data.
- Work across mobile and desktop browsers.
- Establish a repeatable path from code change to production release.

This was enough to test the core experience without first building a large platform.

## Delivery Constraints

- **Single developer:** Product, implementation, testing, deployment, and support decisions shared the same limited time.
- **Active commercial project:** Public documentation must explain the work without disclosing the production codebase or sensitive configuration.
- **Learning while shipping:** Some technologies were learned through implementation, so changes needed to remain small and recoverable.
- **Multiple integration boundaries:** Browser behaviour, authentication, persistence, and deployment could each fail independently or in combination.

## Development Workflow

Work was organised around small vertical improvements rather than isolated technical layers. A typical change included the user-facing behaviour, its required data or authentication interaction, verification, and deployment.

Git provided a history of incremental changes. GitHub acted as the shared source of truth, and Vercel provided the deployment target. After deployment, the application was checked in the environment users would actually encounter rather than treating a successful local test or build as sufficient evidence.

## Debugging Approach

When behaviour differed between development and production, I learned to narrow the failure before attempting a fix:

1. Reproduce the issue and record the exact user path.
2. Determine whether the problem is visual state, browser behaviour, authentication, persisted data, or deployment/configuration.
3. Inspect the smallest relevant boundary instead of changing several layers at once.
4. Make one focused change and verify the original failure path.
5. Check adjacent flows for regression before considering the issue resolved.

This is a general account of the method rather than a claim that the application has comprehensive automated observability or test coverage.

## Product and Engineering Trade-offs

### Ship a simple frontend first

HTML, CSS, and JavaScript were sufficient to validate and deploy the initial experience. The approach kept the system understandable while I learned the product domain. Its limitation is that state and component organisation become more manual as the application grows.

### Use managed authentication and persistence

Supabase made it practical for one developer to add identity and PostgreSQL-backed persistence. It accelerated delivery, but moved rather than eliminated complexity: session handling, data access, failure states, and service configuration still required engineering judgement.

### Optimise for short feedback loops

GitHub and Vercel supported frequent, recoverable deployments. This favoured incremental improvement over large releases. It also reinforced the distinction between deployment success and product correctness: the integrated application still needed verification after release.

## Outcome

The result is a deployed application with a structured practice experience, authenticated access, persisted data, responsive behaviour, and an established release workflow.

The more important engineering outcome was learning to treat the product as a system: frontend decisions affect authentication flows, data design affects user experience, and deployment choices affect how quickly production problems can be understood and corrected.

## Next Technical Step

A React migration is being explored separately to improve maintainability as interface state and reusable UI patterns grow. It is not presented here as completed work. The deployed browser-native version remains the subject of this case study until the migration is finished and validated.
