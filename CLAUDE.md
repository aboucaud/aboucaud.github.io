# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume/portfolio website for Alexandre Boucaud, based on the [StartBootstrap-resume template](https://github.com/BlackrockDigital/startbootstrap-resume) (MIT license). It is a single-page static HTML site hosted on GitHub Pages.

## Branches

- `master` — source branch for development
- `gh-pages` — deployed branch (GitHub Pages serves from here); this is the default remote branch

To publish changes, merge or push to `gh-pages`.

## Structure

All content lives in `index.html`. Sections: `#projects`, `#talks`, `#contact` (plus `#carousel` in the hero).

- `css/resume.css` — custom styles (the only stylesheet to edit)
- `js/main.js` — vanilla JS: palette toggle (`.sage` class on `#site`) + photo carousel
- `js/resume.min.js` — legacy template JS, kept but not used in the redesign
- `fonts/` — self-hosted woff2 files (Instrument Serif, Space Grotesk, Fraunces, IBM Plex)
- `inputs/` — source assets: LaTeX CV (`main.tex`), design mockup (`mockup.html`), raw images
- `vendor/` — vendored libraries from the original template (not imported in the redesign)

No build tooling — edits are made directly to `css/resume.css` and `index.html`.

## Design

Design direction: clean, editorial, minimal. Based on structure C from an iterative design process.

Typography:
- Display/headings: Instrument Serif (Google Fonts), italic for accent words
- Body/UI: Space Grotesk, weights 300/400/500 only

Color palette (both implemented; toggled via `.sage` CSS class on `#site`):
- Bleu ardoise: accent #3a5899, mid #7a9cc4, bg #f4f2ee, card #ffffff, border #e0ddd8
- Vert sauge:   accent #3d6b57, mid #8ab09a, bg #f3f4f0, card #ffffff, border #deded8

Layout principles:
- 2px single-color top accent bar (var --accent)
- Static nav, scrolls away with the page
- Hero: two-column grid (content left, metadata sidebar right)
- Photo strip below hero: 4 columns, ~180px tall, placeholder for real images
- Sections with Instrument Serif title + horizontal rule + metadata label
- Projects: 2-column grid of cards
- Talks: minimal table-like list (year / title / venue)
- Contact: two-column (tagline left, link rows right)
- No shadows, no gradients, 0.5px borders throughout

## Deployment

GitHub Actions (`deploy.yml`) auto-deploys `master` → `gh-pages` on push. Dev work happens on feature branches merged to `master`. The following files are excluded from the published site: `CLAUDE.md`, `TODO.md`, `.github`, `README.rst`.

## Palette toggle

Already implemented. The `.sage` CSS class on `#site` switches to Vert sauge. `setPalette()` in `main.js` manages the toggle and persists selection to `localStorage`.

## Previewing

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```
