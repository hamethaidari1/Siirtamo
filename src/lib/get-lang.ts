import { createIsomorphicFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { LANG_COOKIE, parseLang } from "@/lib/i18n";

/* Read from the cookie on the server too, so the first HTML is already in the right language. */
export const getLang = createIsomorphicFn()
  .server(() => parseLang(getCookie(LANG_COOKIE)))
  .client(() =>
    parseLang(
      document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${LANG_COOKIE}=`))
        ?.split("=")[1],
    ),
  );
