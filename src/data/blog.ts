export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number; // in minutes
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Minha Jornada de .NET para React: Lições Aprendidas",
    excerpt: "Compartilho os principais desafios e descobertas ao migrar do desenvolvimento backend .NET para o frontend React.",
    content: `
# Minha Jornada de .NET para React: Lições Aprendidas

Como desenvolvedor .NET experiente, decidir aprender React foi tanto emocionante quanto desafiador. Neste post, compartilho as principais lições que aprendi nessa jornada.

## O Início da Jornada

Trabalhando há anos com C# e ASP.NET Core, eu tinha uma mentalidade muito estruturada e tipada. O JavaScript, especialmente no início, parecia caótico e imprevisível.

## Principais Desafios

### 1. Mudança de Paradigma
- De orientação a objetos para programação funcional
- Gerenciamento de estado vs. propriedades de classe
- Ciclo de vida de componentes vs. ciclo de vida de objetos

### 2. Ecossistema JavaScript
- NPM e gerenciamento de dependências
- Bundlers (Webpack, Vite)
- Ferramentas de build e desenvolvimento

### 3. TypeScript como Ponte
TypeScript foi fundamental para facilitar a transição. A tipagem estática trouxe a familiaridade do C#.

## Lições Importantes

1. **Começar pequeno**: Não tente aprender tudo de uma vez
2. **Praticar constantemente**: Construa projetos pessoais
3. **Comunidade**: A comunidade React é incrivelmente acolhedora

## Próximos Passos

Agora planejo explorar Next.js e aprofundar em testes com Jest e Testing Library.

Qual sua experiência ao aprender uma nova tecnologia? Compartilhe nos comentários!
    `,
    author: "Kolte",
    publishedAt: "2024-07-25",
    category: "Desenvolvimento",
    tags: ["React", ".NET", "JavaScript", "TypeScript", "Carreira"],
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: "5 Padrões de Design Essenciais em .NET Core",
    excerpt: "Explore os padrões de design mais úteis para desenvolver aplicações .NET Core robustas e maintíveis.",
    content: `
# 5 Padrões de Design Essenciais em .NET Core

Os padrões de design são soluções reutilizáveis para problemas comuns no desenvolvimento de software. Aqui estão os 5 mais importantes para .NET Core.

## 1. Repository Pattern

O Repository Pattern abstrai a camada de acesso a dados, tornando o código mais testável e maintível.

\`\`\`csharp
public interface IProductRepository
{
    Task<Product> GetByIdAsync(int id);
    Task<IEnumerable<Product>> GetAllAsync();
    Task AddAsync(Product product);
    Task UpdateAsync(Product product);
    Task DeleteAsync(int id);
}
\`\`\`

## 2. Dependency Injection

Fundamental para inversão de controle e testabilidade.

## 3. Builder Pattern

Especialmente útil para configurações complexas.

## 4. Factory Pattern

Para criação de objetos baseada em condições.

## 5. Strategy Pattern

Para algoritmos intercambiáveis.

Estes padrões, quando usados corretamente, resultam em código mais limpo e maintível.
    `,
    author: "Kolte",
    publishedAt: "2024-07-20",
    category: "Desenvolvimento",
    tags: [".NET Core", "Design Patterns", "Arquitetura", "C#"],
    readTime: 8,
    featured: true
  },
  {
    id: 3,
    title: "Como Configurar um Ambiente de Desenvolvimento .NET no VS Code",
    excerpt: "Guia completo para configurar um ambiente produtivo de desenvolvimento .NET usando VS Code no macOS e Linux.",
    content: `
# Como Configurar um Ambiente de Desenvolvimento .NET no VS Code

VS Code se tornou uma excelente alternativa ao Visual Studio para desenvolvimento .NET, especialmente em macOS e Linux.

## Instalação do .NET SDK

Primeiro, baixe e instale o .NET SDK mais recente do site oficial da Microsoft.

## Extensões Essenciais

1. **C# Dev Kit** - Suporte completo para C#
2. **NuGet Package Manager** - Gerenciamento de pacotes
3. **GitLens** - Melhor integração com Git

## Configuração do Workspace

Configure o \`launch.json\` e \`tasks.json\` para debugging e build automático.

## Dicas de Produtividade

- Use snippets personalizados
- Configure o IntelliSense
- Integre com ferramentas de CI/CD

Com essas configurações, você terá um ambiente poderoso e produtivo!
    `,
    author: "Kolte",
    publishedAt: "2024-07-15",
    category: "Ferramentas",
    tags: ["VS Code", ".NET", "Produtividade", "Configuração"],
    readTime: 6,
    featured: false
  },
  {
    id: 4,
    title: "State Management no React: Quando Usar Cada Solução",
    excerpt: "Uma análise prática de quando usar useState, useContext, Redux ou Zustand em suas aplicações React.",
    content: `
# State Management no React: Quando Usar Cada Solução

Gerenciamento de estado é um dos aspectos mais importantes (e confusos) do React. Vamos entender quando usar cada solução.

## useState - O Básico

Para estado local simples de componentes.

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useContext - Compartilhamento Simples

Para dados que precisam ser compartilhados entre componentes próximos.

## Redux - Estado Global Complexo

Para aplicações grandes com estado complexo e múltiplos desenvolvedores.

## Zustand - Simplicidade Moderna

Uma alternativa mais simples ao Redux para a maioria dos casos.

## Minha Recomendação

1. Comece com useState
2. Use Context para temas/autenticação
3. Considere Zustand para estado global
4. Redux apenas para casos muito complexos

A regra de ouro: use a solução mais simples que resolve seu problema!
    `,
    author: "Kolte",
    publishedAt: "2024-07-10",
    category: "React",
    tags: ["React", "State Management", "useState", "Redux", "Zustand"],
    readTime: 7,
    featured: false
  }
];

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return ['all', ...Array.from(new Set(categories))];
};
