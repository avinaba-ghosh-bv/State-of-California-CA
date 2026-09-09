export interface Agency {
  name: string
  active: boolean
  path?: string
}

export const agencies: Agency[] = [
  { name: 'East Carolina Board of Pharmacy', active: true, path: '/' },
  { name: 'East Carolina Board of Nursing', active: false, path: '/agencies/nursing' },
  { name: 'East Carolina Board of Dental Examiners', active: false, path: '/agencies/dental' },
  { name: 'East Carolina Tattoo Artist Licensing', active: false, path: '/agencies/tattoo' },
  { name: 'East Carolina Explosives Licensing', active: false, path: '/agencies/explosives' },
]
