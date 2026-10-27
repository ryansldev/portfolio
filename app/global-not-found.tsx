import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Ryan Lima",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col items-center justify-center gap-4 px-4 font-sans">
        <h1 className="text-[28px] leading-[1.5] font-medium text-(--content)">404</h1>
        <p className="text-sm leading-[1.7] font-light text-(--content-2)">
          Page not found · Página não encontrada
        </p>
        <Link href="/" className="text-sm leading-[1.7] text-(--content) underline underline-offset-4">
          ryansldev.com.br
        </Link>
      </body>
    </html>
  );
}
