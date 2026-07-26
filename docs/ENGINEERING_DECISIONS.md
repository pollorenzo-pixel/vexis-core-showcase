# Engineering Decisions

This document explains the main decisions in the employer-facing demonstration and the trade-offs behind them.

## React and TypeScript

The showcase uses React for component composition and TypeScript for explicit data and service contracts.

The goal is not framework complexity. It is to make boundaries visible:

- transport data enters through a service
- runtime validation converts unknown data into domain data
- a hook owns the asynchronous request lifecycle
- components receive typed props and render user-facing states

## Vite

Vite provides a small, fast development and production-build setup suitable for a focused frontend demonstration.

A larger framework would add routing, server rendering and deployment features that this isolated example does not need. Keeping the demo narrow makes the engineering choices easier to inspect.

## Synthetic mock API

The repository does not connect to the production Supabase project or any live VEXIS service. A delayed mock API represents an external boundary while keeping the demonstration deterministic and safe.

This permits testing of:

- loading
- successful data
- malformed data
- network failure
- retry behaviour

without credentials or private infrastructure.

## Runtime validation

TypeScript types do not validate data received at runtime. The practice service therefore receives `unknown` and checks each record before exposing it to the UI.

Invalid payloads become a typed, user-safe service error instead of flowing into components unchecked.

For a larger product, a schema-validation library could reduce repeated validation code. The manual guard here keeps the example dependency-light and makes the validation rules directly inspectable.

## Service result model

The service returns a discriminated result rather than throwing transport errors through the component tree.

This makes success and failure handling explicit and prevents internal error messages from being shown directly to users.

## Hook boundary

`usePracticeLibrary` owns loading, success and error state. Components do not know how the data is fetched.

The initial asynchronous request includes cancellation protection so a late response does not update state after the consuming component has unmounted.

## Accessible state design

Loading and error states use semantic status presentation. Filter controls expose pressed state, unavailable practices use disabled buttons with descriptive accessible names, and practice selection is announced through a polite live region.

The design treats loading, empty and failure conditions as product states rather than exceptional afterthoughts.

## Tests

Tests focus primarily on user-observable behaviour:

- whether actions have accessible names
- whether unavailable actions remain disabled
- whether filtering changes visible content
- whether retry restores the library
- whether malformed data is rejected safely

This is more durable than testing private component implementation details.

## Continuous integration

The GitHub Actions workflow runs deterministic dependency installation, linting, type-checking, tests and a production build.

A committed lockfile enables `npm ci`, reducing variation between local and CI dependency resolution.

## Current limitations

This is deliberately a bounded frontend reconstruction. It does not demonstrate:

- live authentication
- production persistence
- server-side rendering
- production observability
- payment processing
- proprietary recommendation logic
- audio delivery

Those exclusions are intentional confidentiality and scope decisions, not claims that the public demo is the complete product.
