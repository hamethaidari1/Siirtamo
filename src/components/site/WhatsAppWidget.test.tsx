import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WhatsAppWidget } from "./WhatsAppWidget";

const GREETING_START = "Hei! 👋 Tervetuloa Siirtamolle.";

function advance(ms: number) {
  act(() => {
    vi.advanceTimersByTime(ms);
  });
}

const dialog = () => screen.getByRole("dialog", { hidden: true });
const isOpen = () => dialog().className.includes("visible translate-y-0");
const launcher = () =>
  screen.getByRole("button", { name: /WhatsApp/, hidden: true, expanded: isOpen() });

describe("WhatsAppWidget", () => {
  let openSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.useFakeTimers();
    sessionStorage.clear();
    openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("auto-opens after the delay, types, then shows the greeting and quick replies", () => {
    render(<WhatsAppWidget />);
    expect(isOpen()).toBe(false);
    expect(screen.getByText("1")).toBeTruthy();

    advance(3000);
    expect(isOpen()).toBe(true);
    expect(screen.getByText("Kirjoittaa…")).toBeTruthy();
    expect(screen.queryByText(new RegExp(GREETING_START))).toBeNull();

    advance(1500);
    expect(screen.queryByText("Kirjoittaa…")).toBeNull();
    expect(screen.getByText(new RegExp(GREETING_START))).toBeTruthy();
    expect(screen.getByRole("button", { name: "Pyydä tarjous" })).toBeTruthy();
    expect(screen.queryByText("1")).toBeNull();
  });

  it("does not auto-open again on the next page load of the same visit", () => {
    const first = render(<WhatsAppWidget />);
    advance(3000);
    advance(1500);
    fireEvent.click(screen.getByRole("button", { name: "Sulje keskustelu" }));
    expect(isOpen()).toBe(false);
    first.unmount();

    render(<WhatsAppWidget />);
    advance(10000);
    expect(isOpen()).toBe(false);
    expect(screen.queryByText("1")).toBeNull();
  });

  it("does not reopen if the visitor opens and closes it before the delay ends", () => {
    render(<WhatsAppWidget />);
    advance(1000);
    fireEvent.click(launcher());
    expect(isOpen()).toBe(true);
    fireEvent.click(launcher());
    expect(isOpen()).toBe(false);

    advance(10000);
    expect(isOpen()).toBe(false);
  });

  it("keeps the message unread when closed during the typing indicator", () => {
    render(<WhatsAppWidget />);
    advance(3500);
    fireEvent.keyDown(document, { key: "Escape" });
    advance(5000);
    expect(isOpen()).toBe(false);
    expect(screen.getByText("1")).toBeTruthy();
  });

  it("closes with Esc", () => {
    render(<WhatsAppWidget />);
    advance(3000);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(isOpen()).toBe(false);
  });

  it("opens a pre-filled, encoded wa.me link from a quick reply", () => {
    render(<WhatsAppWidget />);
    advance(3000);
    advance(1500);
    fireEvent.click(screen.getByRole("button", { name: "Kotisiivous" }));

    const message =
      "Hei! Olen kiinnostunut palvelusta: Kotisiivous. Voisitteko lähettää tarjouksen?";
    expect(openSpy).toHaveBeenCalledWith(
      `https://wa.me/358449898201?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  });

  it("sends a typed message and ignores an empty one", () => {
    render(<WhatsAppWidget />);
    advance(3000);
    advance(1500);
    const input = screen.getByRole("textbox", { name: "Viesti" }) as HTMLInputElement;
    const form = input.closest("form")!;

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.submit(form);
    expect(openSpy).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: "Ikkunat & parveke?" } });
    fireEvent.submit(form);
    expect(openSpy).toHaveBeenCalledWith(
      "https://wa.me/358449898201?text=Ikkunat%20%26%20parveke%3F",
      "_blank",
      "noopener,noreferrer",
    );
    expect(input.value).toBe("");
  });
});
