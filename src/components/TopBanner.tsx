import { Info } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-gold-500 text-navy-950 border-b border-gold-600">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-2 text-xs sm:text-sm font-semibold text-center sm:text-left">
        <Info size={16} className="shrink-0" aria-hidden="true" />
        <p>
          Demonstration Website — The State of East Carolina and the East Carolina Board of
          Pharmacy are fictional and used solely for a professional licensing software
          demonstration. This is not a real government website.
        </p>
      </div>
    </div>
  )
}
