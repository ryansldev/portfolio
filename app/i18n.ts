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

export const copy = {
  en: {
    description:
      "Full-stack developer and front-end specialist in React, Node.js, and TypeScript, with 4+ years of experience. Campina Grande, Brazil.",
    role: "Full Stack, Front-end Specialist",
    bio: "Full-stack developer focused on the front end, working with React, Node.js, and TypeScript. Over four years, I have helped build and evolve products used by hundreds of companies, from the first design through production and monitoring, with an eye on code quality, user experience, and business results.",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    jobs: [
      {
        period: "2025 – now",
        role: "Frontend Developer",
        company: "Solarz",
        points: [
          "Helped evolve a CRM used by hundreds of solar integrators, focused on scale and the product’s critical workflows.",
          "Contributed to the design system, cutting development time by 50% and rework by 80%.",
          "Built reusable components for strategic CRM modules, reducing duplicated code by about 60% and speeding up new releases.",
          "Optimized critical React flows and renders, reducing average screen load time by up to 40%.",
          "Ran regular code reviews to keep quality, consistency, and performance high.",
          "Wrote and maintained unit and integration tests with Jest, Vitest, and React Testing Library.",
        ],
      },
      {
        period: "2022 – now",
        role: "Software Engineer",
        company: "Freelance",
        points: [
          "Built order-management bots for an automotive company, increasing delivery productivity by 30% and raising operational capacity.",
          "Designed an HR update dispatch that saved about two weeks of work in a single click.",
          "Beyond the bots, built a system to release orders, request supplier quotes, and unify those processes, so the team could be trained with less friction.",
          "Built an online ordering platform for a food business that raised profit margin by 10% by removing marketplace fees.",
          "Contributed to an internal online voting system, encrypted end to end, completed with full transparency and no data leaks.",
        ],
      },
    ],
    skillGroups: [
      {
        label: "AI & data",
        items:
          "RAG, LLM integration (GPT-4, Claude), embeddings, document chunking, semantic search, and prompt engineering.",
      },
      {
        label: "Languages",
        items:
          "TypeScript, JavaScript, Node.js (NestJS and Express), Java, Spring Boot, React, React Native, Next.js, Prisma ORM, and tRPC.",
      },
      {
        label: "Data",
        items:
          "PostgreSQL, MongoDB, Redis, Elasticsearch, Kafka, GraphQL, REST, and WebSockets.",
      },
      {
        label: "Cloud",
        items:
          "AWS (Lambda, ECS, S3, RDS, CloudWatch), Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, Vercel), and observability (OpenTelemetry, ELK).",
      },
      {
        label: "Practice",
        items:
          "Jest, Vitest, React Testing Library, TDD, Agile/Scrum, microservices, SEO, SSR, SSG, Clean Architecture, and event-driven architecture.",
      },
    ],
    contacts: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/ryansldev",
        href: "https://linkedin.com/in/ryansldev",
      },
      {
        label: "Email",
        value: "ryanlima1309@gmail.com",
        href: "mailto:ryanlima1309@gmail.com",
      },
      {
        label: "Phone",
        value: "(83) 98896-8267",
        href: "tel:+5583988968267",
      },
      {
        label: "Location",
        value: "Campina Grande, Brazil",
        href: "https://maps.google.com/?q=Campina+Grande+PB",
      },
    ],
  },
  pt: {
    description:
      "Desenvolvedor full stack com foco em front-end, em React, Node.js e TypeScript, com mais de 4 anos de experiência. Campina Grande, PB.",
    role: "Full Stack, Front-end Specialist",
    bio: "Desenvolvedor full stack com foco em front-end, em React, Node.js e TypeScript. Em mais de 4 anos, ajudei a construir e evoluir produtos usados por centenas de empresas, do desenho da solução à produção e ao monitoramento, com atenção a qualidade de código, experiência do usuário e resultado de negócio.",
    experience: "Experiência",
    skills: "Habilidades",
    contact: "Contato",
    jobs: [
      {
        period: "2025 – atual",
        role: "Frontend Developer",
        company: "Solarz",
        points: [
          "Ajudei a evoluir um CRM usado por centenas de integradoras do setor solar, com foco em escala e nos fluxos críticos do produto.",
          "Contribuí com o design system, reduzindo o tempo de desenvolvimento em 50% e o retrabalho em 80%.",
          "Criei componentes reutilizáveis para módulos estratégicos do CRM, reduzindo cerca de 60% do código duplicado e acelerando novas entregas.",
          "Otimizei fluxos e renderizações críticas em React, reduzindo o tempo médio de carregamento das telas em até 40%.",
          "Fiz code reviews frequentes para manter qualidade, consistência e performance.",
          "Escrevi e mantive testes unitários e de integração com Jest, Vitest e React Testing Library.",
        ],
      },
      {
        period: "2022 – atual",
        role: "Software Engineer",
        company: "Freelance",
        points: [
          "Desenvolvi bots de gestão de pedidos para uma empresa automotiva, com aumento de 30% na produtividade de entrega e mais capacidade operacional.",
          "Criei um disparo de atualizações cadastrais para o RH que economizou cerca de duas semanas de trabalho em um clique.",
          "Além dos bots, construí um sistema para liberar pedidos, cotar fornecedores e unificar esses processos, com menos atrito para treinar a equipe.",
          "Desenvolvi uma plataforma de pedidos online para uma empresa do ramo alimentício, que aumentou a margem de lucro em 10% ao eliminar taxas de marketplaces.",
          "Contribuí com um sistema interno de votação online, criptografado de ponta a ponta, concluído com transparência total e sem vazamento de dados.",
        ],
      },
    ],
    skillGroups: [
      {
        label: "IA e dados",
        items:
          "RAG, integração com LLMs (GPT-4, Claude), embeddings, document chunking, busca semântica e prompt engineering.",
      },
      {
        label: "Linguagens",
        items:
          "TypeScript, JavaScript, Node.js (NestJS e Express), Java, Spring Boot, React, React Native, Next.js, Prisma ORM e tRPC.",
      },
      {
        label: "Dados",
        items:
          "PostgreSQL, MongoDB, Redis, Elasticsearch, Kafka, GraphQL, REST e WebSockets.",
      },
      {
        label: "Cloud",
        items:
          "AWS (Lambda, ECS, S3, RDS, CloudWatch), Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, Vercel) e observabilidade (OpenTelemetry, ELK).",
      },
      {
        label: "Prática",
        items:
          "Jest, Vitest, React Testing Library, TDD, Agile/Scrum, microsserviços, SEO, SSR, SSG, Clean Architecture e arquitetura orientada a eventos.",
      },
    ],
    contacts: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/ryansldev",
        href: "https://linkedin.com/in/ryansldev",
      },
      {
        label: "E-mail",
        value: "ryanlima1309@gmail.com",
        href: "mailto:ryanlima1309@gmail.com",
      },
      {
        label: "Telefone",
        value: "(83) 98896-8267",
        href: "tel:+5583988968267",
      },
      {
        label: "Cidade",
        value: "Campina Grande, PB",
        href: "https://maps.google.com/?q=Campina+Grande+PB",
      },
    ],
  },
} as const;
