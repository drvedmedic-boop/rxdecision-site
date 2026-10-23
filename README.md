# RX Decision website

Static public website for RX Decision, an antimicrobial clinical decision-support project in development.

The site uses plain HTML, CSS and JavaScript. No build step, runtime dependencies, analytics scripts, authentication or backend are required.

## Brand and content

- Read [BRAND.md](BRAND.md) and [AGENTS.md](AGENTS.md) before visual work. They record the user-approved RX Decision Brand System v1 and the correction confirmed on 23 October 2026.
- Canonical visual references are preserved unchanged in `assets/brand/`: the Brand System v1 sheet, horizontal green RX / black Decision wordmark, and separate app icon.
- Production exports were recovered from the existing `RX_DECISION_BRAND_V1.zip` asset pack dated 7 September 2026. The original outline SVG is used for both pages; the original green app icon is used as the favicon. See `assets/SOURCES.md` for the source and checksums.
- The turquoise monogram previously named `assets/rx-decision-logo-original.jpg` was selected in error and has been removed from the current site. Do not recover it from history as an approved logo.
- Brand colors: `#0F3D2E`, `#0B0B0B`, `#6B7280`, `#E5E7EB`, `#FFFFFF`.
- Inter is hosted locally with its license in `assets/fonts/`.
- Image provenance and the founder portrait's source-resolution limit are documented in `assets/SOURCES.md`.
- Public copy describes development principles, not clinical validation or medical-use readiness.
- The legal text in `privacy.html` concerns the LinkedIn Analytics integration. Its operator is not presented as the owner of the clinical product.

## Local preview

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

`/preview/review.html` displays the live homepage or privacy policy at 320, 390, 834, 1024 and 1440 pixel iframe widths. It is excluded from indexing and is not a separate copy of the site. Use browser developer tools or real devices for further device-specific testing.

## Deployment

Published from `main` through GitHub Pages with custom domain `rxdecision.com`.
The repository includes `CNAME`, `robots.txt`, and `sitemap.xml`.

After changing HTML, CSS, scripts or assets, check both `/` and `/privacy.html` in a real browser after the Pages deployment completes. Confirm image decoding, keyboard navigation, mobile menu behavior and horizontal overflow. Increment the stylesheet/script version query when changing cached resources.
