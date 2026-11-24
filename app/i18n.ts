export * from "./locales";

export const links = {
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
    title: "Ryan Lima | Full Stack Software Engineer",
    description: "Full Stack Software Engineer with nearly 5 years in TypeScript, Node.js, React, and Ruby on Rails. Builds SolarZ’s WhatsApp customer service platform; founded the software house sl.dev. Brazil-based, open to remote roles.",
    jobTitle: "Software Engineer",
    photoAlt: "Portrait of Ryan Lima",
    role: "Full Stack Software Engineer (TypeScript · Node.js · Ruby on Rails · React)",
    availability: "Brazil (UTC−3) · Open to remote roles",
    bio: "Full Stack Software Engineer with nearly 5 years shipping products end to end in TypeScript, Node.js, React, and Ruby on Rails. At SolarZ, I build the WhatsApp customer service platform solar installers use to sell to and support their customers, after rebuilding the analytics module of its CRM (7,000+ active users). Before that, I founded sl.dev, a software house whose platforms and automations replaced clients’ legacy systems and manual work. I’m now founding Fila Saúde, a virtual queue for public health clinics, built with an AI-native workflow.",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    certifications: "Certifications",
    skills: "Technical skills",
    languages: "Languages",
    contact: "Contact",
    resume: {
      title: "Resume",
      summary: "Summary",
      stack: "Stack",
      download: "Download resume (PDF)",
      fileName: "Ryan-Lima-Resume.pdf",
    },
    jobs: [
      {
        period: "Nov 2026 – Present",
        role: "Software Engineer · Chat",
        company: "SolarZ · WhatsApp customer service platform for solar installers · Full-time · Remote",
        stack:
          "Stack: Ruby on Rails, Vue.js, NestJS, TypeScript, PostgreSQL, Sidekiq, WhatsApp APIs (Gupshup, Z-API), Docker, Kubernetes, and GCP.",
        points: [
          "Build SolarZ Chat, the omnichannel customer service platform that solar energy installers use to sell to and support their customers over WhatsApp.",
          "Build features end to end across a distributed architecture: a customer service platform in Ruby on Rails and Vue, integrated with an orchestration API in NestJS and TypeScript.",
          "Maintain and improve the WhatsApp integrations, handling inbound events through webhooks and outbound message delivery.",
          "Turn product requirements into technical plans, defining the solution, the contracts between services, and the production impact before implementing.",
          "Work with PostgreSQL, asynchronous queues, and deployments on GCP and Kubernetes.",
        ],
      },
      {
        period: "Feb 2025 – Nov 2026",
        role: "Software Engineer · CRM",
        company: "SolarZ · SaaS CRM for solar integrators · Full-time · Remote",
        stack:
          "Stack: React, Next.js, TypeScript, React Query, Zustand, Tailwind CSS, shadcn/ui, Storybook, Recharts, Playwright, Vitest, Java, and Spring Boot.",
        points: [
          "Rebuilt Insights, the analytics module the CEO uses in client consulting, shipping 13 redesigned charts with filters, exports, and permissions behind a feature flag for a gradual rollout to 7,000+ users.",
          "Helped cut development time by 50% and rework by 80% (internal dev and design survey) by contributing 45+ components to Estrela UI, the in-house design system.",
          "Protected the highest-value commercial flows by writing 13 Playwright E2E suites covering Insights, data fields, and proposal building.",
          "Unblocked front-end deliveries by shipping targeted Java and Spring Boot changes to endpoints and API contracts.",
        ],
      },
      {
        period: "Apr 2022 – Feb 2025",
        role: "Founder",
        company: "sl.dev · Software house for custom business software · Remote",
        stack:
          "Stack: Node.js, TypeScript, Express, Fastify, Next.js, React, Oracle Database, SQL, Jest, and Telegraf.",
        points: [
          "Ran every client project end to end, from scoping the problem to building and maintaining the solution in production.",
          "Replaced a slow, costly vendor-run legacy system by building an in-house order release and supplier quote platform (Express, Oracle, Next.js) with SSO and per-employee permissions.",
          "Saved about two weeks of manual HR work by automating one-by-one employee data updates with SQL in Oracle.",
          "Gave an automotive distributor’s field sales team on-demand customer reports and product recommendations through Telegram bots on its Oracle database.",
          "Delivered a union election with no reported data leaks by building the front end of a secure online voting system in a three-developer team.",
        ],
      },
    ],
    projectList: [
      {
        name: "Fila Saúde · Founder & Product Engineer",
        links: [
          { label: "filasaude.com.br", href: "https://filasaude.com.br" },
          { label: "GitHub", href: "https://github.com/ryansldev/fila-saude" },
        ],
        summary:
          "Open-source app that lets patients join a public clinic queue from their phone, get pre-triaged to the right unit, and track their position live, so they only leave home when it’s their turn. In development since June 2026.",
        points: [
          "Building solo a multi-tenant platform for municipalities: a patient app (Expo), a staff panel and call station (Next.js), and a versioned public API (Fastify) with OpenAPI docs.",
          "Work AI-native: I write the specs and architecture decisions, and coding agents (Claude Code) implement under my review, for 530+ commits in 5 months.",
          "Modeled the queue rules in a pure domain package: priority groups, arrival deadlines, no-shows, and timed push notifications.",
        ],
        stack:
          "TypeScript, Turborepo, Node.js, Fastify, Drizzle ORM, PostgreSQL, Next.js, React Native (Expo), Zod, OpenAPI, Vitest, Docker, and Claude Code.",
      },
    ],
    educationList: [] as { course: string; school: string; period: string }[],
    certificationList: [] as { name: string; issuer: string; year: string }[],
    skillGroups: [
      { label: "Languages", items: "TypeScript, JavaScript, Ruby, Java, and SQL." },
      { label: "Back end", items: "Node.js, NestJS, Express, Fastify, Ruby on Rails, Spring Boot, REST APIs, GraphQL, webhooks, Sidekiq, and asynchronous queues." },
      { label: "Front end", items: "React, Next.js, Vue.js, React Native (Expo), Tailwind CSS, design systems, Storybook, shadcn/ui, and React Query." },
      { label: "Data", items: "PostgreSQL, Oracle, MongoDB, Redis, Prisma, and Drizzle ORM." },
      { label: "Infrastructure", items: "Docker, Kubernetes, GCP, AWS, CI/CD (GitHub Actions), feature flags, and observability (logs, metrics, alerting)." },
      { label: "Testing", items: "Playwright, Vitest, Jest, React Testing Library, and TDD." },
      { label: "AI-native development", items: "Coding agents (Claude Code), spec-driven development, and AI-assisted code review." },
    ],
    languageList: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Professional working proficiency" },
    ],
    contacts: [
      { label: "LinkedIn", ...links.linkedin },
      { label: "GitHub", ...links.github },
      { label: "Email", ...links.email },
      { label: "Phone", ...links.phone },
    ],
  },
  pt: {
    title: "Ryan Lima | Full Stack Software Engineer",
    description: "Full Stack Software Engineer com quase 5 anos em TypeScript, Node.js, React e Ruby on Rails. Constrói a plataforma de atendimento via WhatsApp da SolarZ; fundou a software house sl.dev. Aberto a vagas remotas.",
    jobTitle: "Software Engineer",
    photoAlt: "Foto de Ryan Lima",
    role: "Full Stack Software Engineer (TypeScript · Node.js · Ruby on Rails · React)",
    availability: "Campina Grande, PB (UTC−3) · Aberto a vagas remotas",
    bio: "Full Stack Software Engineer com quase 5 anos entregando produtos de ponta a ponta com TypeScript, Node.js, React e Ruby on Rails. Na SolarZ, construo a plataforma de atendimento via WhatsApp que integradoras de energia solar usam para vender e dar suporte aos clientes, depois de reconstruir o módulo de análise do CRM da empresa (mais de 7.000 usuários ativos). Antes disso, fundei a sl.dev, uma software house cujas plataformas e automações substituíram sistemas legados e trabalho manual de clientes. Hoje estou fundando o Fila Saúde, uma fila virtual para postos de saúde, construída com um fluxo AI-native.",
    experience: "Experiência",
    education: "Formação",
    projects: "Projetos",
    certifications: "Certificações",
    skills: "Habilidades técnicas",
    languages: "Idiomas",
    contact: "Contato",
    resume: {
      title: "Currículo",
      summary: "Resumo",
      stack: "Stack",
      download: "Baixar currículo (PDF)",
      fileName: "Ryan-Lima-Curriculo.pdf",
    },
    jobs: [
      {
        period: "nov. 2026 – atual",
        role: "Software Engineer · Chat",
        company: "SolarZ · Plataforma de atendimento via WhatsApp para integradoras solares · Tempo integral · Remoto",
        stack:
          "Stack: Ruby on Rails, Vue.js, NestJS, TypeScript, PostgreSQL, Sidekiq, APIs de WhatsApp (Gupshup, Z-API), Docker, Kubernetes e GCP.",
        points: [
          "Construo o SolarZ Chat, a plataforma omnichannel de atendimento que integradoras de energia solar usam para vender e dar suporte aos seus clientes pelo WhatsApp.",
          "Desenvolvo funcionalidades de ponta a ponta em uma arquitetura distribuída: uma plataforma de atendimento em Ruby on Rails e Vue, integrada a uma API de orquestração em NestJS e TypeScript.",
          "Mantenho e evoluo as integrações com o WhatsApp, tratando eventos de entrada via webhooks e o envio de mensagens.",
          "Transformo requisitos de produto em planos técnicos, definindo a solução, os contratos entre serviços e o impacto em produção antes de implementar.",
          "Trabalho com PostgreSQL, filas assíncronas e deploys em GCP e Kubernetes.",
        ],
      },
      {
        period: "fev. 2025 – nov. 2026",
        role: "Software Engineer · CRM",
        company: "SolarZ · CRM SaaS para integradoras de energia solar · Tempo integral · Remoto",
        stack:
          "Stack: React, Next.js, TypeScript, React Query, Zustand, Tailwind CSS, shadcn/ui, Storybook, Recharts, Playwright, Vitest, Java e Spring Boot.",
        points: [
          "Reconstruí o Insights, módulo de análise que o CEO usa em consultorias com clientes, entregando 13 gráficos redesenhados com filtros, exportações e permissões atrás de uma feature flag, para um rollout gradual a mais de 7.000 usuários.",
          "Ajudei a reduzir o tempo de desenvolvimento em 50% e o retrabalho em 80% (pesquisa interna com devs e designers) contribuindo com mais de 45 componentes para o Estrela UI, o design system interno.",
          "Protegi os fluxos de maior valor comercial escrevendo 13 suítes E2E com Playwright, cobrindo o Insights, campos de dados e montagem de propostas.",
          "Destravei entregas de front-end com ajustes pontuais em Java e Spring Boot, em endpoints e contratos de API.",
        ],
      },
      {
        period: "abr. 2022 – fev. 2025",
        role: "Founder",
        company: "sl.dev · Software house de sistemas sob medida para empresas · Remoto",
        stack:
          "Stack: Node.js, TypeScript, Express, Fastify, Next.js, React, Oracle Database, SQL, Jest e Telegraf.",
        points: [
          "Conduzi cada projeto de cliente de ponta a ponta, do entendimento do problema à construção e manutenção da solução em produção.",
          "Substituí um sistema legado lento e caro, mantido por terceiros, construindo uma plataforma própria de liberação de pedidos e cotação com fornecedores (Express, Oracle, Next.js), com SSO e permissões por funcionário.",
          "Economizei cerca de duas semanas de trabalho manual do RH automatizando com SQL no Oracle atualizações cadastrais feitas uma a uma.",
          "Dei à equipe de vendas de uma distribuidora automotiva relatórios de clientes e indicações de produtos sob demanda, com bots no Telegram sobre o banco Oracle da empresa.",
          "Entreguei a eleição de um sindicato sem vazamento de dados registrado desenvolvendo o front-end de um sistema seguro de votação online, em um time de três devs.",
        ],
      },
    ],
    projectList: [
      {
        name: "Fila Saúde · Founder & Product Engineer",
        links: [
          { label: "filasaude.com.br", href: "https://filasaude.com.br" },
          { label: "GitHub", href: "https://github.com/ryansldev/fila-saude" },
        ],
        summary:
          "App open source para o paciente entrar na fila do posto de saúde pelo celular, passar por uma pré-triagem que indica a unidade certa e acompanhar a posição ao vivo, saindo de casa só na hora certa. Em desenvolvimento desde junho de 2026.",
        points: [
          "Construo sozinho uma plataforma multi-tenant para municípios: app do paciente (Expo), painel da equipe e estação de chamada (Next.js) e uma API pública versionada (Fastify) com documentação OpenAPI.",
          "Trabalho de forma AI-native: escrevo as especificações e as decisões de arquitetura, e agentes de código (Claude Code) implementam sob a minha revisão, somando mais de 530 commits em 5 meses.",
          "Modelei as regras da fila em um pacote de domínio puro: grupos prioritários, prazos de chegada, faltas e notificações push com hora marcada.",
        ],
        stack:
          "TypeScript, Turborepo, Node.js, Fastify, Drizzle ORM, PostgreSQL, Next.js, React Native (Expo), Zod, OpenAPI, Vitest, Docker e Claude Code.",
      },
    ],
    educationList: [] as { course: string; school: string; period: string }[],
    certificationList: [] as { name: string; issuer: string; year: string }[],
    skillGroups: [
      { label: "Linguagens", items: "TypeScript, JavaScript, Ruby, Java e SQL." },
      { label: "Back-end", items: "Node.js, NestJS, Express, Fastify, Ruby on Rails, Spring Boot, APIs REST, GraphQL, webhooks, Sidekiq e filas assíncronas." },
      { label: "Front-end", items: "React, Next.js, Vue.js, React Native (Expo), Tailwind CSS, design systems, Storybook, shadcn/ui e React Query." },
      { label: "Dados", items: "PostgreSQL, Oracle, MongoDB, Redis, Prisma e Drizzle ORM." },
      { label: "Infraestrutura", items: "Docker, Kubernetes, GCP, AWS, CI/CD (GitHub Actions), feature flags e observabilidade (logs, métricas, alertas)." },
      { label: "Testes", items: "Playwright, Vitest, Jest, React Testing Library e TDD." },
      { label: "Desenvolvimento AI-native", items: "Agentes de código (Claude Code), desenvolvimento guiado por especificação e code review assistido por IA." },
    ],
    languageList: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Proficiência profissional" },
    ],
    contacts: [
      { label: "LinkedIn", ...links.linkedin },
      { label: "GitHub", ...links.github },
      { label: "E-mail", ...links.email },
      { label: "Telefone", ...links.phone },
    ],
  },
} as const;
