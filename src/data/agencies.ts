export interface Agency {
  name: string
  active: boolean
  path?: string
}

export const agencies: Agency[] = [
  { name: 'East Carolina Board of Pharmacy', active: true, path: '/' },
  { name: 'East Carolina Board of Nursing', active: false },
  { name: 'East Carolina Board of Dental Examiners', active: false },
  { name: 'East Carolina Tattoo Licensing', active: false },
  { name: 'East Carolina Elevator Safety Board', active: false },
]
