# Migration Status (Seedly / Dibbly / TS Config)

## Completed

- Added dependencies: `@kalink-ui/seedly@0.33.2`, `@kalink-ui/dibbly@0.5.3`, `@kalink-ui/typescript-config@0.4.0`; repo uses `tsconfig` extending `@kalink-ui/typescript-config/nextjs.json` with alias `@/*` and subpaths (`@/components/*`, etc.).
- Added theme wiring: `style/refs.css.ts` (contract), `style/refs-theme.css.ts` (fills contract), `style/system-theme.css.ts` (maps to Seedly sys); `app/layout.tsx` imports Seedly reset/layers and these theme files; `app/layout.css.ts` uses `sys`/`typography` for body.
- Primitives swapped to Seedly re-exports in `components/{box,stack,button,text}/` (legacy implementations removed); type shims cleared in those folders.
- Navigation slice (`slices/NavigationLinks/navigation-links.tsx`) refactored to Seedly `Box/Cluster/Text/Heading` and `Sheet` for mobile menu; text variants mapped to `variant="body" size="medium"` and heading to `variant="title" size="medium"`. Hidden stays local. Layout uses `Box` with responsive `spacing` and inline max-width centering.
- tsconfig updated with component/slice/style/type path aliases.

## In Progress / Partial

- Hidden import alias still flagged by TS analyzer (may need TS restart); works via alias mapping but can fall back to relative `../../components/hidden` if needed.
- Container removal started (e.g., `app/page.tsx` now uses `Box/Stack`), but other pages still import the broken `components/container` (Seedly has no `Container`).

## Current TS Errors (from `npm run tsc -- --noEmit`)

- **Deprecated `space` prop** on Seedly components: `app/artworks/[uid]/page.tsx`, `app/artworks/page.tsx`, `app/contact/contact-form.tsx`, `app/page.tsx` (fixed), `app/presentation/page.tsx`, `slices/CaptionImage/index.tsx`, `slices/LinkList/index.tsx`, `slices/RichText/rich-text.tsx`, `components/rich-text/rich-text.tsx`.
- **Legacy text variants** (`bodySmall/bodyMedium/titleMedium`): `app/presentation/page.tsx`, `components/rich-text/rich-text.tsx`, `slices/RichText/rich-text.tsx`.
- **Container export missing**: `components/container/container.tsx` still re-exports non-existent Seedly `Container`, breaking pages that import it.
- **Theme typing**: `style/refs-theme.css.ts` call missing `spacing` in contract args; `style/system-theme.css.ts` imports `@kalink-ui/seedly/src/styles` (should be `@kalink-ui/seedly/styles`).
- **Other legacy imports**: some files still reference `@/styles/contract.css` (old token file) and old primitives; need migration to new `style` tokens.

## Next Actions (ordered)

1. Sweep all `space="..."` props → `spacing` (numeric or responsive) and map legacy variants to Seedly (`bodySmall` → `variant="body" size="small"`, etc.).
2. Replace `Container` usages with Seedly `Box` layouts (maxWidth + padding) and delete/stop exporting `components/container`.
3. Fix theme typing: add `spacing` to `style/refs-theme.css.ts` contract population; change `style/system-theme.css.ts` import to `@kalink-ui/seedly/styles`.
4. Update remaining legacy style imports (`@/styles/contract.css`, etc.) to new `style/refs-*`/`system-theme` tokens.
5. Re-run `npm run tsc -- --noEmit` to verify; if Hidden alias still errors, temporarily use relative import.
