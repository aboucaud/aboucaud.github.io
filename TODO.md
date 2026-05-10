# Website improvement ideas

## Content

### About section
- [ ] Refresh the bio paragraph (current one is ~7 years old)
- [ ] Update the job title / tagline (e.g. reflect current focus areas)
- [ ] Replace Twitter link with Mastodon or Bluesky (or remove)
- [x] Add an ORCID link — 0000-0001-7387-2633
- [ ] Add a CV/résumé download link (PDF)

### Experience section
- [ ] Add any positions, projects or role changes since 2019

### Skills section
- [ ] Update the tools/frameworks listed (Keras→PyTorch, add JAX, etc.)
- [ ] Replace icon-based skills display with something more readable (icons for devicons/simple-line-icons are barely recognisable)
- [ ] Consider grouping skills differently (e.g. Scientific computing / MLOps / Infrastructure)

### New sections to consider
- [ ] **Publications** — link to ADS/arXiv papers, maybe the top 3–5 with abstracts
- [ ] **Open-source projects** — highlight key GitHub repos with one-liner descriptions
- [ ] **Talks & conferences** — reuse the existing Tutorials section or expand it
- [ ] **Blog / Notes** — short technical posts (can be hosted on the same domain via a separate directory)

---

## Tech stack & tooling

### Replace the build system
- [x] Drop the vendored libraries (Bootstrap 4, jQuery, Font Awesome 4, Devicons) — removed in redesign
- [ ] Adopt a static site generator to separate content from markup:
  - **Astro** — modern, component-based, outputs zero-JS by default, excellent for content sites
  - **Eleventy (11ty)** — minimal, fast, pure HTML output, very low learning curve
  - **Hugo** — single binary, fast builds, good for CV-style sites with YAML front matter
- [ ] Move content to structured data (YAML/JSON/TOML) so updating the CV does not require touching HTML

### CSS
- [x] Remove Bootstrap dependency — replaced with ~200 lines of modern CSS (Grid/Flexbox + custom properties)
- [x] Self-hosted fonts — Fraunces + IBM Plex family downloaded as woff2, zero Google Fonts requests
- [x] Dark theme — full dark design, no `prefers-color-scheme` toggle yet (could add later)
- [x] Mobile-first responsive layout

### JavaScript
- [x] Remove jQuery and jquery-easing — `scroll-behavior: smooth` in CSS + 40-line vanilla JS

### Performance & SEO
- [x] Open Graph meta tags — og:title, og:description, og:image, og:type, twitter:card
- [x] Structured data — `Person` JSON-LD schema in `<head>`
- [ ] Optimise or replace `profile.png` — serve WebP with `<picture>` fallback
- [x] `sitemap.xml` and `robots.txt` added

### Accessibility
- [x] `aria-label` on all social links
- [x] Dark theme has strong contrast ratios (text on dark background)
- [x] Keyboard navigation works (standard anchor links, no JS traps)

### Deployment
- [x] GitHub Actions workflow — auto-deploys `master` → `gh-pages` on push
- [ ] Consider adding a custom domain if not already set up
