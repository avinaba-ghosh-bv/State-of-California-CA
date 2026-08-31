import type { ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function NoticeBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-l-4 border-gold-500 bg-gold-100 p-4 flex gap-3">
      <AlertTriangle className="text-gold-600 shrink-0 mt-0.5" size={20} aria-hidden="true" />
      <div className="text-sm text-gray-800">
        <p className="font-bold text-navy-900 mb-1">{title}</p>
        {children}
      </div>
    </div>
  )
}
