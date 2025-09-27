import { db } from '@/lib/db'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await db.course.findUnique({ where: { slug: params.slug }, include: { modules: { include: { lessons: true } } } })
  if (!course) return notFound()
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.summary}</p>
      <div className="mt-6">
        {course.modules.sort((a,b)=>a.index-b.index).map(m => (
          <div key={m.id} className="mb-5">
            <h3 className="font-semibold">{m.title}</h3>
            <ul className="mt-2 space-y-1">
              {m.lessons.sort((a,b)=>a.index-b.index).map(l => (
                <li key={l.id}>
                  <Link className="underline text-sm" href={`/lesson/${l.id}`}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
