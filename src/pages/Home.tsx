import "./Home.css";
import avatarImage from "../assets/avatar.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero scanlines">
        <div className="stars-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-title">KOLTE-DEV.EXE</span>
                <div className="terminal-controls">
                  <span className="control minimize">-</span>
                  <span className="control maximize">□</span>
                  <span className="control close">×</span>
                </div>
              </div>
              <div className="terminal-body">
                <p className="terminal-line">
                  <span className="prompt">C:\Users\Visitor&gt;</span> whoami
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; ELISEU SILVA - JUNIOR .NET DEVELOPER
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="prompt">C:\Users\Visitor&gt;</span>{" "}
                  get-skills
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; Loading skills database...
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="output highlight">
                    &gt; [████████████] 100% Complete
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; PRIMARY: C#, ASP.NET Core, React
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; LEARNING: React, TypeScript
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="prompt">C:\Users\Visitor&gt;</span>{" "}
                  start-adventure
                </p>
                <p className="terminal-line">
                  <span className="output blink">
                    &gt; Ready for new quests..._
                  </span>
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">
                [ VIEW PROJECTS ]
              </a>
              <a href="/contact" className="btn btn-secondary">
                [ SEND MESSAGE ]
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="pixel-avatar pixel-float">
              <div className="avatar-image-container">
                <img
                  src={avatarImage}
                  alt="Eliseu Silva - Developer Avatar"
                  className="avatar-photo"
                />
                <div className="pixel-frame"></div>
              </div>
            </div>
            <div className="status-indicators">
              <div className="status-item">
                <span className="label">HEALTH:</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="status-item">
                <span className="label">COFFEE:</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill coffee"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="status-item">
                <span className="label">CODE:</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill code"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills dark-section" id="skills">
        <div className="container">
          <h2 className="pixel-title large text-center">[ SKILL TREE ]</h2>
          <div className="skills-grid">
            <div className="skill-card pixel-card pixel-glow">
              <h3 className="pixel-title medium">.NET FRAMEWORK</h3>
              <div className="skill-level">
                <span>Level: 25</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <p className="pixel-text">
                C#, ASP.NET Core, Entity Framework, Web APIs
              </p>
            </div>
            <div className="skill-card pixel-card pixel-glow">
              <h3 className="pixel-title medium">FRONTEND MAGIC</h3>
              <div className="skill-level">
                <span>Level: 18</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "72%" }}></div>
                </div>
              </div>
              <p className="pixel-text">
                React, TypeScript, HTML5, CSS3, JavaScript
              </p>
            </div>
            <div className="skill-card pixel-card pixel-glow">
              <h3 className="pixel-title medium">DATABASE MASTERY</h3>
              <div className="skill-level">
                <span>Level: 22</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "88%" }}></div>
                </div>
              </div>
              <p className="pixel-text">SQL Server, PostgreSQL, MongoDB</p>
            </div>
            <div className="skill-card pixel-card pixel-glow">
              <h3 className="pixel-title medium">DEVOPS TACTICS</h3>
              <div className="skill-level">
                <span>Level: 20</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "80%" }}></div>
                </div>
              </div>
              <p className="pixel-text">Docker, Azure, CI/CD, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content text-center">
            <h2 className="pixel-title large">[ PLAYER PROFILE ]</h2>
            <div className="profile-window">
              <p className="pixel-text">
                &gt; LOADING PLAYER DATA...
                <br />
                &gt; NAME: KOLTE
                <br />
                &gt; CLASS: FULL-STACK DEVELOPER
                <br />
                &gt; SPECIALIZATION: .NET BACKEND + REACT FRONTEND
                <br />
                &gt; STATUS: LEARNING NEW ABILITIES
                <br />
                &gt; MISSION: CREATE AWESOME SOFTWARE
                <br />
              </p>
              <a href="/about" className="btn btn-outline">
                [ VIEW FULL STATS ]
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
