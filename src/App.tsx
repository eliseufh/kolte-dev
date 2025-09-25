import "./App.css";
import Header from "./components/Header";
import { useState, useEffect, useMemo } from "react";
import { MdEmail } from "react-icons/md";

function App() {
  const [currentEmoticon, setCurrentEmoticon] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const emoticons = useMemo(() => [":D", ":)", ":P", "xD"], []);

  useEffect(() => {
    const currentWord = emoticons[currentEmoticon];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
            setCurrentEmoticon((prev) => (prev + 1) % emoticons.length);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length + 1));

          if (displayText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500); // Pausa antes de apagar
          }
        }
      },
      isDeleting ? 100 : 150
    ); // Velocidade de apagar vs digitar

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentEmoticon, emoticons]);

  const experiences = useMemo(
    () => [
      {
        id: 0,
        company: "Lusodata - Serviços Informáticos, S.A.",
        role: "Desenvolvedor Full Stack",
        period: "Oct 2024 - Present",
        description:
          "• Desenvolvi e mantive aplicações full stack robustas utilizando .NET Core (C#), integrando componentes DevExpress e sistemas legados IBM AS400 para garantir eficiência operacional.\n\n• Projetei e gerenciei bancos de dados relacionais otimizados, assegurando alta integridade e desempenho na manipulação de dados críticos.\n\n• Criei interfaces front-end responsivas e intuitivas, focadas em excelente experiência do usuário e performance.\n\n• Atuei na melhoria contínua dos sistemas por meio de testes rigorosos e implementação de boas práticas de desenvolvimento.",
      },
    ],
    []
  );

  const handleEmailClick = () => {
    window.location.href =
      "mailto:eliseusilva.info@gmail.com?subject=Contato%20através%20do%20portfólio";
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <p className="greeting">Oi! Eu sou o</p>
        <h1 className="name-title">
          Eliseu Silva{" "}
          <span className="typing-emoticon">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </h1>
        <p className="description">
          Um jovem <span className="highlight">curioso</span> e com{" "}
          <span className="highlight">sede de aprendizado</span>, em constante
          evolução para me tornar um{" "}
          <span className="highlight">profissional atemporal</span>.
        </p>
        <p className="description">
          "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo."
          Winston Churchill
        </p>
        <button className="email-button" onClick={handleEmailClick}>
          <MdEmail /> Me envie um e-mail!
        </button>
      </main>

      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title">Sobre Mim:</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Tenho 1 ano de experiência como desenvolvedor{" "}
                <span className="highlight">.NET</span>, atualmente estudando
                para me tornar engenheiro{" "}
                <span className="highlight">DevOps</span>.
              </p>
              <p>
                Sou <span className="highlight">otimista</span> e busco viver
                uma vida onde <span className="highlight">Cristo</span> é o
                centro e fazer a vontade dele.
              </p>
              <p>
                Nascido e criado no <span className="highlight">Brasil</span>,
                atualmente morando em{" "}
                <span className="highlight">Portugal</span>.
              </p>
            </div>
            <div className="about-photo">
              <div className="photo-container">
                <img
                  src="/src/assets/eu.jpeg"
                  alt="Eu"
                  className="profile-img"
                />
                <div className="photo-overlay">
                  <p>Eu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-container">
          <h2 className="section-title">Minha Experiência:</h2>

          {/* Tabs Navigation */}
          <div className="tabs-nav">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <div className="experience-details">
              <div className="experience-header">
                <h3 className="job-title">{experiences[activeTab].role}</h3>
                <span className="experience-period">
                  {experiences[activeTab].period}
                </span>
              </div>
              <p className="company-name">{experiences[activeTab].company}</p>
              <p className="job-description">
                {experiences[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>
            Criado por <span className="highlight">Eliseu Silva</span> usando{" "}
            <span className="tech-stack">React</span>,{" "}
            <span className="tech-stack">TypeScript</span> e{" "}
            <span className="tech-stack">Vite</span>.
          </p>
          <p className="copyright">© 2025 Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
