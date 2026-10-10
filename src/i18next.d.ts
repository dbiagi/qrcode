import "i18next";
import en from "./locales/en.json";
declare module "i18next" {
  interface CustomTypeOptions {
    resources: { translation: typeof en };
  }
}
export const SUPPORTED_LANGUAGES = ["en", "pt"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
