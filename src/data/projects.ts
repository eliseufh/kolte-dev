export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'api' | 'desktop' | 'mobile';
  completedAt: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de E-commerce",
    description: "Plataforma completa de e-commerce com ASP.NET Core e React",
    longDescription: "Sistema completo de e-commerce desenvolvido com ASP.NET Core no backend e React no frontend. Inclui funcionalidades como carrinho de compras, processamento de pagamentos, gestão de inventário e painel administrativo.",
    technologies: ["ASP.NET Core", "React", "TypeScript", "SQL Server", "Entity Framework", "Stripe API"],
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "https://github.com/kolte/ecommerce-system",
    liveUrl: "https://ecommerce-demo.koltedev.com",
    featured: true,
    category: 'web',
    completedAt: "2024-03-15"
  },
  {
    id: 2,
    title: "API de Gerenciamento de Tarefas",
    description: "RESTful API para gerenciamento de tarefas e projetos",
    longDescription: "API robusta para gerenciamento de tarefas e projetos, com autenticação JWT, documentação Swagger, e arquitetura clean. Suporta operações CRUD completas, filtros avançados e notificações em tempo real.",
    technologies: ["ASP.NET Core", "Entity Framework", "JWT", "Swagger", "PostgreSQL", "SignalR"],
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "https://github.com/kolte/task-management-api",
    featured: true,
    category: 'api',
    completedAt: "2024-01-20"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados com React",
    longDescription: "Dashboard responsivo e interativo para visualização de dados e analytics. Integra com múltiplas APIs, oferece gráficos dinâmicos e relatórios customizáveis. Construído com foco na experiência do usuário.",
    technologies: ["React", "TypeScript", "Chart.js", "Material-UI", "REST APIs"],
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "https://github.com/kolte/analytics-dashboard",
    liveUrl: "https://dashboard.koltedev.com",
    featured: true,
    category: 'web',
    completedAt: "2024-02-10"
  },
  {
    id: 4,
    title: "Sistema de Chat em Tempo Real",
    description: "Aplicação de chat com SignalR e React",
    longDescription: "Sistema de chat em tempo real usando SignalR para comunicação bidirecional. Suporta salas de chat, mensagens privadas, upload de arquivos e notificações push.",
    technologies: ["ASP.NET Core", "SignalR", "React", "SQL Server", "Azure"],
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "https://github.com/kolte/realtime-chat",
    featured: false,
    category: 'web',
    completedAt: "2023-11-05"
  },
  {
    id: 5,
    title: "Sistema de Autenticação",
    description: "Microserviço de autenticação e autorização",
    longDescription: "Microserviço dedicado para autenticação e autorização usando Identity Server. Suporta OAuth2, OpenID Connect, e integração com provedores externos como Google e Microsoft.",
    technologies: ["ASP.NET Core", "Identity Server", "OAuth2", "Docker", "Redis"],
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "https://github.com/kolte/auth-service",
    featured: false,
    category: 'api',
    completedAt: "2023-09-15"
  },
  {
    id: 6,
    title: "Portfólio Pessoal",
    description: "Website pessoal desenvolvido com React e TypeScript",
    longDescription: "Este próprio website! Desenvolvido para praticar React enquanto criava uma presença online profissional. Inclui blog, portfólio de projetos e formulário de contato.",
    technologies: ["React", "TypeScript", "Vite", "CSS3", "React Router"],
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "https://github.com/kolte/portfolio",
    liveUrl: "https://koltedev.com",
    featured: false,
    category: 'web',
    completedAt: "2024-07-31"
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};
