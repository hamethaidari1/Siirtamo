import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  CheckCircle2,
  GraduationCap,
  Home,
  PartyPopper,
  Sparkles,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { useLang, useServices, useT } from "@/lib/i18n";
import { FEATURED_PRICES, formatPrice, PRICES } from "@/lib/pricing";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Sections";

const ICONS: Record<string, LucideIcon> = {
  kotisiivous: Home,
  muuttosiivous: Truck,
  toimistosiivous: Building2,
  "paivakodit-ja-koulut": GraduationCap,
  liiketilat: Store,
  "autojen-sisapuhdistus": Car,
  "juhlat-ja-tapahtumat": PartyPopper,
};

/* ─── Home page cards ────────────────────────────────────────────────── */
export function PricingCards() {
  const t = useT();
  const lang = useLang();
  const services = useServices();
  const featured = FEATURED_PRICES.flatMap((slug) => services.filter((s) => s.slug === slug));

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHead eyebrow={t.pricing.eyebrow} title={t.pricing.title} text={t.pricing.text} />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {featured.map((service, i) => {
          const Icon = ICONS[service.slug] ?? Sparkles;
          const price = PRICES[service.slug];
          const rate = price?.hourlyRate ?? null;
          const minimum = price?.minimumHours ?? null;
          return (
            <Reveal key={service.slug} delay={i * 70}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card">
                <div className="flex min-h-[3.75rem] items-start justify-between gap-4">
                  <h3 className="text-xl font-bold leading-snug text-heading">{service.title}</h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>

                <div className="mt-7 min-h-[6.5rem]">
                  {rate === null ? (
                    <>
                      <p className="eyebrow">{t.pricing.priceLabel}</p>
                      <p className="mt-2 text-3xl font-extrabold tracking-tight text-heading">
                        {t.pricing.onRequest}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {t.pricing.onRequestNote}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="eyebrow">{t.pricing.startingAt}</p>
                      <p className="mt-2 text-4xl font-extrabold tracking-tight text-heading">
                        {formatPrice(lang, rate)}
                        <span className="ml-1.5 text-sm font-medium tracking-normal text-muted-foreground">
                          {t.pricing.perHour}
                        </span>
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {t.pricing.inclVat}
                        {minimum !== null && ` · ${t.pricing.minimum} ${minimum} h`}
                      </p>
                    </>
                  )}
                </div>

                <p className="eyebrow mt-6">{t.pricing.includes}</p>
                <ul className="mt-3 flex-1 space-y-2.5 text-sm text-foreground">
                  {(t.pricing.features[service.slug] ?? []).map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/pyyda-tarjous"
                  search={{ palvelu: service.slug }}
                  className="group mt-7 flex items-center justify-between border-t border-border pt-5 text-sm font-bold text-heading transition-colors hover:text-primary"
                >
                  {t.pricing.cta}
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">{t.pricing.moreText}</p>
        <Link
          to="/hinnasto"
          className="inline-flex items-center gap-2 font-bold text-heading transition-colors hover:text-primary"
        >
          {t.pricing.viewAll}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

/* ─── Full price list ────────────────────────────────────────────────── */
export function PriceTable() {
  const t = useT();
  const lang = useLang();
  const services = useServices();

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-background/60 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
              <th scope="col" className="px-4 py-3.5 sm:px-6">
                {t.pricing.tableService}
              </th>
              <th scope="col" className="px-2 py-3.5 sm:px-4">
                {t.pricing.tableRate}
              </th>
              <th scope="col" className="hidden px-4 py-3.5 md:table-cell">
                {t.pricing.tableMinimum}
              </th>
              <th scope="col" className="px-4 py-3.5 sm:px-6">
                <span className="sr-only">{t.pricing.cta}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => {
              const Icon = ICONS[service.slug] ?? Sparkles;
              const price = PRICES[service.slug];
              const rate = price?.hourlyRate ?? null;
              const minimum = price?.minimumHours ?? null;
              return (
                <tr key={service.slug} className="border-b border-border last:border-0">
                  <th scope="row" className="px-4 py-4 font-bold text-heading sm:px-6">
                    <span className="flex items-center gap-3">
                      <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint text-primary sm:grid">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      {service.title}
                    </span>
                  </th>
                  <td className="px-2 py-4 sm:px-4">
                    {rate === null ? (
                      <span className="font-bold text-heading">{t.pricing.onRequest}</span>
                    ) : (
                      <>
                        <span className="font-bold text-heading">{formatPrice(lang, rate)}</span>
                        <span className="text-muted-foreground"> {t.pricing.perHour}</span>
                        <span className="block text-xs text-muted-foreground">
                          {t.pricing.inclVat}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="hidden px-4 py-4 text-muted-foreground md:table-cell">
                    {minimum === null ? t.pricing.agreed : `${t.pricing.minimum} ${minimum} h`}
                  </td>
                  <td className="px-4 py-4 text-right sm:px-6">
                    <Link
                      to="/pyyda-tarjous"
                      search={{ palvelu: service.slug }}
                      aria-label={`${t.pricing.cta}: ${service.title}`}
                      className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:px-4"
                    >
                      <span className="hidden sm:inline">{t.pricing.cta}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{t.pricing.tableNote}</p>
    </section>
  );
}
