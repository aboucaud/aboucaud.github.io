---
name: Alexandre Boucaud — Personal Site
description: A bounded cream sheet of precise, hairline-ruled technical record, with one sage accent and thirteen photographs from Cerro Pachón.
colors:
  observatory-sage: "#3d6b57"
  sage-mid: "#8ab09a"
  paper: "#f4f2ee"
  card: "#ffffff"
  hairline: "#deded8"
  ink: "#1b1917"
  muted-ink: "#4d4944"
  subtle-ink: "#6f6b64"
  backdrop-umber: "#2a1f18"
  photo-ground: "#111111"
  scrim: "rgba(0, 0, 0, 0.65)"
typography:
  display:
    fontFamily: "IBM Plex Serif, Plex Fallback, Georgia, serif"
    fontSize: "clamp(2.1rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "normal"
  headline:
    fontFamily: "IBM Plex Serif, Plex Fallback, Georgia, serif"
    fontSize: "clamp(1.6rem, 3.5vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "Space Grotesk, Grotesk Fallback, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Space Grotesk, Grotesk Fallback, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: "normal"
  supporting:
    fontFamily: "Space Grotesk, Grotesk Fallback, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  small:
    fontFamily: "Space Grotesk, Grotesk Fallback, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Space Grotesk, Grotesk Fallback, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
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
    typography: "{typography.title}"
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

**The display face is settled.** IBM Plex Serif replaced DM Serif Display, whose high stroke contrast pulled the page toward *editorial magazine* rather than *engineer's homepage*. Plex Serif keeps the two-voice structure — a serif for names, a grotesque for everything else — while trading expressive contrast for an even, engineered stroke. Spectral 400 is a vetted alternative, recorded in the stylesheet, if the page should ever read more elegantly again.

**Key Characteristics:**

- A bounded 960px sheet on a dark ground — never full-bleed
- Two paper tones (`#f4f2ee` recessed, `#ffffff` raised) doing all the sectioning
- 0.5px hairline rules as the only structural device
- Completely flat: one shadow exists in the entire system
- One accent, used only on links, tags, and live actions
- Tiny wide-tracked uppercase labels as the connective tissue, at one size and one tracking
- Square corners by default; radius is the exception, never the rule
- Real photography given a full-width band and honest credits

## Colors

A muted, warm-neutral palette: two paper tones, a four-step grey ink scale, and exactly one chromatic accent. There is no second accent, no semantic color set, and no dark mode.

### Primary

- **Observatory Sage** (`#3d6b57`): The only chromatic color in the system. It marks every link, the role line under the name, the education years, the 2px bar across the very top of the page, and emphasized names inside the bio. It is never a background fill and never sits behind text.
- **Sage Mid** (`#8ab09a`): The accent at half strength, used exclusively for the decorative 2.5px left rule on each sidebar block. At 2.1:1 it is deliberately soft: it is ornament, never an affordance, and nothing depends on seeing it. Anything a visitor must act on uses full-strength Observatory Sage.

### Neutral

- **Paper** (`#f4f2ee`): The recessed surface. The page sheet itself, the hero sidebar, the education-year chips, and contact rows at rest.
- **Card** (`#ffffff`): The raised surface. Nav, hero bio panel, alternating sections, project cards, specialty tags, and contact rows on hover.
- **Hairline** (`#deded8`): Every border, every rule, every divider in the system. Also the grid background that shows through as 1px seams between project cards.
- **Ink** (`#1b1917`): Headings, names, and any value the visitor is meant to actually read as content. 15.7:1 on paper.
- **Muted Ink** (`#4d4944`): Body copy, descriptions, and nav links at rest. The default text color on `body`. 8.0:1 on paper.
- **Subtle Ink** (`#6f6b64`): Micro-labels, years, venues, co-supervisor notes, footer. Everything that is context rather than content. 4.7:1 on paper — the quietest the system goes.

### Tertiary

- **Backdrop Umber** (`#2a1f18`): The dark ground behind the sheet, visible as margin on wide screens.
- **Photo Ground** (`#111111`): The carousel's base color, seen only while an image loads.
- **Scrim** (`rgba(0, 0, 0, 0.65)`): The bottom of the gradient over every photograph. Deep enough that an opaque white caption clears 4.5:1 even over a white image.

### Named Rules

**The One Accent Rule.** Observatory Sage is the system's only chromatic color, and it appears only on things that are links, tags, or live actions. It never fills a surface, never backs a block of text, and never gets a companion accent. Its scarcity is what makes it legible.

**The Readable Ink Rule.** Every ink level clears 4.5:1 against both paper and card — `15.7 / 8.0 / 4.7`. The ink ramp is warmed slightly toward the paper rather than left pure grey, so text does not read cold against a warm sheet. A fourth, lighter grey does not get added: if something needs to be quieter than Subtle Ink, it gets smaller, lighter in weight, or moved — not fainter. Colour is never the only thing separating two levels; size, weight, case, and tracking already do that work.

**The Two Paper Rule.** Only two surfaces exist: Paper (recessed) and Card (raised). Sections separate by alternating between them — never by tinting, never by adding a third tone. If a new surface seems necessary, the layout is wrong.

## Typography

**Display Font:** IBM Plex Serif (with a metric-matched Georgia fallback) — *self-hosted woff2, 400 roman only; no italic is shipped*
**Body Font:** Space Grotesk (with system-ui, sans-serif) — *self-hosted woff2, variable 300–500*

**Character:** A low-contrast, evenly-stroked serif for names and titles against a geometric grotesk with slightly odd, technical letterforms for everything else. The serif is calm rather than expressive — it gives the name authority without making the page look like a magazine. The grotesk does the real work; it carries body copy at 300 and every micro-label at 500. Both faces are self-hosted as woff2 with a Latin-only unicode-range — the page makes no external font requests.

**Fallbacks are metric-matched.** Measured at 100px, IBM Plex Serif renders at 93.7% of Georgia's width and Space Grotesk at 104.6% of Arial's. Two `@font-face` rules carry those as `size-adjust`, so the swap from fallback to webfont does not reflow the page.

### Hierarchy

Seven sizes for the whole page, declared once as `--t-*` tokens. No role sets a size of its own.

| Role | Token | Size | Weight | Line height | Used by |
|---|---|---|---|---|---|
| Display | `--t-display` | `clamp(2.1rem, 5vw, 3rem)` | 400 | 1.12 | the name, and nothing else |
| Headline | `--t-headline` | `clamp(1.6rem, 3.5vw, 2rem)` | 400 | 1.15 | section titles, contact tagline |
| Title | `--t-title` | `1.125rem` (18px) | 500 / 400 | 1.3 / 1.4 | project names; nav links, in the serif |
| Body | `--t-body` | `1rem` (16px) | 300 | 1.75 | the hero bio, at a 57-character measure |
| Supporting | `--t-supporting` | `0.875rem` (14px) | 300–400 | 1.55–1.65 | project descriptions, talk titles, sidebar values, degrees |
| Small | `--t-small` | `0.75rem` (12px) | 300–400 | 1.4–1.65 | years, venues, schools, contact values, footer, photo captions |
| Label | `--t-label` | `0.6875rem` (11px) | 500 | 1.4 | every uppercase micro-label |

### Named Rules

**The Micro-Label Rule.** Metadata labels are always Space Grotesk 500, at or below `0.625rem`, uppercase, tracked at `0.14em` or wider, in Subtle Ink or the accent. The wide tracking is what makes type this small legible — never set a label at small size without it. The tracking scale is deliberate: `0.22em` for the tightest-set keys (sidebar keys, role line), `0.2em` for subheads and contact labels, `0.14em` for section meta and photo captions.

**The Name Comes First Rule.** Nothing is labelled above its own heading. A card, section, or block opens on its name — no category tag, kicker, or eyebrow sits above a heading to announce what is about to be said. The one label that reads like one, the role line under the hero name, sits *below* its heading as a subtitle, which is why it stays. A label above a heading is the clearest generated-layout tell in the set, and it almost never carries information the heading does not.

**The Serif Is For Names Rule.** The display face appears only on proper titles: the person's name, section titles, the contact tagline, and nav links. It never sets body copy, never sets a label, and never appears below `1.15rem`.

**The No Italic Accent Rule.** Never italicise a word inside a heading or tagline for emphasis — not in the accent colour, not in the display face, not anywhere. The accented italic word in an otherwise roman heading is a generated-site tell, and no italic display face is shipped precisely so the pattern cannot return. Emphasis in this system comes from size, weight, and the accent colour on whole elements, never from a decorative word swap.

**The Eleven-Pixel Floor Rule.** Nothing a visitor has to read is set below `11px`, ever — not a caption, not a year, not a footer line. The page still reads small and dense, which is the aesthetic; density is achieved with tight spacing and a restrained palette, never by shrinking type past the point where it can be read. This rule replaced an earlier one that protected sizes down to 8px, and it is not negotiable back.

**The Seven Sizes Rule.** The page has exactly seven type sizes, declared as `--t-*` tokens. A new element picks the nearest existing role; it does not introduce an eighth value. Sizes a pixel apart are not hierarchy — they are noise that reads as carelessness.

**The One Tracking Rule.** Every uppercase micro-label is tracked at `--track-label` (`0.18em`). One role, one tracking. Earlier the same label appeared at five different trackings across three sizes, which made a single idea look like five.

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

**The Stoppable Motion Rule.** Any motion that starts on its own must be stoppable by every input method — pointer, touch, and keyboard focus alike — and must stop by itself once nobody can see it, whether the tab is hidden or the band has been scrolled past. Motion a visitor cannot stop is a failure regardless of how well it is drawn; motion running where nobody is looking is waste.

**The Reduced Motion Is Not No Motion Rule.** Under `prefers-reduced-motion` the page removes *movement*, not *feedback*. The photographic cross-fade and its autoplay go; the `0.15s` and `0.2s` colour and opacity transitions on hover and focus stay, because they confirm an action rather than move anything. A blanket `transition-duration: 0.01ms !important` is not an implementation of this rule — it is the failure this rule names. Nothing in this system animates a spatial property, so there is nothing else to suppress.

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
- **Project links:** Label typography in Observatory Sage over a 0.5px underline in the same Observatory Sage, `2px` of padding beneath the text. The underline matches the text rather than sitting at half strength — outbound links are a stated product goal, so their affordance is not the faintest mark on the page.

### Cards / Containers

- **Corner Style:** Square (`0`).
- **Background:** Card on the Hairline grid.
- **Shadow Strategy:** None — see Elevation & Depth.
- **Border:** None of their own; the 1px grid gap supplies every seam.
- **Internal Padding:** `28px`.
- **Contents in order:** project name (Title), description (Body Small), then a `12px`-gapped row of project links. The card opens on the name — no label sits above it.

### Chips

Two variants, both `3px` radius with a 0.5px Hairline border:

- **Specialty tag:** Card background, Muted Ink, `0.625rem`, `3px 9px`.
- **Education year:** Paper background, Observatory Sage, `0.5rem` at `0.16em` tracking, `2px 7px`, pushed right with `margin-left: auto`.

### Contact Panel

A single bordered container at `4px` radius with `overflow: hidden`, holding equal-width rows divided by 0.5px verticals. Each row stacks a Label over the value in Observatory Sage, sits on Paper at rest, and lifts to Card on hover over `0.15s`. Below 700px it becomes a vertical stack with horizontal rows and 0.5px horizontal dividers.

### Photo Carousel (signature component)

The one place the system is loud, and the component the whole page is built around.

- **Frame:** Full sheet width, `340px` / `220px` tall, Photo Ground base, 0.5px bottom border.
- **Slides:** Absolutely stacked, cross-faded on `opacity 1.0s ease` with a z-index swap during the transition so the outgoing slide never flashes above the incoming one. Auto-advances every `5000ms`. Five conditions stop it — pointer inside, focus inside, tab hidden, band scrolled out of view, or `prefers-reduced-motion` — evaluated as one predicate rather than competing start/stop calls, so no combination can leave a timer running unattended.
- **Loading:** Slides carry `data-bg` rather than a background image; only the current slide and its two neighbours are fetched, and viewports at or below `700px` are served the `img/small/` copies. The first slide keeps a small inline background so the band still renders without JS.
- **Scrim:** Every slide carries a bottom-up gradient (`var(--scrim)` → `rgba(0,0,0,0.18)` at 40% → transparent at 70%). Sized by measurement: against a fully white photograph the caption still reads at 7:1.
- **Caption:** Bottom-left, Small (`0.75rem`) in sentence case in opaque `#ffffff`, no text-shadow — the scrim does that job. Opaque rather than translucent, because alpha would make the contrast depend on whichever photograph sits behind it. Captions carry photo credits and are content, not decoration, so they are set to be read rather than to look like labels.
- **Controls:** `36px` circles (`44px` on coarse pointers) at `rgba(0,0,0,0.25)` with a 0.5px `rgba(255,255,255,0.3)` border and `blur(4px)` backdrop; hover deepens to `0.5` and brightens the border. Hidden below 700px.
- **Accessibility:** the band is a `<section>` carrying `aria-roledescription="carousel"`; each slide is a labelled group and inactive ones are `aria-hidden`; dots are plain buttons with `aria-current`, never tabs; the slide container is `aria-live="off"` until the visitor navigates by hand.
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
- **Do** reserve Observatory Sage for links, the role line, and live actions — and keep it rare enough to still read as a signal.
- **Do** use the display face for names and section titles only.
- **Do** give real photographs their captions and credits verbatim, always over the bottom scrim.
- **Do** keep transitions short and colorless — `0.15s` for links and hovers, `0.2s` for control backgrounds. The only slow motion in the system is the carousel's 1s cross-fade.
- **Do** match any new dot to a new slide, one for one.

### Don't:

- **Don't** add a shadow to anything. One shadow exists and it belongs to the page sheet.
- **Don't** introduce a second accent color or a semantic color set.
- **Don't** fill a surface with Observatory Sage or set text on top of it.
- **Don't** round a card, section, or panel beyond the established `3px` / `4px` exceptions.
- **Don't** introduce an eighth type size, or set anything readable below `11px`. See The Seven Sizes Rule and The Eleven-Pixel Floor Rule.
- **Don't** use a 1px border where the system uses 0.5px.
- **Don't** set body copy or labels in the display face.
- **Don't** treat the photographs as decoration that can be cropped, swapped for stock, or stripped of credits.
- **Don't** hide content on small screens to make a layout fit. Stack it, wrap it, or move it under its heading instead.
- **Don't** italicise an accent word inside a heading or tagline. No italic display face is shipped; see The No Italic Accent Rule.
- **Don't** put a category tag, kicker, or eyebrow above a heading. See The Name Comes First Rule.
- **Don't** ship content that only exists once JavaScript has run. Every word belongs in the markup; scripts enhance, they do not supply.
- **Don't** let an element announce a role it does not fulfil — `role="tab"` without a `tabpanel` is worse for a screen reader than no role at all.
