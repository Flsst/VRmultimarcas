---
name: design-system-builder
description: Builds a coherent lightweight design system for websites using tokens, typography, spacing, colors, radii, surfaces, components, and responsive rules. Use when starting or standardizing a website visual system.
compatibility: opencode
---

# Design System Builder

Build enough system to create coherence without turning a landing page into an enterprise component library.

## Define tokens

Establish reusable variables/tokens for:
- background;
- foreground;
- muted foreground;
- primary;
- accent;
- border;
- surface;
- destructive/success if needed;
- spacing;
- radii;
- shadows;
- container widths;
- typography.

Prefer semantic token names over raw color names in components.

## Typography scale

Define:
- display;
- H1;
- H2;
- H3;
- body;
- small/meta;
- button.

Use responsive scaling with sensible minimums and maximums.

## Spacing

Use a consistent spacing family. Avoid arbitrary margins repeated throughout JSX.

Define section spacing separately from internal component spacing.

## Components

Standardize recurring primitives:
- container;
- button;
- section heading;
- navigation;
- form controls;
- badges only if the design actually needs them.

Do not make every visual pattern a generic component.

## Surfaces

Keep border, radius, shadow, and blur rules disciplined.
A premium website should not have every block floating in a rounded card.

## Brand adaptation

Derive the system from supplied brand assets:
- logo geometry;
- dominant colors;
- photographic treatment;
- visual personality;
- audience.

Do not force a fashionable design system onto a brand that requires a different tone.

## Deliverable quality

The system should make future sections easier to build consistently while keeping the code readable and easy to modify.
