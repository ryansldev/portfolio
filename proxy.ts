import { NextResponse, type NextRequest } from "next/server";
import { hasLocale, localeCookie, type Locale } from "./app/locales";

export function proxy(request: NextRequest) {
  const [segment] = request.nextUrl.pathname.split("/").filter(Boolean);
  if (segment && hasLocale(segment)) return NextResponse.next();

  // [locale] would match any first segment (e.g. /fr) and render an empty 404 shell,
  // so serve the app's 404 page instead.
  if (segment) return NextResponse.rewrite(new URL("/_not-found", request.url), { status: 404 });

  // "/" has no content of its own: send visitors to their saved or browser language.
  const saved = request.cookies.get(localeCookie)?.value;
  const locale =
    saved && hasLocale(saved)
      ? saved
      : localeFromAcceptLanguage(request.headers.get("accept-language") ?? "");

  const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Everything except Next.js internals and files such as /robots.txt or /favicon.ico.
  matcher: "/((?!_next/|.*\\.).*)",
};

function localeFromAcceptLanguage(header: string): Locale {
  const tags = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const tag of tags) {
    if (tag.startsWith("pt")) return "pt";
    if (tag.startsWith("en")) return "en";
  }

  return "en";
}
