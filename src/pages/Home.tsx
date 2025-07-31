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
                    &gt; ELISEU SILVA - JUNIOR DEVELOPER
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
                    &gt; PRIMARY: C#, .NET Core, ASP.NET, AS400 IBM
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; DATABASES: PostgreSQL, MySQL
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; LEARNING: React, TypeScript, Golang
                  </span>
                </p>
                <p className="terminal-line">
                  <span className="output">
                    &gt; SYSTEMS: Windows, Linux, macOS
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
              <button className="btn btn-disabled" disabled>
                [ PROJECTS - SOON ]
              </button>
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
                <span className="label">CODE:</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill code"
                    style={{ width: "75%" }}
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
              <h3 className="pixel-title medium">.NET ECOSYSTEM</h3>
              <div className="skill-level">
                <span>Level: 22</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "88%" }}></div>
                </div>
              </div>
              <p className="pixel-text">
                C#, .NET Core, ASP.NET, DevExpress, IBM AS400
              </p>
            </div>
            <div className="skill-card pixel-card pixel-glow">
              <h3 className="pixel-title medium">DATABASE MASTERY</h3>
              <div className="skill-level">
                <span>Level: 20</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "80%" }}></div>
                </div>
              </div>
              <p className="pixel-text">
                PostgreSQL, MySQL, Data Design & Optimization
              </p>
            </div>
            <div className="skill-card pixel-card pixel-glow">
              <h3 className="pixel-title medium">LEARNING STACK</h3>
              <div className="skill-level">
                <span>Level: 15</span>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "60%" }}></div>
                </div>
              </div>
              <p className="pixel-text">React, TypeScript, Golang, DevOps</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <h2 className="pixel-title large text-center">[ PLAYER PROFILE ]</h2>
          <div className="profile-window">
            <p className="pixel-text">
              &gt; LOADING PLAYER DATA...
              <br />
              &gt; NAME: ELISEU SILVA
              <br />
              &gt; CLASS: JUNIOR FULL-STACK DEVELOPER
              <br />
              &gt; SPECIALIZATION: .NET CORE + LEGACY SYSTEMS
              <br />
              &gt; CURRENT ROLE: DEVELOPING & MAINTAINING FULL-STACK APPS
              <br />
              &gt; EXPERTISE: DEVEXPRESS + IBM AS400 INTEGRATION
              <br />
              &gt; STATUS: EXPANDING TO MODERN FRONTEND & BACKEND
              <br />
              &gt; MISSION: BUILD ROBUST & SCALABLE SOLUTIONS
              <br />
            </p>
            <a href="/about" className="btn btn-outline">
              [ VIEW FULL STATS ]
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
