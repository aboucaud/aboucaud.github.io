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
- `js/main.js` — vanilla JS: external-link `target`/`rel` + photo carousel (auto-advance, prev/next, dots, swipe, deferred loading, pause on hover/touch/keyboard-focus/hidden tab/reduced motion)
- `fonts/` — self-hosted woff2 files (IBM Plex Serif 400 roman, Space Grotesk 300–500 — the only two active families)
- `img/` — carousel photos at **1920px wide, q86** (the band is 960px with `background-size: cover`, so 1920 covers 2x DPR). Regenerate from an original with `cwebp -resize 1920 0 -q 86 <src> -o img/<name>.webp`
- `img/small/` — 1000px-wide copies served below 700px; regenerate with `cwebp -resize 1000 0 -q 78 <src> -o img/small/<name>.webp`

  **Never derive `img/small/` from `img/`** — both tiers come from the camera originals. Re-encoding an already-encoded file compresses it twice and the loss is cumulative.
- `img/pachon.webp` — the fixed backdrop, deliberately left at 1387px/50 KB: it sits at 0.35 opacity behind the sheet, where resolution is imperceptible
- `PRODUCT.md` / `DESIGN.md` — product truth and the design system. Read DESIGN.md before changing anything visual

No build tooling — edits are made directly to `css/resume.css` and `index.html`.

**All content lives in `index.html`.** There is no runtime templating: the name, institution, links and contact rows are written in the markup so the page works with JavaScript disabled. Changing a name or URL means editing it wherever it appears (the name twice, each social link twice).

## Link conventions

External links that should open in a new tab get a semantic class instead of inline `target`/`rel` attributes — JS applies those automatically at page load:

- `.project-link` — links inside project cards
- `.side-link` — links in the hero sidebar and JS-rendered blocks (institution, social links)
- `.talk-link` — links in the teaching and PhD supervision lists

Contact rows carry `.side-link` so the same JS applies `target`/`rel`. The mailto link intentionally has neither the class nor a `target`.

## Design

Design direction: clean, editorial, minimal. Based on structure C from an iterative design process.

Typography:
- Display/headings: IBM Plex Serif (self-hosted), roman only — no italic face is shipped, deliberately
- Alternative display face, vetted and ready: Spectral 400 (OFL) — see the comment above the @font-face block in `css/resume.css`
- Body/UI: Space Grotesk, weights 300/400/500 only
- Seven type sizes total, declared as `--t-*` tokens in `:root`. Nothing readable goes below 11px, and new elements pick an existing role rather than adding an eighth size.

Color palette — Vert sauge is the only implemented palette, set directly in `:root`:
- Vert sauge:   accent #3d6b57, mid #8ab09a, bg #f4f2ee, card #ffffff, border #deded8
- Ink ramp:     text #1b1917, muted #4d4944, subtle #6f6b64 — all three clear 4.5:1 on both surfaces; don't add a fourth, lighter grey
- Bleu ardoise: accent #3a5899, mid #7a9cc4, bg #f4f2ee, card #ffffff, border #e0ddd8 — **not implemented**, kept as a reference comment at the top of `css/resume.css`

Layout principles:
- 2px single-color top accent bar (var --accent)
- Static nav, scrolls away with the page
- Hero: two-column grid (content left, metadata sidebar right)
- Photo carousel below hero: full width, 340px tall (220px below 700px, 200px in short landscape)
- Sections with IBM Plex Serif title + horizontal rule + metadata label
- Projects: 2-column grid of cards
- Talks: minimal table-like list (year / title / venue)
- Contact: centered tagline above a bordered row of link cells
- No shadows (except the ambient glow around the page sheet), no gradients, 0.5px borders throughout
- One breakpoint at 700px, refined by 380px, short-landscape, coarse-pointer and no-hover queries

## Deployment

GitHub Actions (`deploy.yml`) auto-deploys `master` → `gh-pages` on push. Dev work happens on feature branches merged to `master`. Excluded from the published site (`exclude_assets`): `.gitignore`, `.github`, `CLAUDE.md`, `README.md`, `PRODUCT.md`, `DESIGN.md`, `.impeccable`.

## Palette toggle

**Not implemented.** The `.sage` selector, toggle UI, and `setPalette()` function were removed. The active palette is Vert sauge (green accent `#3d6b57`), set directly in `:root`; Bleu ardoise survives only as a reference comment at the top of `css/resume.css`.

## Accessibility contract

Deliberate, verified choices — do not undo them casually:

- The carousel pauses on hover, touch, **keyboard focus** (`focusin`), a hidden tab, and being scrolled out of view — one `shouldPlay()` predicate, not competing start/stop calls. The focus pause is what satisfies WCAG 2.2.2 Pause, Stop, Hide (Level A); hover alone leaves keyboard users with no way to stop it.
- `prefers-reduced-motion` removes the cross-fade and autoplay but **keeps** the 0.15s/0.2s hover and focus feedback. Do not replace this with a blanket `transition-duration: 0.01ms !important` — nothing here animates a spatial property, so that would strip meaning without removing movement.
- Inactive slides carry `aria-hidden="true"` so screen readers read one caption, not thirteen. `goTo()` moves that attribute.
- Dots are plain buttons with `aria-current` on the active one. They are **not** tabs: `role="tab"` without a `tabpanel` is a broken contract.
- `.carousel-slides` is `aria-live="off"` and is switched to `polite` only on manual navigation, so autoplay does not announce every five seconds.
- Content is in the markup, not rendered by JS, so the page survives with scripting disabled.

## Carousel maintenance

Dot count must always equal slide count. Every `.carousel-slide` added to `.carousel-slides` requires a matching `.dot` button in `.carousel-dots`, or the JS will crash when it reaches the undotted slide.

## Previewing

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```
