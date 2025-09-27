import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import LessonPlayer from '@/components/LessonPlayer'

export default async function LessonPage({ params }: { params: { id: string } }) {
  const lesson = await db.lesson.findUnique({ where: { id: params.id } })
  if (!lesson) return notFound()
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold">{lesson.title}</h1>
      <div className="mt-4">
        {/* @ts-expect-error Server component wrapper for now */}
        <LessonPlayer lesson={lesson} />
      </div>
    </main>
  )
}
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function LessonPage({ params }: { params: { id: string } }) {
  const lesson = await db.lesson.findUnique({ where: { id: params.id }, include: { module: { include: { course: true } } } })
  if (!lesson) return notFound()
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <p className="text-xs text-gray-500">{lesson.module.course.title} / {lesson.module.title}</p>
      <h1 className="text-2xl font-bold mt-2">{lesson.title}</h1>
      {lesson.kind === 'video' && lesson.videoUrl ? (
        <video className="w-full mt-4 rounded-xl" controls src={lesson.videoUrl} />
      ) : (
        <article className="prose mt-4" dangerouslySetInnerHTML={{ __html: lesson.content || '' }} />
      )}
    </main>
  )
}
