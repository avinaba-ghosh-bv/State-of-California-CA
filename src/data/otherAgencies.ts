export interface OtherAgency {
  slug: string
  name: string
  shortName: string
  mission: string
  licenseTypes: string[]
}

export const otherAgencies: OtherAgency[] = [
  {
    slug: 'nursing',
    name: 'East Carolina Board of Nursing',
    shortName: 'Board of Nursing',
    mission:
      'The East Carolina Board of Nursing protects the health and safety of the public by regulating the practice of nursing and licensing registered nurses, licensed practical nurses, and advanced practice nurses.',
    licenseTypes: ['Registered Nurse (RN) License', 'Licensed Practical Nurse (LPN) License', 'Advanced Practice Registered Nurse License'],
  },
  {
    slug: 'dental',
    name: 'East Carolina Board of Dental Examiners',
    shortName: 'Board of Dental Examiners',
    mission:
      'The East Carolina Board of Dental Examiners protects the health and safety of the public by regulating the practice of dentistry and licensing dentists and dental hygienists.',
    licenseTypes: ['Dentist License', 'Dental Hygienist License', 'Dental Assistant Registration'],
  },
  {
    slug: 'tattoo',
    name: 'East Carolina Tattoo Artist Licensing',
    shortName: 'Tattoo Artist Licensing',
    mission:
      'East Carolina Tattoo Artist Licensing protects public health by regulating tattoo artists and licensed tattoo studios operating within the state.',
    licenseTypes: ['Tattoo Artist License', 'Tattoo Studio License', 'Apprentice Tattoo Artist Registration'],
  },
  {
    slug: 'explosives',
    name: 'East Carolina Explosives Licensing',
    shortName: 'Explosives Licensing',
    mission:
      'East Carolina Explosives Licensing regulates the safe handling, storage, and use of explosive materials by licensing qualified blasters and explosives handlers.',
    licenseTypes: ['Blaster License', 'Explosives Handler Permit', 'Explosives Storage Facility License'],
  },
]
