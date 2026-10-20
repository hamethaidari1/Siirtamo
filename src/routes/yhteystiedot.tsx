import { createFileRoute } from "@tanstack/react-router";
import { Contact, CtaBanner } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/yhteystiedot")({
  head: () =>
    seo(
      "Yhteystiedot | Siivouspalvelut Helsinki ja lähialueet",
      "Ota yhteyttä ja pyydä tarjous siivouksesta kotiisi tai yrityksesi tiloihin Helsingissä ja lähialueilla.",
    ),
  component: () => (
    <>
      <Contact />
      <CtaBanner />
    </>
  ),
});
