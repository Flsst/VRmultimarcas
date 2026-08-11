---
name: web-performance-expert
description: Audits and improves website loading, rendering, Core Web Vitals, media delivery, JavaScript cost, fonts, animation cost, and production performance. Use before launch or when performance regressions are possible.
compatibility: opencode
---

# Web Performance Expert

Optimize user-perceived speed first, then technical metrics.

## Images

- Use appropriate dimensions.
- Prefer modern formats where supported by the stack.
- Supply responsive sources when worthwhile.
- Lazy-load below-the-fold media.
- Do not lazy-load the main LCP image.
- Consider preload/fetch priority only for truly critical assets.
- Reserve dimensions/aspect ratio to reduce CLS.

## JavaScript

- Avoid shipping large libraries for small effects.
- Keep landing-page interactivity lightweight.
- Lazy-load non-critical heavy features.
- Remove dead imports and unused dependencies where safe.
- Avoid unnecessary client components in SSR-capable stacks.

## Fonts

- Limit families and weights.
- Prefer efficient loading.
- Avoid blocking render.
- Use fallback metrics/strategies that minimize layout shift when the stack supports them.

## CSS and rendering

- Avoid excessive expensive filters.
- Limit giant shadows and backdrop blur.
- Use compositor-friendly motion.
- Prevent large offscreen animated layers when possible.

## Core Web Vitals

Pay particular attention to:
- LCP;
- CLS;
- INP.

Identify the likely dominant element or behavior causing each regression.

## Production check

Test using the production build where possible. Development mode is not representative of production performance.

Do not sacrifice brand quality for tiny theoretical gains; prioritize changes with meaningful user impact.
