# Contributing

Thanks for your interest in contributing! This is a personal portfolio template, so contributions that improve the template for everyone are welcome.

## What We're Looking For

- Bug fixes (layout issues, dark mode glitches, mobile responsiveness)
- Performance improvements
- Accessibility improvements
- SEO enhancements
- New section components that are generic and reusable
- Documentation improvements

## What We're NOT Looking For

- Color themes or design overhauls (the monochrome aesthetic is intentional)
- Adding heavy dependencies or JS libraries
- Personal content changes (fork the repo instead)

## How to Contribute

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your change:
   ```bash
   git checkout -b fix/description-of-change
   ```
4. **Install dependencies:**
   ```bash
   npm install
   cp .env.example .env.local
   ```
5. **Make your changes** and verify:
   ```bash
   npm run dev     # Check visually
   npm run build   # Ensure production build passes
   npm run lint    # Ensure no lint errors
   ```
6. **Commit** with a clear message:
   ```bash
   git commit -m "fix: description of what changed and why"
   ```
7. **Push** and open a **Pull Request**

## PR Guidelines

- Keep PRs small and focused on a single change
- Describe what changed and why in the PR description
- Include a screenshot if the change is visual
- Ensure `npm run build` passes with no errors

## Code Style

- Use Tailwind utility classes — avoid custom CSS unless necessary
- Keep components small and focused
- All content should come from `src/data/portfolio.json`, not hardcoded in components
- Use explicit `dark:` variants for dark mode (no CSS variables for colors)
- Prefer `neutral-*` color scale for consistency

## Reporting Issues

Open an issue with:
- What you expected to happen
- What actually happened
- Browser and device info (if it's a visual bug)
- A screenshot if applicable
