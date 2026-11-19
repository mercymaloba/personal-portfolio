# Mercy Maloba — Portfolio

A minimal portfolio built with Next.js App Router, TypeScript, and Material UI. Existing feature sections live in `feature/`; navigation and the server-rendered MUI theme live in `components/`.

## Run locally

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. For production, run `pnpm build` and `pnpm start`.

## Content and styling

- `feature/home.tsx`: introduction
- `data/portfolio.ts`: typed project, credential, skill, and CV content
- `feature/projects.tsx`: sample project cards with individual detail pages
- `app/projects/[slug]/page.tsx`: shared project detail template
- `feature/qualifications.tsx`: education, certifications, training, and achievements
- `public/documents/Mercy_Maloba_CV.pdf`: downloadable original CV
- `feature/about.tsx` and `feature/skills.tsx`: background and expertise
- `feature/contact.tsx`: contact details and email draft form
- `app/globals.css`: responsive layouts, typography, and reduced-motion support
- `components/theme-provider.tsx`: MUI theme and Emotion server style registry
- `app/layout.tsx`: page metadata

The contact form validates required fields and opens a prefilled message in the visitor’s email app. It does not send email through a backend. Confirm the email address before publishing. Skills and credentials were transcribed from the supplied CV; the three projects are explicitly labeled sample concepts.

## Checks

```sh
pnpm exec tsc --noEmit
pnpm build
```

## Docker

Run `docker compose up --build`, then visit http://localhost:3000.

## Updating portfolio content

Edit `data/portfolio.ts` to add or replace projects, credentials, and skill groups. Each project needs a unique URL-safe `slug`; its detail page is generated automatically. Set optional `liveUrl` and `repositoryUrl` fields to absolute HTTPS URLs to display external links on cards and detail pages. Sample project pages are briefs, not functional product demos.

Credentials are grouped by `category` (Education, Certification, Training, Achievement). Add an optional `verificationUrl` to show a certificate link. Use unique credential IDs. The site does not claim independent verification of CV entries.

Replace `public/documents/Mercy_Maloba_CV.pdf` to update the downloadable CV, or change the shared `cv` configuration to point to another file. Both download links use this configuration. Files in `public/` are publicly accessible when deployed.
