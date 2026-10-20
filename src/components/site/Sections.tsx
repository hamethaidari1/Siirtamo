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
import { COMPANY, SERVICES } from "@/lib/site";
import { ContactValue } from "./ContactValue";
import { QuoteForm } from "./QuoteForm";
import hero from "@/assets/hero.jpg";
import why from "@/assets/s-koti.jpg";

/* ─── Shared section heading ─────────────────────────────────────── */
function SectionHead({
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
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Multi-layered Scandinavian ivory-and-sage ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* 1. Base subtle ivory-to-warm-white gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.986 0.006 84) 0%, oklch(0.978 0.009 88) 60%, oklch(0.972 0.012 92) 100%)",
          }}
        />

        {/* 2. Soft sage-green radial illumination centered behind the image area */}
        <div
          className="absolute -right-[15%] top-[-8%] h-[680px] w-[680px] rounded-full sm:-right-[8%] sm:h-[820px] sm:w-[820px] lg:right-[2%] lg:top-[4%] lg:h-[880px] lg:w-[880px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.938 0.038 152 / 0.5) 0%, oklch(0.958 0.02 152 / 0.22) 45%, transparent 72%)",
            filter: "blur(44px)",
          }}
        />

        {/* 3. Subtle warm ivory daylight diffusion on top-left (behind headline) */}
        <div
          className="absolute -left-[12%] top-[0%] h-[500px] w-[500px] rounded-full sm:h-[600px] sm:w-[600px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.995 0.008 85 / 0.75) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />

        {/* 4. Elegant architectural hairline contour rings */}
        <svg
          className="absolute -right-20 top-4 h-[620px] w-[620px] opacity-[0.32] sm:h-[740px] sm:w-[740px] lg:right-[1%] lg:top-[3%]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="300"
            cy="300"
            r="260"
            stroke="oklch(0.46 0.1 155)"
            strokeWidth="1"
            className="opacity-30"
          />
          <circle
            cx="300"
            cy="300"
            r="195"
            stroke="oklch(0.46 0.1 155)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="opacity-45"
          />
          <circle
            cx="300"
            cy="300"
            r="130"
            stroke="oklch(0.46 0.1 155)"
            strokeWidth="1"
            className="opacity-25"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:pb-16 lg:pt-20">
        {/* Left: copy */}
        <div className="flex flex-col">
          <p className="eyebrow">Siivouspalvelut Helsingissä ja lähialueilla</p>
          <h1 className="mt-4 max-w-[18ch] text-[2.25rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.15rem]">
            Puhtautta, laatua ja luotettavuutta –{" "}
            <span className="text-primary">juuri sinun tarpeisiisi.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
            Tarjoamme huolelliset ja joustavat siivouspalvelut koteihin, toimistoihin ja
            liiketiloihin Helsingissä ja lähialueilla. Me huolehdimme puhtaudesta – jotta sinä voit
            keskittyä olennaiseen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft transition-all duration-200 hover:shadow-card hover:-translate-y-0.5"
            >
              <Link to="/pyyda-tarjous">
                Pyydä maksuton tarjous
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold border-border hover:bg-mint/40 hover:text-heading"
            >
              <Link to="/palvelut">Tutustu palveluihin</Link>
            </Button>
          </div>

          {COMPANY.phone && (
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Tai soita suoraan:</span>
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
            Huolellista palvelua koteihin ja yrityksille
          </p>
        </div>

        {/* Right: hero image (responsive on mobile, tablet & desktop) */}
        <Reveal className="relative mt-2 sm:mt-6 lg:mt-0">
          {/* Soft sage-green glow aura immediately wrapping the photo */}
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] sm:-inset-6 lg:-inset-8"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, oklch(0.93 0.04 155 / 0.65) 0%, oklch(0.955 0.02 155 / 0.3) 50%, transparent 75%)",
              filter: "blur(28px)",
            }}
            aria-hidden="true"
          />

          {/* Elegant decorative backdrop panel (top-right) */}
          <div
            className="pointer-events-none absolute -right-2.5 -top-2.5 h-24 w-24 rounded-3xl border border-primary/15 bg-gradient-to-br from-mint to-mint/40 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32 lg:-right-6 lg:-top-6 lg:h-40 lg:w-40"
            aria-hidden="true"
          />

          {/* Subtle architectural accent badge (bottom-left) */}
          <div
            className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-xs sm:-bottom-5 sm:-left-5 sm:h-28 sm:w-28 sm:rounded-3xl"
            aria-hidden="true"
          />

          <img
            src={hero}
            alt="Siivooja pyyhkii keittiön työtasoa valoisassa skandinaavisessa kodissa"
            width={1200}
            height={1400}
            className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/4.6] w-full rounded-2xl sm:rounded-[1.5rem] object-cover"
            style={{ boxShadow: "var(--shadow-hero)" }}
          />

          {/* Location badge */}
          <div className="absolute -bottom-3 left-4 sm:-bottom-4 sm:left-6 flex items-center gap-3 rounded-xl sm:rounded-2xl border border-border bg-card px-4 py-2.5 sm:px-5 sm:py-3.5 shadow-card">
            <span className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full bg-mint text-primary">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-heading">Palvelualue</p>
              <p className="text-muted-foreground">Helsinki ja lähialueet</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Feature strip with refined transition into services */}
      <div className="relative border-y border-border/80 bg-gradient-to-b from-card/85 to-card backdrop-blur-xs">
        <ul className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8 sm:py-7">
          {[
            { icon: Sparkles, t: "Huolellista työnjälkeä" },
            { icon: CalendarClock, t: "Joustavaa palvelua" },
            { icon: SlidersHorizontal, t: "Palvelut tarpeidesi mukaan" },
          ].map(({ icon: I, t }) => (
            <li key={t} className="flex items-center gap-3 text-sm font-semibold text-heading sm:text-base">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-primary shadow-xs border border-primary/10">
                <I className="h-4 w-4" aria-hidden />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Service Card ────────────────────────────────────────────────── */
function ServiceCard({ s }: { s: (typeof SERVICES)[number] }) {
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
  return (
    <section id="palvelut" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      {withHead && (
        <SectionHead
          eyebrow="Palvelut"
          title="Siivouspalvelut eri tarpeisiin"
          text="Tarjoamme siivousratkaisuja koteihin, yrityksille ja yhteisöille. Sopiva palvelu löytyy aina asiakkaan tarpeiden mukaan."
        />
      )}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
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
                  Räätälöity palvelu
                </span>
                <span className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft border border-border">
                  <SlidersHorizontal className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-heading">
                Tarvitsetko erityisen siivousratkaisun?
              </h3>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                Eikö listalta löytynyt suoraan omaan kohteeseesi sopivaa kokonaisuutta? Suunnittelemme siivouksen joustavasti ja täsmällisesti juuri sinun tarpeidesi, aikataulujesi ja tilojesi mukaan.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 pt-5 border-t border-border sm:flex-row sm:items-center">
              <Button asChild className="font-bold shadow-soft">
                <Link to="/pyyda-tarjous">
                  Pyydä räätälöity tarjous
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground sm:ml-2">
                Maksuton kartoitus ja nopea yhteydenotto
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
  const items = [
    {
      icon: ShieldCheck,
      t: "Luotettava ja huolellinen palvelu",
      d: "Toimimme täsmällisesti ja huolehdimme tiloistasi vastuullisesti sovituin ehdoin.",
    },
    {
      icon: Sparkles,
      t: "Laadukas työnjälki",
      d: "Kiinnitämme huomiota pienimpiinkin yksityiskohtiin ja puhtauden viimeistelyyn.",
    },
    {
      icon: SlidersHorizontal,
      t: "Asiakkaan tarpeisiin mukautuva",
      d: "Räätälöimme siivousohjelman ja menetelmät aina kohteesi vaatimusten mukaan.",
    },
    {
      icon: CalendarClock,
      t: "Joustavat palveluajat",
      d: "Sovimme siivousajankohdat joustavasti arkesi tai liiketoimintasi rytmiin sopivaksi.",
    },
    {
      icon: Users,
      t: "Koteihin ja yrityksille",
      d: "Palvelemme yhtä huolellisesti niin yksityistalouksia kuin yritys- ja toimitila-asiakkaita.",
    },
    {
      icon: Repeat,
      t: "Säännöllinen tai kertaluonteinen",
      d: "Valitse jatkuva ylläpitosiivous tai kertaluonteinen perusteellinen loppusiivous.",
    },
  ];

  return (
    <section className="bg-mint">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal>
          <img
            src={why}
            alt="Siivooja imuroi kodin olohuonetta"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3.4] w-full rounded-[1.5rem] object-cover"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </Reveal>
        <div>
          <SectionHead
            eyebrow="Miksi me"
            title="Miksi valita meidät?"
            text="Hyvä siivouspalvelu perustuu luottamukseen, huolellisuuteen ja asiakkaan tarpeiden ymmärtämiseen."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 50}>
                <li className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-card/70 p-4 transition-colors hover:bg-card">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft border border-border">
                    <I className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-heading leading-snug">{t}</h3>
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
  const steps = [
    {
      icon: MessageSquareText,
      n: "01",
      t: "Kerro tarpeistasi",
      d: "Täytä nopea tarjouspyyntölomake tai ota yhteyttä. Kuvaile kohteesi ja toiveesi siivoukselle.",
    },
    {
      icon: ClipboardList,
      n: "02",
      t: "Saat selkeän tarjouksen",
      d: "Kartoitamme tarpeesi ja toimitamme selkeän, kilpailukykyisen tarjouksen ilman sitoumuksia.",
    },
    {
      icon: Sparkles,
      n: "03",
      t: "Nauti puhtaudesta",
      d: "Sovimme ajankohdan ja toteutamme siivouksen sovitulla tavalla huolellisesti ja ajallaan.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHead center eyebrow="Näin se toimii" title="Siivouspalvelu helposti ja vaivattomasti" />
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map(({ icon: I, n, t, d }, i) => (
          <Reveal key={t} delay={i * 90}>
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
                <h3 className="mt-6 text-lg font-bold text-heading">{t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-primary">
                Vaihe {i + 1} / 3
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
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-28 items-center">
        <SectionHead eyebrow="Meistä" title="Siisti tila alkaa hyvästä yhteistyöstä" />
        <Reveal className="flex flex-col justify-center space-y-5">
          <p className="text-base leading-[1.8] text-muted-foreground sm:text-[1.0625rem]">
            Haluamme tehdä arjestasi helpompaa tarjoamalla siivouspalveluita, jotka vastaavat juuri
            sinun tarpeitasi. Palvelemme kotitalouksia, yrityksiä ja yhteisöjä Helsingissä ja
            lähialueilla.
          </p>
          <p className="text-base leading-[1.8] text-muted-foreground sm:text-[1.0625rem]">
            Meille tärkeintä on huolellinen työnjälki, sujuva yhteistyö ja asiakkaan toiveiden
            huomioiminen. Olipa kyseessä säännöllinen kotisiivous, toimiston ylläpitosiivous tai
            yksittäinen muuttosiivous, suunnittelemme sopivan ratkaisun yhdessä kanssasi.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
            <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center sm:text-left">
              <p className="text-sm font-bold text-heading">Huolellisuus</p>
              <p className="text-xs text-muted-foreground mt-0.5">Tarkka työnjälki</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center sm:text-left">
              <p className="text-sm font-bold text-heading">Luotettavuus</p>
              <p className="text-xs text-muted-foreground mt-0.5">Sovittu pitää</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center sm:text-left">
              <p className="text-sm font-bold text-heading">Joustavuus</p>
              <p className="text-xs text-muted-foreground mt-0.5">Asiakkaan ehdoilla</p>
            </div>
          </div>
          <div className="pt-2">
            <Button asChild size="lg" className="font-semibold shadow-soft">
              <Link to="/yhteystiedot">
                Ota yhteyttä
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
  const rows = [
    { icon: Building2, label: "Yritys", value: <span>{COMPANY.name}</span> },
    { icon: Mail, label: "Sähköposti", value: <ContactValue kind="email" /> },
    { icon: Phone, label: "Puhelin", value: <ContactValue kind="phone" /> },
    { icon: MapPin, label: "Palvelualue", value: <span>{COMPANY.area}</span> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead
            eyebrow="Yhteystiedot & Tarjouspyyntö"
            title="Ota yhteyttä"
            text="Etsitkö luotettavaa siivouskumppania kotiisi tai yrityksesi tiloihin? Täytä lomake tai ota suoraan yhteyttä."
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
            Puhtautta, johon voit luottaa.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base sm:text-lg text-navy-foreground/75 leading-relaxed">
            Suunnitellaan yhdessä juuri sinun tarpeisiisi sopiva siivouspalvelu. Pyydä maksuton tarjous jo tänään.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-card transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link to="/pyyda-tarjous">
                Pyydä maksuton tarjous
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            {COMPANY.phone && (
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                <span>Soita: {COMPANY.phone}</span>
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

