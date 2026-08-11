---
name: motion-interaction-designer
description: Designs performant, restrained web motion, microinteractions, scroll effects, parallax, and transitions. Use when a premium website needs animation that supports hierarchy and perceived quality without hurting usability or performance.
compatibility: opencode
---

# Motion & Interaction Designer

Motion must improve comprehension, feedback, atmosphere, or hierarchy. Never add animation merely because it is possible.

## Priority

Prefer:
1. direct interaction feedback;
2. subtle entrances;
3. meaningful state transitions;
4. restrained scroll choreography;
5. atmospheric motion.

## Performance

Prefer transform and opacity.
Avoid frequent layout-triggering animation.
Be cautious with:
- large blur filters;
- huge animated gradients;
- multiple WebGL canvases;
- excessive particles;
- scroll handlers without efficient scheduling.

Use libraries already present when possible. Do not add GSAP/Framer just for simple fades.

## Parallax

Use depth hierarchy:
- background moves least;
- midground moderately;
- foreground more;
- primary subject remains stable enough to preserve focus.

Never allow parallax to create seams, exposed backgrounds, disorientation, or illegible text.

## Reduced motion

Respect `prefers-reduced-motion`.
Provide a calm equivalent rather than breaking the layout.

## Mobile

Simplify heavy motion on low-power/mobile contexts when appropriate.
Do not rely on hover.
Avoid scroll-jacking.

## Timing

Keep UI feedback fast.
Use slower timing only for atmospheric elements.
Use consistent easing across the experience.

## Review

Remove animations that:
- delay content;
- compete with CTA;
- feel gimmicky;
- cause jank;
- make the interface harder to understand.
