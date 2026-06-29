/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_GA4_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_META_PIXEL_ID: string
  readonly VITE_CLARITY_ID: string
  readonly VITE_FORM_ENDPOINT: string
  readonly VITE_RESEND_API_URL: string
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
