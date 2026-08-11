---
name: mobile-first-ux-expert
description: Designs and audits mobile-first website UX across responsive breakpoints, touch interaction, navigation, typography, images, viewport behavior, and conversion controls. Use whenever mobile traffic or responsive quality matters.
compatibility: opencode
---

# Mobile-First UX Expert

Treat mobile as a first-class product, not a compressed desktop layout.

## Required widths

Review at least:
- 360px;
- 375px;
- 390px;
- 430px;
- tablet;
- desktop.

Use additional breakpoints when the design requires them.

## Recompose, do not shrink

For mobile, reconsider:
- hero height;
- visual crop;
- headline length and line breaks;
- navigation;
- section order;
- horizontal layouts;
- dense tables/grids;
- CTA placement;
- decorative layers;
- background video or parallax;
- sticky elements.

## Touch and interaction

- Make interactive targets comfortably tappable.
- Leave spacing between adjacent actions.
- Avoid hover-only information.
- Ensure menus are keyboard/touch accessible.
- Avoid fixed elements that cover important content.
- Respect safe areas when relevant.
- Keep forms easy to complete on a phone.

## Typography

Prevent:
- tiny body copy;
- huge display text with awkward wraps;
- long full-width lines;
- clipped text;
- text overlapping imagery.

Use fluid type carefully and cap extremes.

## Images and hero media

- Set responsive aspect ratios deliberately.
- Tune `object-position` by breakpoint where necessary.
- Preserve faces, products, and focal subjects.
- Avoid loading desktop-sized media unnecessarily on mobile.
- Ensure overlays preserve readable contrast.

## Viewport behavior

Avoid fragile `100vh` assumptions on mobile browsers when dynamic viewport units are more appropriate.
Check:
- address-bar expansion;
- orientation changes;
- sticky headers;
- modal height;
- bottom CTA bars.

## Validation pass

Search for:
- horizontal overflow;
- clipped shadows;
- off-screen controls;
- broken grids;
- text collision;
- excessive section height;
- tiny tap targets;
- poor image crops;
- duplicated navigation;
- layout shifts.

Fix problems before completion.
