import { COMPANY } from "@/lib/site";

/** Renders a clickable link once real details are set in COMPANY, otherwise the placeholder. */
export function ContactValue({ kind }: { kind: "email" | "phone" }) {
  if (kind === "email") {
    return COMPANY.email ? <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> : <span>{COMPANY.emailPlaceholder}</span>;
  }
  return COMPANY.phone ? (
    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
  ) : (
    <span>{COMPANY.phonePlaceholder}</span>
  );
}
