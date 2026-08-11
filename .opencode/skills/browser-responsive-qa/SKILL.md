---
name: browser-responsive-qa
description: Performs responsive and browser-oriented QA on websites, checking breakpoints, overflow, navigation, forms, sticky UI, viewport units, assets, and interaction regressions. Use before production launch or after major layout changes.
compatibility: opencode
---

# Browser & Responsive QA

Review the page as a tester, not as its author.

## Breakpoints

At minimum inspect:
- 360px;
- 375px;
- 390px;
- 430px;
- tablet;
- common laptop;
- wide desktop.

Test intermediate widths when grids or typography change significantly.

## Check every viewport for

- horizontal overflow;
- clipping;
- text overlap;
- broken grid/flex behavior;
- awkward line wraps;
- nav/menu usability;
- CTA visibility;
- image crop;
- fixed/sticky overlap;
- modal overflow;
- form usability;
- footer layout.

## Browser-sensitive areas

Pay attention to:
- viewport height units;
- sticky positioning;
- backdrop filters;
- scroll behavior;
- font rendering;
- form controls;
- video autoplay policies;
- WebP/AVIF support assumptions where relevant.

## Interaction

Test:
- menu open/close;
- anchor links;
- buttons;
- forms;
- accordions;
- sliders/carousels;
- hover/focus/touch alternatives;
- external links;
- WhatsApp/phone/email links if present.

## Failure handling

If automated browser tooling is unavailable, still inspect the implementation systematically and state what could not be directly verified.

Fix regressions when permitted, then rerun the relevant checks.
