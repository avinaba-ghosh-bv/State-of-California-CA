# East Carolina Board of Pharmacy Demo

A fictional, government-style licensing website built for a professional licensing demo. It
represents the "legacy agency website" source that an AI ingestion pipeline (a separate demo)
would crawl to extract licensing requirements, fees, documents, and workflow.

**This is not a real government website.** East Carolina, its Board of Pharmacy, and all board
members, fees, and disciplinary records shown are fictional and used for demonstration only.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide icons

No backend, database, or authentication is used.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel

Deploy the project root to Vercel. It is a standard static Vite build (`npm run build`, output
in `dist/`); `vercel.json` includes a rewrite so client-side routes resolve correctly.

## Key Pages

- `/` — Home
- `/applicants/apply-personal-license` — Apply for a Personal License
- `/applicants/pharmacist-license` — Pharmacist License Requirements (eligibility, education,
  examination, experience, background check, required documents, application process, fees,
  conditional rules)
- `/applicants/application-requirements` — Required Documents
- `/applicants/fees` — Fee Schedule
- `/licensees/renew` — Renewal Requirements

All licensing content is rendered as semantic HTML (headings, lists, tables) so it can be read by
a web scraper or AI ingestion pipeline.
