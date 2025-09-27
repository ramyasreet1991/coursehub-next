import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await db.article.findUnique({ where: { slug: params.slug } })
  if (!article) return notFound()
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: article.content ?? '' }} />
    </main>
  )
}
