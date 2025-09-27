export default function MarketingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">AsterLMS</h1>
      <p className="mt-4 text-gray-600">Production-ready LMS starter built with Next.js, Prisma, and Tailwind.</p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Featured courses</h2>
        <p className="text-sm text-gray-500 mt-2">Visit the catalog to explore seeded courses.</p>
      </section>
    </main>
  )
}
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">AsterLMS</h1>
      <p className="text-gray-600 mt-2">Next.js LMS starter: courses, lessons, quizzes, progress, certificates.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/catalog" className="rounded-xl border px-4 py-2">Browse Catalog</Link>
        <a href="https://github.com" className="rounded-xl bg-black text-white px-4 py-2">GitHub (add later)</a>
      </div>
    </main>
  )
}
