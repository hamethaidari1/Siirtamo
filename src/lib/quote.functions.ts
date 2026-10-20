import { createServerFn } from "@tanstack/react-start";
import { quoteSchema } from "@/lib/quote-schema";
import { SERVICES } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";
import { sendQuoteNotification, type EmailSendResult } from "@/server/email";

export type QuoteSubmissionResult = {
  success: boolean;
  savedToDatabase: boolean;
  emailResult: EmailSendResult;
  error?: string;
  submissionId?: string;
};

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .validator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }): Promise<QuoteSubmissionResult> => {
    const serviceTitle =
      SERVICES.find((s) => s.slug === data.service)?.title ?? data.service;

    // 1. First, persist the quote request to Supabase to guarantee no lead is lost
    let savedToDatabase = false;
    let submissionId: string | undefined;

    try {
      const { data: insertedData, error: dbError } = await supabase
        .from("quote_requests")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          service: serviceTitle,
          property_type: data.propertyType || null,
          location: data.location,
          preferred_date: data.preferredDate || null,
          frequency: data.frequency || null,
          details: data.details || null,
          privacy_accepted: data.privacy,
        });

      if (dbError) {
        console.error("[Quote Submission] Supabase insert error:", dbError);
        return {
          success: false,
          savedToDatabase: false,
          emailResult: { success: false, configured: false },
          error: "Tietokantaan tallentaminen epäonnistui. Yritä uudelleen hetken kuluttua.",
        };
      }

      savedToDatabase = true;
      if (insertedData && Array.isArray(insertedData) && insertedData.length > 0) {
        submissionId = (insertedData[0] as { id?: string })?.id;
      }
      console.log("[Quote Submission] Successfully saved quote request to Supabase.");
    } catch (err: unknown) {
      console.error("[Quote Submission] Exception during Supabase insert:", err);
      return {
        success: false,
        savedToDatabase: false,
        emailResult: { success: false, configured: false },
        error: "Palvelinvirhe pyyntöä tallennettaessa.",
      };
    }

    // 2. Dispatch server-side notification email to info@siirtamo.fi
    let emailResult: EmailSendResult;
    try {
      emailResult = await sendQuoteNotification(data, serviceTitle, submissionId);
    } catch (emailErr: unknown) {
      const errMsg = emailErr instanceof Error ? emailErr.message : String(emailErr);
      console.error("[Quote Submission] Email dispatch failed:", errMsg);
      emailResult = {
        success: false,
        configured: true,
        error: errMsg,
      };
    }

    return {
      success: true,
      savedToDatabase,
      emailResult,
      submissionId,
    };
  });
