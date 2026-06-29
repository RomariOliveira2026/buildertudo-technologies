const readEnv = (key: keyof ImportMetaEnv) => import.meta.env[key] ?? ''

export const env = {
  siteUrl: readEnv('VITE_SITE_URL') || 'https://buildertudo.com',
  ga4Id: readEnv('VITE_GA4_ID'),
  gtmId: readEnv('VITE_GTM_ID'),
  metaPixelId: readEnv('VITE_META_PIXEL_ID'),
  clarityId: readEnv('VITE_CLARITY_ID'),
  resendApiUrl: readEnv('VITE_RESEND_API_URL'),
  supabaseUrl: readEnv('VITE_SUPABASE_URL'),
  supabaseAnonKey: readEnv('VITE_SUPABASE_ANON_KEY'),
  formEndpoint: readEnv('VITE_FORM_ENDPOINT'),
} as const

export const isAnalyticsEnabled = Boolean(
  env.ga4Id || env.gtmId || env.metaPixelId || env.clarityId,
)

export const isFormBackendEnabled = Boolean(
  env.formEndpoint || (env.supabaseUrl && env.supabaseAnonKey) || env.resendApiUrl,
)
