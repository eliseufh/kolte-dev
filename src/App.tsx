import "./App.css";
import Header from "./components/Header";
import { useState, useEffect, useMemo } from "react";
import { MdEmail } from "react-icons/md";
import profileImage from "./assets/image.jpeg";

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
            setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
          }
        }
      },
      isDeleting ? 100 : 150
    ); // Delete vs type speed

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentEmoticon, emoticons]);

  const experiences = useMemo(
    () => [
      {
        id: 0,
        company: "Lusodata - Serviços Informáticos, S.A.",
        role: "Full Stack Developer",
        period: "Oct 2024 - Present",
        description:
          "• Developed and maintained robust full-stack applications using .NET Core (C#), integrating DevExpress components and IBM AS400 legacy systems to ensure operational efficiency.\n\n• Designed and managed optimized relational databases, ensuring high integrity and performance in critical data handling.\n\n• Created responsive and intuitive front-end interfaces, focused on excellent user experience and performance.\n\n• Acted on continuous system improvement through rigorous testing and implementation of development best practices.",
      },
    ],
    []
  );

  const handleEmailClick = () => {
    window.location.href =
      "mailto:eliseusilva.info@gmail.com?subject=Contact%20through%20portfolio";
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <p className="greeting">Hi! I'm</p>
        <h1 className="name-title">
          Eliseu Silva{" "}
          <span className="typing-emoticon">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </h1>
        <p className="description">
          A young <span className="highlight">curious</span> person with a{" "}
          <span className="highlight">thirst for learning</span>, constantly
          evolving to become a{" "}
          <span className="highlight">timeless professional</span>.
        </p>
        <p className="description">
          "Success is going from failure to failure without losing enthusiasm."
          Winston Churchill
        </p>
        <button className="email-button" onClick={handleEmailClick}>
          <MdEmail /> Send me an email!
        </button>
      </main>

      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title">About Me:</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I have 1 year of experience as a{" "}
                <span className="highlight">.NET</span> developer, currently
                studying to become a <span className="highlight">DevOps</span>{" "}
                engineer.
              </p>
              <p>
                I'm <span className="highlight">optimistic</span> and seek to
                live a life where <span className="highlight">Christ</span> is
                the center and do His will.
              </p>
              <p>
                Born and raised in <span className="highlight">Brazil</span>,
                currently living in <span className="highlight">Portugal</span>.
              </p>
            </div>
            <div className="about-photo">
              <div className="photo-container">
                <img src={profileImage} alt="Me" className="profile-img" />
                <div className="photo-overlay">
                  <p>Me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-container">
          <h2 className="section-title">My Experience:</h2>

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
            Created by <span className="highlight">Eliseu Silva</span> using{" "}
            <span className="tech-stack">React</span>,{" "}
            <span className="tech-stack">TypeScript</span> and{" "}
            <span className="tech-stack">Vite</span>.
          </p>
          <p className="copyright">© 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
