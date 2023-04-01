/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENAI_API_KEY: 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
  readonly HTTPS_PROXY: string
  readonly OPENAI_API_BASE_URL: string
  readonly HEAD_SCRIPTS: string
  readonly SECRET_KEY: string
  readonly SITE_PASSWORD: string
  readonly OPENAI_API_MODEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
