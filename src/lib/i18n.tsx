import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { messages, SERVICE_TEXT_EN } from "@/lib/translations";

export type Lang = keyof typeof messages;

export const LANG_COOKIE = "siirtamo-lang";

export function parseLang(value: string | undefined | null): Lang {
  return value === "en" ? "en" : "fi";
}

const LanguageContext = createContext<Lang>("fi");

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/** The text of the current language: `const t = useT(); t.hero.title`. */
export function useT() {
  return messages[useLang()];
}

/** SERVICES with their title, description, button and image text in the current language. */
export function useServices() {
  const lang = useLang();
  return useMemo(
    () =>
      lang === "fi"
        ? SERVICES
        : SERVICES.map((service) => ({ ...service, ...SERVICE_TEXT_EN[service.slug] })),
    [lang],
  );
}

/** Saves the choice for a year and re-renders the current page in that language. */
export function useSetLang() {
  const router = useRouter();
  return useCallback(
    (lang: Lang) => {
      document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      void router.invalidate();
    },
    [router],
  );
}
