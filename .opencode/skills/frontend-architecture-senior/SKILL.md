---
name: frontend-architecture-senior
description: Implements maintainable, production-grade frontend architecture in React, TypeScript, and modern web stacks. Use for component design, refactors, state boundaries, project structure, reusable patterns, and implementation quality.
compatibility: opencode
---

# Frontend Architecture Senior

Favor the simplest architecture that remains clean at the expected project scale.

## Repository-first rule

Before coding:
- inspect package.json;
- inspect routing;
- inspect styling conventions;
- inspect existing components;
- inspect aliases;
- inspect build scripts;
- inspect asset directories.

Do not introduce a competing framework or design system without a strong reason.

## Components

Create components around meaningful UI or behavior boundaries.
Avoid:
- one giant page component;
- hundreds of tiny components with no reuse or clarity;
- premature abstractions;
- duplicated markup across repeated patterns;
- prop APIs that merely expose every CSS value.

Keep data/content separate from rendering when it improves clarity.

## TypeScript

- Prefer explicit domain types where helpful.
- Avoid `any` unless unavoidable and documented.
- Do not silence type errors to make the build pass.
- Handle nullable/optional data intentionally.

## State

Use local state by default.
Promote state only when multiple consumers genuinely need it.
Avoid global state for static landing-page content.

## Dependencies

Before adding a package:
- check whether the stack already solves the problem;
- estimate bundle/runtime cost;
- avoid dependencies for trivial helpers;
- prefer platform/CSS features when reliable.

## Resilience

- Handle missing assets and optional content gracefully.
- Use stable keys.
- Avoid hydration-sensitive browser access during SSR.
- Guard client-only APIs.
- Preserve semantic HTML.

## Completion

Run the repository's available:
- lint;
- typecheck;
- tests;
- production build.

Fix errors caused by the implementation rather than bypassing checks.
