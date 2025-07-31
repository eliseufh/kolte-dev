# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Kolte Dev - Portfólio Pessoal

Um website pessoal desenvolvido com React e TypeScript, criado para showcases de projetos, blog técnico e informações profissionais.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Bundler e ferramenta de desenvolvimento
- **React Router** - Roteamento no lado do cliente
- **CSS3** - Estilização com CSS moderno
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Footer.tsx       # Rodapé do site
│   └── *.css           # Estilos dos componentes
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── About.tsx       # Sobre mim
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── Blog.tsx        # Blog técnico
│   ├── Contact.tsx     # Formulário de contato
│   └── *.css          # Estilos das páginas
├── data/              # Dados estáticos
│   ├── projects.ts    # Dados dos projetos
│   └── blog.ts        # Posts do blog
├── App.tsx            # Componente principal
└── main.tsx          # Ponto de entrada
```

## 🔧 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/kolte/portfolio.git
cd portfolio
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção
- `npm run lint` - Executa o linting do código

## 🎨 Funcionalidades

### 🏠 Home

- Hero section com apresentação pessoal
- Seção de habilidades técnicas
- Preview da seção "Sobre"

### 👨‍💻 Sobre

- História profissional detalhada
- Experiência de trabalho
- Educação e certificações
- Habilidades técnicas organizadas por categoria
- Interesses pessoais

### 🚀 Projetos

- Grid responsivo de projetos
- Filtros por categoria (Web, API, Desktop, Mobile)
- Cards com informações detalhadas
- Links para GitHub e demos ao vivo
- Badges para projetos em destaque

### 📝 Blog

- Posts organizados por categoria
- Sistema de tags
- Filtros dinâmicos
- Cards com tempo de leitura estimado
- Preview de conteúdo

### 📧 Contato

- Formulário funcional de contato
- Informações de contato direto
- Links para redes sociais
- Status de disponibilidade
- Feedback visual de envio

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido com os seguintes objetivos:

1. **Praticar React**: Hooks, componentes funcionais, gerenciamento de estado
2. **TypeScript**: Tipagem em aplicações React
3. **Responsividade**: Design mobile-first
4. **Performance**: Otimização de componentes e assets
5. **UX/UI**: Experiência do usuário e interface limpa
6. **Organização**: Estrutura de projeto escalável

## 📱 Design Responsivo

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## 🌟 Próximos Passos

- [ ] Implementar dark mode
- [ ] Adicionar animações com Framer Motion
- [ ] Integrar com CMS headless para o blog
- [ ] Implementar PWA
- [ ] Adicionar testes automatizados
- [ ] Deploy com CI/CD

## 🤝 Contribuições

Este é um projeto pessoal, mas sugestões e feedback são sempre bem-vindos!

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: kolte@exemplo.com
- **LinkedIn**: [linkedin.com/in/kolte](https://linkedin.com/in/kolte)
- **GitHub**: [github.com/kolte](https://github.com/kolte)

---

⭐ Desenvolvido com React e muito ☕ por [Kolte](https://github.com/kolte)

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
