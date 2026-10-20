import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, HowItWorks, PageIntro, Services } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/palvelut")({
  head: () =>
    seo(
      "Palvelut | Kotisiivous, muuttosiivous ja toimistosiivous Helsingissä",
      "Siivouspalvelut koteihin, toimistoihin, liiketiloihin, päiväkoteihin ja tapahtumiin Helsingissä ja lähialueilla. Pyydä tarjous valitsemastasi palvelusta.",
    ),
  component: () => (
    <>
      <PageIntro
        eyebrow="Palvelut"
        title="Siivouspalvelut eri tarpeisiin"
        text="Tarjoamme siivousratkaisuja koteihin, yrityksille ja yhteisöille. Valitsemme sopivan palvelun yhdessä asiakkaan tarpeiden mukaan."
      />
      <Services withHead={false} />
      <HowItWorks />
      <CtaBanner />
    </>
  ),
});
