export default function LessonPlayer({ lesson }: { lesson: any }) {
  if (lesson.kind === 'video') {
    return (
      <div>
        <video controls src={lesson.videoUrl} className="w-full h-auto bg-black" />
      </div>
    )
  }
  return <div dangerouslySetInnerHTML={{ __html: lesson.content ?? '<p>No content</p>' }} />
}
export default function LessonPlayer() {
  return <div className="rounded-xl border p-4">TODO: Player with tabs (Video/Article), notes, next/prev</div>
}
