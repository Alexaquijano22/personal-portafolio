# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio website built with Astro 4 + Tailwind CSS. Targets entrepreneurs, small businesses, and startups. Deployed to GitHub Pages via GitHub Actions.

**Live URL**: `https://alexaquijano22.github.io/proyecto1-portafolio/`

## Commands

```powershell
pnpm dev      # dev server → http://localhost:4321/proyecto1-portafolio/
pnpm build    # production build → dist/
pnpm preview  # preview the built site locally
```

## Architecture

Single-page site. `src/pages/index.astro` imports all section components in order:

```
src/
  layouts/
    BaseLayout.astro     # <head>, Inter font, <body class="font-sans">, <slot/>
  components/
    Nav.astro            # fixed navbar, desktop links + hamburger mobile menu
    Hero.astro           # H1 value prop + two CTAs + illustration
    Services.astro       # 4 service cards (landing, apps, e-commerce, SEO)
    TechStack.astro      # 10 tech skill cards
    Projects.astro       # 6 project cards with external links
    Process.astro        # 3-step "how I work" section (dark bg)
    Contact.astro        # Formspree form + social links
    Footer.astro         # 3 social icon links + copyright
  pages/
    index.astro          # assembles everything
public/
  images/                # all project and illustration images
```

## Design System (Tailwind)

Custom colors in `tailwind.config.mjs`:

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#0f172a` | Nav, footer, Process section bg |
| `accent` | `#6366f1` | Buttons, hovers, active borders |
| `surface` | `#f1f5f9` | Alternating section bg, form inputs |
| `body` | `#334155` | Paragraph text |

Font: Inter (Google Fonts). Breakpoints: Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px).

## Key Config

- `base: '/proyecto1-portafolio'` in `astro.config.mjs` — required for GitHub Pages routing
- All internal links and image `src` use `import.meta.env.BASE_URL` prefix
- Contact form action: `https://formspree.io/f/YOUR_FORM_ID` — replace with real Formspree ID from `formspree.io` (free account with `alex22quijano@gmail.com`)

## Deploy

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

**Required repo setting**: Settings → Pages → Source must be set to "GitHub Actions".
