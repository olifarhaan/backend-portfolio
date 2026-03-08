# Developer Portfolio

A minimal, monochrome developer portfolio built with Next.js, Tailwind CSS, and TypeScript. Designed for backend engineers — clean, fast, and content-focused.

**Live:** [olifarhaan.me](https://olifarhaan.me)

## Features

- **Monochrome design** — Pure black & white with Fira Code monospace font
- **Dark mode** — Automatic detection + manual toggle, no flash on load
- **Data-driven** — All content lives in a single `portfolio.json` file
- **Vercel-style layout** — Side borders with CSS cross-markers at intersections
- **Responsive** — Mobile-first with collapsible navigation
- **SEO ready** — OpenGraph, Twitter cards, sitemap, robots.txt
- **Fast** — Static generation, optimized fonts via `next/font`, zero JS frameworks beyond React
- **Accessible** — Semantic HTML, scroll-linked animations, proper ARIA labels

## Quick Start

```bash
# Clone the repo
git clone https://github.com/OliFarhaan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your domain

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

All portfolio content is in a single file:

```
src/data/portfolio.json
```

Edit this file to update your:
- Name, title, bio, and contact info
- Social links
- Skills (grouped by category)
- Work experience (with optional tags like "Founding")
- Education and coursework
- Projects
- Achievements, activities, and writing

The resume PDF goes in `public/` — update the `resumePath` field in the JSON to match.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind imports, dark mode, animations, cross-markers
│   ├── layout.tsx         # Root layout, fonts, metadata (reads from JSON + env)
│   ├── page.tsx           # Main portfolio page
│   ├── icon.svg           # Favicon
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── Nav.tsx            # Fixed navbar with mobile menu
│   ├── Section.tsx        # Reusable section with fade-in animation + cross-line
│   ├── Terminal.tsx       # Terminal-style display block
│   └── ThemeToggle.tsx    # Dark/light mode toggle
└── data/
    └── portfolio.json     # All portfolio content
```

## Environment Variables

| Variable   | Description                          | Required |
|------------|--------------------------------------|----------|
| `SITE_URL` | Your production domain (e.g. `https://yourdomain.com`) | Yes |

Set this in `.env.local` for local development and in your Vercel project settings for production.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add `SITE_URL` environment variable in project settings
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

The site is statically generated — it works on any platform that serves static files.

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS
- [TypeScript](https://typescriptlang.org) — Type safety
- [Fira Code](https://github.com/tonsky/FiraCode) — Monospace font
- [Inter](https://rsms.me/inter/) — Sans-serif fallback

## License

MIT — see [LICENSE](LICENSE) for details.
