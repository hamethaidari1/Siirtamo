import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";
import { ContactValue } from "./ContactValue";
import logoImg from "@/assets/logo.png.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" aria-label="Siirtamo siivous palvelut – etusivu">
            <img
              src={logoImg}
              alt="Siirtamo siivous palvelut"
              className="h-12 w-auto object-contain brightness-0 invert"
              width={160}
              height={48}
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-70">
            Luotettavia ja huolellisia siivouspalveluita Helsingissä ja lähialueilla – koteihin,
            yrityksiin ja yhteisöihin.
          </p>
        </div>

        <FooterCol title="Sivut">
          <Link to="/">Etusivu</Link>
          <Link to="/palvelut">Palvelut</Link>
          <Link to="/meista">Meistä</Link>
          <Link to="/yhteystiedot">Yhteystiedot</Link>
        </FooterCol>

        <FooterCol title="Palvelut">
          <Link to="/pyyda-tarjous" search={{ palvelu: "kotisiivous" }}>Kotisiivous</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "muuttosiivous" }}>Muuttosiivous</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "toimistosiivous" }}>Toimistosiivous</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "liiketilat" }}>Liiketilojen siivous</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "paivakodit-ja-koulut" }}>Päiväkodit ja koulut</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "autojen-sisapuhdistus" }}>Autojen sisäpuhdistus</Link>
          <Link to="/pyyda-tarjous" search={{ palvelu: "juhlat-ja-tapahtumat" }}>Juhlat ja tapahtumat</Link>
        </FooterCol>

        <FooterCol title="Yhteystiedot">
          <ContactValue kind="email" />
          <ContactValue kind="phone" />
          <span>{COMPANY.area}</span>
        </FooterCol>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {COMPANY.name}. Kaikki oikeudet pidätetään.</p>
          <Link to="/tietosuojaseloste" className="transition-opacity hover:text-navy-foreground hover:underline">
            Tietosuojaseloste
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

