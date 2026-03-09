# Backend Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://olifarhaan.me)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A minimal, monochrome developer portfolio built with Next.js, Tailwind CSS, and TypeScript. All content is driven from a single `portfolio.json` file — fork it, update the JSON, and deploy your own.

**Live:** [olifarhaan.me](https://olifarhaan.me)

## Features

- **JSON-driven content** — All portfolio data lives in `src/data/portfolio.json`. No need to touch components.
- **Dark mode** — System-aware with manual toggle, flicker-free via inline script.
- **SEO optimized** — OpenGraph image, JSON-LD Person schema, sitemap, robots.txt, canonical URL.
- **LLM-friendly** — Dynamic `/llms.txt` route auto-generated from `portfolio.json`. When LLM crawlers visit your site, they get a structured, always-up-to-date summary of your profile (see [LLM Discoverability](#seo--llm-discoverability)).
- **OG image** — Auto-generated at build time from your portfolio data using Next.js `ImageResponse`.
- **Vercel Analytics** — Speed Insights + Web Analytics built in.
- **Voice assistant widget** — Optional [Ringg.ai](https://ringg.ai) integration for an AI-powered voice agent on your portfolio.
- **Responsive** — Mobile-first design with monospace typography.
- **Subtle design touches** — Vercel-style grid background, shimmer text animation on the hero name.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/OliFarhaan/backend-portfolio.git
cd backend-portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your domain and optional API keys

# Run dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

### portfolio.json

All content is in [`src/data/portfolio.json`](src/data/portfolio.json). Update these sections to make it yours:

| Section | Description |
|---|---|
| `personal` | Name, title, bio, email, location, resume path, logo, repo URL |
| `socials` | GitHub, LinkedIn, YouTube, Medium, LeetCode (or any links) |
| `terminal` | Custom terminal lines shown in the hero section |
| `skills` | Categorized skill lists |
| `experience` | Work history with company, role, period, and bullet points |
| `education` | Degrees, institutions, grades, coursework |
| `projects` | Project name, description, tech stack, GitHub URL, bullet points |
| `achievements` | List of achievements/honours |
| `activities` | Activities, volunteering, freelancing, writing |
| `contact` | Contact message and Calendly URL |
| `navLinks` | Controls which sections appear in the navbar |

The resume PDF goes in `public/` — update the `resumePath` field in the JSON to match.

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `SITE_URL` | Yes | Your production domain (e.g., `https://yourdomain.com`). Used for SEO metadata, sitemap, robots.txt, OG image, and llms.txt. |
| `RINGG_AGENT_API_KEY` | No | API key for the Ringg.ai voice assistant widget. Remove if not using. |

Set these in `.env.local` for local development and in your Vercel project settings for production.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, grid bg, shimmer animation
│   ├── icon.svg             # Favicon
│   ├── layout.tsx           # Root layout, metadata, JSON-LD, analytics, widget
│   ├── llms.txt/route.ts    # Dynamic /llms.txt generated from portfolio.json
│   ├── opengraph-image.tsx  # Auto-generated OG image
│   ├── page.tsx             # Main portfolio page (all sections)
│   ├── robots.ts            # robots.txt configuration
│   └── sitemap.ts           # Sitemap configuration
├── components/
│   ├── Nav.tsx              # Responsive navbar with mobile menu
│   ├── Section.tsx          # Reusable section wrapper
│   ├── Terminal.tsx         # Terminal-style component in hero
│   └── ThemeToggle.tsx      # Dark mode toggle (useSyncExternalStore)
├── data/
│   └── portfolio.json       # All portfolio content
public/
├── logo.png                 # Logo used in widget and OG
└── resume.pdf               # Downloadable resume
```

## SEO & LLM Discoverability

The site includes several layers for search engines and LLM crawlers:

- **Metadata** — Title, description, keywords, authors, canonical URL
- **OpenGraph & Twitter cards** — Auto-generated image with your name, title, and bio
- **JSON-LD** — `Person` structured data for rich search results
- **Sitemap & robots.txt** — Standard crawling directives, all user agents allowed
- **`/llms.txt`** — A dynamically generated plain-text file following the [llms.txt standard](https://llmstxt.org/). It's auto-generated from `portfolio.json` so it never goes stale. Discoverable via a `<link rel="alternate">` tag in the HTML head. Contains your full profile: about, skills, experience, education, projects, achievements, activities, and contact info — structured for LLMs to consume.

## Deployment

### Vercel (Recommended)

1. Fork this repo
2. Import the repo on [vercel.com](https://vercel.com)
3. Add environment variables listed in [`.env.example`](.env.example) in project settings
4. Deploy

### Other Platforms

```bash
pnpm build
pnpm start
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router, Server Components
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fira Code](https://github.com/tonsky/FiraCode) — Monospace font
- [Inter](https://rsms.me/inter/) — Sans-serif fallback
- [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights)

## License

MIT — fork it, make it yours.
