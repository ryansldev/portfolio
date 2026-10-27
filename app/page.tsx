import type { ReactNode } from "react";
import Image from "next/image";
import { LanguageToggle } from "../components/language-toggle";
import { copy, getLocale } from "./i18n";

export const instant = false;

export default async function Home() {
  const locale = await getLocale();
  const text = copy[locale];

  return (
    <>
      <header className="flex items-center justify-between px-10 py-6 max-md:px-4">
        <p className="text-sm leading-none font-medium text-(--content)">Ryan Lima</p>
        <LanguageToggle locale={locale} />
      </header>

      <main className="mx-auto w-full max-w-[810px] px-4">
        <section className="flex items-start justify-between border-b border-(--line) pb-10 max-md:flex-col max-md:gap-4">
          <div className="grid size-[136px] shrink-0 place-items-center rounded-full border border-(--line) max-md:size-20">
            <Image
              src="/images/profile.jpeg"
              alt="Ryan Lima"
              width={400}
              height={400}
              priority
              className="size-[calc(100%-8px)] rounded-full object-cover"
            />
          </div>

          <div className="w-full max-w-[600px]">
            <h1 className="mb-2 text-[36px] leading-[1.5] font-medium text-(--content) max-md:text-[28px]">
              Ryan Lima
            </h1>
            <p className="text-sm leading-[1.7] font-normal text-(--content)">{text.role}</p>
            <p className="mb-2 text-sm leading-[1.7] font-light text-(--content-2)">
              {text.availability}
            </p>
            <TextLink href="https://linkedin.com/in/ryansldev" className="mb-6 max-md:mb-8">
              linkedin.com/in/ryansldev
            </TextLink>
            <p className="text-sm leading-[1.7] font-light text-(--content-2)">{text.bio}</p>
          </div>
        </section>

        <Section title={text.experience}>
          {text.jobs.map((job, index) => (
            <article
              key={job.company}
              className={`flex items-start justify-between max-md:flex-col max-md:gap-2 ${
                index === 0 ? "" : "mt-10"
              }`}
            >
              <p className="text-sm leading-[1.7] font-light whitespace-nowrap text-(--content-2)">
                {job.period}
              </p>
              <div
                className={`w-full max-w-[600px] ${
                  index === text.jobs.length - 1 ? "" : "border-b border-(--line) pb-10"
                }`}
              >
                <h3 className="mb-4 text-[22px] leading-[1.5] font-medium text-(--content)">
                  {job.role}
                </h3>
                <p className="mb-2 text-sm leading-[1.7] font-light text-(--content-2)">
                  {job.company}
                </p>
                {job.points.map((point) => (
                  <p
                    key={point}
                    className="mb-2 text-sm leading-[1.7] font-light text-(--content-2)"
                  >
                    {point}
                  </p>
                ))}
                <p className="mt-4 text-sm leading-[1.7] font-normal text-(--content)">
                  {job.stack}
                </p>
              </div>
            </article>
          ))}
        </Section>

        {text.educationList.length > 0 && (
          <Section title={text.education}>
            {text.educationList.map((item) => (
              <Entry key={item.course} title={item.course} lines={[item.school, item.period]} />
            ))}
          </Section>
        )}

        <Section title={text.projects}>
          {text.projectList.map((project) => (
            <Entry key={project.name} title={project.name} lines={[project.summary, project.stack]}>
              <div className="mb-2 flex flex-wrap gap-x-6">
                {project.links.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </Entry>
          ))}
        </Section>

        {text.certificationList.length > 0 && (
          <Section title={text.certifications}>
            {text.certificationList.map((item) => (
              <Entry
                key={item.name}
                title={item.name}
                lines={[`${item.issuer} · ${item.year}`]}
              />
            ))}
          </Section>
        )}

        <Section title={text.languages}>
          {text.languageList.map((item) => (
            <Entry key={item.name} title={item.name} lines={[item.level]} />
          ))}
        </Section>

        <Section title={text.contact} last>
          <div className="w-full max-w-[600px] md:ml-auto">
            {text.contacts.map((contact) => (
              <div
                key={contact.label}
                className="grid grid-cols-[7rem_1fr] items-center pb-6 last:pb-0 max-md:grid-cols-1 max-md:items-start max-md:gap-1 max-md:pb-4"
              >
                <p className="text-sm leading-[1.7] font-normal text-(--content)">
                  {contact.label}
                </p>
                <TextLink href={contact.href}>{contact.value}</TextLink>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="mt-auto px-10 py-6 max-md:px-4">
        <p className="text-sm leading-[1.7] font-light text-(--content-2)">Ryan Lima</p>
      </footer>
    </>
  );
}

function Section({
  title,
  last = false,
  children,
}: {
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`py-10 ${last ? "" : "border-b border-(--line)"}`}>
      <h2 className="mb-8 text-sm leading-none font-medium text-(--content) max-md:mb-6">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Entry({
  title,
  lines,
  children,
}: {
  title: string;
  lines: string[];
  children?: ReactNode;
}) {
  return (
    <div className="w-full max-w-[600px] pb-8 last:pb-0 md:ml-auto">
      <h3 className="mb-1 text-base leading-[1.5] font-medium text-(--content)">{title}</h3>
      {children}
      {lines.map((line) => (
        <p key={line} className="mb-2 text-sm leading-[1.7] font-light text-(--content-2) last:mb-0">
          {line}
        </p>
      ))}
    </div>
  );
}

function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex h-6 w-fit items-center text-sm leading-[1.7] font-normal text-(--content) ${className}`}
    >
      <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-(--content) after:transition-transform after:duration-500 after:ease-[cubic-bezier(1,0,0,1)] group-hover:after:origin-right group-hover:after:scale-x-0">
        {children}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="ml-1 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
