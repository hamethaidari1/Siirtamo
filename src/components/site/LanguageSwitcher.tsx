import { useLang, useSetLang, useT, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "fi", label: "Suomi" },
  { code: "en", label: "English" },
];

export function LanguageSwitcher() {
  const lang = useLang();
  const setLang = useSetLang();
  const t = useT();

  return (
    <div
      role="group"
      aria-label={t.header.language}
      className="inline-flex shrink-0 rounded-full border border-border bg-card p-0.5 text-xs font-bold"
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={label}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={cn(
            "h-8 min-w-8 rounded-full px-2 uppercase transition-colors focus-visible:rounded-full",
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-heading",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
