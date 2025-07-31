import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <h1>Sobre Mim</h1>
          <p className="lead">
            Conheça mais sobre minha jornada como desenvolvedor e minha paixão
            pela tecnologia
          </p>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2>Minha História</h2>
            <p>
              Sou um desenvolvedor apaixonado por tecnologia com experiência
              sólida em .NET e atualmente expandindo minhas habilidades para o
              ecossistema React. Minha jornada na programação começou com a
              curiosidade de entender como as coisas funcionam "por trás dos
              panos".
            </p>

            <p>
              Com anos de experiência em desenvolvimento backend usando C# e
              .NET Core, construí APIs robustas, sistemas de gerenciamento e
              aplicações enterprise. Agora, estou mergulhando no mundo frontend
              para criar experiências completas e interativas.
            </p>

            <h2>Experiência Profissional</h2>
            <div className="experience">
              <div className="experience-item">
                <h3>Desenvolvedor .NET Senior</h3>
                <p className="company">Empresa Tech • 2020 - Presente</p>
                <ul>
                  <li>Desenvolvimento de APIs REST usando ASP.NET Core</li>
                  <li>Implementação de arquiteturas limpas e padrões SOLID</li>
                  <li>
                    Integração com bancos de dados SQL Server e PostgreSQL
                  </li>
                  <li>Mentoria de desenvolvedores juniores</li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>Desenvolvedor .NET Pleno</h3>
                <p className="company">Software House • 2018 - 2020</p>
                <ul>
                  <li>Desenvolvimento de sistemas web usando MVC</li>
                  <li>Trabalho com Entity Framework e LINQ</li>
                  <li>Implementação de testes unitários e integração</li>
                  <li>Participação em code reviews e melhorias de processo</li>
                </ul>
              </div>
            </div>

            <h2>Educação & Certificações</h2>
            <div className="education">
              <div className="education-item">
                <h3>Bacharel em Ciência da Computação</h3>
                <p>Universidade Federal • 2014 - 2018</p>
              </div>
              <div className="education-item">
                <h3>Microsoft Certified: Azure Developer Associate</h3>
                <p>Microsoft • 2022</p>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="skills-detailed">
              <h3>Tecnologias & Ferramentas</h3>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span>C#</span>
                  <span>ASP.NET Core</span>
                  <span>Entity Framework</span>
                  <span>Web API</span>
                  <span>SignalR</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Banco de Dados</h4>
                <div className="skill-tags">
                  <span>SQL Server</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>Redis</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>DevOps & Cloud</h4>
                <div className="skill-tags">
                  <span>Azure</span>
                  <span>Docker</span>
                  <span>GitHub Actions</span>
                  <span>Azure DevOps</span>
                </div>
              </div>
            </div>

            <div className="interests">
              <h3>Interesses</h3>
              <ul>
                <li>🚀 Novas tecnologias</li>
                <li>📚 Aprendizado contínuo</li>
                <li>🎮 Desenvolvimento de jogos</li>
                <li>🏃‍♂️ Corrida e fitness</li>
                <li>📸 Fotografia</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
