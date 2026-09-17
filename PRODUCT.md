# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (confirmed):**

- **Science collaborators** — researchers and engineers from LSST / Vera C. Rubin Observatory, Euclid, AstroDeep, APC and the wider CNRS/IN2P3 network, who arrive to check who Alexandre Boucaud is before contacting, citing, or inviting him.
- **Industry / tech & AI peers** — open-source and agentic-AI practitioners arriving from GitHub, Lightcone Research, or a talk, assessing the work and the person behind it.

Both arrive already holding a name or a link; almost none arrive by search for a generic term. The visit is a verification stop, not a discovery.

**Not confirmed as primary:** prospective PhD students/postdocs and school/event organizers. The Teaching & Supervision section serves them factually, but they were not named as audiences the site is designed around. Do not reprioritize the page for them without asking.

## Product Purpose

A single-page personal site that states, accurately and quickly, what Alexandre Boucaud works on and at what level of seriousness, and routes the visitor onward to the real artifacts (projects, code, experiments, profiles).

A visit succeeds when the visitor either:

1. **forms a precise impression** — leaves knowing exactly what he does and that the work is substantial; or
2. **follows a project link** — departs for Rubin, Euclid, AstroDeep, Lightcone, or GitHub.

Notably, **contact is not the success metric.** The contact section exists and must keep working, but the site is not optimized to generate inbound email. Design decisions must not be justified by "increases conversion to contact."

## Positioning

Someone working at the genuine intersection of three things that rarely sit together in one person: **observational cosmology, production scientific software, and machine learning / agentic AI.** Not an astronomer who codes, and not an engineer attached to a science team — he leads computing and data engineering at APC, was on-site in Chile commissioning the LSST camera's filter exchange system, and builds open-source infrastructure (Lightcone Research / the ASTRA specification) for verifiable computational science.

The hands-on hardware commissioning and the agentic-AI infrastructure work are the two claims a neighboring profile could not truthfully copy. The photographs are direct evidence of the first.

## Operating Context

- A single-page static site hosted on GitHub Pages at `https://aboucaud.github.io/`, served from the `gh-pages` branch, auto-deployed from `master` by GitHub Actions.
- Sections in order: hero (bio + metadata sidebar), photo carousel, Projects & Experiments, Teaching & Supervision (incl. PhD supervision), Contact, footer.
- Content is maintained by hand by a single person, infrequently. `js/data.js` is the single source of truth for repeated personal values (name, email, institution, social links); `<head>` meta and JSON-LD are static duplicates read before JS runs.
- Visitors typically arrive from an external link (a paper, a GitHub profile, a talk, a collaboration directory) rather than from search.

## Capabilities and Constraints

- **Deployment is fixed:** the site must remain a static site deployed to GitHub Pages. That is the only locked technical constraint.
- **Stack latitude:** plain HTML / CSS / vanilla JS with no build tooling is the current implementation, but it is *not* locked. A build step (static site generator, CSS tooling) is permitted if it clearly earns its keep and still deploys statically to GH Pages. The no-build property is a convenience, not a commitment.
- No backend, no database, no forms, no analytics, no third-party runtime dependencies. Fonts are self-hosted woff2; there are no external network requests at runtime.
- Content is small and finite: four projects, five teaching entries, three PhD students, thirteen carousel photos. Any design must stay excellent at exactly this scale — it will not grow into a large archive.
- **Carousel invariant:** the number of `.dot` buttons must equal the number of `.carousel-slide` elements, or the JS fails.
- **Undecided (do not resolve unilaterally):** whether the site should ever carry a downloadable CV PDF or a publication list. Ask before adding either.
- **Undecided:** whether the site should ever exist in French as well as English. Currently English only.

## Brand Commitments

- **Institutional identity is factual and fixed.** CNRS, IN2P3 ("CNRS Nucléaire & Particules"), AstroParticule & Cosmologie (APC), Université Paris Cité, and the exact role wording — leading the *Computing and data engineering* group in the APC IT department — must stay accurate. Do not paraphrase a title into something punchier.
- **Photo captions and credits are fixed.** The carousel images are his own photographs from the Chile mission plus third-party images credited in the captions (W. O'Mullane / Rubin, T. Lange / SLAC). Credits and caption text must be preserved verbatim and must remain legible wherever the photos appear.
- Named affiliations that must stay correct: Vera C. Rubin Observatory / LSST, Euclid (ESA), AstroDeep (ANR-funded), Lightcone Research, ORCID `0000-0001-7387-2633`.
- Voice in the existing copy is first-person, plain, and understated — it states facts and lets the scale of the projects carry the weight. No superlatives, no marketing register.

## Evidence on Hand

Real, owned, and usable:

- **Photography** — 13 carousel images in `img/` from the Rubin Observatory / Cerro Pachón mission and APC/camera teams, plus `img/profile.png`. Personal and credited; strong, specific, non-stock. The single most distinctive asset the site has.
- **The Chile mission** — on-site commissioning of the LSST camera filter exchange system, Nov 2024 – Dec 2025.
- **Verifiable record** — four named projects with live external links; five teaching/organizing entries (2019–present, CNRS AISSAI, AstroInfo, Euclid summer school, Master course at Université Paris Cité); three named PhD students with their own sites and current destinations.
- **Profiles** — GitHub `aboucaud`, LinkedIn, ORCID, Bluesky, Twitter/X `@alxbcd`; a French-language observatory tour video on YouTube.

Absent — must not be fabricated:

- No publication list, citation counts, h-index, or Google Scholar link on the site.
- No CV PDF.
- No testimonials, quotes, endorsements, awards, or press coverage.
- No metrics of any kind (users, downloads, stars, grant amounts).
- No blog, writing archive, or talk-slides archive.

## Product Principles

1. **Accuracy outranks polish.** Every name, title, affiliation, date, and photo credit is a factual claim about real institutions and real people. Design may reframe them; it may never smooth, shorten, or invent them.
2. **The photographs are the argument.** The Chile imagery is first-hand evidence of work almost nobody in this field has done. Whatever the design, it must give those photos real presence rather than treating them as decoration.
3. **Route onward, don't retain.** Success includes the visitor leaving for a project. Outbound links are the goal, not a leak — make them findable and confident.
4. **Understated register.** The credibility comes from the scale of the projects, not from how the page describes them. Nothing on this page should sound like it is selling.
5. **Built for a hand-maintained, finite page.** One person edits this rarely. Favor structures that stay correct and easy to edit over anything that needs discipline to maintain.
