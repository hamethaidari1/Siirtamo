import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logoImg from "@/assets/logo.png.png";

const NAV = [
  { to: "/", key: "home" },
  { to: "/palvelut", key: "services" },
  { to: "/hinnasto", key: "pricing" },
  { to: "/meista", key: "about" },
  { to: "/yhteystiedot", key: "contact" },
] as const;

export function Logo() {
  const t = useT();
  return (
    <Link
      to="/"
      className="group flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      aria-label={`${COMPANY.name} – ${t.header.homeLink}`}
    >
      {/* 
        The 1448x1086 logo PNG has empty space above and below the artwork. The container
        crops that space, and its height must stay above ~0.35x the image width or the
        "siivous palvelut" line gets cut off.
      */}
      <div className="relative flex h-[50px] w-[128px] shrink-0 items-center justify-center overflow-hidden sm:h-[56px] sm:w-[145px] md:h-[64px] md:w-[165px]">
        <img
          src={logoImg}
          alt={COMPANY.name}
          className="h-auto w-[128px] max-w-none shrink-0 select-none object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:w-[145px] md:w-[165px]"
          width={1448}
          height={1086}
          loading="eager"
          decoding="async"
        />
      </div>
    </Link>
  );
}

export function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Close mobile menu on route changes / resize
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-b border-border bg-card/97 shadow-soft backdrop-blur-sm"
          : "border-b border-transparent bg-background/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:h-[5rem] sm:px-8 md:h-[5.5rem]">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label={t.header.mainNav} className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="group relative rounded-lg px-3.5 py-2 text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-heading data-[status=active]:text-primary"
            >
              {t.nav[n.key]}
              {/* Active underline */}
              <span className="absolute inset-x-3.5 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex lg:gap-5">
          <LanguageSwitcher />
          {COMPANY.phone && (
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              aria-label={`${t.header.callCompany}: ${COMPANY.phone}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-heading transition-colors hover:text-primary"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-mint text-primary shadow-xs">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
          )}
          <Button
            asChild
            className="h-10 px-5 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <Link to="/pyyda-tarjous">{t.header.getQuote}</Link>
          </Button>
        </div>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          {COMPANY.phone && (
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-primary transition-colors hover:bg-mint/80 focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={`${t.header.callCompany}: ${COMPANY.phone}`}
            >
              <Phone className="h-5 w-5" />
            </a>
          )}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl text-heading transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label={t.header.mobileNav}
          className="border-t border-border bg-card px-5 pb-6 pt-3 shadow-card lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-heading transition-colors hover:bg-accent data-[status=active]:bg-mint data-[status=active]:text-primary"
              >
                <span>{t.nav[n.key]}</span>
                <span className="text-xs font-medium text-muted-foreground/60">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
            {COMPANY.phone && (
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-bold text-heading shadow-soft transition-colors hover:bg-mint/40"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                <span>
                  {t.header.call}: {COMPANY.phone}
                </span>
              </a>
            )}
            <Button asChild className="w-full font-bold shadow-soft" size="lg">
              <Link to="/pyyda-tarjous" onClick={() => setOpen(false)}>
                {t.header.freeQuote}
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
