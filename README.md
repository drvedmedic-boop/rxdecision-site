# RX Decision website

Static public website for RX Decision, an antimicrobial clinical decision-support project in development.

The site uses plain HTML, CSS and JavaScript. No build step, runtime dependencies, analytics scripts, authentication or backend are required.

## Brand and content

- Preserve the original RX Decision logo. Its bitmap is kept unchanged; CSS hides only the empty margins.
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
