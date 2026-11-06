import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

/*
 * The site currently sets no analytics or marketing cookies, so this is a notice,
 * not a consent prompt: there is nothing for the visitor to refuse. If tracking is
 * ever added, it must wait for consent and this needs accept/decline buttons.
 */
const STORAGE_KEY = "siirtamo-cookie-notice-seen";

export function CookieNotice() {
  const t = useT();
  // Starts hidden so returning visitors never see it flash after server rendering.
  const [visible, setVisible] = useState(false);
  const noticeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* Storage blocked: show the notice; it just can't stay dismissed across visits. */
    }
    setVisible(true);
  }, []);

  // Tell the WhatsApp widget how much room to leave (see --wa-offset in styles.css).
  useEffect(() => {
    const notice = noticeRef.current;
    if (!visible || !notice) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(() => {
      root.style.setProperty("--cookie-notice-h", `${notice.offsetHeight + 8}px`);
    });
    observer.observe(notice);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--cookie-notice-h");
    };
  }, [visible]);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* Hidden for this page view only. */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={noticeRef}
      role="region"
      aria-label={t.cookieNotice.label}
      className="fixed inset-x-2 bottom-[calc(0.5rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-card animate-in fade-in slide-in-from-bottom-2 duration-300 sm:flex-row sm:items-center sm:gap-5 lg:inset-x-auto lg:bottom-5 lg:left-5 lg:w-[30rem]"
    >
      <p className="flex-1 text-sm leading-relaxed text-foreground">
        {t.cookieNotice.text}{" "}
        <Link
          to="/tietosuojaseloste"
          hash="evasteet"
          className="font-semibold text-primary underline underline-offset-2"
        >
          {t.cookieNotice.more}
        </Link>
      </p>
      <Button type="button" onClick={dismiss} className="shrink-0 font-bold shadow-soft">
        {t.cookieNotice.ok}
      </Button>
    </div>
  );
}
