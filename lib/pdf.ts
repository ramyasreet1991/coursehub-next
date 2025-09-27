import PDFDocument from 'pdfkit'
export async function generateCertificatePdf(opts: { name: string, courseTitle: string }) {
  const doc = new PDFDocument({ size: 'A4' })
  doc.fontSize(24).text('Certificate of Completion', { align: 'center' })
  doc.moveDown(2)
  doc.fontSize(16).text(`${opts.name} — ${opts.courseTitle}`, { align: 'center' })
  doc.end()
  const chunks: Buffer[] = []
  // @ts-ignore simple stream collect
  for await (const chunk of doc) chunks.push(chunk)
  return Buffer.concat(chunks)
}
