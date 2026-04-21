# ZAD Fonts — Funnel Sans Var

Drop your Funnel Sans font files here. The CSS at `src/index.css` is already
configured to load these exact filenames. Prefer `.woff2` (smallest, best
browser support); `.woff` / `.ttf` / `.otf` are accepted as fallbacks.

## Option A — Variable font (recommended, 1 file)

If you have the variable (Var) file, drop just this one:

```
FunnelSansVar.woff2
```

This single file covers all weights Light → ExtraBold.

## Option B — Static weights (6 files)

If you only have static instances, drop these with these exact names:

```
FunnelSans-Light.woff2        ( weight 300 )
FunnelSans-Regular.woff2      ( weight 400 )
FunnelSans-Medium.woff2       ( weight 500 )
FunnelSans-SemiBold.woff2     ( weight 600 )
FunnelSans-Bold.woff2         ( weight 700 )
FunnelSans-ExtraBold.woff2    ( weight 800 )
```

## Fallback

If no file exists here, the site will fall back to Funnel Sans served from
Google Fonts (already wired in `src/index.css`). No code change is needed
once you drop the files — just refresh.
