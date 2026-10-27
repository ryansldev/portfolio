import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { copy, hasLocale } from "../i18n";

export const alt = "Ryan Lima · Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const text = copy[locale];

  const photo = await readFile(join(process.cwd(), "public/images/profile.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#111316",
          color: "#ffffff",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={280}
          height={280}
          style={{ borderRadius: 9999, border: "4px solid #424345" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 660 }}>
          <div style={{ fontSize: 72, fontWeight: 500, lineHeight: 1.1 }}>Ryan Lima</div>
          <div style={{ fontSize: 32, color: "#d4d4d4", lineHeight: 1.4 }}>{text.role}</div>
          <div style={{ fontSize: 26, color: "#d4d4d4", lineHeight: 1.4 }}>ryansldev.com.br</div>
        </div>
      </div>
    ),
    size,
  );
}
