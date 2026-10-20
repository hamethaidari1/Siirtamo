import { createFileRoute } from "@tanstack/react-router";
import { About, CtaBanner, PageIntro, WhyUs } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/meista")({
  head: () =>
    seo(
      "Meistä | Huolellista siivouspalvelua Helsingissä",
      "Palvelemme kotitalouksia, yrityksiä ja yhteisöjä Helsingissä ja lähialueilla. Tärkeintä meille on huolellinen työnjälki ja sujuva yhteistyö.",
    ),
  component: () => (
    <>
      <PageIntro eyebrow="Meistä" title="Siisti tila alkaa hyvästä yhteistyöstä" />
      <About />
      <WhyUs />
      <div className="pt-20 lg:pt-28"><CtaBanner /></div>
    </>
  ),
});
