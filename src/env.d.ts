/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENAI_API_KEY: "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"
  readonly HTTPS_PROXY: string
  readonly OPENAI_API_BASE_URL: "https://api.openai.com"
  readonly HEAD_SCRIPTS: string
  readonly SECRET_KEY: string
  readonly SITE_PASSWORD: string
  readonly OPENAI_API_MODEL: "gpt-3.5-turbo"
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
