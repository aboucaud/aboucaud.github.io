# Alexandre Boucaud — Personal Website

Single-page portfolio and resume hosted on [GitHub Pages](https://aboucaud.github.io/).

Originally based on the [StartBootstrap-resume template](https://github.com/BlackrockDigital/startbootstrap-resume) (MIT license), now entirely redesigned.

## Technology choices

**No build tooling.** The site is plain HTML, CSS, and vanilla JavaScript — no bundler, no framework, no preprocessor. Edits go directly to `index.html` and `css/resume.css`.

**Self-hosted fonts** (`fonts/`), served as woff2 to avoid external requests:

- [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — display headings, italic accents
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — body and UI (weights 300 / 400 / 500)

**Single stylesheet** (`css/resume.css`) using CSS custom properties for the color palette. No utility-class framework.

**Vanilla JS** (`js/main.js`) — a single IIFE driving the photo carousel: auto-advance, prev/next buttons, dot navigation, and pause-on-hover.

**GitHub Actions** (`.github/deploy.yml`) auto-deploys the `master` branch to `gh-pages` on every push.

## Development

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

To publish, push or merge to `master`. The Actions workflow handles the rest.
