import { db } from '@/lib/db'

async function main() {
  const c = await db.course.upsert({
    where: { slug: 'intro-to-programming' },
    update: {},
    create: {
      title: 'Intro to Programming',
      slug: 'intro-to-programming',
      summary: 'A short sample course seeded into AsterLMS.',
      status: 'PUBLISHED',
      modules: {
        create: [
          {
            title: 'Getting Started',
            index: 1,
            lessons: {
              create: [
                { title: 'Welcome', index: 1, kind: 'article', content: '<p>Welcome to AsterLMS!</p>' },
                { title: 'Your First Video', index: 2, kind: 'video', videoUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4' }
              ]
            }
          }
        ]
      }
    }
  })
  console.log('Seeded course:', c.slug)
}

main().then(()=>process.exit(0)).catch((e)=>{console.error(e);process.exit(1)})
