/// <reference path="../.astro/types.d.ts" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly XATA_API_KEY: string
  readonly XATA_BRANCH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
