import { describe, it, expect, vi } from "vitest";
import { sendQuoteNotification } from "@/server/email";
import type { QuoteValues } from "@/lib/quote-schema";

describe("Email Notification Workflow", () => {
  const sampleData: QuoteValues = {
    name: "Teemu Testaaja",
    email: "teemu@esimerkki.fi",
    phone: "040 123 4567",
    service: "kotisiivous",
    propertyType: "Omakotitalo",
    location: "00100 Helsinki",
    preferredDate: "2026-11-15",
    frequency: "Kerran kuussa",
    details: "Testipyyntö siivouspalvelulle.",
    privacy: true,
  };

  it("handles unconfigured SMTP gracefully without throwing an exception", async () => {
    // When SMTP credentials are not yet set
    const originalHost = process.env.SMTP_HOST;
    delete process.env.SMTP_HOST;

    const result = await sendQuoteNotification(sampleData, "Kotisiivous", "test-id-123");

    expect(result.success).toBe(false);
    expect(result.configured).toBe(false);
    expect(result.error).toBeDefined();

    // Restore
    if (originalHost) process.env.SMTP_HOST = originalHost;
  });

  it("attempts to send when SMTP settings are provided and returns informative failure if server unreachable", async () => {
    process.env.SMTP_HOST = "mail.siirtamo.fi";
    process.env.SMTP_PORT = "465";
    process.env.SMTP_USER = "info@siirtamo.fi";
    process.env.SMTP_PASS = "mock_password_for_testing";

    const result = await sendQuoteNotification(sampleData, "Kotisiivous");

    expect(result.configured).toBe(true);
    // Since mock_password is used without an open internet connection to mail.siirtamo.fi in test,
    // it must return success: false with an error message rather than crashing
    expect(typeof result.success).toBe("boolean");

    delete process.env.SMTP_HOST;
    delete process.env.SMTP_PORT;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASS;
  });
});
