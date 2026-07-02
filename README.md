# Terrafolio — static HTML/CSS/JS build

Same site, same design, same content as the Next.js version — rebuilt in plain
HTML/CSS/JS with **no build step, no npm, no Node.js**. This is exactly what gets
served to the browser; there's no compilation in between.

## Files

```
index.html      Homepage — hero, ticker, problems, solutions, platform, how-it-works,
                 42 features, impact stats, testimonials, pricing, FAQ, CTA, footer
pricing.html    Pricing page
contact.html    Contact page (working client-side form validation)
404.html        Custom 404 (GitHub Pages serves this automatically for unknown paths)
assets/
  style.css     All styles — same design tokens (colors, type, spacing) as the original
  main.js       All content data + every interaction (nav, ticker, counters, FAQ,
                testimonial slider, form validation, scroll-reveal animations)
  favicon.svg
robots.txt
sitemap.xml     Update the placeholder domain after you deploy (see below)
.nojekyll       Tells GitHub Pages to skip Jekyll processing (not needed for this
                 site, but standard practice)
```

## Deploy to GitHub Pages

No build step means no GitHub Actions workflow is required either — GitHub Pages can
serve these files directly.

1. Create a new repo, upload every file in this folder to it (root of the repo, not
   a subfolder — keep `index.html` at the top level).
2. In the repo: **Settings → Pages → Source** → choose **Deploy from a branch**, then
   pick `main` (or whichever branch you uploaded to) and `/ (root)`.
3. Save. GitHub gives you a URL within a minute or two:
   `https://<your-username>.github.io/<repo-name>/`

That's it — no Actions, no Node, no install step. Any time you edit a file and push,
GitHub Pages picks it up automatically within a minute.

## Why this version has none of the basePath complexity the Next.js version had

Every internal link (`index.html`, `pricing.html`, `contact.html`) is a **relative**
path, not `/pricing` or `/contact`. Relative links resolve correctly no matter what
subpath GitHub Pages serves the site from, so there's nothing to configure —
unlike the Next.js build, which needed `next.config.mjs` to detect the repo name and
prefix every route.

## After deploying

- Open `sitemap.xml` and replace `YOUR-USERNAME`/`YOUR-REPO` with your actual GitHub
  Pages URL (or custom domain, if you add a `CNAME` file).
- Fonts (Space Grotesk / Inter / IBM Plex Mono) load from Google Fonts via a `<link>`
  tag in each page's `<head>` — this needs the visitor's browser to have normal
  internet access, which it will; this is only worth mentioning because sandboxed
  dev/preview tools sometimes block that domain.

## What's real vs. what's a static mock

- Every visual element, animation, and piece of copy matches the original build:
  live-looking mandi price ticker, animated counters, auto-sliding testimonials,
  accordion FAQ, scroll-reveal on every section, mobile nav, blur-on-scroll header.
- The **contact form** and **newsletter form** validate and show a success state, but
  don't send anywhere — there's no backend. If you want them to actually deliver
  messages, point the `<form>` in `contact.html` at a form service (Formspree,
  Getform, etc.) or add your own endpoint.
- No dynamic OG image generation (the Next.js version used `next/og` to render one at
  build time) — that requires a build step, which this version deliberately doesn't
  have. If you want a social preview image, add a static PNG and an `og:image` meta
  tag pointing at it.
