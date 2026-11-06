import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { ContactValue } from "./ContactValue";
import logoImg from "@/assets/logo.png.png";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" aria-label={`${COMPANY.name} – ${t.header.homeLink}`}>
            <img
              src={logoImg}
              alt={COMPANY.name}
              className="h-12 w-auto object-contain brightness-0 invert"
              width={160}
              height={48}
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-70">
            {t.footer.tagline}
          </p>
        </div>

        <FooterCol title={t.footer.pages}>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/palvelut">{t.nav.services}</Link>
          <Link to="/hinnasto">{t.nav.pricing}</Link>
          <Link to="/meista">{t.nav.about}</Link>
          <Link to="/yhteystiedot">{t.nav.contact}</Link>
        </FooterCol>

        <FooterCol title={t.footer.services}>
          <Link to="/pyyda-tarjous" search={{ palvelu: "kotisiivous" }}>{t.footer.links.home}</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "muuttosiivous" }}>{t.footer.links.moving}</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "toimistosiivous" }}>{t.footer.links.office}</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "liiketilat" }}>{t.footer.links.commercial}</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "paivakodit-ja-koulut" }}>{t.footer.links.schools}</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "autojen-sisapuhdistus" }}>{t.footer.links.car}</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "juhlat-ja-tapahtumat" }}>{t.footer.links.events}</Link>
        </FooterCol>

        <FooterCol title={t.footer.contact}>
          <ContactValue kind="email" />
          <ContactValue kind="phone" />
          <span>{t.company.area}</span>
        </FooterCol>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {COMPANY.name}. {t.footer.rights}</p>
          <Link to="/tietosuojaseloste" className="transition-opacity hover:text-navy-foreground hover:underline">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-wider text-navy-foreground/60">{title}</h2>
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-navy-foreground/80 [&_a:hover]:text-primary-foreground [&_a:hover]:underline [&_a]:transition-colors">
        {children}
      </div>
    </div>
  );
}

