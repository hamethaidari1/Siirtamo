import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, HowItWorks, PageIntro, Services } from "@/components/site/Sections";
import { useT } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/palvelut")({
  head: ({ match }) => seo(match.context.lang, "services"),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  return (
    <>
      <PageIntro eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.pageText} />
      <Services withHead={false} />
      <HowItWorks />
      <CtaBanner />
    </>
  );
}
