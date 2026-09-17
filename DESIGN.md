---
name: Alexandre Boucaud — Personal Site
description: A bounded cream sheet of precise, hairline-ruled technical record, with one sage accent and thirteen photographs from Cerro Pachón.
colors:
  observatory-sage: "#3d6b57"
  sage-mid: "#8ab09a"
  paper: "#f4f2ee"
  card: "#ffffff"
  hairline: "#deded8"
  ink: "#1c1c1c"
  muted-ink: "#5c5c5c"
  subtle-ink: "#888888"
  backdrop-umber: "#2a1f18"
  photo-ground: "#111111"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(1.9rem, 4.5vw, 2.7rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 3.5vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  nav:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.01em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.9675rem"
    fontWeight: 300
    lineHeight: 1.85
    letterSpacing: "normal"
  body-small:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "0.2em"
rounded:
  none: "0"
  chip: "3px"
  panel: "4px"
  full: "50%"
spacing:
  hairline: "1px"
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  "2xl": "52px"
  "3xl": "80px"
  gutter-desktop: "40px"
  gutter-mobile: "20px"
components:
  page-sheet:
    backgroundColor: "{colors.paper}"
    width: "960px"
  nav-link:
    textColor: "{colors.muted-ink}"
    typography: "{typography.nav}"
  nav-link-hover:
    textColor: "{colors.observatory-sage}"
  project-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.none}"
    padding: "28px"
  project-link:
    textColor: "{colors.observatory-sage}"
    typography: "{typography.label}"
    padding: "0 0 2px"
  side-tag:
    backgroundColor: "{colors.card}"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.chip}"
    padding: "3px 9px"
  edu-year:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.observatory-sage}"
    rounded: "{rounded.chip}"
    padding: "2px 7px"
  contact-panel:
    rounded: "{rounded.panel}"
  contact-link-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.observatory-sage}"
    padding: "14px 12px"
  contact-link-row-hover:
    backgroundColor: "{colors.card}"
  carousel-btn:
    backgroundColor: "rgba(0, 0, 0, 0.25)"
    textColor: "rgba(255, 255, 255, 0.85)"
    rounded: "{rounded.full}"
    width: "36px"
    height: "36px"
  carousel-btn-hover:
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  carousel-dot:
    backgroundColor: "rgba(255, 255, 255, 0.35)"
    rounded: "{rounded.full}"
    size: "5px"
  carousel-dot-active:
    backgroundColor: "rgba(255, 255, 255, 0.9)"
---

# Design System: Alexandre Boucaud — Personal Site

## Overview

**Creative North Star: "An Engineer's Homepage"**

This is the homepage of someone who builds things that have to work. Everything on the page is a fact — an institution, a date, an experiment, a student, a photograph taken on a mountain — and the design's whole job is to present those facts at maximum density without ever raising its voice. Credibility comes from precision: hairline rules that actually align, a single accent used sparingly enough that it still means something, metadata set small and confidently rather than padded out to look important. Nothing here persuades. It states, accurately, and gets out of the way.

The structure is a bounded cream sheet, never wider than 960px, sitting on a dark ground. Inside it, two paper tones alternate to separate sections, and every division is drawn with a 0.5px line rather than a shadow or a gap. Density is deliberately high — the hero sidebar packs six labelled blocks into a column narrower than the bio beside it — but line-height stays generous (1.7–1.85) so the page reads calm rather than cramped. Thirteen first-hand photographs from the Vera C. Rubin Observatory sit in a full-width band at the page's midpoint; they are the one place the system stops being quiet.

**One direction is deliberately unsettled.** The display face is currently DM Serif Display, which pulls the page toward *academic paper* rather than *engineer's homepage*. That serif is recorded here as the current implementation, not as a settled decision — it is the one token a future pass is expected to revisit. Everything else in this file is the standard.

**Key Characteristics:**

- A bounded 960px sheet on a dark ground — never full-bleed
- Two paper tones (`#f4f2ee` recessed, `#ffffff` raised) doing all the sectioning
- 0.5px hairline rules as the only structural device
- Completely flat: one shadow exists in the entire system
- One accent, used only on links, tags, and live actions
- Tiny wide-tracked uppercase labels as the connective tissue
- Square corners by default; radius is the exception, never the rule
- Real photography given a full-width band and honest credits

## Colors

A muted, warm-neutral palette: two paper tones, a four-step grey ink scale, and exactly one chromatic accent. There is no second accent, no semantic color set, and no dark mode.

### Primary

- **Observatory Sage** (`#3d6b57`): The only chromatic color in the system. It marks every link, every category tag above a project name, the eyebrow under the name, the education years, the 2px bar across the very top of the page, and emphasized names inside the bio. It is never a background fill and never sits behind text.
- **Sage Mid** (`#8ab09a`): The accent at half strength, used exclusively for structural marks that shouldn't read as links — the 2.5px left rule on each sidebar block, and the underline beneath project links.

### Neutral

- **Paper** (`#f4f2ee`): The recessed surface. The page sheet itself, the hero sidebar, the education-year chips, and contact rows at rest.
- **Card** (`#ffffff`): The raised surface. Nav, hero bio panel, alternating sections, project cards, specialty tags, and contact rows on hover.
- **Hairline** (`#deded8`): Every border, every rule, every divider in the system. Also the grid background that shows through as 1px seams between project cards.
- **Ink** (`#1c1c1c`): Headings, names, and any value the visitor is meant to actually read as content.
- **Muted Ink** (`#5c5c5c`): Body copy, descriptions, and nav links at rest. The default text color on `body`.
- **Subtle Ink** (`#888888`): Micro-labels, years, venues, co-supervisor notes, footer. Everything that is context rather than content.

### Tertiary

- **Backdrop Umber** (`#2a1f18`): The dark ground behind the sheet, visible as margin on wide screens.
- **Photo Ground** (`#111111`): The carousel's base color, seen only while an image loads.

### Named Rules

**The One Accent Rule.** Observatory Sage is the system's only chromatic color, and it appears only on things that are links, tags, or live actions. It never fills a surface, never backs a block of text, and never gets a companion accent. Its scarcity is what makes it legible.

**The Two Paper Rule.** Only two surfaces exist: Paper (recessed) and Card (raised). Sections separate by alternating between them — never by tinting, never by adding a third tone. If a new surface seems necessary, the layout is wrong.

## Typography

**Display Font:** DM Serif Display (with Georgia, serif) — *self-hosted woff2, 400 roman only; no italic is shipped*
**Body Font:** Space Grotesk (with system-ui, sans-serif) — *self-hosted woff2, variable 300–500*

**Character:** A high-contrast serif for names and titles against a geometric grotesk with slightly odd, technical letterforms for everything else. The grotesk does the real work; it carries body copy at 300 and every micro-label at 500. Both faces are self-hosted as woff2 with a Latin-only unicode-range — the page makes no external font requests.

**Note:** the DM Serif Display pairing is under review (see Overview). Treat the *roles* below as settled and the display family itself as provisional.

### Hierarchy

- **Display** (DM Serif Display 400, `clamp(1.9rem, 4.5vw, 2.7rem)`, 1.5): The person's name in the hero, and nothing else.
- **Headline** (DM Serif Display 400, `clamp(1.5rem, 3.5vw, 1.875rem)`, inherited 1.7): Section titles. The contact tagline is the same face one step larger (`clamp(1.6rem, 3.5vw, 2.1rem)`) at a tighter 1.25.
- **Nav** (DM Serif Display 400, `1.15rem`, `0.01em`): Navigation links only — the one place the serif appears at small size.
- **Title** (Space Grotesk 500, `1rem`, 1.3): Project names.
- **Body** (Space Grotesk 300, `0.9675rem`, 1.85, max-width 420px): The hero bio. The most generous line-height in the system, and the only text with a hard measure.
- **Body Small** (Space Grotesk 300–400, `0.78125rem`–`0.8125rem`, 1.5–1.75): Project descriptions, talk titles, sidebar values.
- **Label** (Space Grotesk 500, `0.5rem`–`0.625rem`, letter-spacing `0.14em`–`0.22em`, uppercase, Subtle Ink): Every metadata label on the page.

### Named Rules

**The Micro-Label Rule.** Metadata labels are always Space Grotesk 500, at or below `0.625rem`, uppercase, tracked at `0.14em` or wider, in Subtle Ink or the accent. The wide tracking is what makes type this small legible — never set a label at small size without it. The tracking scale is deliberate: `0.22em` for the tightest-set keys (sidebar keys, hero eyebrow), `0.2em` for tags and subheads, `0.14em` for section meta and photo captions.

**The Serif Is For Names Rule.** The display face appears only on proper titles: the person's name, section titles, the contact tagline, and nav links. It never sets body copy, never sets a label, and never appears below `1.15rem`.

**The No Italic Accent Rule.** Never italicise a word inside a heading or tagline for emphasis — not in the accent colour, not in the display face, not anywhere. The accented italic word in an otherwise roman heading is a generated-site tell, and no italic display face is shipped precisely so the pattern cannot return. Emphasis in this system comes from size, weight, and the accent colour on whole elements, never from a decorative word swap.

**The Sub-Rem Rule.** Almost nothing on this page is set at or above `1rem`. Body copy runs at `0.9675rem` and supporting text at `0.6875rem`–`0.8125rem`. The smallness is the aesthetic — it reads as technical documentation rather than marketing. Preserve it; do not "fix" the page by scaling type up.

## Layout

**The sheet.** A single centered column capped at 960px (`.site`), sitting on Backdrop Umber. The sheet is the page — content never breaks out of it and nothing is full-bleed beyond it.

**Vertical rhythm.** Sections are separated by 0.5px bottom borders and alternate between Paper and Card. Standard section padding is `52px 40px` on desktop, `36px 20px` below 700px. The hero is the one exception at `80px 40px 52px` — the extra top space is the page's only real breathing room.

**Hero.** A two-column grid at `1.55fr 1fr`: the bio panel (Card) on the left with a 0.5px right border, the metadata sidebar (Paper) on the right. The sidebar is a vertical stack of blocks at `24px` gaps, each with a 2.5px Sage Mid left rule, `10px` left padding, and a 0.5px bottom hairline that the last block drops.

**Projects.** A `1fr 1fr` grid with a `1px` gap over a Hairline background — the gap *is* the divider. Cards are plain white blocks at `28px` padding with no border of their own.

**Teaching.** A `72px 1fr auto` grid per row — year, title, venue — baseline-aligned, `16px` vertical padding, each row closed by a 0.5px bottom hairline with a matching top hairline on the first row of each list.

**Carousel.** Full sheet width, `340px` tall on desktop, `220px` below 700px.

**Responsive.** The structural breakpoint is `700px`. Below it the hero collapses to a single column (the bio's right border becomes a bottom border), projects go one-up, section headers wrap so the title takes its own line above the rule and meta label, talk rows drop to `48px 1fr` with the venue moving beneath the title rather than disappearing, contact rows stack and flip from vertical to horizontal (label left, value right), gutters go from `40px` to `20px`, nav links compact, and the carousel's arrow buttons give way to swipe.

Four smaller queries refine that: `380px` tightens the nav for narrow phones; `(max-height: 500px) and (orientation: landscape)` cuts vertical padding and the photo band to `200px` so short viewports show content instead of margin; `(pointer: coarse)` takes the carousel arrows to `44px`; `(hover: none)` supplies `:active` feedback where hover can never fire.

**The No Lost Content Rule.** Nothing is removed from a narrow screen because it does not fit. Content that cannot sit side by side stacks, wraps, or moves below its heading — `display: none` is for a control that has been replaced by a better one at that size, never for a fact the visitor came to read.

### Named Rules

**The Bounded Sheet Rule.** Content is capped at 960px and the page is always a finite object on a ground, never an edge-to-edge website. Any new section lives inside the sheet.

**The Hairline Rule.** Every structural division in the system is a 0.5px line in Hairline — section borders, card seams, sidebar dividers, table rows. Not 1px, not a shadow, not a color change alone.

## Elevation & Depth

**The system is flat.** There is exactly one shadow in the entire stylesheet: `0 0 80px rgba(0, 0, 0, 0.15)` around the page sheet, which exists only to lift the sheet off its dark ground. No card, button, chip, panel, nav, or hovered element casts a shadow, and none should. Depth is communicated by the two paper tones and by 0.5px lines — that is the whole vocabulary.

The one blur in the system is `backdrop-filter: blur(4px)` on the carousel arrows, which is a legibility device over photography rather than an elevation effect.

### Shadow Vocabulary

- **Page lift** (`box-shadow: 0 0 80px rgba(0, 0, 0, 0.15)`): The sheet against the ground. The only shadow. Never reuse this value elsewhere.

### Named Rules

**The Flat-Except-the-Sheet Rule.** Nothing casts a shadow except the page sheet itself — not at rest, not on hover, not on focus. If an element needs to separate from its neighbor, give it a 0.5px hairline or move it to the other paper tone.

## Shapes

Square by default. The page, its sections, the hero panels, the project cards, the contact rows, and the photo band all have hard 90° corners, and the 1px seams between project cards depend on that squareness to read as a grid.

Radius appears in exactly three places, each a deliberate exception: `3px` on the two small chip forms (specialty tags, education years), `4px` on the contact panel that wraps the link rows, and `50%` on the circular carousel controls and dots.

Borders are `0.5px` everywhere except one: the `2.5px` Sage Mid left rule that marks each sidebar block, and the `2px` full-width accent bar at the very top of the page.

### Named Rules

**The Square-By-Default Rule.** New surfaces get `0` radius. A radius above `4px` does not exist in this system, and rounding a card or a section would break the seam grid that the project layout depends on.

## Components

This site has no general-purpose button. The only true buttons are the carousel controls; everything else interactive is a link.

### Navigation

- **Style:** A centered horizontal list on Card with a 0.5px bottom border, `22px 40px` padding, `52px` between items.
- **Typography:** Display face at `1.15rem`, Muted Ink.
- **Hover:** Color shifts to Observatory Sage over `0.15s`. No underline, no opacity change — nav opts out of the global link fade.
- **Mobile:** Below 700px the same three links stay inline, tightened to `26px` gaps at `1.02rem` (`18px` / `0.95rem` below 380px), with `12px` of vertical padding giving each link a ~52px tall tap target. No menu button, no drawer, no JS — the link set is small enough to stay visible at every width.

### Links

- **Default:** Observatory Sage, no underline, `opacity 0.15s` transition; hover drops to `0.7` opacity.
- **In body copy:** Muted Ink with a 0.5px Subtle Ink underline; on hover both text and underline become Observatory Sage. This is the only underlined link style in the system.
- **Project links:** Label typography in Observatory Sage over a 0.5px Sage Mid underline, `2px` of padding beneath the text.

### Cards / Containers

- **Corner Style:** Square (`0`).
- **Background:** Card on the Hairline grid.
- **Shadow Strategy:** None — see Elevation & Depth.
- **Border:** None of their own; the 1px grid gap supplies every seam.
- **Internal Padding:** `28px`.
- **Contents in order:** accent category tag (Label, `0.5625rem`, `0.2em`), project name (Title), description (Body Small), then a `12px`-gapped row of project links.

### Chips

Two variants, both `3px` radius with a 0.5px Hairline border:

- **Specialty tag:** Card background, Muted Ink, `0.625rem`, `3px 9px`.
- **Education year:** Paper background, Observatory Sage, `0.5rem` at `0.16em` tracking, `2px 7px`, pushed right with `margin-left: auto`.

### Contact Panel

A single bordered container at `4px` radius with `overflow: hidden`, holding equal-width rows divided by 0.5px verticals. Each row stacks a Label over the value in Observatory Sage, sits on Paper at rest, and lifts to Card on hover over `0.15s`. Below 700px it becomes a vertical stack with horizontal rows and 0.5px horizontal dividers.

### Photo Carousel (signature component)

The one place the system is loud, and the component the whole page is built around.

- **Frame:** Full sheet width, `340px` / `220px` tall, Photo Ground base, 0.5px bottom border.
- **Slides:** Absolutely stacked, cross-faded on `opacity 1.0s ease` with a z-index swap during the transition so the outgoing slide never flashes above the incoming one. Auto-advances every `5000ms`, pausing on hover, on touch, on a hidden tab, and entirely under `prefers-reduced-motion`.
- **Loading:** Slides carry `data-bg` rather than a background image; only the current slide and its two neighbours are fetched, and viewports at or below `700px` are served the `img/small/` copies. The first slide keeps a small inline background so the band still renders without JS.
- **Scrim:** Every slide carries a bottom-up gradient (`rgba(0,0,0,0.55)` → `rgba(0,0,0,0.15)` at 40% → transparent at 70%) so captions stay legible over any image.
- **Caption:** Bottom-left, `0.5625rem` uppercase at `0.14em` in `rgba(255,255,255,0.85)`, no text-shadow — the scrim does that job. Captions carry photo credits and are content, not decoration.
- **Controls:** `36px` circles at `rgba(0,0,0,0.25)` with a 0.5px `rgba(255,255,255,0.3)` border and `blur(4px)` backdrop; hover deepens to `0.5` and brightens the border. Hidden below 700px.
- **Dots:** A `5px` circle at `rgba(255,255,255,0.35)`, active at `0.9`, drawn as a pseudo-element centred inside a `16x34` transparent button — the mark stays small, the tap target does not.
- **Swipe:** Horizontal drags past `40px` move one slide; anything more vertical than horizontal is left to the page scroll.
- **Invariant:** the number of dots must equal the number of slides, or navigation breaks.

### Page Backdrop (provisional)

`body::before` paints `img/pachon.webp` fixed and cover-sized at `0.35` opacity over Backdrop Umber, so the sheet appears to float over a dimmed photograph of Cerro Pachón. **Recorded as current state, not as a rule** — future work may keep, change, or remove it without violating this system.

## Do's and Don'ts

### Do:

- **Do** keep every new surface inside the 960px sheet and give it square corners.
- **Do** separate things with a 0.5px Hairline rule or by switching between the two paper tones.
- **Do** set every metadata label in Space Grotesk 500, uppercase, `0.625rem` or smaller, tracked at `0.14em` or wider.
- **Do** reserve Observatory Sage for links, category tags, and live actions — and keep it rare enough to still read as a signal.
- **Do** use the display face for names and section titles only.
- **Do** give real photographs their captions and credits verbatim, always over the bottom scrim.
- **Do** keep transitions short and colorless — `0.15s` for links and hovers, `0.2s` for control backgrounds. The only slow motion in the system is the carousel's 1s cross-fade.
- **Do** match any new dot to a new slide, one for one.

### Don't:

- **Don't** add a shadow to anything. One shadow exists and it belongs to the page sheet.
- **Don't** introduce a second accent color or a semantic color set.
- **Don't** fill a surface with Observatory Sage or set text on top of it.
- **Don't** round a card, section, or panel beyond the established `3px` / `4px` exceptions.
- **Don't** scale the type up to make the page feel friendlier — the sub-`1rem` scale is the aesthetic.
- **Don't** use a 1px border where the system uses 0.5px.
- **Don't** set body copy or labels in the display face.
- **Don't** treat the photographs as decoration that can be cropped, swapped for stock, or stripped of credits.
- **Don't** hide content on small screens to make a layout fit. Stack it, wrap it, or move it under its heading instead.
- **Don't** italicise an accent word inside a heading or tagline. No italic display face is shipped; see The No Italic Accent Rule.
