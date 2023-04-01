/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENAI_API_KEY: "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"
  readonly HTTPS_PROXY: "http://127.0.0.1:7890"
  readonly OPENAI_API_BASE_URL: "https://api.openai.com"
  readonly HEAD_SCRIPTS: string
  readonly SECRET_KEY: string
  readonly SITE_PASSWORD: string
  readonly OPENAI_API_MODEL: "gpt-3.5-turbo"
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
