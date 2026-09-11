import { COMMERCIAL_NAV_IDS, COMMERCIAL_OBSERVED_SECTIONS } from '../data/commercial'

export const navItems = COMMERCIAL_NAV_IDS.map((id) => ({ id, label: id }))

export type NavSectionId = (typeof COMMERCIAL_NAV_IDS)[number]

export const observedSections = COMMERCIAL_OBSERVED_SECTIONS
