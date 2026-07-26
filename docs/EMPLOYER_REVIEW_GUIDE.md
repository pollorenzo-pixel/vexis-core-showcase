# Employer Review Guide

This repository is designed to be reviewed quickly without presenting the public demonstration as the production VEXIS codebase.

## 60-second review path

### 1. Read the boundary

Start with [Extraction Method](EXTRACTION_METHOD.md).

It explains why the commercial repository remains private and how the public code was independently reconstructed with synthetic data.

### 2. Inspect the component flow

Open these files in order:

1. `src/types/practice.ts` — domain types
2. `src/services/practice-service.ts` — runtime validation and typed errors
3. `src/hooks/usePracticeLibrary.ts` — asynchronous state lifecycle
4. `src/components/PracticeLibrary.tsx` — composition, filters and user states
5. `src/components/PracticeCard.tsx` — reusable accessible component

### 3. Inspect the tests

Review:

- `src/components/PracticeCard.test.tsx`
- `src/components/PracticeLibrary.test.tsx`
- `src/services/practice-service.test.ts`

The tests focus on accessible actions, visible behaviour, retry recovery and safe handling of malformed data.

### 4. Check automated validation

Open `.github/workflows/validate.yml`.

The workflow runs deterministic dependency installation, linting, TypeScript checks, tests and a production build.

### 5. Review engineering judgement

Read:

- [Engineering Decisions](ENGINEERING_DECISIONS.md)
- [Debugging Case Study](DEBUGGING_CASE_STUDY.md)
- [Accessibility and Responsive QA](ACCESSIBILITY_AND_RESPONSIVE_QA.md)

## Run locally

```bash
npm ci
npm run validate
npm run dev
```

## What this repository demonstrates

- React component composition
- strict TypeScript modelling
- separation between transport, service, state and UI layers
- runtime validation of unknown data
- loading, success, empty, error and retry states
- accessible native controls and announcements
- user-focused automated testing
- deterministic CI validation
- evidence-driven debugging
- confidentiality-aware technical communication

## What it does not claim

This demonstration is not the full VEXIS application and does not include live authentication, production databases, payments, protected audio, customer data, proprietary recommendation logic or private prompts.

The deployed product and the public demonstration serve different purposes: one delivers the commercial experience, while this repository provides safe engineering evidence for review.
