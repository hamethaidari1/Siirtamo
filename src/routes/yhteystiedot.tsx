import { createFileRoute } from "@tanstack/react-router";
import { Contact, CtaBanner } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/yhteystiedot")({
  head: ({ match }) => seo(match.context.lang, "contact"),
  component: () => (
    <>
      <Contact />
      <CtaBanner />
    </>
  ),
});
