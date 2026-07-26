# Accessibility and Responsive QA

This record covers the public clean-room practice-library demonstration. It does not claim complete accessibility certification for the private VEXIS product.

## Implemented accessibility decisions

### Structure

- The page uses a single main landmark.
- The practice library is a labelled section.
- Each practice is represented by an article with a visible heading.
- Category controls are grouped with a fieldset and legend.

### Keyboard interaction

- All category filters use native buttons.
- Practice actions use native buttons.
- Unavailable practices use the native `disabled` state.
- Interactive elements receive a visible focus indicator.
- No interaction requires pointer-only behaviour.

### Accessible names and state

- Available practice buttons expose names such as `Start Calm Start`.
- Unavailable actions explain that the practice is currently unavailable.
- Category filters expose selection through `aria-pressed`.
- Loading, error and selection feedback are presented through status semantics.
- Practice selection uses a polite live region.

### Error handling

- Internal exception details are not displayed to users.
- Recoverable failure includes a clearly named retry action.
- Malformed transport data becomes a user-safe service error.

### Motion

The stylesheet includes a reduced-motion media query so non-essential transitions can be removed for users who request reduced motion.

## Automated coverage completed

The current test suite verifies:

- the start action has an accessible name
- an unavailable practice cannot be started
- the loading state is announced
- category filtering changes visible results
- recoverable failure offers retry
- successful retry restores content
- malformed data is rejected safely

## Responsive design intent

The practice grid adapts across three broad layouts:

- wide screens: up to three columns
- medium screens: two columns
- narrow screens: one column

The page maintains a minimum supported width of 320px, and controls are designed to wrap rather than overflow.

## Manual viewport matrix

These checks are planned for the visual-review stage. A box should only be marked after the branch has been run and inspected at that size.

| Viewport | Layout target | Status |
| --- | --- | --- |
| 390px | Single-column cards; wrapping filter controls; no horizontal overflow | Pending manual visual review |
| 768px | Two-column content where space permits; readable heading hierarchy | Pending manual visual review |
| 1440px | Bounded content width; three-column grid; balanced whitespace | Pending manual visual review |

## Additional manual checks still required

- tab order follows the visual order
- focus remains visible on every interactive element
- text and controls remain readable at browser zoom
- colour contrast is reviewed with a dedicated checker
- loading, error and filtered states are visually inspected
- reduced-motion behaviour is confirmed in a browser
- screen-reader announcement behaviour is spot-checked

## Scope honesty

The automated tests and semantic implementation provide useful evidence, but they do not replace manual keyboard, contrast, zoom and assistive-technology testing. Those checks remain explicitly pending until completed and recorded.
