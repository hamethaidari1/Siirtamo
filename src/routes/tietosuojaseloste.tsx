import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/Sections";
import { COMPANY } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tietosuojaseloste")({
  head: () => seo("Tietosuojaseloste", "Tietoa siitä, miten käsittelemme tarjouspyyntölomakkeella lähetettyjä henkilötietoja."),
  component: () => (
    <>
      <PageIntro eyebrow="Tietosuoja" title="Tietosuojaseloste" />
      <section className="mx-auto max-w-3xl space-y-8 px-5 py-16 leading-relaxed sm:px-8">
        <div>
          <h2 className="text-xl font-bold">Rekisterinpitäjä</h2>
          <p className="mt-2">{COMPANY.name}, {COMPANY.phone && `puh. ${COMPANY.phone}, `}{COMPANY.email ?? COMPANY.emailPlaceholder}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Käsiteltävät tiedot</h2>
          <p className="mt-2">Tarjouspyyntölomakkeella annetut tiedot: nimi, sähköpostiosoite, puhelinnumero, toivottu palvelu, kohteen tiedot, sijainti, ajankohta ja lisätiedot.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Käsittelyn tarkoitus</h2>
          <p className="mt-2">Tietoja käytetään ainoastaan tarjouspyyntöön vastaamiseen ja asiakkaan kanssa yhteydenpitoon.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Oikeutesi</h2>
          <p className="mt-2">Voit pyytää tietojesi tarkastamista, korjaamista tai poistamista ottamalla yhteyttä rekisterinpitäjään.</p>
        </div>
      </section>
    </>
  ),
});
