import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Phone } from "lucide-react";
import { PageIntro } from "@/components/site/Sections";
import { QuoteForm } from "@/components/site/QuoteForm";
import { COMPANY } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pyyda-tarjous")({
  validateSearch: z.object({ palvelu: z.string().optional() }),
  head: ({ match }) => seo(match.context.lang, "quote"),
  component: QuotePage,
});

function QuotePage() {
  const { palvelu } = Route.useSearch();
  const t = useT();
  return (
    <>
      <PageIntro
        eyebrow={t.quotePage.eyebrow}
        title={t.quotePage.title}
        text={t.quotePage.text}
      />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        {COMPANY.phone && (
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft sm:flex-row">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-primary">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold text-heading">{t.quotePage.phoneTitle}</p>
                <p className="text-xs text-muted-foreground">{t.quotePage.phoneText}</p>
              </div>
            </div>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span>{COMPANY.phone}</span>
            </a>
          </div>
        )}
        <QuoteForm key={palvelu ?? ""} initialService={palvelu} />
      </section>
    </>
  );
}
