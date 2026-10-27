import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { copy, getLocale } from "./i18n";

export const instant = false;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: copy[locale].title,
    description: copy[locale].description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
