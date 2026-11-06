import { describe, expect, it } from "vitest";
import { SERVICES } from "@/lib/site";
import { FEATURED_PRICES, formatPrice, PRICES } from "./pricing";

describe("pricing", () => {
  it("formats euros for each language", () => {
    expect(formatPrice("en", 43.5)).toBe("€43.50");
    expect(formatPrice("fi", 43.5).replace(/\s/g, " ")).toBe("43,50 €");
  });

  it("has a price entry for every service and only features real services", () => {
    const slugs = SERVICES.map((service) => service.slug);
    expect(Object.keys(PRICES).sort()).toEqual([...slugs].sort());
    for (const slug of FEATURED_PRICES) expect(slugs).toContain(slug);
  });
});
