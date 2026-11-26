# LeSeft Moving — Next.js + Sanity Demo

Professional moving company website built with **Next.js 16** (App Router) and **Sanity CMS**.

Brand colors use shades of blue for a trustworthy, professional look.

## Architecture

```
┌──────────────────────────┐
│   Next.js Frontend      │  Public website visitors see
│   Home · About ·        │  Home · About · Commodities ·
│   Commodities · Projects│  Projects · Contact
│   · Contact             │
└────────────┬─────────────┘
            │ Content fetching & API integration
            ▼
┌──────────────────────────┐
│  Sanity CMS / Studio    │  LeSeft staff manage content here
│  Edit pages · Upload    │  Edit pages · Upload images ·
│  images · Update        │  Update services · Manage projects
│  services · Manage      │
│  projects               │
└────────────┬─────────────┘
            │
            ▼
┌──────────────────────────┐
│  Sanity Content Lake    │  Stores structured website content
└──────────────────────────┘
```

## Features

- Responsive marketing site with blue branding
- Pages: Home, About, Commodities (services), Projects, Contact
- Embedded Sanity Studio at `/studio`
- Schemas for pages, projects, services/commodities, and site settings
- Ready for GROQ queries via `next-sanity`

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/Montelent/moving-company_demo.git
cd moving-company_demo
npm install
```

### 2. Configure Sanity

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.example` → `.env.local` and fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Update `sanity.config.ts` if needed (it already reads from env).

### 3. Run the site

```bash
npm run dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

### 4. (Optional) Deploy Studio

```bash
npm run sanity:deploy
```

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- Sanity v3 + next-sanity
- Embedded Studio

## Project Structure

```
src/
  app/           # App Router pages + studio route
  components/    # Header, Footer
  lib/           # Sanity client & queries
sanity/
  schemas/       # Content models
sanity.config.ts
```

## Brand Colors

| Token          | Hex       | Usage              |
|----------------|-----------|--------------------|
| Primary        | `#1e3a5f` | Header, headings   |
| Primary Light  | `#3b82f6` | Accents, buttons   |
| Accent         | `#60a5fa` | Highlights         |
| Background     | `#f0f7ff` | Page background    |
| Dark           | `#0f172a` | Footer, text       |

## License

MIT — demo project for educational / portfolio use.


## Phone-friendly content editing

The full Sanity Studio remains available at `/studio`. For quick edits from an Android phone, use `/mobile-admin`, a touch-friendly editor for the company name, business phone, and homepage hero copy.

Configure these server-side environment variables in Vercel before using the mobile editor:

- `MOBILE_ADMIN_PASSWORD`: a long, unique password for the mobile editor.
- `MOBILE_ADMIN_SESSION_SECRET`: a cryptographically random secret (at least 32 characters) used to sign the secure session cookie.
- `SANITY_API_TOKEN`: a Sanity API token with permission to edit the dataset. Never expose this token with a `NEXT_PUBLIC_` prefix.

The editor reads the current values after sign-in and publishes only the supported fields. The session cookie is HTTP-only, SameSite strict, and expires after seven days. Use the full Studio on a desktop for rich text, images, arrays, and other advanced editing.
