# ZAD Brand Assets

Drop your logo files here. Use these exact filenames so `src/App.tsx`,
`index.html`, and social meta tags pick them up automatically.

## Required

```
zad-logo.svg          Full lockup (Z●\D + wordmark if any). Used in hero.
zad-logomark.svg      Square mark only. Used for favicon fallback.
favicon.svg           Optional dedicated favicon (defaults to logomark).
og-image.png          1200×630, for link previews (OG / Twitter card).
```

## Optional

```
zad-logo-white.svg    White variant for dark backgrounds.
zad-logo.png          PNG export at 2x for legacy use.
apple-touch-icon.png  180×180 PNG for iOS home screen.
```

## Brand Colors (for reference)

| Token     | Hex       | Usage                          |
| --------- | --------- | ------------------------------ |
| Blue Navy | `#063A8E` | Primary brand accent           |
| Black     | `#020D1E` | Text, dark surfaces            |
| White     | `#FFFFFF` | Light surfaces, logo reverse   |
| Off-white | `#F4F4F4` | Page background                |

## Notes

- SVG is strongly preferred for logos (crisp at any size, small payload).
- Keep viewBox tidy (no huge padding) so the logo sits flush in layout.
- Export SVGs with text converted to outlines to avoid font-loading flashes.
