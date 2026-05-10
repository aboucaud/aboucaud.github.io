# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume/portfolio website for Alexandre Boucaud, based on the [StartBootstrap-resume template](https://github.com/BlackrockDigital/startbootstrap-resume) (MIT license). It is a single-page static HTML site hosted on GitHub Pages.

## Branches

- `master` — source branch for development
- `gh-pages` — deployed branch (GitHub Pages serves from here); this is the default remote branch

To publish changes, merge or push to `gh-pages`.

## Structure

All content lives in `index.html`. Sections are: `#about`, `#experience`, `#education`, `#skills`, `#tutorials`.

- `css/resume.css` — custom styles (the only stylesheet to edit; `resume.min.css` is a generated minified copy that is not actively used)
- `js/resume.min.js` — minified JS from the template (smooth-scroll behavior via jQuery)
- `vendor/` — vendored libraries (jQuery, jquery-easing, Bootstrap, Font Awesome, Devicons, Simple Line Icons)

The `.gitignore` lists `scss/`, `gulpfile.js`, `package.json` etc., suggesting the original template had a Gulp build pipeline, but no build tooling is present in this repo — edits are made directly to `css/resume.css` and `index.html`.

## Previewing

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```
