# Extraction Method

This repository is an employer-facing engineering reconstruction of selected VEXIS interface and architecture patterns. It is not the private production codebase.

## Why the reconstruction exists

VEXIS is an active commercial product. Publishing the full source would expose implementation details, protected content and operational configuration that do not need to be public for an engineering review.

The showcase therefore demonstrates implementation quality, technical judgement and testing discipline through independently reconstructed examples.

## Classification of public material

Every public example belongs to one of three categories:

1. **Clean-room reconstruction** — written from scratch for this repository using generic engineering patterns and public product behaviour.
2. **Generalised pattern** — a production concept rewritten with synthetic data, simplified control flow and different identifiers.
3. **Documentation summary** — a high-level explanation of an engineering decision without publishing the underlying production implementation.

The React and TypeScript demonstration in `src/` is clean-room code created specifically for this repository.

## Synthetic data

The sample practices are fictional demonstration records. They are not exports of the production catalogue and do not contain proprietary scripts, customer activity, behavioural data or real database identifiers.

## Deliberately excluded

This repository does not include:

- credentials, secrets or environment variables
- Supabase project configuration, database schemas, migrations or access policies
- Stripe identifiers, webhook configuration or production commerce logic
- customer, analytics, session or behavioural data
- private prompts or AI system instructions
- SignAI recommendation logic or behavioural models
- proprietary training scripts, protected audio or the complete practice catalogue
- iOS signing, certificate or distribution configuration
- unreleased commercial functionality
- private repository history

## Review principle

The goal is not to make the commercial product reproducible. The goal is to provide enough inspectable evidence for an employer to assess:

- TypeScript modelling
- React component design
- state and service boundaries
- accessible user states
- runtime data validation
- testing strategy
- CI discipline
- debugging approach

## Change rule

Any future code added to this repository should default to clean-room reconstruction. Direct copying from the private product repository requires a separate manual safety review and should be avoided where a generalised example communicates the same engineering skill.
