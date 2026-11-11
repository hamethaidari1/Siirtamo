import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  Phone,
  Repeat,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  Users,
  Building2,
  MessageSquareText,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site";
import { useServices, useT } from "@/lib/i18n";
import { ContactValue } from "./ContactValue";
import { QuoteForm } from "./QuoteForm";
import heroVideo from "@/assets/herovideo.mp4";
import heroPoster from "@/assets/herovideo-poster.jpg";
import why from "@/assets/s-auto.jpg";

/* ─── Shared section heading ─────────────────────────────────────── */
export function SectionHead({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
      )}
    </Reveal>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Started here, not with autoPlay: muted must be set as a property for browsers to
  // allow playback after server rendering, and reduced-motion visitors get the poster.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.muted = true;
    video.play().catch(() => {
      /* Autoplay refused (e.g. battery saver): the poster stays visible. */
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        src={heroVideo}
        poster={heroPoster}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px]"
      />
      {/* Keeps the headline readable: even on small screens, fading to the right on desktop */}
      <div className="absolute inset-0 bg-background/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-background/95 lg:via-background/75 lg:to-background/10" />
    </div>
  );
}

export function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      <HeroVideo />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:min-h-[38rem] lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:pb-16 lg:pt-20">
        {/* Left: copy */}
        <div className="flex flex-col">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-[18ch] text-[2.25rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.15rem]">
            {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-[1.75] text-foreground sm:text-[1.0625rem]">
            {t.hero.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft transition-all duration-200 hover:shadow-card hover:-translate-y-0.5"
            >
              <Link to="/pyyda-tarjous">
                {t.hero.freeQuote}
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold border-border hover:bg-mint/40 hover:text-heading"
            >
              <Link to="/palvelut">{t.hero.browse}</Link>
            </Button>
          </div>

          {COMPANY.phone && (
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground">
              <span>{t.hero.orCall}</span>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 font-bold text-heading underline underline-offset-4 hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary" aria-hidden />
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          )}

          <p className="mt-7 inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-heading shadow-soft sm:text-sm">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            {t.hero.badge}
          </p>
        </div>

        {/* Right: the video shows through here; only the service area badge sits on top */}
        <div className="flex items-center gap-3 self-start justify-self-start rounded-2xl border border-border bg-card px-5 py-3.5 shadow-card lg:self-end lg:justify-self-end">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-primary">
            <MapPin className="h-4 w-4" aria-hidden />
          </span>
          <div className="text-sm">
            <p className="font-bold text-heading">{t.hero.areaLabel}</p>
            <p className="text-muted-foreground">{t.company.area}</p>
          </div>
        </div>
      </div>

      {/* Feature strip with refined transition into services */}
      <div className="relative border-y border-border/80 bg-gradient-to-b from-card/85 to-card backdrop-blur-xs">
        <ul className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8 sm:py-7">
          {[
            { icon: Sparkles, label: t.hero.features.quality },
            { icon: CalendarClock, label: t.hero.features.flexible },
            { icon: SlidersHorizontal, label: t.hero.features.tailored },
          ].map(({ icon: I, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm font-semibold text-heading sm:text-base">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-primary shadow-xs border border-primary/10">
                <I className="h-4 w-4" aria-hidden />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Service Card ────────────────────────────────────────────────── */
function ServiceCard({ s }: { s: ReturnType<typeof useServices>[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card">
      <div className="overflow-hidden">
        <img
          src={s.image}
          alt={s.alt}
          width={720}
          height={480}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="text-lg font-bold leading-snug text-heading">{s.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {s.description}
        </p>
        <Link
          to="/pyyda-tarjous"
          search={{ palvelu: s.slug }}
          className="mt-2 inline-flex items-center gap-1.5 self-start text-sm font-bold text-primary transition-all duration-200 hover:gap-2.5"
        >
          {s.cta}
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

/* ─── Services ───────────────────────────────────────────────────── */
export function Services({ withHead = true }: { withHead?: boolean }) {
  const t = useT();
  const services = useServices();
  return (
    <section id="palvelut" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      {withHead && (
        <SectionHead
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          text={t.services.text}
        />
      )}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 60}>
            <ServiceCard s={s} />
          </Reveal>
        ))}

        {/* Intentional 8th card filling the last row on both desktop (span 2) and tablet (span 1) */}
        <Reveal delay={120} className="sm:col-span-1 lg:col-span-2">
          <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-mint/60 via-card to-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:border-primary/50 hover:shadow-card">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold text-primary shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  {t.services.customBadge}
                </span>
                <span className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft border border-border">
                  <SlidersHorizontal className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-heading">
                {t.services.customTitle}
              </h3>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                {t.services.customText}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 pt-5 border-t border-border sm:flex-row sm:items-center">
              <Button asChild className="font-bold shadow-soft">
                <Link to="/pyyda-tarjous">
                  {t.services.customCta}
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground sm:ml-2">
                {t.services.customNote}
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Why Us ─────────────────────────────────────────────────────── */
export function WhyUs() {
  const t = useT();
  const items = [
    {
      icon: ShieldCheck,
      ...t.why.reliable,
    },
    {
      icon: Sparkles,
      ...t.why.quality,
    },
    {
      icon: SlidersHorizontal,
      ...t.why.adaptive,
    },
    {
      icon: CalendarClock,
      ...t.why.hours,
    },
    {
      icon: Users,
      ...t.why.audience,
    },
    {
      icon: Repeat,
      ...t.why.frequency,
    },
  ];

  return (
    <section className="bg-mint">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal>
          <img
            src={why}
            alt={t.why.imageAlt}
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3.4] w-full rounded-[1.5rem] object-cover"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </Reveal>
        <div>
          <SectionHead
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            text={t.why.text}
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: I, t: heading, d }, i) => (
              <Reveal key={heading} delay={i * 50}>
                <li className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-card/70 p-4 transition-colors hover:bg-card">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft border border-border">
                    <I className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-heading leading-snug">{heading}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────────── */
export function HowItWorks() {
  const t = useT();
  const steps = [
    {
      icon: MessageSquareText,
      n: "01",
      ...t.how.tell,
    },
    {
      icon: ClipboardList,
      n: "02",
      ...t.how.quote,
    },
    {
      icon: Sparkles,
      n: "03",
      ...t.how.enjoy,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHead center eyebrow={t.how.eyebrow} title={t.how.title} />
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map(({ icon: I, n, t: heading, d }, i) => (
          <Reveal key={heading} delay={i * 90}>
            <li className="relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/30">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-primary">
                    <I className="h-5 w-5" aria-hidden />
                  </span>
                  <span
                    className="select-none text-3xl font-extrabold tracking-tight text-primary/25"
                    aria-hidden
                  >
                    {n}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-heading">{heading}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-primary">
                {t.how.step} {i + 1} / 3
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────────── */
export function About() {
  const t = useT();
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-28 items-center">
        <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />
        <Reveal className="flex flex-col justify-center space-y-5">
          <p className="text-base leading-[1.8] text-muted-foreground sm:text-[1.0625rem]">
            {t.about.p1}
          </p>
          <p className="text-base leading-[1.8] text-muted-foreground sm:text-[1.0625rem]">
            {t.about.p2}
          </p>
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
            <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center sm:text-left">
              <p className="text-sm font-bold text-heading">{t.about.values.care.t}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.about.values.care.d}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center sm:text-left">
              <p className="text-sm font-bold text-heading">{t.about.values.trust.t}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.about.values.trust.d}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center sm:text-left">
              <p className="text-sm font-bold text-heading">{t.about.values.flex.t}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.about.values.flex.d}</p>
            </div>
          </div>
          <div className="pt-2">
            <Button asChild size="lg" className="font-semibold shadow-soft">
              <Link to="/yhteystiedot">
                {t.about.cta}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────── */
export function Contact() {
  const t = useT();
  const rows = [
    { icon: Building2, label: t.contact.company, value: <span>{COMPANY.name}</span> },
    { icon: Mail, label: t.contact.email, value: <ContactValue kind="email" /> },
    { icon: Phone, label: t.contact.phone, value: <ContactValue kind="phone" /> },
    { icon: MapPin, label: t.contact.area, value: <span>{t.company.area}</span> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            text={t.contact.text}
          />
          <Reveal className="mt-9">
            <dl className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              {rows.map(({ icon: I, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border-b border-border px-5 py-4 last:border-0"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-primary">
                    <I className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-heading [&_a:hover]:text-primary [&_a]:transition-colors">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────────────── */
export function CtaBanner() {
  const t = useT();
  return (
    <section className="px-5 pb-20 sm:px-8 lg:pb-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-navy px-8 py-16 text-center sm:px-16 lg:py-20 shadow-hero">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[32px] border-primary/20 blur-[1px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-primary/15 blur-sm"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 text-primary border border-primary/30">
            <Leaf className="h-7 w-7" aria-hidden />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-navy-foreground sm:text-4xl lg:text-[2.75rem] tracking-tight">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base sm:text-lg text-navy-foreground/75 leading-relaxed">
            {t.cta.text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-card transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link to="/pyyda-tarjous">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            {COMPANY.phone && (
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                <span>
                  {t.cta.call}: {COMPANY.phone}
                </span>
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── Page intro (reused by sub-pages) ───────────────────────────── */
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="border-b border-border bg-mint">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {text && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
        )}
      </div>
    </section>
  );
}

