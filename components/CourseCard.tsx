import Link from 'next/link'

export default function CourseCard({ course }: { course: any }) {
  return (
    <Link href={`/course/${course.slug}`} className="block p-4 border rounded">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.summary}</p>
    </Link>
  )
}
export default function CourseCard({ title, summary }: { title: string; summary?: string }) {
  return (
    <div className="rounded-2xl border p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{summary}</p>
    </div>
  )
}
