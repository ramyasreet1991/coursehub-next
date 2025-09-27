import { db } from './db'
export async function recordEvent(userId: string, data: { kind: string, courseId?: string, lessonId?: string, meta?: any }) {
  return db.progressEvent.create({
    data: { userId, courseId: data.courseId, lessonId: data.lessonId, kind: data.kind, metaJson: data.meta }
  })
}
