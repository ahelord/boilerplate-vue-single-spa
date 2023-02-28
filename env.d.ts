/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_AUTHZ_CLIENT_ID: string;
  readonly VITE_AUTHZ_DOMAIN: string;
  readonly VITE_AUTHZ_AUDIENCE: string;
  readonly VITE_CONTROL_TOWER_API_URL: string;
  readonly VITE_BUILD_MODE: string;
  readonly VITE_APP_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
