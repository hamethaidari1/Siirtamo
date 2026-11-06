import { createFileRoute } from "@tanstack/react-router";
import { About, Contact, CtaBanner, Hero, HowItWorks, Services, WhyUs } from "@/components/site/Sections";
import { PricingCards } from "@/components/site/Pricing";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: ({ match }) => seo(match.context.lang, "home"),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <PricingCards />
      <WhyUs />
      <HowItWorks />
      <About />
      <Contact />
      <CtaBanner />
    </>
  );
}
