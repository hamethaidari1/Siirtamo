import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/Sections";
import { COMPANY } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tietosuojaseloste")({
  head: ({ match }) => seo(match.context.lang, "privacy"),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { privacy } = useT();
  return (
    <>
      <PageIntro eyebrow={privacy.eyebrow} title={privacy.title} />
      <section className="mx-auto max-w-3xl space-y-8 px-5 py-16 leading-relaxed sm:px-8">
        <div>
          <h2 className="text-xl font-bold">{privacy.controller}</h2>
          <p className="mt-2">
            {COMPANY.name}, {COMPANY.phone && `${privacy.phonePrefix} ${COMPANY.phone}, `}
            {COMPANY.email ?? COMPANY.emailPlaceholder}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{privacy.dataTitle}</h2>
          <p className="mt-2">{privacy.dataText}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{privacy.purposeTitle}</h2>
          <p className="mt-2">{privacy.purposeText}</p>
        </div>
        <div id="evasteet" className="scroll-mt-28">
          <h2 className="text-xl font-bold">{privacy.cookiesTitle}</h2>
          <p className="mt-2">{privacy.cookiesText}</p>
          <p className="mt-2">{privacy.thirdPartyText}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{privacy.rightsTitle}</h2>
          <p className="mt-2">{privacy.rightsText}</p>
        </div>
      </section>
    </>
  );
}
