import { useEffect, useState } from 'react'

type TextSize = 'base' | 'lg' | 'xl'

export default function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false)
  const [textSize, setTextSize] = useState<TextSize>('base')

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast)
  }, [highContrast])

  useEffect(() => {
    document.documentElement.setAttribute('data-text-size', textSize)
  }, [textSize])

  function increaseText() {
    setTextSize((current) => (current === 'base' ? 'lg' : 'xl'))
  }

  function decreaseText() {
    setTextSize((current) => (current === 'xl' ? 'lg' : 'base'))
  }

  return (
    <div id="accessibility" className="bg-navy-950 text-white text-xs">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-end gap-4 py-1">
        <span className="hidden sm:inline text-gray-300">Accessibility</span>
        <button
          type="button"
          onClick={() => setHighContrast((v) => !v)}
          aria-pressed={highContrast}
          className="underline underline-offset-2 hover:text-gold-400"
        >
          {highContrast ? 'Standard Contrast' : 'High Contrast'}
        </button>
        <button type="button" onClick={increaseText} className="underline underline-offset-2 hover:text-gold-400">
          Text Size +
        </button>
        <button type="button" onClick={decreaseText} className="underline underline-offset-2 hover:text-gold-400">
          Text Size -
        </button>
      </div>
    </div>
  )
}
