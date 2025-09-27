# AsterLMS — Next.js LMS Starter

Features (minimal starter):
- Next.js 14 App Router + TypeScript
- Prisma + PostgreSQL models (Course, Module, Lesson, Quiz basics, Progress, Certificates)
- Catalog, Course page, Lesson page (video/article)
- API health route
- Docker Compose for local Postgres
- Seed script to create a demo course

## Quick Start
```bash
# 1) Install deps
npm i

# 2) Start database
docker compose up -d

# 3) Configure env
cp .env.example .env

# 4) Prisma
npx prisma generate
npx prisma migrate dev --name init
npm run seed

# 5) Dev
npm run dev
# open http://localhost:3000
```

## What I added (scaffold)

- `.env.example` and `docker-compose.yml` for local Postgres
- App pages: `(marketing)/page.tsx`, `catalog/page.tsx`, `course/[slug]/page.tsx` (exists), `lesson/[id]/page.tsx`, `article/[slug]/page.tsx`
- Component stubs: `components/CourseCard.tsx`, `components/LessonPlayer.tsx`, `components/QuizRunner.tsx`
- Lib placeholders: `lib/auth.ts`, `lib/storage.ts`, `lib/pdf.ts`, `lib/notion.ts`

Next steps: wire NextAuth, storage provider, and implement Notion sync. Run `npm run seed` after prisma migrate to create demo course.

## Next Steps
- Add auth (NextAuth) and RBAC
- Build quiz routes and grading
- Certificates via pdfkit (`lib/pdf.ts`) and a /verify/[slug] page
- Notion ingestion (create `lib/notion.ts` and `/api/notion/sync`)
- Deploy to Vercel (add `DATABASE_URL` from Neon/PlanetScale and envs in dashboard)
