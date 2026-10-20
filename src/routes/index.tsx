import { createFileRoute } from "@tanstack/react-router";
import { About, Contact, CtaBanner, Hero, HowItWorks, Services, WhyUs } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Siivouspalvelut Helsinki | Koti-, Toimisto- ja Muuttosiivous",
      "Luotettavat siivouspalvelut Helsingissä ja lähialueilla. Kotisiivous, muuttosiivous, toimistosiivous, liiketilojen siivous ja paljon muuta. Pyydä tarjous!",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <About />
      <Contact />
      <CtaBanner />
    </>
  );
}
