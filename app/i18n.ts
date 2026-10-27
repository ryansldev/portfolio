import { cookies, headers } from "next/headers";

export type Locale = "en" | "pt";

export async function getLocale(): Promise<Locale> {
  const saved = (await cookies()).get("locale")?.value;
  if (saved === "en" || saved === "pt") return saved;

  const accept = (await headers()).get("accept-language") ?? "";
  return localeFromAcceptLanguage(accept);
}

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

const links = {
  linkedin: {
    value: "linkedin.com/in/ryansldev",
    href: "https://linkedin.com/in/ryansldev",
  },
  github: {
    value: "github.com/ryansldev",
    href: "https://github.com/ryansldev",
  },
  email: {
    value: "ryanlima1309@gmail.com",
    href: "mailto:ryanlima1309@gmail.com",
  },
  phone: {
    value: "+55 (83) 98896-8267",
    href: "tel:+5583988968267",
  },
} as const;

export const copy = {
  en: {
    title: "Ryan Lima | Software Engineer, Front-end & Full Stack (React, Next.js, Node.js)",
    description:
      "Software Engineer with 4+ years of experience in React, Next.js, Node.js, and TypeScript. Building a CRM used by 7,000+ active users. Based in Brazil, open to remote work.",
    role: "Software Engineer · Front-end & Full Stack (React, Next.js, Node.js, TypeScript)",
    availability: "Brazil (UTC−3) · Open to remote roles",
    bio: "Front-end-focused full stack Software Engineer with 4+ years of experience building web applications with React, Next.js, TypeScript, JavaScript, and Node.js. At Solarz, I build features for a CRM used by more than 7,000 active users in the solar industry, including the analytics module that leadership uses in client consulting. I work best where product and engineering meet: design systems, end-to-end testing, and features that move business metrics.",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    certifications: "Certifications",
    languages: "Languages",
    contact: "Contact",
    jobs: [
      {
        period: "Feb 2025 – Present",
        role: "Frontend Developer",
        company: "Solarz · CRM for solar integrators",
        stack:
          "Stack: React, Next.js, TypeScript, JavaScript, HTML, CSS, React Query, Zustand, Tailwind CSS, Radix UI, shadcn/ui, Storybook, React Hook Form, Zod, Recharts, Playwright, Vitest, React Testing Library, REST APIs, Git, and Docker.",
        points: [
          "Rebuilt Insights, the analytics module of a CRM with 7,000+ active users that the CEO uses in client consulting, by shipping 13 redesigned data visualization charts (Recharts) with filters, exports, and permission rules behind a feature flag for a gradual rollout.",
          "Protected the product’s most commercially valuable flows by writing 14 of the 18 Playwright end-to-end test suites (about 78%), covering Insights filters, periods, exports, permissions, and mobile, plus data-field management and proposal building.",
          "Helped cut development time by 50% and rework by 80%, according to an internal survey of developers and designers, by contributing 45+ components to Estrela UI, the in-house design system built with Storybook, Tailwind CSS, and Radix/shadcn.",
          "Helped optimize the performance of data-heavy screens such as the deals Kanban for 7,000+ active users by applying React Query caching, lazy loading, list virtualization, and memoization, and made key flows responsive across mobile and desktop.",
          "Reduced bugs and rework across a codebase shared by 20+ contributors through code review of pull requests against strict component and code standards.",
        ],
      },
      {
        period: "Apr 2022 – Present",
        role: "Full Stack Software Engineer",
        company: "Freelance",
        stack:
          "Stack: Node.js, TypeScript, Express, Fastify, REST APIs, Next.js, React, Ant Design, Oracle Database, SQL, Jest, and Telegram Bot API (Telegraf).",
        points: [
          "Gave field sales reps on-demand customer reports and product recommendations in chat by building Telegram bots (Node.js, TypeScript, Telegraf) on top of an automotive distributor’s Oracle database, with stock, recent-purchase, and return data per product, order cutting, and PDF reports with detailed tables.",
          "Replaced a slow, costly legacy system run by a third-party vendor by building an in-house platform (Next.js, React, Ant Design, Express, Oracle) for order release and supplier quotes, with a single sign-on portal and per-employee permissions for the company’s internal tools.",
          "Saved about two weeks of manual HR work by automating employee data updates in Oracle that used to be done one by one, feeding a report generated automatically by another internal tool.",
          "Built the front end of a secure online voting system for a labor union as part of a three-developer team, delivering an election with no reported data leaks.",
        ],
      },
    ],
    projectList: [
      {
        name: "Fila Saúde",
        links: [
          { label: "filasaude.com.br", href: "https://filasaude.com.br" },
          { label: "GitHub", href: "https://github.com/ryansldev/fila-saude" },
        ],
        summary:
          "Open-source app that lets patients join a public health clinic queue from their phone, run a pre-triage that routes them to the right unit, and follow their position live, so they only leave home when it is their turn. Live in production, with 9 GitHub stars.",
        stack:
          "TypeScript, Turborepo monorepo, Node.js, Fastify, Drizzle ORM, PostgreSQL, Next.js, Tailwind CSS, shared Zod schemas, Vitest integration tests, and Docker.",
      },
      {
        name: "Kiwi",
        links: [{ label: "GitHub", href: "https://github.com/ryansldev/kiwi" }],
        summary:
          "Open-source personal finance app. A monorepo where the API, web, and mobile apps share one design-token package.",
        stack:
          "TypeScript, Bun, Elysia, Better Auth, Drizzle ORM, PostgreSQL, Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, and React Native (Expo).",
      },
    ],
    educationList: [] as { course: string; school: string; period: string }[],
    certificationList: [] as { name: string; issuer: string; year: string }[],
    languageList: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "B1 (intermediate)" },
    ],
    contacts: [
      { label: "LinkedIn", ...links.linkedin },
      { label: "GitHub", ...links.github },
      { label: "Email", ...links.email },
      { label: "Phone", ...links.phone },
    ],
  },
  pt: {
    title: "Ryan Lima | Software Engineer, Front-end e Full Stack (React, Next.js, Node.js)",
    description:
      "Software Engineer com mais de 4 anos de experiência em React, Next.js, Node.js e TypeScript. Construo um CRM com mais de 7.000 usuários ativos. Campina Grande, PB, aberto a trabalho remoto.",
    role: "Software Engineer · Front-end e Full Stack (React, Next.js, Node.js, TypeScript)",
    availability: "Campina Grande, PB (UTC−3) · Aberto a vagas remotas",
    bio: "Desenvolvedor de software full stack com foco em front-end, com mais de 4 anos de experiência construindo aplicações web com React, Next.js, TypeScript, JavaScript e Node.js. Na Solarz, desenvolvo funcionalidades de um CRM com mais de 7.000 usuários ativos no setor de energia solar, incluindo o módulo de análise que a liderança usa em consultorias com clientes. Rendo melhor onde produto e engenharia se encontram: design system, testes end-to-end e entregas que movem métricas de negócio.",
    experience: "Experiência",
    education: "Formação",
    projects: "Projetos",
    certifications: "Certificações",
    languages: "Idiomas",
    contact: "Contato",
    jobs: [
      {
        period: "fev. 2025 – atual",
        role: "Frontend Developer",
        company: "Solarz · CRM para integradoras de energia solar",
        stack:
          "Stack: React, Next.js, TypeScript, JavaScript, HTML, CSS, React Query, Zustand, Tailwind CSS, Radix UI, shadcn/ui, Storybook, React Hook Form, Zod, Recharts, Playwright, Vitest, React Testing Library, APIs REST, Git e Docker.",
        points: [
          "Reconstruí o Insights, módulo de análise de um CRM com mais de 7.000 usuários ativos e usado pelo CEO em consultorias com clientes, entregando 13 gráficos de visualização de dados (Recharts) redesenhados, com filtros, exportações e regras de permissão atrás de uma feature flag, para um rollout gradual.",
          "Protegi os fluxos de maior valor comercial do produto escrevendo 14 das 18 suítes de testes end-to-end com Playwright (cerca de 78%), cobrindo filtros, períodos, exportações, permissões e mobile do Insights, além da gestão de campos de dados e da montagem de propostas.",
          "Ajudei a reduzir o tempo de desenvolvimento em 50% e o retrabalho em 80%, segundo pesquisa interna com devs e designers, contribuindo com mais de 45 componentes para o Estrela UI, design system interno construído com Storybook, Tailwind CSS e Radix/shadcn.",
          "Ajudei a otimizar a performance de telas com grande volume de dados, como o Kanban de negócios, para mais de 7.000 usuários ativos, aplicando cache com React Query, lazy loading, virtualização de listas e memoização, e tornei fluxos centrais responsivos para mobile e desktop.",
          "Reduzi bugs e retrabalho em uma base de código compartilhada por mais de 20 contribuidores, com code review de pull requests guiado por padrões rígidos de componentes e de código.",
        ],
      },
      {
        period: "abr. 2022 – atual",
        role: "Full Stack Software Engineer",
        company: "Freelance",
        stack:
          "Stack: Node.js, TypeScript, Express, Fastify, APIs REST, Next.js, React, Ant Design, Oracle Database, SQL, Jest e Telegram Bot API (Telegraf).",
        points: [
          "Dei aos vendedores de ataque relatórios de clientes e indicações de produtos sob demanda, direto no chat, construindo bots no Telegram (Node.js, TypeScript, Telegraf) integrados ao banco Oracle de uma distribuidora automotiva, com estoque, últimas compras e devoluções por produto, corte de pedidos e relatórios em PDF com tabelas detalhadas.",
          "Substituí um sistema legado lento e caro, mantido por uma empresa terceirizada, construindo uma plataforma própria (Next.js, React, Ant Design, Express, Oracle) para liberação de pedidos e cotação com fornecedores, com login único e permissões por funcionário para os sistemas internos da empresa.",
          "Economizei cerca de duas semanas de trabalho manual do RH automatizando no Oracle as atualizações cadastrais de funcionários, antes feitas uma a uma, alimentando um relatório gerado automaticamente por outra solução interna.",
          "Desenvolvi o front-end de um sistema seguro de votação online para um sindicato, em um time de três devs, entregando uma eleição sem vazamento de dados registrado.",
        ],
      },
    ],
    projectList: [
      {
        name: "Fila Saúde",
        links: [
          { label: "filasaude.com.br", href: "https://filasaude.com.br" },
          { label: "GitHub", href: "https://github.com/ryansldev/fila-saude" },
        ],
        summary:
          "App open source para o paciente entrar na fila do posto de saúde pelo celular, fazer uma pré-triagem que indica UBS ou UPA e acompanhar a posição ao vivo, saindo de casa só na hora certa. No ar em produção, com 9 estrelas no GitHub.",
        stack:
          "TypeScript, monorepo com Turborepo, Node.js, Fastify, Drizzle ORM, PostgreSQL, Next.js, Tailwind CSS, schemas Zod compartilhados, testes de integração com Vitest e Docker.",
      },
      {
        name: "Kiwi",
        links: [{ label: "GitHub", href: "https://github.com/ryansldev/kiwi" }],
        summary:
          "App open source de organização financeira. Monorepo em que API, web e mobile compartilham um único pacote de design tokens.",
        stack:
          "TypeScript, Bun, Elysia, Better Auth, Drizzle ORM, PostgreSQL, Next.js 16, React 19, Tailwind CSS 4, shadcn/ui e React Native (Expo).",
      },
    ],
    educationList: [] as { course: string; school: string; period: string }[],
    certificationList: [] as { name: string; issuer: string; year: string }[],
    languageList: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "B1 (intermediário)" },
    ],
    contacts: [
      { label: "LinkedIn", ...links.linkedin },
      { label: "GitHub", ...links.github },
      { label: "E-mail", ...links.email },
      { label: "Telefone", ...links.phone },
    ],
  },
} as const;
