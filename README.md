# Built Outcomes

Marketing site for Built Outcomes — marketing, software, automations, and AI
integrated into businesses to drive measurable growth.

Built with [Astro](https://astro.build). Deployed to GitHub Pages via the
workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally         |

## Pages

- `/` — home
- `/pricing` — quote-based pricing (Marketing / Automation / Business Growth)
- `/about` — about the company
- `/contact` — contact details
- `/book-a-call` — call booking (calendar embed slot in `src/pages/book-a-call.astro`)

## Notes

- Live at https://builtoutcomes.com (GitHub Pages custom domain — `public/CNAME`
  plus `SITE_URL` in `astro.config.mjs`).
