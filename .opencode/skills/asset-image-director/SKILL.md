---
name: asset-image-director
description: Manages website image and media assets for quality, organization, responsive delivery, cropping, loading, and reliable production deployment. Use for hero imagery, galleries, product photos, brand assets, and asset-path problems.
compatibility: opencode
---

# Asset & Image Director

Treat assets as production dependencies, not decoration added at the end.

## Source integrity

Before referencing an asset:
- verify that the file exists;
- verify exact filename and case;
- understand whether the framework imports it or serves it from public/static;
- preserve correct deployment paths.

Never invent a path and assume the file will exist.

## Organization

Prefer a predictable structure appropriate to the current stack, such as:
- hero;
- products/services;
- gallery;
- about;
- brand;
- icons.

Do not reorganize an established project unnecessarily.

## Delivery

- Use correct intrinsic dimensions/aspect ratios.
- Use modern formats where practical.
- Serve sizes appropriate to the viewport.
- Lazy-load below-the-fold images.
- Prioritize the main LCP image.
- Avoid huge source images when a much smaller rendered size is expected.

## Art direction

Crop intentionally.
Set breakpoint-specific focal position if desktop and mobile compositions differ.
Do not stretch images.
Protect faces, products, vehicles, logos, and other focal subjects.

## Reliability

Before launch:
- verify every rendered image;
- search for duplicated media;
- test production build paths;
- check case sensitivity;
- check broken imports;
- check whether external URLs are durable and allowed.

Never replace a missing production asset silently with a random stock image.
