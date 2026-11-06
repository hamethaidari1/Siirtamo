/* ─── Edit prices here ───────────────────────────────────────────────────
 * hourlyRate:   euros per hour including VAT (e.g. 45.5), or null for "on request".
 * minimumHours: minimum booking in hours (e.g. 2), or null if agreed case by case.
 * Prices shown to consumers in Finland must include VAT.
 */
export const PRICES: Record<string, { hourlyRate: number | null; minimumHours: number | null }> = {
  kotisiivous: { hourlyRate: null, minimumHours: null },
  muuttosiivous: { hourlyRate: null, minimumHours: null },
  toimistosiivous: { hourlyRate: null, minimumHours: null },
  "paivakodit-ja-koulut": { hourlyRate: null, minimumHours: null },
  liiketilat: { hourlyRate: null, minimumHours: null },
  "autojen-sisapuhdistus": { hourlyRate: null, minimumHours: null },
  "juhlat-ja-tapahtumat": { hourlyRate: null, minimumHours: null },
};

/** The services shown as cards on the home page, in this order. */
export const FEATURED_PRICES = ["kotisiivous", "muuttosiivous", "toimistosiivous"];
/* ──────────────────────────────────────────────────────────────────────── */

export function formatPrice(lang: "fi" | "en", amount: number) {
  return new Intl.NumberFormat(lang === "en" ? "en-IE" : "fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
