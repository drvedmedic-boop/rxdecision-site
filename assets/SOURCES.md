# Asset provenance

## Canonical RX Decision visual references

On 23 October 2026 the user reaffirmed the existing Brand System v1 and supplied these three files directly. See `../BRAND.md` for the full standard. The files below are unchanged copies; no pixels were generated, redrawn, recolored or retouched.

| Repository file | User source filename | Dimensions | SHA-256 |
|---|---|---|---|
| `brand/rx-decision-brand-system-v1.jpg` | `photo_2026-10-23_15-17-11.jpg` | 1280 × 818 | `536831be45b27f796e6dde089adfa9a6cd4b45b3dd97abe616f0242e3f162dfa` |
| `brand/rx-decision-wordmark-tagline.jpg` | `photo_2026-10-23_15-17-03.jpg` | 1280 × 320 | `7bca585bbcc3666ec75e7a7008202f369c5d79462ff1dec048b9fa930bb46b35` |
| `brand/rx-decision-app-icon.jpg` | `logo.jpg` | 1254 × 1254 | `7c7e4d8b2433bf25e511a05132d4484967fd685147aaf07be5c1e58019e468e4` |

The horizontal green RX / near-black Decision wordmark is the primary identity. The white stacked RX / Decision icon on green is a separate lockup. The brand sheet is a reference, not a substitute production logo image. Prefer approved production exports verified against these references; never reconstruct a logo from typed text or a merely similar image.

## Recovered original production exports

Source: the user's existing `/RX decision/RX_DECISION_BRAND_V1.zip`, created 7 September 2026 and recovered on 23 October 2026. Archive SHA-256: `39ab86cac233adbd8ee726c2f53cfb62cdb198623703348cbdf51f15969c0a43`. Its README explicitly identifies the wordmarks and app icons as production assets. The package preview is the source of the user-supplied Brand System v1 reference sheet.

All five production files copied into `brand/` are byte-for-byte identical to the archive members. The website uses `brand/rx_decision_logo_horizontal.svg` for both pages and `brand/rx_decision_app_icon_512.png` for the favicon/touch icon. The SVG contains vector paths, with the approved `#0F3D2E` / `#0B0B0B` fills and no text/font dependency.

- Horizontal SVG: 1600 × 360 source canvas, 2,952 bytes; SHA-256 `53783e08197d30a01e0c05aec880654cb9dc39074b54072c44aa687e7f97ee70`.
- Tagline SVG: 1600 × 480 source canvas, 7,458 bytes; SHA-256 `879ab95d38a304a733c079afe551168344feef491867cc082b2e87842c8f8212`.
- Green 512 icon: 512 × 512, 27,824 bytes; SHA-256 `de7ec5998c41d4f96c59f34cce6bb7a9a729255a337945c1037f6c8c35069d57`.
- Green 1024 master: 1024 × 1024, 34,889 bytes; SHA-256 `d9c1d9b4c3afe929020d12926b1726d0df051d764dc60d9e9fecd825ee752fa6`.

Display treatment: `.brand-wordmark` shows the unchanged 1600 × 360 SVG through a 1280 × 360 CSS window. Only the surplus transparent right margin is outside that window; all letterforms remain visible, with unchanged proportions and colors. The source SVG itself is not edited.

The separately supplied tagline JPEG is retained unchanged as a reference. Its letter proportions differ from the Brand System v1 production wordmark; the website uses the recovered outline export corresponding to the approved brand sheet.

## Rejected legacy monogram

`rx-decision-logo-original.jpg` is a byte-for-byte copy of an earlier `34853.jpg` upload (1031 × 1536 pixels, 71,082 bytes; SHA-256 `ef47e78bb2e920d18ea0caa44c54410b75161d486c365476e60f63891f0e7e6f`). It contains a turquoise stylized Rx monogram.

Its selection as the RX Decision website logo was an error. The user rejected that identity on 23 October 2026. The previous description of it as the original/canonical RX Decision logo is withdrawn. Do not use it as a brand reference, even though its historical filename contains `original`. It has been removed from the current file tree and all page references; it remains only in Git history. The independently retyped `assets/favicon.svg` has also been removed and replaced with the original app-icon export.

## Denis Medvedev portrait

### Current website portrait: user-approved edit

On 23 October 2026 the user supplied ten new real photographs and requested one portrait in a white medical coat on a neutral background, following the earlier request for a wider composition with crossed arms and replacement of the website photograph. Three of those new photographs were used as the references. The user then requested slight hair styling and neat beard trimming, with the rest of the portrait preserved, and explicitly approved the resulting image: «утверждаю».

The original uploads remain unchanged and are not published in this repository. All three source JPEGs are 1536 × 2048 pixels:

| Source | Use | SHA-256 |
|---|---|---|
| `IMG_20261023_231156515_HDR.jpg` | Primary face and natural smile | `6443a79c70f3b52c16e2721b509a4f8c9f41d8d2ffe08d47ae212d7d6a7f17a6` |
| `IMG_20261023_231041689_HDR.jpg` | Real crossed-arms pose and body proportions | `b27245e20dc14b69c31cbfa6b6f464817f8fa8381f8c64e745f003a2cc9a7e0b` |
| `IMG_20261023_231209863_HDR.jpg` | Additional face and proportions reference | `14e64e6abb92722cb2667fc5d40901e871f94c314fd13ed179d1a1d496d1f9b7` |

- The portrait was created with the built-in image editing tool using these real references. The edit adds a white medical coat and neutral light-gray background while preserving the recognizable face, expression and real body/arm pose. A second, localized edit lightly tidies the hair and beard. No badge, logo, stethoscope or other medical props were added. This is an AI-edited derivative, not an unchanged camera original or a claim of pixel-identical preservation.
- Approved master: PNG, 1100 × 1429 pixels, 1,737,641 bytes; SHA-256 `ae6eae875f4d6c3b09c3e950979a2a9abcd021cdd792842828e5701b67505352`. The full-size result is retained with the generated image in the conversation.
- Website derivative: `denis-medvedev-portrait-approved-20261023.webp`, 400 × 520 pixels, 19,008 bytes; SHA-256 `78cbe4a877fc5c28a08db82d2dd0d443481e7b8690bcaa9fe7e7baccd530c8e1`.
- The derivative only downsizes and encodes the approved master as WebP at quality 92, preserving the complete composition without cropping. The output dimensions round the source aspect ratio by less than 0.1%. The existing 100 × 130 desktop and 90 × 117 mobile display boxes and `object-fit: contain` are unchanged. The distinct filename prevents reuse of an earlier photograph from a browser cache.
- This approval applies to this final portrait. Earlier unapproved generated drafts are not used by the website and are not the identity sources for this image.

### Previous portrait: retained for provenance, no longer displayed

- Saved unchanged as `denis-medvedev.jpg` from the official IACMAC / МАКМАХ congress website.
- Profile context: https://www.antibiotic.ru/events/27-congress/ — the speaker entry names «Медведев Денис Сергеевич», clinical pharmacologist at Pokrovskaya Hospital.
- Image: https://www.antibiotic.ru/files/415/medvedev-ds.jpg
- Retrieved: 2026-10-23. JPEG, 100 × 130 pixels, 22,475 bytes.
- SHA-256: `052cb7aacf8bf940cb1dcdd181d863ae3e9548c2f92be83de4e6b825d58e8ccb`.
- The original Figma export could not be recovered. This is an independently sourced genuine professional portrait, not a generated reconstruction. Display at or below its native dimensions; do not upscale.
