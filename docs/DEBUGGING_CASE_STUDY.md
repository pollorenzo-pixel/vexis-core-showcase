# Debugging Case Study: Source Ancestry Before Platform Assumptions

This is a privacy-safe summary of a real VEXIS debugging incident. Repository-specific and distribution-sensitive details have been removed.

## Observed symptom

A newly approved visual asset appeared correct in a reviewed change, but a later physical-device build still displayed the previous placeholder asset.

The visible symptom suggested several possible causes:

- operating-system or device caching
- stale derived build output
- an incorrect native target configuration
- duplicate asset catalogues
- a build generated from the wrong source revision

## Initial discipline

The investigation avoided changing signing, native targets or adding duplicate assets as speculative fixes.

Instead, the problem was divided into verifiable boundaries:

1. Was the expected asset present in the branch being built?
2. Was the application target connected to the correct asset catalogue?
3. Did every catalogue entry reference an existing file of the expected dimensions?
4. Did the native build process preserve those files?
5. Was the reviewed change actually an ancestor of the canonical branch?

## Evidence gathered

The native target and catalogue linkage were structurally correct:

- one relevant asset catalogue existed
- one app-icon set was selected
- catalogue filenames resolved correctly
- the build process did not regenerate or overwrite the assets

The decisive evidence came from Git ancestry. The asset change had been merged into a feature branch after the pull request that introduced that branch had already been merged elsewhere.

The change therefore existed in GitHub and appeared merged, but it was not present in the canonical branch used for the device build.

## Root cause

The failure was a branch and pull-request topology problem, not a device-cache or native configuration defect.

The reviewed asset commit was not an ancestor of the source revision being built.

## Corrective action

The validated asset change was reapplied from a fresh branch created directly from the current canonical source.

The repair preserved the already-verified target configuration and avoided unrelated signing or runtime changes.

## Validation

The follow-up validation checked:

- exact source revision
- Git ancestry
- asset catalogue structure
- referenced file existence and dimensions
- build and test commands
- native synchronisation behaviour
- clean reinstall procedure for the physical device

## Prevention lessons

- A merged pull request does not automatically prove a commit reached the branch being built.
- Record the exact source revision used for device and release testing.
- Verify ancestry and deployment provenance before treating a visible failure as caching.
- Separate source-control topology, native configuration and device state into independent hypotheses.
- Prefer evidence-driven correction over broad speculative changes.

## Engineering takeaway

The most valuable debugging step was identifying the failing boundary before modifying code or configuration.

> Verify source ancestry and build provenance before assuming a platform cache or runtime defect.
