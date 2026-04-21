# ZAD Fonts — VL Funnel Sans (Vietnamese-extended)

Active files (loaded by `src/index.css` as the `Funnel Sans` family via
variable-font `@font-face`):

```
Font/VL FunnelSans Variable-VF.ttf            upright, weight 300–800
Font/VL FunnelSans Italic Variable-VF.ttf     italic,  weight 300–800
```

The static `.otf` weights in `Font/` are kept as backup / for design tools
but are not referenced by the web build. To optimize payload later, convert
the two variable `.ttf` files to `.woff2` and update the `src: url(...)` in
`src/index.css`.
