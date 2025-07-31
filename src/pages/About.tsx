import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <h1>About Me</h1>
          <p className="lead">
            Learn more about my journey as a developer and my passion for
            technology
          </p>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2>My Story</h2>
            <p>
              I'm a developer passionate about technology with solid experience
              in .NET and currently expanding my skills to modern frontend
              technologies. My programming journey began with curiosity to
              understand how things work "behind the scenes".
            </p>

            <p>
              With experience in backend development using C# and .NET Core, I
              build robust full-stack applications, integrating DevExpress
              components and IBM AS400 systems. I design, implement and manage
              relational databases, ensuring data integrity and optimized
              structure. I also develop responsive and intuitive front-end
              interfaces with strong focus on performance and usability.
            </p>

            <h2>Professional Experience</h2>
            <div className="experience">
              <div className="experience-item">
                <h3>Junior Developer</h3>
                <p className="company">Current Position • 2024 - Present</p>
                <ul>
                  <li>
                    Develop, test and maintain full-stack applications using
                    .NET Core (C#)
                  </li>
                  <li>Integrate DevExpress components and IBM AS400 systems</li>
                  <li>Design, implement and manage relational databases</li>
                  <li>Develop responsive and intuitive front-end interfaces</li>
                  <li>Focus on performance optimization and data integrity</li>
                </ul>
              </div>
            </div>

            <h2>Education</h2>
            <div className="education">
              <div className="education-item">
                <h3>ISTEC - Higher Institute of Advanced Technologies of Lisbon</h3>
                <p>Higher Professional Technical Course, Software Development • 2023 - 2025</p>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="skills-detailed">
              <h3>Technologies & Tools</h3>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span>C#</span>
                  <span>.NET Core</span>
                  <span>ASP.NET</span>
                  <span>DevExpress</span>
                  <span>IBM AS400</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Learning Stack</h4>
                <div className="skill-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Golang</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Databases</h4>
                <div className="skill-tags">
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                  <span>SQL Server</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Systems</h4>
                <div className="skill-tags">
                  <span>Windows</span>
                  <span>Linux</span>
                  <span>macOS</span>
                </div>
              </div>
            </div>

            <div className="interests">
              <h3>Interests</h3>
              <ul>
                <li>🚀 New technologies</li>
                <li>📚 Continuous learning</li>
                <li>💻 Open source projects</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
