import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { FREQUENCIES, PROPERTY_TYPES, SERVICES, COMPANY } from "@/lib/site";
import { quoteSchema, type QuoteValues } from "@/lib/quote-schema";
import { cn } from "@/lib/utils";

import { submitQuoteRequest } from "@/lib/quote.functions";

const field =
  "mt-2 block h-12 w-full rounded-xl border border-input bg-card px-4 text-base text-heading transition-all duration-200 placeholder:text-muted-foreground hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-[invalid=true]:border-destructive";

export function QuoteForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const valid = SERVICES.some((s) => s.slug === initialService) ? initialService! : "";
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: valid, propertyType: "", frequency: "", privacy: undefined as unknown as true },
  });

  const onSubmit = async (v: QuoteValues) => {
    setStatus("idle");
    setErrorMessage("");

    try {
      const result = await submitQuoteRequest({ data: v });
      if (!result.success) {
        setErrorMessage(
          result.error || "Tarjouspyynnön lähettäminen epäonnistui. Yritä hetken kuluttua uudelleen tai ota yhteyttä suoraan puhelimitse."
        );
        setStatus("error");
        return;
      }

      reset({ service: "", propertyType: "", frequency: "", privacy: undefined as unknown as true });
      setStatus("success");
    } catch (err: unknown) {
      console.error("Quote submission error:", err);
      // Fallback: try direct Supabase insert if server function network route fails
      try {
        const serviceTitle = SERVICES.find((s) => s.slug === v.service)?.title ?? v.service;
        const { error: directError } = await supabase.from("quote_requests").insert({
          name: v.name,
          email: v.email,
          phone: v.phone || null,
          service: serviceTitle,
          property_type: v.propertyType || null,
          location: v.location,
          preferred_date: v.preferredDate || null,
          frequency: v.frequency || null,
          details: v.details || null,
          privacy_accepted: v.privacy,
        });

        if (!directError) {
          reset({ service: "", propertyType: "", frequency: "", privacy: undefined as unknown as true });
          setStatus("success");
          return;
        }
      } catch {
        // ignore fallback error
      }

      setErrorMessage("Tarjouspyynnön lähettäminen epäonnistui. Yritä hetken kuluttua uudelleen tai ota yhteyttä suoraan puhelimitse.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center shadow-card animate-in fade-in duration-300">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-mint text-primary">
          <CheckCircle2 className="h-9 w-9" aria-hidden />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-heading">Kiitos tarjouspyynnöstäsi!</h3>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          Tietosi on vastaanotettu onnistuneesti. Käsittelemme pyyntösi ja otamme sinuun yhteyttä mahdollisimman pian.
        </p>
        {COMPANY.phone && (
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Kiireellisissä asioissa voit myös soittaa meille suoraan:{" "}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="font-bold text-primary underline underline-offset-2"
            >
              {COMPANY.phone}
            </a>
          </p>
        )}
        <Button variant="outline" className="mt-7 font-semibold" onClick={() => setStatus("idle")}>
          Lähetä uusi pyyntö
        </Button>
      </div>
    );
  }

  const err = (k: keyof QuoteValues) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-xs font-semibold text-destructive">{errors[k]?.message as string}</p> : null;
  const aria = (k: keyof QuoteValues) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nimi" required htmlFor="name">
          <input id="name" autoComplete="name" className={field} {...aria("name")} {...register("name")} />{err("name")}
        </Field>
        <Field label="Sähköpostiosoite" required htmlFor="email">
          <input id="email" type="email" autoComplete="email" className={field} {...aria("email")} {...register("email")} />{err("email")}
        </Field>
        <Field label="Puhelinnumero" htmlFor="phone">
          <input id="phone" type="tel" autoComplete="tel" className={field} {...aria("phone")} {...register("phone")} />{err("phone")}
        </Field>
        <Field label="Siivouspalvelu" required htmlFor="service">
          <select id="service" className={field} {...aria("service")} {...register("service")}>
            <option value="">Valitse palvelu</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </select>{err("service")}
        </Field>
        <Field label="Kohteen tyyppi" htmlFor="propertyType">
          <select id="propertyType" className={field} {...register("propertyType")}>
            <option value="">Valitse kohde</option>
            {PROPERTY_TYPES.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Postinumero tai sijainti" required htmlFor="location">
          <input id="location" autoComplete="postal-code" className={field} {...aria("location")} {...register("location")} />{err("location")}
        </Field>
        <Field label="Siivouksen toivottu ajankohta" htmlFor="preferredDate">
          <input id="preferredDate" type="date" className={field} {...register("preferredDate")} />
        </Field>
        <Field label="Siivouksen toistuvuus" htmlFor="frequency">
          <select id="frequency" className={field} {...register("frequency")}>
            <option value="">Valitse toistuvuus</option>
            {FREQUENCIES.map((f) => <option key={f}>{f}</option>)}
          </select>
        </Field>
        <Field label="Lisätiedot ja toiveet" htmlFor="details" className="sm:col-span-2">
          <textarea id="details" rows={4} className={cn(field, "h-auto py-3")} placeholder="Kerro tarkemmin kohteesta, neliöistä tai toiveistasi..." {...aria("details")} {...register("details")} />{err("details")}
        </Field>
      </div>

      <div className="mt-6 rounded-xl border border-border/80 bg-background/60 p-4">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-heading">
          <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded accent-primary" {...aria("privacy")} {...register("privacy")} />
          <span className="leading-relaxed">
            Olen lukenut <Link to="/tietosuojaseloste" target="_blank" className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">tietosuojaselosteen</Link> ja hyväksyn tietojeni käsittelyn tarjouspyynnön käsittelyä varten. <span className="text-destructive">*</span>
          </span>
        </label>
        {err("privacy")}
      </div>

      {status === "error" && (
        <div role="alert" className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
          <span>{errorMessage || "Tarjouspyynnön lähettäminen epäonnistui. Yritä hetken kuluttua uudelleen tai ota yhteyttä suoraan sähköpostitse."}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-8 w-full sm:w-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft transition-all duration-200 hover:shadow-card hover:-translate-y-0.5"
      >
        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Lähetetään…</> : "Lähetä tarjouspyyntö"}
      </Button>
    </form>
  );
}

function Field({ label, required, htmlFor, className, children }: { label: string; required?: boolean; htmlFor: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-heading">
        {label} {required ? <span className="text-destructive">*</span> : <span className="font-normal text-muted-foreground">(valinnainen)</span>}
      </label>
      {children}
    </div>
  );
}
