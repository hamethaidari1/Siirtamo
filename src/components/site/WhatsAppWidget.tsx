import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, X } from "lucide-react";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import logoImg from "@/assets/logo.png.png";

/* ─── Edit the widget here ───────────────────────────────────────────── */
const WHATSAPP_CONFIG = {
  /** International format, digits only (no +, spaces or leading zero). */
  phoneNumber: "358449898201",
  /** Delay before the chat opens by itself, in milliseconds. */
  autoOpenDelayMs: 3000,
  /** How long the "typing…" dots show before the greeting, in milliseconds. */
  typingDurationMs: 1500,
  businessName: COMPANY.name,
  /** quickReplies: label = text on the button, message = text pre-filled in WhatsApp. */
  text: {
    fi: {
      greeting:
        "Hei! 👋 Tervetuloa Siirtamolle. Miten voimme auttaa? Kerro, millaista siivousta tarvitset, niin teemme sinulle maksuttoman tarjouksen.",
      quickReplies: [
        {
          label: "Kotisiivous",
          message:
            "Hei! Olen kiinnostunut palvelusta: Kotisiivous. Voisitteko lähettää tarjouksen?",
        },
        {
          label: "Toimistosiivous",
          message:
            "Hei! Olen kiinnostunut palvelusta: Toimistosiivous. Voisitteko lähettää tarjouksen?",
        },
        {
          label: "Muuttosiivous",
          message:
            "Hei! Olen kiinnostunut palvelusta: Muuttosiivous. Voisitteko lähettää tarjouksen?",
        },
        { label: "Pyydä tarjous", message: "Hei! Haluaisin pyytää tarjouksen siivouksesta." },
      ],
      statusText: "Vastaamme yleensä muutamassa minuutissa",
      tooltip: "Kysy meiltä WhatsAppissa",
      inputPlaceholder: "Kirjoita viesti…",
      chatLabel: "WhatsApp-keskustelu",
      closeChat: "Sulje keskustelu",
      closeLauncher: "Sulje WhatsApp-keskustelu",
      unread: "1 lukematon viesti",
      messages: "Viestit",
      typing: "Kirjoittaa…",
      quickRepliesLabel: "Pikavastaukset",
      inputLabel: "Viesti",
      send: "Lähetä viesti WhatsAppissa",
      timeLocale: "fi-FI",
    },
    en: {
      greeting:
        "Hi! 👋 Welcome to Siirtamo. How can we help? Tell us what kind of cleaning you need, and we'll prepare a free quote for you.",
      quickReplies: [
        {
          label: "Home cleaning",
          message: "Hi! I'm interested in this service: Home cleaning. Could you send me a quote?",
        },
        {
          label: "Office cleaning",
          message:
            "Hi! I'm interested in this service: Office cleaning. Could you send me a quote?",
        },
        {
          label: "Move-out cleaning",
          message:
            "Hi! I'm interested in this service: Move-out cleaning. Could you send me a quote?",
        },
        { label: "Get a quote", message: "Hi! I would like to request a quote for cleaning." },
      ],
      statusText: "We usually reply within a few minutes",
      tooltip: "Ask us on WhatsApp",
      inputPlaceholder: "Write a message…",
      chatLabel: "WhatsApp chat",
      closeChat: "Close chat",
      closeLauncher: "Close WhatsApp chat",
      unread: "1 unread message",
      messages: "Messages",
      typing: "Typing…",
      quickRepliesLabel: "Quick replies",
      inputLabel: "Message",
      send: "Send message on WhatsApp",
      timeLocale: "en-GB",
    },
  },
};
/* ──────────────────────────────────────────────────────────────────── */

const AUTO_OPENED_KEY = "siirtamo-whatsapp-auto-opened";
const GREETED_AT_KEY = "siirtamo-whatsapp-greeted-at";
/** Distance from the page end where the button lifts clear of the footer's last row (px). */
const FOOTER_CLEARANCE = 88;

/* sessionStorage can throw in private windows or with blocked site data. */
function readSession(key: string) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    /* The widget still works; it just can't remember this across a reload. */
  }
}

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const lang = useLang();
  const text = WHATSAPP_CONFIG.text[lang];
  const [open, setOpen] = useState(false);
  /** Time label of the greeting; null until the visitor has actually seen it. */
  const [greetedAt, setGreetedAt] = useState<string | null>(null);
  /* Starts false so the server render and first client render match. */
  const [unread, setUnread] = useState(false);
  const [nearPageEnd, setNearPageEnd] = useState(false);
  const [draft, setDraft] = useState("");

  const autoOpenTimer = useRef<number | undefined>(undefined);
  const focusPanelOnOpen = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  const typing = open && greetedAt === null;

  // Restore this visit's state and schedule the one automatic open.
  useEffect(() => {
    const previousGreeting = readSession(GREETED_AT_KEY);
    if (previousGreeting) setGreetedAt(previousGreeting);
    else setUnread(true);

    if (readSession(AUTO_OPENED_KEY)) return;
    autoOpenTimer.current = window.setTimeout(() => {
      writeSession(AUTO_OPENED_KEY, "1");
      setOpen(true);
    }, WHATSAPP_CONFIG.autoOpenDelayMs);
    return () => window.clearTimeout(autoOpenTimer.current);
  }, []);

  // Show the typing dots, then the greeting. Closing mid-way leaves it unread.
  useEffect(() => {
    if (!typing) return;
    const timer = window.setTimeout(() => {
      const time = new Intl.DateTimeFormat(text.timeLocale, {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());
      writeSession(GREETED_AT_KEY, time);
      setGreetedAt(time);
      setUnread(false);
    }, WHATSAPP_CONFIG.typingDurationMs);
    return () => window.clearTimeout(timer);
  }, [typing, text.timeLocale]);

  // Keep the newest message in view on short screens.
  useEffect(() => {
    const messages = messagesRef.current;
    if (open && messages) messages.scrollTop = messages.scrollHeight;
  }, [open, greetedAt]);

  // Only a visitor-initiated open moves focus; the automatic one must not
  // pull keyboard users away from what they're doing.
  useEffect(() => {
    if (open && focusPanelOnOpen.current) {
      focusPanelOnOpen.current = false;
      panelRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !event.defaultPrevented) close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lift the button at the end of the page so it doesn't cover the footer links.
  useEffect(() => {
    const update = () => {
      const remaining = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      setNearPageEnd(remaining < FOOTER_CLEARANCE);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function close() {
    if (panelRef.current?.contains(document.activeElement)) launcherRef.current?.focus();
    setOpen(false);
  }

  function toggle() {
    if (open) {
      close();
      return;
    }
    // Opening by hand uses up the automatic open for this visit.
    window.clearTimeout(autoOpenTimer.current);
    writeSession(AUTO_OPENED_KEY, "1");
    focusPanelOnOpen.current = true;
    setOpen(true);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const message = draft.trim();
    if (!message) return;
    openWhatsApp(message);
    setDraft("");
  }

  return (
    <>
      {/* Chat window */}
      <div
        ref={panelRef}
        id="whatsapp-chat"
        role="dialog"
        aria-label={`${text.chatLabel}: ${WHATSAPP_CONFIG.businessName}`}
        tabIndex={-1}
        className={cn(
          "fixed inset-x-2 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-40 mb-(--wa-offset) flex max-h-[calc(100dvh-11rem-var(--wa-offset))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card outline-none transition-[opacity,transform,visibility,margin-bottom] duration-250 ease-out sm:left-auto sm:right-5 sm:bottom-[calc(5.5rem+env(safe-area-inset-bottom))] sm:w-[23rem] sm:max-h-[calc(100dvh-12rem-var(--wa-offset))]",
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible translate-y-3 scale-95 opacity-0",
        )}
      >
        <div className="flex shrink-0 items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
          {/* Crops the logo to its "S" and broom so it stays legible at avatar size. */}
          <span
            className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white"
            aria-hidden="true"
          >
            <img
              src={logoImg}
              alt=""
              width={1448}
              height={1086}
              className="absolute left-[-2px] top-[-23px] h-auto w-[123px] max-w-none"
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">{WHATSAPP_CONFIG.businessName}</p>
            <p className="text-xs leading-snug opacity-90">{text.statusText}</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={text.closeChat}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/15 focus-visible:rounded-full focus-visible:outline-white"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div
          ref={messagesRef}
          role="log"
          aria-live="polite"
          aria-label={text.messages}
          className="wa-chat-bg flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3.5 py-4"
        >
          {typing && (
            <div className="self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-xs">
              <span className="sr-only">{text.typing}</span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="wa-typing-dot" />
                <span className="wa-typing-dot" />
                <span className="wa-typing-dot" />
              </span>
            </div>
          )}

          {greetedAt && (
            <>
              <div className="max-w-[88%] self-start rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm leading-relaxed text-heading shadow-xs animate-in fade-in slide-in-from-bottom-1 duration-300">
                <p>{text.greeting}</p>
                <p className="mt-1 text-right text-[0.6875rem] text-muted-foreground">
                  {greetedAt}
                </p>
              </div>
              <div
                role="group"
                aria-label={text.quickRepliesLabel}
                className="flex flex-wrap gap-2 animate-in fade-in duration-300"
              >
                {text.quickReplies.map((reply) => (
                  <button
                    key={reply.label}
                    type="button"
                    onClick={() => openWhatsApp(reply.message)}
                    className="rounded-full border border-primary/40 bg-white px-3.5 py-2 text-[0.8125rem] font-semibold text-primary shadow-xs transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:rounded-full"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex shrink-0 items-center gap-2 border-t border-border bg-card p-2.5"
        >
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={text.inputPlaceholder}
            aria-label={text.inputLabel}
            enterKeyHint="send"
            autoComplete="off"
            className="h-10 min-w-0 flex-1 rounded-full border border-input bg-background px-4 text-base text-heading outline-none transition-colors placeholder:text-muted-foreground focus:border-primary sm:text-sm"
          />
          <button
            type="submit"
            disabled={!draft.trim()}
            aria-label={text.send}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-colors hover:bg-primary/90 focus-visible:rounded-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" aria-hidden />
          </button>
        </form>
      </div>

      {/* Floating button */}
      <div
        className={cn(
          "fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 mb-(--wa-offset) transition-[transform,margin-bottom] duration-300 ease-out sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-5",
          nearPageEnd && !open && "-translate-y-[4.5rem]",
        )}
      >
        {unread && !open && (
          <span className="wa-pulse absolute inset-0 rounded-full" aria-hidden="true" />
        )}
        <button
          ref={launcherRef}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="whatsapp-chat"
          aria-label={
            open ? text.closeLauncher : unread ? `${text.tooltip} (${text.unread})` : text.tooltip
          }
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card transition-transform duration-200 hover:scale-105 focus-visible:rounded-full"
        >
          <WhatsAppIcon className="h-8 w-8" />
          {unread && !open && (
            <span
              className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-red-600 text-[0.6875rem] font-bold text-white ring-2 ring-white"
              aria-hidden="true"
            >
              1
            </span>
          )}
          {!open && (
            <span
              className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-heading px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-soft transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
              aria-hidden="true"
            >
              {text.tooltip}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
