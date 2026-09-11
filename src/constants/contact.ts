import { SOCIAL, WHATSAPP_CONFIG } from '../config/commercial'

export const CONTACT = {
  email: 'contato@buildertudo.com',
  whatsappNumber: WHATSAPP_CONFIG.e164,
  whatsappDisplay: WHATSAPP_CONFIG.display,
  whatsapp: `https://wa.me/${WHATSAPP_CONFIG.e164}`,
  meeting: 'mailto:contato@buildertudo.com?subject=Orcamento%20-%20BuilderTudo',
  github: 'https://github.com/buildertudo',
  linkedin: 'https://linkedin.com/company/buildertudo',
  upwork: 'https://www.upwork.com/agencies/buildertudo',
  instagram: SOCIAL.instagramUrl,
  instagramHandle: SOCIAL.instagramHandle,
  careers: 'mailto:contato@buildertudo.com?subject=Carreiras%20-%20BuilderTudo',
} as const
