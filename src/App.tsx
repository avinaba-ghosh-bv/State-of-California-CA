import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Applicants from './pages/Applicants'
import ApplyPersonalLicense from './pages/ApplyPersonalLicense'
import PharmacistLicense from './pages/PharmacistLicense'
import PharmacyTechnician from './pages/PharmacyTechnician'
import InternPharmacist from './pages/InternPharmacist'
import ApplicationRequirements from './pages/ApplicationRequirements'
import Forms from './pages/Forms'
import Fees from './pages/Fees'
import FAQ from './pages/FAQ'
import Licensees from './pages/Licensees'
import Renew from './pages/Renew'
import ContinuingEducation from './pages/ContinuingEducation'
import LicenseVerification from './pages/LicenseVerification'
import Consumers from './pages/Consumers'
import LicenseSearch from './pages/LicenseSearch'
import FileComplaint from './pages/FileComplaint'
import About from './pages/About'
import Board from './pages/Board'
import Meetings from './pages/Meetings'
import LawsRegulations from './pages/LawsRegulations'
import Enforcement from './pages/Enforcement'
import DisciplinaryActions from './pages/DisciplinaryActions'
import Contact from './pages/Contact'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/applicants" element={<Applicants />} />
        <Route path="/applicants/apply-personal-license" element={<ApplyPersonalLicense />} />
        <Route path="/applicants/pharmacist-license" element={<PharmacistLicense />} />
        <Route path="/applicants/pharmacy-technician" element={<PharmacyTechnician />} />
        <Route path="/applicants/intern-pharmacist" element={<InternPharmacist />} />
        <Route path="/applicants/application-requirements" element={<ApplicationRequirements />} />
        <Route path="/applicants/forms" element={<Forms />} />
        <Route path="/applicants/fees" element={<Fees />} />
        <Route path="/applicants/faq" element={<FAQ />} />

        <Route path="/licensees" element={<Licensees />} />
        <Route path="/licensees/renew" element={<Renew />} />
        <Route path="/licensees/continuing-education" element={<ContinuingEducation />} />
        <Route path="/licensees/license-verification" element={<LicenseVerification />} />

        <Route path="/consumers" element={<Consumers />} />
        <Route path="/consumers/file-complaint" element={<FileComplaint />} />
        <Route path="/consumers/license-search" element={<LicenseSearch />} />

        <Route path="/about" element={<About />} />
        <Route path="/about/board" element={<Board />} />
        <Route path="/about/laws-regulations" element={<LawsRegulations />} />
        <Route path="/about/meetings" element={<Meetings />} />

        <Route path="/enforcement" element={<Enforcement />} />
        <Route path="/enforcement/disciplinary-actions" element={<DisciplinaryActions />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchResults />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
