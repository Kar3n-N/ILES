# ILES Frontend — Bug & Fix Log

Errors discovered during code review of open pull requests on 2026-05-14.
Each entry records the PR, the exact error, the commit where it can be reproduced, and the fix commit.

---

## PR #59 — ILES-34: Feedback Modal (feature/ILES-34-feedback-modal)

**Reviewer:** Matthew Mumbere  
**Date:** 2026-05-14

### Error 1 — Missing `export default`

| Field | Detail |
|---|---|
| File | `frontend/src/pages/supervisor/FeedbackModal.js` |
| Error commit | `1d3e38f` |
| Fix commit | `c6561ce` |
| Symptom | Any page importing `FeedbackModal` would throw `Element type is invalid` at runtime — React received `undefined` instead of a component |
| Cause | `function FeedbackModal()` was defined but the file had no `export default` statement at the bottom |
| Fix | Added `export default FeedbackModal;` after the closing `}` of the function |

**To reproduce:** `git checkout 1d3e38f` and import FeedbackModal from any parent component.

---

### Error 2 — Missing semicolons in `.modal-box` CSS rule

| Field | Detail |
|---|---|
| File | `frontend/src/pages/supervisor/FeedbackModal.css` |
| Error commit | `1d3e38f` |
| Fix commit | `c6561ce` |
| Lines | 12, 15 |
| Symptom | `.modal-box` rendered with no background, no max-width — properties after the missing semicolons were silently dropped |
| Cause | `background: var(--color-surface)` and `width: 100%` were both missing trailing semicolons, causing the CSS parser to merge subsequent declarations into invalid values |
| Fix | Added `;` after both values |

---

### Error 3 — Invalid CSS property in `.modal-header h3`

| Field | Detail |
|---|---|
| File | `frontend/src/pages/supervisor/FeedbackModal.css` |
| Error commit | `1d3e38f` |
| Fix commit | `c6561ce` |
| Line | 31 |
| Symptom | Modal header `h3` text rendered in browser default colour instead of the design system colour |
| Cause | `var(--color-text)` appeared as a bare value with no property name: `font-size: 1rem; font-weight: 700;  var(--color-text);` — the `color:` keyword was missing |
| Fix | Changed to `color: var(--color-text);` |

---

### Error 4 — Wrong CSS variable syntax in `.modal-hint`

| Field | Detail |
|---|---|
| File | `frontend/src/pages/supervisor/FeedbackModal.css` |
| Error commit | `1d3e38f` |
| Fix commit | `c6561ce` |
| Line | 58 |
| Symptom | `.modal-hint` character counter text rendered in black instead of muted grey |
| Cause | `color: (var-text-muted)` — used parentheses-around-hyphenated-name syntax instead of `var(--color-text-muted)` |
| Fix | Changed to `color: var(--color-text-muted);` |

---

## PR #60 — ILES-39: Homepage (feature/ILES-39-homepage)

**Reviewer:** Matthew Mumbere  
**Date:** 2026-05-14

### Error 5 — File wrapped in markdown code fence

| Field | Detail |
|---|---|
| File | `frontend/src/pages/HomePage.js` |
| Error commit | `0bb60ea` |
| Fix commit | `b42d399` |
| Symptom | Full application crashed on load with `SyntaxError: Unexpected token` — the entire app failed to compile |
| Cause | The file started with ` ```jsx ` and ended with ` ``` ` — the developer copied code from a markdown/AI response and pasted it including the code fence delimiters directly into the `.js` file |
| Fix | Removed the opening ` ```jsx ` on line 1 and the closing ` ``` ` on line 342 |

**To reproduce:** `git checkout 0bb60ea` and run `npm start` — the build will fail immediately.

---

### Error 6 — Empty text content across multiple sections

| Field | Detail |
|---|---|
| File | `frontend/src/pages/HomePage.js` |
| Error commit | `0bb60ea` |
| Fix commit | `b42d399` |
| Symptom | Hero badge, hero title, hero subtitle, How It Works subtitle, Platform Features subtitle, CTA title, CTA description, nav "Go to Dashboard" link, nav "Login" link, footer brand text, footer links all rendered blank |
| Cause | JSX elements contained only whitespace — the text content was never written, likely due to incomplete copy-paste from a design spec or AI-generated scaffold |
| Fix | Filled all empty elements with appropriate text content matching the ILES product description |

Affected lines: 151, 159, 176, 180–184, 188, 229–231, 260–262, 287–293, 299–301, 319–321, 325–329, 333–336

---

## PR #58 — ILES-51: Onboarding Page Redesign (feat/ILES-51-onboarding-page-redesign)

**Reviewer:** Matthew Mumbere  
**Date:** 2026-05-14

### Error 7 — Import of non-existent `PageShell` component

| Field | Detail |
|---|---|
| File | `frontend/src/pages/student/PlacementOnBoardingPage.js` |
| Error commit | `9ba1973` |
| Fix commit | `a27f126` |
| Symptom | Navigating to the onboarding route threw `Cannot find module '../components/PageShell/PageShell'` — the page could not render at all |
| Cause | The component imported `PageShell` from `../components/PageShell/PageShell` which does not exist in this codebase. The ILES project uses a `Layout` component via `react-router-dom` `<Outlet>` for page shells — `PageShell` appears to have been copied from a different project or design reference |
| Fix | Removed the `PageShell` import and replaced `<PageShell role="student">` wrapper with a plain `<div className="page">`, which is the correct pattern used by all other student pages |

**To reproduce:** `git checkout 9ba1973`, navigate to `/student/onboarding` — app throws module-not-found error.

---

## PRs with No Errors

| PR | Ticket | Branch | Status |
|---|---|---|---|
| #55 | ILES-49 | feat/ILES-49-student-progress-page | No errors found |
| #56 | ILES-50 | feat/ILES-50-student-profile-page | No errors found |
| #63 | ILES-54 | feat/ILES-54-student-documents-page | No errors found |

---

## Summary Table

| # | PR | File | Error Type | Severity | Fixed |
|---|---|---|---|---|---|
| 1 | #59 ILES-34 | FeedbackModal.js | Missing `export default` | Critical — runtime crash | ✅ `c6561ce` |
| 2 | #59 ILES-34 | FeedbackModal.css | Missing semicolons (×2) | High — broken layout | ✅ `c6561ce` |
| 3 | #59 ILES-34 | FeedbackModal.css | Missing `color:` property name | Medium — wrong colour | ✅ `c6561ce` |
| 4 | #59 ILES-34 | FeedbackModal.css | `(var-text-muted)` invalid syntax | Medium — wrong colour | ✅ `c6561ce` |
| 5 | #60 ILES-39 | HomePage.js | Markdown code fence in JS file | Critical — build crash | ✅ `b42d399` |
| 6 | #60 ILES-39 | HomePage.js | Empty text content (×11 elements) | High — blank UI | ✅ `b42d399` |
| 7 | #58 ILES-51 | PlacementOnBoardingPage.js | Non-existent `PageShell` import | Critical — runtime crash | ✅ `a27f126` |
