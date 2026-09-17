# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume/portfolio website for Alexandre Boucaud, based on the [StartBootstrap-resume template](https://github.com/BlackrockDigital/startbootstrap-resume) (MIT license). It is a single-page static HTML site hosted on GitHub Pages.

## Branches

- `master` — source branch for development
- `gh-pages` — deployed branch (GitHub Pages serves from here); this is the default remote branch

To publish, push or merge to `master` — the Actions workflow deploys to `gh-pages`. Never push to `gh-pages` by hand.

## Structure

All content lives in `index.html`. Sections in order: hero, `#carousel`, `#projects`, `#talks`, `#contact`, footer.

- `css/resume.css` — custom styles (the only stylesheet to edit)
- `js/data.js` — single source of truth for personal info (name, email, institution, social links); edit this to update repeated values across the page
- `js/main.js` — vanilla JS: config fill + photo carousel (auto-advance, prev/next, dots, swipe, deferred loading, pause on hover/touch/hidden tab/reduced motion)
- `fonts/` — self-hosted woff2 files (DM Serif Display 400 roman, Space Grotesk 300–500 — the only two active families)
- `img/small/` — 1000px-wide copies of the carousel photos, served below 700px; regenerate with `cwebp -resize 1000 0 -q 78`
- `PRODUCT.md` / `DESIGN.md` — product truth and the design system. Read DESIGN.md before changing anything visual

No build tooling — edits are made directly to `css/resume.css`, `js/data.js`, and `index.html`.

## Link conventions

External links that should open in a new tab get a semantic class instead of inline `target`/`rel` attributes — JS applies those automatically at page load:

- `.project-link` — links inside project cards
- `.side-link` — links in the hero sidebar and JS-rendered blocks (institution, social links)
- `.talk-link` — links in the teaching and PhD supervision lists

Contact section links are rendered entirely from `js/data.js`; their `target`/`rel` are set in the JS template. The mailto link intentionally has no `target`.

## `js/data.js` — personal info config

To update a name, URL, or social handle, edit only `js/data.js`. The following are rendered from it at runtime (the HTML elements are empty placeholders):

- `SITE.name` → nav, hero `<h1>`, footer
- `SITE.institution.{lab,cnrs,footer}` → hero Institution block, footer text
- `SITE.links` → hero Links block, contact section social rows
- `SITE.email` → contact section email row

`<head>` meta tags and JSON-LD structured data remain static in `index.html` (they are read before JS runs).

## Design

Design direction: clean, editorial, minimal. Based on structure C from an iterative design process.

Typography:
- Display/headings: DM Serif Display (self-hosted), roman only — no italic face is shipped, deliberately
- Body/UI: Space Grotesk, weights 300/400/500 only

Color palette — Vert sauge is the only implemented palette, set directly in `:root`:
- Vert sauge:   accent #3d6b57, mid #8ab09a, bg #f4f2ee, card #ffffff, border #deded8
- Bleu ardoise: accent #3a5899, mid #7a9cc4, bg #f4f2ee, card #ffffff, border #e0ddd8 — **not implemented**, kept as a reference comment at the top of `css/resume.css`

Layout principles:
- 2px single-color top accent bar (var --accent)
- Static nav, scrolls away with the page
- Hero: two-column grid (content left, metadata sidebar right)
- Photo carousel below hero: full width, 340px tall (220px below 700px, 200px in short landscape)
- Sections with DM Serif Display title + horizontal rule + metadata label
- Projects: 2-column grid of cards
- Talks: minimal table-like list (year / title / venue)
- Contact: centered tagline above a bordered row of link cells
- No shadows (except the ambient glow around the page sheet), no gradients, 0.5px borders throughout
- One breakpoint at 700px, refined by 380px, short-landscape, coarse-pointer and no-hover queries

## Deployment

GitHub Actions (`deploy.yml`) auto-deploys `master` → `gh-pages` on push. Dev work happens on feature branches merged to `master`. Excluded from the published site (`exclude_assets`): `.gitignore`, `.github`, `CLAUDE.md`, `README.md`, `PRODUCT.md`, `DESIGN.md`, `.impeccable`.

## Palette toggle

**Not implemented.** The `.sage` selector, toggle UI, and `setPalette()` function were removed. The active palette is Vert sauge (green accent `#3d6b57`), set directly in `:root`; Bleu ardoise survives only as a reference comment at the top of `css/resume.css`.

## Carousel maintenance

Dot count must always equal slide count. Every `.carousel-slide` added to `.carousel-slides` requires a matching `.dot` button in `.carousel-dots`, or the JS will crash when it reaches the undotted slide.

## Previewing

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```
