import { createFileRoute } from "@tanstack/react-router";
import { About, CtaBanner, PageIntro, WhyUs } from "@/components/site/Sections";
import { useT } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/meista")({
  head: ({ match }) => seo(match.context.lang, "about"),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <>
      <PageIntro eyebrow={t.about.eyebrow} title={t.about.title} />
      <About />
      <WhyUs />
      <div className="pt-20 lg:pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
