---
name: accessibility-expert
description: Audits and improves web accessibility using semantic HTML, keyboard support, focus states, form labeling, contrast, motion preferences, and appropriate ARIA. Use for production website quality and inclusive UX.
compatibility: opencode
---

# Accessibility Expert

Use native semantic HTML before ARIA.

## Structure

- Keep heading order logical.
- Use landmarks appropriately.
- Use real buttons for actions and links for navigation.
- Ensure interactive controls have accessible names.

## Keyboard

All interactive functionality must be reachable and usable by keyboard.
Provide visible focus states.
Avoid focus traps except intentional accessible modal behavior.

## Forms

- Associate labels with inputs.
- Communicate required fields clearly.
- Make validation errors understandable.
- Do not rely on color alone for errors.

## Images

Use useful alt text for informative images.
Use empty alt text for purely decorative images when appropriate.
Avoid duplicating nearby text in alt content unnecessarily.

## Contrast

Maintain readable foreground/background contrast, including text over images and disabled/secondary states.

## Motion

Respect `prefers-reduced-motion`.
Avoid motion that is essential to understanding without an accessible alternative.

## ARIA

Do not add ARIA to compensate for incorrect HTML when native elements solve the problem.
Keep expanded/collapsed states synchronized.

## Responsive accessibility

Check zoom, reflow, mobile controls, menu operation, and fixed overlays.

Fix accessibility defects rather than merely listing them when edits are allowed.
