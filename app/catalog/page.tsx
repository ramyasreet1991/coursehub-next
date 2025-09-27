import Link from 'next/link'
import { db } from '@/lib/db'

export default async function CatalogPage() {
  const courses = await db.course.findMany({ where: { status: 'PUBLISHED' }, take: 20 })
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Catalog</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map(c => (
          <Link key={c.id} href={`/course/${c.slug}`} className="block p-4 border rounded">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-500">{c.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
import Link from 'next/link'
import { db } from '@/lib/db'

export default async function Catalog() {
  const courses = await db.course.findMany({ where: { status: 'PUBLISHED' }, take: 20 })
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(c => (
          <Link key={c.id} href={`/course/${c.slug}`} className="rounded-2xl border p-4 hover:shadow-sm">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{c.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
