export interface RequiredDocument {
  document: string
  required: 'Yes' | 'If applicable'
  notes: string
}

export const requiredDocuments: RequiredDocument[] = [
  { document: 'Government-issued identification', required: 'Yes', notes: 'Valid photo identification' },
  { document: 'Pharmacy school transcript', required: 'Yes', notes: 'Must be submitted directly by the institution' },
  { document: 'Degree verification', required: 'Yes', notes: 'Required for pharmacist applicants' },
  { document: 'Examination results', required: 'Yes', notes: 'Required before final licensure' },
  { document: 'Pharmacy practice experience documentation', required: 'Yes', notes: 'Must document required hours' },
  { document: 'Criminal background check', required: 'Yes', notes: 'Required for all applicants' },
  { document: 'Photograph', required: 'Yes', notes: 'Recent passport-style photograph' },
  { document: 'License verification', required: 'If applicable', notes: 'Required for applicants licensed in another jurisdiction' },
  { document: 'Name change documentation', required: 'If applicable', notes: 'Required when the applicant has changed their legal name' },
  { document: 'Foreign education documentation', required: 'If applicable', notes: 'Required for foreign-educated applicants' },
]

export interface Examination {
  name: string
  requirement: string
}

export const examinations: Examination[] = [
  { name: 'North American Pharmacist Licensure Examination', requirement: 'Required' },
  { name: 'East Carolina Pharmacy Jurisprudence Examination', requirement: 'Required' },
]

export interface Fee {
  label: string
  amount: string
  appliesTo: string
}

export const fees: Fee[] = [
  { label: 'Initial Pharmacist Application Fee', amount: '$250', appliesTo: 'Pharmacist License — initial application' },
  { label: 'Initial License Issuance Fee', amount: '$100', appliesTo: 'Pharmacist License — issuance upon approval' },
  { label: 'Renewal Fee', amount: '$175', appliesTo: 'Pharmacist License — biennial renewal' },
  { label: 'Late Renewal Fee', amount: '$75', appliesTo: 'Pharmacist License — renewal submitted after expiration' },
  { label: 'Pharmacy Technician Registration Fee', amount: '$85', appliesTo: 'Pharmacy Technician — initial registration' },
  { label: 'Intern Pharmacist Registration Fee', amount: '$50', appliesTo: 'Intern Pharmacist — initial registration' },
]

export interface ApplicationStep {
  step: number
  title: string
  description: string
}

export const applicationProcess: ApplicationStep[] = [
  { step: 1, title: 'Review Eligibility', description: 'Applicant reviews education, examination, experience, and background check requirements.' },
  { step: 2, title: 'Complete Application', description: 'Applicant provides personal information, education history, professional history, and disclosures.' },
  { step: 3, title: 'Submit Documentation', description: 'Applicant submits required supporting documents.' },
  { step: 4, title: 'Complete Background Check', description: 'Applicant completes fingerprint and background check requirements.' },
  { step: 5, title: 'Examination', description: 'Applicant completes all required examinations.' },
  { step: 6, title: 'Board Review', description: 'Board staff review the application and supporting documentation.' },
  { step: 7, title: 'License Issuance', description: 'Applicants who satisfy all requirements receive a Pharmacist License.' },
]

export interface ConditionalRule {
  condition: string
  requirements: string[]
}

export const conditionalRules: ConditionalRule[] = [
  {
    condition: 'If the applicant graduated from a foreign pharmacy school',
    requirements: ['Foreign education evaluation', 'Equivalency documentation', 'Verification of credentials'],
  },
  {
    condition: 'If the applicant currently holds a license in another state',
    requirements: ['License verification', 'Current license number', 'Jurisdiction information'],
  },
  {
    condition: 'If the applicant has a criminal conviction',
    requirements: ['Written explanation', 'Court documentation', 'Additional supporting records'],
  },
  {
    condition: 'If the applicant has changed their legal name',
    requirements: ['Legal name change documentation'],
  },
  {
    condition: 'If the applicant is requesting examination accommodations',
    requirements: ['Accommodation request', 'Supporting documentation'],
  },
]

export interface BoardMember {
  name: string
  role: string
}

export const boardMembers: BoardMember[] = [
  { name: 'Dr. Eleanor Whitmore', role: 'Board Chair' },
  { name: 'Dr. Marcus Reed', role: 'Vice Chair' },
  { name: 'Dr. Sophia Bennett', role: 'Pharmacist Member' },
  { name: 'James Carter', role: 'Public Member' },
  { name: 'Dr. Natalie Brooks', role: 'Pharmacist Member' },
]

export interface Document {
  title: string
  description: string
  file: string
}

export const formDocuments: Document[] = [
  { title: 'Pharmacist License Application', description: 'Primary application form for pharmacist licensure in East Carolina.', file: '/documents/pharmacist-license-application.pdf' },
  { title: 'Pharmacist Application Checklist', description: 'Checklist of all documents required to complete a pharmacist application.', file: '/documents/pharmacist-application-checklist.pdf' },
  { title: 'Pharmacy Practice Experience Form', description: 'Documents supervised pharmacy practice experience hours.', file: '/documents/pharmacy-practice-experience-form.pdf' },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'How long does the application process take?',
    answer: 'Applications are generally reviewed after all required documentation has been received. Processing time may vary depending on application completeness.',
  },
  {
    question: 'Can I apply before completing my examination?',
    answer: 'Applicants may begin the application process before completing all examination requirements, but a license cannot be issued until all applicable requirements are satisfied.',
  },
  {
    question: 'What happens if my application is incomplete?',
    answer: 'The Board may request additional information or documentation. Processing may be delayed until the requested information is received.',
  },
  {
    question: 'Do out-of-state pharmacists need license verification?',
    answer: 'Applicants currently or previously licensed in another jurisdiction may be required to submit verification.',
  },
  {
    question: 'How often must I renew my license?',
    answer: 'Pharmacist licenses must be renewed every two years.',
  },
]
