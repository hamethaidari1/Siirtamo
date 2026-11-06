import { createFileRoute } from "@tanstack/react-router";
import { PriceTable } from "@/components/site/Pricing";
import { CtaBanner, PageIntro } from "@/components/site/Sections";
import { useT } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/hinnasto")({
  head: ({ match }) => seo(match.context.lang, "pricing"),
  component: PricingPage,
});

function PricingPage() {
  const t = useT();
  return (
    <>
      <PageIntro
        eyebrow={t.pricing.eyebrow}
        title={t.pricing.pageTitle}
        text={t.pricing.pageText}
      />
      <PriceTable />
      <CtaBanner />
    </>
  );
}
