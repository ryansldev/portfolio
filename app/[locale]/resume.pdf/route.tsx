import { renderToBuffer } from "@react-pdf/renderer";
import { ResumeDocument } from "../../../components/resume-document";
import { copy, hasLocale, locales } from "../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, ctx: RouteContext<"/[locale]/resume.pdf">) {
  const { locale } = await ctx.params;
  if (!hasLocale(locale)) return new Response("Not found", { status: 404 });

  const pdf = await renderToBuffer(<ResumeDocument locale={locale} />);

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${copy[locale].resume.fileName}"`,
    },
  });
}
