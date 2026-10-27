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

  // Previews are shown at under half size, so the role's stack list gets its own line
  // and every line stays large enough to read once scaled down.
  const [, headline = text.role, stack] = text.role.match(/^(.*?)\s*\((.*)\)$/) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 72px",
          background: "#111316",
          color: "#ffffff",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={320}
          height={320}
          style={{ borderRadius: 9999, border: "6px solid #424345" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 680 }}>
          <div style={{ fontSize: 96, fontWeight: 500, lineHeight: 1.05 }}>Ryan Lima</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 44, lineHeight: 1.25 }}>
            {headline.split(" · ").map((part) => (
              <div key={part}>{part}</div>
            ))}
          </div>
          {stack && (
            <div style={{ fontSize: 36, color: "#d4d4d4", lineHeight: 1.3 }}>{stack}</div>
          )}
          <div style={{ marginTop: 12, fontSize: 34, color: "#d4d4d4" }}>ryansldev.com.br</div>
        </div>
      </div>
    ),
    size,
  );
}
