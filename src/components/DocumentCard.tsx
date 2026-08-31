import { FileText } from 'lucide-react'

export default function DocumentCard({
  title,
  description,
  file,
}: {
  title: string
  description: string
  file: string
}) {
  return (
    <div className="border border-gov-line bg-white p-4 flex gap-3">
      <FileText className="text-navy-700 shrink-0" size={28} aria-hidden="true" />
      <div className="flex-1">
        <h3 className="font-semibold text-navy-900">{title}</h3>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 text-sm gov-link font-semibold"
        >
          Download PDF
        </a>
      </div>
    </div>
  )
}
