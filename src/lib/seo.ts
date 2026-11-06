import type { Lang } from "@/lib/i18n";
import { messages } from "@/lib/translations";

export function seo(lang: Lang, page: keyof (typeof messages)["fi"]["seo"]) {
  const { title, description } = messages[lang].seo[page];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "en" ? "en_GB" : "fi_FI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  };
}
