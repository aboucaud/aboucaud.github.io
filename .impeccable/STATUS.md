# Status — picking this back up

Written 2026-09-18. Everything below was verified by measurement, not assumed.

## Where things stand

**Live and merged.** `master` is at `ab6de55`, deployed to `gh-pages`, site returns 200.
PRs #4 (nine design passes) and #5 (photograph re-encoding) are both merged.

**Not pushed.** Branch `feat/landmarks`, three commits ahead of `master`:

| Commit | |
|---|---|
| `00d94fa` | harden — `<main>` landmark, both unnamed sections named, skip link |
| `35ff2dd` | polish — print stylesheet, forced-colors accent bar |
| `d40952e` | fix — carousel caption/dot collision |

Working tree is clean apart from `.impeccable/critique/` (the critique snapshot, untracked).

**To ship these:** `git push -u origin feat/landmarks` then open a PR against `master`.
Note the repo allows **squash merge only** — merge commits and rebase are disabled — so write a real squash message or the nine-paragraph commit bodies are lost.

## Numbers as they stand

| | |
|---|---|
| Mobile arrival | ~249 KB (was 10.4 MB) |
| Desktop arrival | ~692 KB |
| Contrast | 28 text roles, all pass AA, lowest 4.74:1 |
| Overflow | none at 320 / 390 / 768 / 900 / 1280 / 1600 |
| Zoom | clean at 200%, 400%, and text-only 200% |
| CLS | 0.0437 desktop, 0 mobile |
| FCP / LCP | 36 ms / 48 ms |
| Focus rings | 44 / 44 focusable elements |
| Works without JS | yes — content is in the markup |
| Audit score | 18/20 (was 16/20) |
| Critique score | 23/36, snapshot in `.impeccable/critique/` |

## Open work, in the order I'd do it

### 1. [P1] The accent colour is ambiguous about what is clickable

Verified: `.hero-bio` contains **0 anchors** and **2 `<strong>`**, both coloured `var(--accent)` — the exact link colour. Forty pixels right, the identical institution strings in the sidebar *are* links.

- `css/resume.css:268` and `:273` — `.hero-bio a` is **dead CSS** (no anchor exists in the bio)
- `css/resume.css:626` — `.talk-title:hover { color: var(--accent) }` applies to the whole span, so hovering the two link-free Teaching rows (*Modélisation et Machine Learning*, *Machine learning fundamentals*) gives full link feedback and clicking does nothing
- `DESIGN.md` **contradicts itself**: the One Accent Rule says links/tags/actions only, while the Observatory Sage entry three lines above lists "emphasized names inside the bio". The implementation followed the looser sentence. Resolve in favour of the rule.

Fix: make them links (`apc.u-paris.fr` and `in2p3.cnrs.fr` are already in the sidebar) or drop the colour and carry emphasis with weight alone; delete `.talk-title:hover` and the dead `.hero-bio a`.
Command: `/impeccable clarify`

### 2. [P1] The heaviest interactive object serves the stated non-goal

`PRODUCT.md` says contact is explicitly **not** the success metric, yet the contact panel owns a full-width bordered block, four hover-lit cells and the final impression. The project links that *are* the metric are `--t-label` (11px uppercase) — the smallest type on the page.

This is a real layout decision, not a tidy-up: it changes what the page ends on.
Command: `/impeccable layout`

### 3. [P2] The one uncopyable claim is styled like everything else

The Chile sentence ("In 2024–2025 I spent a year on-site…") is the last bio line at body size in muted ink, **missing its terminal period**, above ~270px of empty white in the hero panel. Its evidence — the photographs — is 400px further down in a band with no visible name.
Command: `/impeccable shape`

### 4. [P2] Link labels don't survive being read out of context

Four project links are labelled "Website". A screen-reader user hears "Website, Website, Website, Website". The photo band has an `aria-label` but no visible heading — the only region without a name a sighted visitor can read.

### 5. Cheap corrections, no judgement needed

- `.hero-bio` is one `<p>` using `<br><br>` for a paragraph break → two `<p>` (it prints and reads as one run-on paragraph)
- Missing terminal period on "(see photos below)" — the only sentence without one
- **Desktop fetches the first slide twice**: `index.html:136` inlines `img/small/rubin-twilight.webp` as the no-JS fallback, then `js/main.js:34` resolves to the full-size file and swaps it. ~10 KB wasted per desktop visit
- `goTo()` discards clicks for the full 1000 ms fade with no acknowledgement — at minimum move the dot's active class immediately
- `announce()` (`js/main.js:132`) sets `aria-live="polite"` on first manual navigation and **never sets it back**, so every later unattended 5-second change is announced — the opposite of what the code's own comment intends
- Caption punctuation drifts between `·` and ` - `
- `img/profile.png` — 910 KB, in the repo, referenced nowhere (already excluded from deploy)

## Decisions already made — don't re-litigate

- **Display face: IBM Plex Serif**, chosen from eleven candidates rendered on the real page. **Spectral 400** is the vetted alternative, with switch instructions in the comment above the `@font-face` block in `css/resume.css`.
- **Type: seven sizes, 11px floor, 16px body.** The old *Sub-Rem Rule* that protected 8px text was deliberately replaced.
- **No italic display face is shipped**, deliberately — the accented-italic heading word was called out as an AI-slop tell.
- **No category tags above project names** — cards open on the name.
- **Content lives in the markup**, not JS. `js/data.js` was deleted. The cost is editing a name where it appears (twice).
- **Two image tiers**, both encoded from the camera originals: `img/` at 1920px q86, `img/small/` at 1000px q78. **Never derive `small/` from `img/`** — that double-compresses.
- **No dark mode**, deliberate. It is the single thing capping the audit's Theming score at 3/4.
- **The backdrop photo is provisional** — `DESIGN.md` says so. It reads well at 1728px and poorly at 1280px. Worth a decision rather than drift.

## Traps worth knowing

- **The detector is not media-aware.** It reads `@media print { padding: 0 }` as though it applied globally, producing four phantom `cramped-padding` findings. The in-page detector, reading live computed styles, reports zero. Of its 7 findings, **5 are false** — also `marketing-buzzword` on "next-generation sky surveys" (standard astronomy terminology; the scanner even truncated "deblending" to "lending" building its snippet).
- **Subagents share the scratchpad.** A critique subagent overwrote a verification script of mine with its own version on a different port, silently breaking a later run. Namespace scripts if you run them again.
- **Squash-only merges break stacked PRs.** After #4 squashed, its commits were no longer ancestors of `master`, so the stacked branch had to be rebased with `git rebase --onto origin/master <old-base>` before it would show a clean diff.
- **`git add -A` is dangerous here.** It once swept 162 files from `.agents/`, `.codex/`, `.gemini/`, `.opencode/` into a commit. Those are now gitignored, so the trap is closed — but stage explicitly anyway.
- **`du` is shell-aliased to `dust`**, which isn't installed. Use `python3` or `stat` for sizes.
- **Headless Chrome ignores `--window-size` below ~500px** and `--disable-javascript` is not honoured. Use CDP `Emulation.setDeviceMetricsOverride` and `setScriptExecutionDisabled` instead, and `Emulation.setFocusEmulationEnabled` for anything involving focus.
- **`sips --cropOffset` crops from the centre**, not the offset. Use CDP clips in document coordinates with `captureBeyondViewport: true`.

## How to verify a change

```bash
# serve
python3 -m http.server 8765

# headless Chrome with CDP (Node 26 has a built-in WebSocket — no deps needed)
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --remote-debugging-port=9222 \
  --user-data-dir=/tmp/chrome-prof about:blank

# always disable cache: a cache-buster on the HTML does not bust the linked CSS
# Network.setCacheDisabled { cacheDisabled: true }

# detector
sh .claude/skills/impeccable/scripts/impeccable detect index.html css/resume.css js/main.js
```

Check after any visual change: overflow at 320/390/768/1280, dots == slides (13), contrast of every text role against its **painted** background, and — since it has broken twice — that no caption collides with the dot rail at any width.

## Reference

- `PRODUCT.md` — audiences, what success is, what must never be fabricated
- `DESIGN.md` — the visual system and its 19 named rules
- `.impeccable/design.json` — machine-readable sidecar
- `.impeccable/critique/2026-09-17T20-46-22Z__index-html.md` — the full critique
- `CLAUDE.md` — the accessibility contract and asset rules for the next session
