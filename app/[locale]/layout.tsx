import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import "../globals.css";
import { copy, hasLocale, languageTag, locales, ogLocale, siteUrl } from "../i18n";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const text = copy[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: text.title,
    description: text.description,
    applicationName: "Ryan Lima",
    authors: [{ name: "Ryan Lima", url: siteUrl }],
    creator: "Ryan Lima",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [languageTag[l], `/${l}`])),
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: "Ryan Lima",
      title: text.title,
      description: text.description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      firstName: "Ryan",
      lastName: "Lima",
      username: "ryansldev",
    },
    twitter: {
      card: "summary_large_image",
      title: text.title,
      description: text.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html lang={languageTag[locale]} className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
