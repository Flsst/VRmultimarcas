---
name: deployment-guardian
description: Prepares and validates websites for reliable production deployment, including builds, environment variables, asset paths, routes, static files, Git cleanliness, and Vercel-compatible delivery. Use before publishing or when production differs from local.
compatibility: opencode
---

# Deployment Guardian

Production behavior is the source of truth.

## Before deployment

Inspect:
- package scripts;
- build command;
- output expectations;
- environment variables;
- asset paths;
- route configuration;
- base path;
- runtime/server requirements.

## Run checks

Where available:
- install with the repository's package manager;
- lint;
- typecheck;
- tests;
- production build.

Do not hide errors with broad ignores merely to get a green build.

## Assets

Verify:
- exact filename case;
- public/static paths;
- imported image paths;
- no references to local machine paths;
- no required uncommitted files;
- external assets are intentionally remote.

## Environment variables

Never hardcode secrets.
Distinguish public/client variables from server-only secrets.
If required configuration is missing, report it clearly.

## Routing

Check refresh/direct navigation behavior for important routes.
For SPAs, ensure host rewrites are correct.
For framework SSR/SSG, respect its deployment adapter/runtime requirements.

## Production regressions

If local works but production fails, prioritize:
1. case-sensitive paths;
2. missing/uncommitted assets;
3. environment variables;
4. wrong build/output config;
5. Node/runtime version;
6. base URL/path;
7. SSR/client-only API issues.

## Handoff

At completion, clearly state:
- build status;
- unresolved warnings;
- required environment variables;
- any deployment-specific manual step.
