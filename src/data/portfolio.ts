export type SkillCategory = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
};

export type LearningItem = {
  title: string;
  detail: string;
  progress: string;
};

export type CurrentCard = {
  title: string;
  detail: string;
};

export type Project = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  link: string;
  status: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:seuemail@exemplo.com" },
] as const;

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Back-end e APIs",
    items: ["Node.js", "REST APIs", "Auth basica", "Banco relacional", "JSON"],
  },
  {
    category: "Suporte e operacao",
    items: ["Helpdesk", "Diagnostico", "Atendimento tecnico", "Documentacao", "Troubleshooting"],
  },
  {
    category: "Ferramentas e fluxo",
    items: ["Git", "GitHub", "Figma", "Postman", "Linux basico", "VS Code"],
  },
];

export const featuredProjects: Project[] = [
  {
    title: "Painel de Chamados",
    summary:
      "Projeto para organizar e acompanhar tickets com filtros por status, prioridade e responsavel.",
    impact: "Treinei modelagem de dados, componentes reutilizaveis e fluxo de CRUD completo.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    link: "#",
    status: "Em evolucao",
  },
  {
    title: "Landing de Produto SaaS",
    summary:
      "Landing page com foco em copy, performance e experiencia visual para apresentar um produto digital.",
    impact: "Pratiquei hierarquia visual, microcopy e animacoes suaves com foco mobile-first.",
    stack: ["React", "Framer Motion", "Tailwind", "Vercel"],
    link: "#",
    status: "Publicado",
  },
  {
    title: "Lab de Infra e Linux",
    summary:
      "Laboratorio pessoal para praticar redes, Linux e conceitos de arquitetura em ambientes simples e replicaveis.",
    impact: "Aprofundei troubleshooting e entendimento de como sistemas se comportam no dia a dia.",
    stack: ["Linux", "Docker", "Nginx", "Shell", "Redes"],
    link: "#",
    status: "Estudo ativo",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Hoje",
    title: "Helpdesk - 4 meses",
    description:
      "Atuando com atendimento tecnico, diagnostico e resolucao de incidentes no dia a dia, com foco em clareza e agilidade.",
  },
  {
    period: "Ultimo ano",
    title: "Desenvolvedor Junior - 1 ano",
    description:
      "Experiencia pratica construindo interfaces, APIs e pequenas funcionalidades de ponta a ponta em ambiente profissional.",
  },
  {
    period: "Antes disso",
    title: "Base e descoberta na tecnologia",
    description:
      "Periodo de estudos e experimentos que fortaleceu a vontade de entender sistemas alem do codigo da interface.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "Atual",
    role: "Analista de Helpdesk",
    company: "Contexto atual",
    summary:
      "Rotina focada em suporte tecnico, analise de incidentes e comunicacao com usuarios.",
    highlights: [
      "Triagem e resolucao de chamados",
      "Investigacao de causa raiz",
      "Documentacao de processos e boas praticas",
    ],
  },
  {
    period: "1 ano",
    role: "Desenvolvedor Junior",
    company: "Experiencia em desenvolvimento",
    summary:
      "Participacao em entregas de produto com foco em frontend e suporte em tarefas full stack.",
    highlights: [
      "Implementacao de interfaces responsivas",
      "Integracao com APIs",
      "Correcao de bugs e melhorias incrementais",
    ],
  },
];

export const learningNow: LearningItem[] = [
  {
    title: "Cloud",
    detail: "Conceitos de servicos, deploy e organizacao de ambientes.",
    progress: "Fundamentos + pratica semanal",
  },
  {
    title: "Redes",
    detail: "DNS, HTTP, roteamento basico e diagnostico de conectividade.",
    progress: "Laboratorios práticos",
  },
  {
    title: "Infra e Linux",
    detail: "Comandos, processos, logs e automacoes simples para operacao.",
    progress: "Uso diario + projetos de estudo",
  },
  {
    title: "Arquitetura de sistemas",
    detail: "Escalabilidade, separacao de responsabilidades e trade-offs reais.",
    progress: "Estudo guiado por casos",
  },
];

export const currentCards: CurrentCard[] = [
  {
    title: "Trabalhando com",
    detail: "Suporte tecnico, incidentes e melhoria continua da experiencia do usuario.",
  },
  {
    title: "Estudando",
    detail: "Cloud, redes, Linux e arquitetura para subir o nivel tecnico de base.",
  },
  {
    title: "Explorando",
    detail: "Como conectar produto, desenvolvimento e infraestrutura em solucoes mais completas.",
  },
  {
    title: "Proxima meta",
    detail: "Consolidar essa transicao tecnica e atuar em projetos que unam dev + infra.",
  },
];

export const differentials = [
  {
    title: "Aprendizado continuo",
    description: "Tenho rotina de estudo constante e gosto de transformar teoria em pratica real.",
  },
  {
    title: "Perfil hibrido",
    description: "Curto tanto criar interfaces quanto investigar problemas tecnicos em profundidade.",
  },
  {
    title: "Comunicacao humana",
    description: "Valorizo clareza com usuarios e time, sem complicar o que pode ser simples.",
  },
];
