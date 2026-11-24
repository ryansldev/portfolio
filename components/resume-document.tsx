import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { copy, links, siteUrl, type Locale } from "../app/i18n";

// Hyphenated line breaks ("mes- sage") reach the extracted text and split keywords.
Font.registerHyphenationCallback((word) => [word]);

// A single-column, text-only layout so applicant tracking systems read it in order:
// standard section names, no tables, columns, icons or images, and every link
// written out as text. Helvetica is one of the PDF base fonts, so every reader
// extracts the text without an embedded font.

// The base fonts only cover the Windows-1252 character set; map the few characters
// the copy uses outside it.
const plain = (text: string) => text.replace(/−/g, "-");

const pageSize = { en: "LETTER", pt: "A4" } as const satisfies Record<Locale, string>;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#111111",
  },
  name: { fontFamily: "Helvetica-Bold", fontSize: 20, lineHeight: 1.2 },
  headline: { fontSize: 11, marginTop: 2 },
  contact: { marginTop: 4, color: "#333333" },
  link: { color: "#333333", textDecoration: "none" },
  section: { marginTop: 14 },
  heading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderBottomWidth: 0.75,
    borderBottomColor: "#111111",
    paddingBottom: 2,
    marginBottom: 6,
  },
  entry: { marginBottom: 8 },
  entryHeader: { flexDirection: "row", justifyContent: "space-between" },
  entryTitle: { fontFamily: "Helvetica-Bold" },
  muted: { color: "#333333" },
  bullet: { flexDirection: "row", marginTop: 2 },
  bulletMark: { width: 10 },
  bulletText: { flex: 1 },
  label: { fontFamily: "Helvetica-Bold" },
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bullet} wrap={false}>
      <Text style={styles.bulletMark}>•</Text>
      <Text style={styles.bulletText}>{plain(children)}</Text>
    </View>
  );
}

export function ResumeDocument({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const contact = [
    { value: plain(text.availability) },
    links.email,
    links.phone,
    links.linkedin,
    links.github,
    { value: siteUrl.replace("https://", ""), href: siteUrl },
  ];

  return (
    <Document
      title={`Ryan Lima - ${text.resume.title}`}
      author="Ryan Lima"
      subject={text.jobTitle}
      keywords={text.role}
      language={locale === "pt" ? "pt-BR" : "en-US"}
    >
      <Page size={pageSize[locale]} style={styles.page}>
        <Text style={styles.name}>Ryan Lima</Text>
        <Text style={styles.headline}>{plain(text.role)}</Text>
        <Text style={styles.contact}>
          {contact.map((item, index) => (
            <Text key={item.value}>
              {index > 0 && " | "}
              {"href" in item ? (
                <Link src={item.href} style={styles.link}>
                  {item.value}
                </Link>
              ) : (
                item.value
              )}
            </Text>
          ))}
        </Text>

        <Section title={text.resume.summary}>
          <Text>{plain(text.bio)}</Text>
        </Section>

        <Section title={text.experience}>
          {text.jobs.map((job) => (
            <View key={job.period} style={styles.entry}>
              <View style={styles.entryHeader} wrap={false}>
                <Text style={styles.entryTitle}>{plain(job.role)}</Text>
                <Text>{plain(job.period)}</Text>
              </View>
              <Text style={styles.muted}>{plain(job.company)}</Text>
              {job.points.map((point) => (
                <Bullet key={point}>{point}</Bullet>
              ))}
              <Text style={[styles.muted, { marginTop: 2 }]}>{plain(job.stack)}</Text>
            </View>
          ))}
        </Section>

        <Section title={text.projects}>
          {text.projectList.map((project) => (
            <View key={project.name} style={styles.entry}>
              <Text style={styles.entryTitle}>{plain(project.name)}</Text>
              <Text style={styles.muted}>
                {project.links.map((link, index) => (
                  <Text key={link.href}>
                    {index > 0 && " | "}
                    <Link src={link.href} style={styles.link}>
                      {link.href.replace("https://", "")}
                    </Link>
                  </Text>
                ))}
              </Text>
              <Text>{plain(project.summary)}</Text>
              {project.points.map((point) => (
                <Bullet key={point}>{point}</Bullet>
              ))}
              <Text style={[styles.muted, { marginTop: 2 }]}>
                {text.resume.stack}: {plain(project.stack)}
              </Text>
            </View>
          ))}
        </Section>

        <Section title={text.skills}>
          {text.skillGroups.map((group) => (
            <Text key={group.label}>
              <Text style={styles.label}>{group.label}: </Text>
              {plain(group.items)}
            </Text>
          ))}
        </Section>

        <Section title={text.languages}>
          <Text>
            {text.languageList.map((item) => `${item.name}: ${item.level}`).join(" | ")}
          </Text>
        </Section>
      </Page>
    </Document>
  );
}
