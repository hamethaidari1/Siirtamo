import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().trim().min(1, "Kirjoita nimesi.").max(120, "Nimi on liian pitkä."),
  email: z.string().trim().min(1, "Kirjoita sähköpostiosoitteesi.").email("Tarkista sähköpostiosoitteen muoto.").max(255),
  phone: z.string().trim().max(40, "Puhelinnumero on liian pitkä.").optional().or(z.literal("")),
  service: z.string().min(1, "Valitse siivouspalvelu."),
  propertyType: z.string().optional().or(z.literal("")),
  location: z.string().trim().min(1, "Kirjoita postinumero tai sijainti.").max(120),
  preferredDate: z.string().max(40).optional().or(z.literal("")),
  frequency: z.string().optional().or(z.literal("")),
  details: z.string().trim().max(2000, "Lisätiedot voivat olla enintään 2000 merkkiä.").optional().or(z.literal("")),
  privacy: z.literal(true, { errorMap: () => ({ message: "Hyväksy tietosuojaseloste jatkaaksesi." }) }),
});

export type QuoteValues = z.infer<typeof quoteSchema>;
