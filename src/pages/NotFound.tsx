import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | East Carolina Board of Pharmacy'
  }, [])

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="font-serif-gov text-4xl font-bold text-navy-900">404 — Page Not Found</h1>
      <p className="mt-4 text-gray-700">
        The page you are looking for could not be found. It may have been moved or no longer exists.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 bg-navy-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-navy-800"
      >
        Return to Home
      </Link>
    </div>
  )
}
