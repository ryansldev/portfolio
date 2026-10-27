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
    description:
      "Software Engineer with nearly 5 years in React, Next.js, Node.js, and TypeScript, building a CRM used by 7,000+ active users. Based in Brazil, open to remote work.",
    jobTitle: "Software Engineer",
    photoAlt: "Portrait of Ryan Lima",
    role: "Full Stack Software Engineer | Node.js | TypeScript | React | Next.js",
    availability: "Brazil (UTC−3) · Open to remote roles",
    bio: "Full Stack Software Engineer with nearly 5 years of experience building web applications with TypeScript, Node.js, React, and Next.js. At Solarz, I build features for a SaaS CRM used by more than 7,000 active users in the solar industry, including the analytics module that leadership uses in client consulting. I have also delivered platforms and RESTful APIs end to end that replaced legacy systems. I work best where product and engineering meet: design systems, automated testing, Clean Code, and features that move business metrics.",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    certifications: "Certifications",
    skills: "Technical skills",
    languages: "Languages",
    contact: "Contact",
    jobs: [
      {
        period: "Feb 2025 – Present",
        role: "Software Engineer",
        company: "Solarz · SaaS CRM for solar integrators · Full-time · Remote",
        stack:
          "Stack: React, Next.js, TypeScript, JavaScript, HTML, CSS, React Query, Zustand, Tailwind CSS, Radix UI, shadcn/ui, Storybook, React Hook Form, Zod, Recharts, Playwright, Vitest, React Testing Library, REST APIs, Java, Spring Boot, Git, and Docker.",
        points: [
          "Rebuilt Insights, the analytics module of a CRM with 7,000+ active users that the CEO uses in client consulting, by shipping 13 redesigned data visualization charts (Recharts) with filters, exports, and permission rules behind a feature flag for a gradual rollout.",
          "Protected the product’s most commercially valuable flows by writing 14 of the 18 Playwright end-to-end test suites (about 78%), covering Insights filters, periods, exports, permissions, and mobile, plus data-field management and proposal building.",
          "Helped cut development time by 50% and rework by 80%, according to an internal survey of developers and designers, by contributing 45+ components to Estrela UI, the in-house design system built with Storybook, Tailwind CSS, and Radix/shadcn, working directly with the UX/UI team.",
          "Helped optimize the performance of data-heavy screens such as the deals Kanban for 7,000+ active users by applying React Query caching, lazy loading, list virtualization, and memoization, and made key flows responsive across mobile and desktop.",
          "Reduced bugs and rework across a codebase shared by 20+ contributors through code review of pull requests against strict component and code standards.",
          "Unblocked front-end deliveries without waiting on the back-end team by making targeted changes in Java and Spring Boot, such as endpoints and API contracts.",
        ],
      },
      {
        period: "Apr 2022 – Feb 2025",
        role: "Full Stack Software Engineer",
        company: "Freelance · Remote",
        stack:
          "Stack: Node.js, TypeScript, Express, Fastify, REST APIs, Next.js, React, Ant Design, Oracle Database, SQL, Jest, and Telegram Bot API (Telegraf).",
        points: [
          "Gave field sales reps on-demand customer reports and product recommendations in chat by building Telegram bots (Node.js, TypeScript, Telegraf) on top of an automotive distributor’s Oracle database, with stock, recent-purchase, and return data per product, order cutting, and PDF reports with detailed tables.",
          "Replaced a slow, costly legacy system run by a third-party vendor by building and maintaining an in-house platform for order release and supplier quotes, with RESTful APIs in Express and Oracle, single sign-on (SSO), per-employee permissions for the company’s internal tools, and a Next.js and React front end.",
          "Saved about two weeks of manual HR work by automating, with SQL in Oracle, employee data updates that used to be done one by one, feeding a report generated automatically by another internal tool.",
          "Built the front end of a secure online voting system for a labor union as part of a three-developer team, delivering an election with no reported data leaks.",
        ],
      },
    ],
    projectList: [
      {
        name: "Kiwi",
        links: [{ label: "GitHub", href: "https://github.com/ryansldev/kiwi" }],
        summary:
          "Open-source personal finance app. A monorepo where the API, web, and mobile apps share one design-token package, with authentication via Better Auth.",
        points: [
          "Built end to end a cash-flow forecasting product, with a RESTful API in Bun and Elysia, a Next.js web app, and a React Native mobile app, that tells users ahead of time whether their money will be left over or run short this month.",
          "Modeled 5 transaction types (income, expenses, credit card, savings, and daily spending) with recurrence support, plus a business rule that treats savings as a cash outflow without counting it as spending.",
          "Created the daily forecast engine, which estimates variable spending (food, shopping, transport, health) and spreads it across the remaining days of the month to project the balance day by day.",
          "Implemented an incentive for users to invest at least 20% of their monthly income.",
        ],
        stack:
          "TypeScript, Bun, Elysia, Better Auth, Drizzle ORM, PostgreSQL, Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, and React Native (Expo).",
      },
      {
        name: "Fila Saúde",
        links: [
          { label: "filasaude.com.br", href: "https://filasaude.com.br" },
          { label: "GitHub", href: "https://github.com/ryansldev/fila-saude" },
        ],
        summary:
          "Open-source app that lets patients join a public health clinic queue from their phone, run a pre-triage that routes them to the right unit, and follow their position live, so they only leave home when it is their turn. Live in production, with 9 GitHub stars.",
        points: [],
        stack:
          "TypeScript, Turborepo monorepo, Node.js, Fastify, Drizzle ORM, PostgreSQL, Next.js, Tailwind CSS, shared Zod schemas, Vitest integration tests, and Docker.",
      },
    ],
    educationList: [] as { course: string; school: string; period: string }[],
    certificationList: [] as { name: string; issuer: string; year: string }[],
    skillGroups: [
      {
        label: "Back end",
        items:
          "Node.js, TypeScript, Express, Fastify, Elysia, Bun, Java, Spring Boot, RESTful APIs, GraphQL, tRPC, and WebSockets.",
      },
      {
        label: "Front end",
        items:
          "React.js, Next.js, React Native (Expo), JavaScript, HTML, CSS, Tailwind CSS, UX/UI, design systems, Storybook, Radix UI, shadcn/ui, React Query, Zustand, React Hook Form, and Zod.",
      },
      {
        label: "Databases",
        items: "PostgreSQL, MongoDB, Oracle, Redis, SQL, Prisma ORM, and Drizzle ORM.",
      },
      {
        label: "Infrastructure & DevOps",
        items: "Docker, AWS, Git, and CI/CD (GitHub Actions, Vercel).",
      },
      {
        label: "Architecture",
        items:
          "Microservices, messaging (Kafka), monorepos (Turborepo), feature flags, and Clean Architecture.",
      },
      {
        label: "Testing & quality",
        items:
          "TDD, Playwright (E2E), Vitest, Jest, React Testing Library, Clean Code, and code review.",
      },
      { label: "AI", items: "LLM integration and prompt engineering." },
      { label: "Methodologies", items: "Agile (Scrum, Kanban, and XP)." },
    ],
    languageList: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Upper intermediate (B2)" },
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
    description:
      "Software Engineer com quase 5 anos em React, Next.js, Node.js e TypeScript, construindo um CRM com mais de 7.000 usuários ativos. Aberto a trabalho remoto.",
    jobTitle: "Software Engineer",
    photoAlt: "Foto de Ryan Lima",
    role: "Full Stack Software Engineer | Node.js | TypeScript | React | Next.js",
    availability: "Campina Grande, PB (UTC−3) · Aberto a vagas remotas",
    bio: "Full Stack Software Engineer com quase 5 anos de experiência construindo aplicações web com TypeScript, Node.js, React e Next.js. Na Solarz, desenvolvo funcionalidades de um CRM SaaS com mais de 7.000 usuários ativos no setor de energia solar, incluindo o módulo de análise que a liderança usa em consultorias com clientes. Também já entreguei, de ponta a ponta, plataformas e APIs RESTful que substituíram sistemas legados. Rendo melhor onde produto e engenharia se encontram: design system, testes automatizados, Clean Code e entregas que movem métricas de negócio.",
    experience: "Experiência",
    education: "Formação",
    projects: "Projetos",
    certifications: "Certificações",
    skills: "Habilidades técnicas",
    languages: "Idiomas",
    contact: "Contato",
    jobs: [
      {
        period: "fev. 2025 – atual",
        role: "Software Engineer",
        company: "Solarz · CRM SaaS para integradoras de energia solar · Tempo integral · Remoto",
        stack:
          "Stack: React, Next.js, TypeScript, JavaScript, HTML, CSS, React Query, Zustand, Tailwind CSS, Radix UI, shadcn/ui, Storybook, React Hook Form, Zod, Recharts, Playwright, Vitest, React Testing Library, APIs REST, Java, Spring Boot, Git e Docker.",
        points: [
          "Reconstruí o Insights, módulo de análise de um CRM com mais de 7.000 usuários ativos e usado pelo CEO em consultorias com clientes, entregando 13 gráficos de visualização de dados (Recharts) redesenhados, com filtros, exportações e regras de permissão atrás de uma feature flag, para um rollout gradual.",
          "Protegi os fluxos de maior valor comercial do produto escrevendo 14 das 18 suítes de testes end-to-end com Playwright (cerca de 78%), cobrindo filtros, períodos, exportações, permissões e mobile do Insights, além da gestão de campos de dados e da montagem de propostas.",
          "Ajudei a reduzir o tempo de desenvolvimento em 50% e o retrabalho em 80%, segundo pesquisa interna com devs e designers, contribuindo com mais de 45 componentes para o Estrela UI, design system interno construído com Storybook, Tailwind CSS e Radix/shadcn, em colaboração direta com o time de UX/UI.",
          "Ajudei a otimizar a performance de telas com grande volume de dados, como o Kanban de negócios, para mais de 7.000 usuários ativos, aplicando cache com React Query, lazy loading, virtualização de listas e memoização, e tornei fluxos centrais responsivos para mobile e desktop.",
          "Reduzi bugs e retrabalho em uma base de código compartilhada por mais de 20 contribuidores, com code review de pull requests guiado por padrões rígidos de componentes e de código.",
          "Viabilizei entregas de front-end sem depender do time de back-end fazendo ajustes pontuais em Java e Spring Boot, como endpoints e contratos de API.",
        ],
      },
      {
        period: "abr. 2022 – fev. 2025",
        role: "Full Stack Software Engineer",
        company: "Freelance · Remoto",
        stack:
          "Stack: Node.js, TypeScript, Express, Fastify, APIs REST, Next.js, React, Ant Design, Oracle Database, SQL, Jest e Telegram Bot API (Telegraf).",
        points: [
          "Dei aos vendedores de ataque relatórios de clientes e indicações de produtos sob demanda, direto no chat, construindo bots no Telegram (Node.js, TypeScript, Telegraf) integrados ao banco Oracle de uma distribuidora automotiva, com estoque, últimas compras e devoluções por produto, corte de pedidos e relatórios em PDF com tabelas detalhadas.",
          "Substituí um sistema legado lento e caro, mantido por uma empresa terceirizada, construindo e mantendo uma plataforma própria de liberação de pedidos e cotação com fornecedores, com APIs RESTful em Express e Oracle, autenticação única (SSO), permissões por funcionário para os sistemas internos da empresa e front-end em Next.js e React.",
          "Economizei cerca de duas semanas de trabalho manual do RH automatizando via SQL/Oracle as atualizações cadastrais de funcionários, antes feitas uma a uma, alimentando um relatório gerado automaticamente por outra solução interna.",
          "Desenvolvi o front-end de um sistema seguro de votação online para um sindicato, em um time de três devs, entregando uma eleição sem vazamento de dados registrado.",
        ],
      },
    ],
    projectList: [
      {
        name: "Kiwi",
        links: [{ label: "GitHub", href: "https://github.com/ryansldev/kiwi" }],
        summary:
          "App open source de organização financeira. Monorepo em que API, web e mobile compartilham um único pacote de design tokens, com autenticação via Better Auth.",
        points: [
          "Desenvolvi de ponta a ponta um produto financeiro de previsibilidade de fluxo de caixa, com API RESTful em Bun e Elysia, web em Next.js e mobile em React Native, indicando com antecedência se o dinheiro do usuário vai sobrar ou faltar no mês.",
          "Modelei 5 tipos de transação (entradas, saídas, cartão de crédito, economia e gastos diários), com suporte a recorrência, e uma regra de negócio para tratar a economia como saída do fluxo de caixa sem contá-la como gasto.",
          "Criei o motor de “previsão de diário”, que estima os gastos variáveis (alimentação, compras, transporte, saúde) e os distribui pelos dias futuros do mês, para projetar o saldo dia a dia.",
          "Implementei um incentivo para o usuário investir pelo menos 20% da renda mensal.",
        ],
        stack:
          "TypeScript, Bun, Elysia, Better Auth, Drizzle ORM, PostgreSQL, Next.js 16, React 19, Tailwind CSS 4, shadcn/ui e React Native (Expo).",
      },
      {
        name: "Fila Saúde",
        links: [
          { label: "filasaude.com.br", href: "https://filasaude.com.br" },
          { label: "GitHub", href: "https://github.com/ryansldev/fila-saude" },
        ],
        summary:
          "App open source para o paciente entrar na fila do posto de saúde pelo celular, fazer uma pré-triagem que indica UBS ou UPA e acompanhar a posição ao vivo, saindo de casa só na hora certa. No ar em produção, com 9 estrelas no GitHub.",
        points: [],
        stack:
          "TypeScript, monorepo com Turborepo, Node.js, Fastify, Drizzle ORM, PostgreSQL, Next.js, Tailwind CSS, schemas Zod compartilhados, testes de integração com Vitest e Docker.",
      },
    ],
    educationList: [] as { course: string; school: string; period: string }[],
    certificationList: [] as { name: string; issuer: string; year: string }[],
    skillGroups: [
      {
        label: "Back-end",
        items:
          "Node.js, TypeScript, Express, Fastify, Elysia, Bun, Java, Spring Boot, APIs RESTful, GraphQL, tRPC e WebSockets.",
      },
      {
        label: "Front-end",
        items:
          "React.js, Next.js, React Native (Expo), JavaScript, HTML, CSS, Tailwind CSS, UX/UI, Design Systems, Storybook, Radix UI, shadcn/ui, React Query, Zustand, React Hook Form e Zod.",
      },
      {
        label: "Banco de dados",
        items: "PostgreSQL, MongoDB, Oracle, Redis, SQL, Prisma ORM e Drizzle ORM.",
      },
      {
        label: "Infraestrutura e DevOps",
        items: "Docker, AWS, Git e CI/CD (GitHub Actions, Vercel).",
      },
      {
        label: "Arquitetura",
        items:
          "Microsserviços, mensageria (Kafka), monorepo (Turborepo), feature flags e Clean Architecture.",
      },
      {
        label: "Testes e qualidade",
        items:
          "TDD, Playwright (E2E), Vitest, Jest, React Testing Library, Clean Code e code review.",
      },
      { label: "IA", items: "Integração com LLMs e prompt engineering." },
      { label: "Metodologias", items: "Metodologias ágeis (Scrum, Kanban e XP)." },
    ],
    languageList: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário (B2)" },
    ],
    contacts: [
      { label: "LinkedIn", ...links.linkedin },
      { label: "GitHub", ...links.github },
      { label: "E-mail", ...links.email },
      { label: "Telefone", ...links.phone },
    ],
  },
} as const;
