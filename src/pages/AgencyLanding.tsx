import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ContentSection from '../components/ContentSection'
import { otherAgencies } from '../data/otherAgencies'
import NotFound from './NotFound'

export default function AgencyLanding() {
  const { slug } = useParams()
  const agency = otherAgencies.find((a) => a.slug === slug)

  useEffect(() => {
    if (agency) document.title = `${agency.name} | State of East Carolina`
  }, [agency])

  if (!agency) return <NotFound />

  return (
    <div>
      <Breadcrumbs trail={[{ label: agency.shortName }]} />
      <div className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-widest text-gray-300">State of East Carolina</p>
          <h1 className="font-serif-gov text-3xl sm:text-4xl font-bold mt-1">{agency.name}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          <p>{agency.mission}</p>
        </ContentSection>

        <ContentSection title="License Types">
          <div className="grid sm:grid-cols-3 gap-4">
            {agency.licenseTypes.map((type) => (
              <div key={type} className="border border-gov-line p-4">
                <h3 className="font-semibold text-navy-900 text-sm">{type}</h3>
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Coming Soon</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection>
          <div className="border-l-4 border-gold-500 bg-gold-100 p-4 text-sm text-gray-800">
            <p>
              This program's full licensing site is being built out on the same platform as the{' '}
              <Link className="gov-link" to="/">
                East Carolina Board of Pharmacy
              </Link>
              . Detailed eligibility requirements, fees, forms, and application workflows for{' '}
              {agency.shortName} will be published here as the program is configured.
            </p>
          </div>
        </ContentSection>
      </div>
    </div>
  )
}
