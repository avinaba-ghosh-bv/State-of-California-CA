export interface NavLink {
  label: string
  path: string
}

export interface NavSection {
  label: string
  path: string
  links: NavLink[]
}

export const primaryNav: NavSection[] = [
  {
    label: 'Consumers',
    path: '/consumers',
    links: [
      { label: 'Consumer Information', path: '/consumers' },
      { label: 'Search for a License', path: '/consumers/license-search' },
      { label: 'File a Complaint', path: '/consumers/file-complaint' },
    ],
  },
  {
    label: 'Applicants',
    path: '/applicants',
    links: [
      { label: 'Applicant Information', path: '/applicants' },
      { label: 'Apply for a Personal License', path: '/applicants/apply-personal-license' },
      { label: 'Pharmacist License', path: '/applicants/pharmacist-license' },
      { label: 'Pharmacy Technician', path: '/applicants/pharmacy-technician' },
      { label: 'Intern Pharmacist', path: '/applicants/intern-pharmacist' },
      { label: 'Application Requirements', path: '/applicants/application-requirements' },
      { label: 'Forms and Documents', path: '/applicants/forms' },
      { label: 'Fees', path: '/applicants/fees' },
      { label: 'Frequently Asked Questions', path: '/applicants/faq' },
    ],
  },
  {
    label: 'Licensees',
    path: '/licensees',
    links: [
      { label: 'License Information', path: '/licensees' },
      { label: 'Renew a License', path: '/licensees/renew' },
      { label: 'Continuing Education', path: '/licensees/continuing-education' },
      { label: 'License Verification', path: '/licensees/license-verification' },
    ],
  },
  {
    label: 'About Us',
    path: '/about',
    links: [
      { label: 'Board Information', path: '/about' },
      { label: 'Board Members', path: '/about/board' },
      { label: 'Meetings', path: '/about/meetings' },
      { label: 'Laws & Regulations', path: '/about/laws-regulations' },
    ],
  },
  {
    label: 'Enforcement',
    path: '/enforcement',
    links: [
      { label: 'Enforcement Information', path: '/enforcement' },
      { label: 'Disciplinary Actions', path: '/enforcement/disciplinary-actions' },
    ],
  },
]

export const footerLinks: NavLink[] = [
  { label: 'Contact Us', path: '/contact' },
  { label: 'Accessibility', path: '/about#accessibility' },
  { label: 'Privacy', path: '/about/laws-regulations' },
  { label: 'Terms of Use', path: '/about/laws-regulations' },
  { label: 'Public Records', path: '/about' },
  { label: 'Site Map', path: '/search' },
]

export interface SearchablePage {
  title: string
  path: string
  keywords: string[]
  section: string
}

export const searchIndex: SearchablePage[] = [
  { title: 'Home', path: '/', section: 'General', keywords: ['home', 'board of pharmacy', 'east carolina'] },
  { title: 'Apply for a Personal License', path: '/applicants/apply-personal-license', section: 'Applicants', keywords: ['apply', 'application', 'personal license', 'examination'] },
  { title: 'Pharmacist License Requirements', path: '/applicants/pharmacist-license', section: 'Applicants', keywords: ['pharmacist', 'eligibility', 'education', 'examination', 'background check', 'experience', 'requirements'] },
  { title: 'Pharmacy Technician', path: '/applicants/pharmacy-technician', section: 'Applicants', keywords: ['technician', 'pharmacy technician', 'registration'] },
  { title: 'Intern Pharmacist', path: '/applicants/intern-pharmacist', section: 'Applicants', keywords: ['intern', 'internship', 'pharmacy school'] },
  { title: 'Application Requirements', path: '/applicants/application-requirements', section: 'Applicants', keywords: ['documents', 'required documents', 'background check', 'checklist'] },
  { title: 'Forms and Documents', path: '/applicants/forms', section: 'Applicants', keywords: ['forms', 'pdf', 'downloads', 'checklist'] },
  { title: 'Fees', path: '/applicants/fees', section: 'Applicants', keywords: ['fees', 'cost', 'application fee', 'renewal fee'] },
  { title: 'Frequently Asked Questions', path: '/applicants/faq', section: 'Applicants', keywords: ['faq', 'questions', 'help'] },
  { title: 'License Information', path: '/licensees', section: 'Licensees', keywords: ['licensee', 'license status'] },
  { title: 'Renew a License', path: '/licensees/renew', section: 'Licensees', keywords: ['renew', 'renewal', 'continuing education', 'expiration'] },
  { title: 'Continuing Education', path: '/licensees/continuing-education', section: 'Licensees', keywords: ['ce', 'continuing education', 'hours'] },
  { title: 'License Verification', path: '/licensees/license-verification', section: 'Licensees', keywords: ['verify', 'verification', 'lookup'] },
  { title: 'Consumer Information', path: '/consumers', section: 'Consumers', keywords: ['consumer', 'public'] },
  { title: 'Search for a License', path: '/consumers/license-search', section: 'Consumers', keywords: ['search', 'find a pharmacist', 'lookup'] },
  { title: 'File a Complaint', path: '/consumers/file-complaint', section: 'Consumers', keywords: ['complaint', 'report', 'enforcement'] },
  { title: 'Board Information', path: '/about', section: 'About Us', keywords: ['about', 'board', 'mission'] },
  { title: 'Board Members', path: '/about/board', section: 'About Us', keywords: ['board members', 'chair', 'appointees'] },
  { title: 'Meetings', path: '/about/meetings', section: 'About Us', keywords: ['meetings', 'agenda', 'minutes'] },
  { title: 'Laws & Regulations', path: '/about/laws-regulations', section: 'About Us', keywords: ['laws', 'regulations', 'statutes', 'rules'] },
  { title: 'Enforcement Information', path: '/enforcement', section: 'Enforcement', keywords: ['enforcement', 'discipline'] },
  { title: 'Disciplinary Actions', path: '/enforcement/disciplinary-actions', section: 'Enforcement', keywords: ['disciplinary actions', 'violations', 'sanctions'] },
  { title: 'Contact Us', path: '/contact', section: 'General', keywords: ['contact', 'phone', 'email', 'address'] },
]
