import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <section className="error-section">
          <div className="terminal-window error-terminal">
            <div className="terminal-header">
              <span className="terminal-title">SYSTEM ERROR - 404.EXE</span>
              <div className="terminal-controls">
                <span className="control minimize">-</span>
                <span className="control maximize">□</span>
                <span className="control close">×</span>
              </div>
            </div>
            <div className="terminal-body">
              <p className="terminal-line">
                <span className="prompt error">C:\Users\Visitor&gt;</span>{" "}
                access-page
              </p>
              <p className="terminal-line">
                <span className="output error-text">
                  &gt; ERROR: Page not found!
                </span>
              </p>
              <p className="terminal-line">
                <span className="output error-text">&gt; Status Code: 404</span>
              </p>
              <p className="terminal-line">
                <span className="output">
                  &gt; Scanning available routes...
                </span>
              </p>
              <p className="terminal-line">
                <span className="output highlight">
                  &gt; [████████████] 100% Complete
                </span>
              </p>
              <p className="terminal-line">
                <span className="output success">
                  &gt; Available routes found:
                </span>
              </p>
              <p className="terminal-line">
                <span className="output">&gt; /home - Main hub</span>
              </p>
              <p className="terminal-line">
                <span className="output">&gt; /about - Player stats</span>
              </p>
              <p className="terminal-line">
                <span className="output">&gt; /contact - Send message</span>
              </p>
              <p className="terminal-line">
                <span className="prompt">C:\Users\Visitor&gt;</span>{" "}
                return-to-base
              </p>
              <p className="terminal-line">
                <span className="output blink">
                  &gt; Redirecting to safe zone..._
                </span>
              </p>
            </div>
          </div>

          <div className="error-actions">
            <h2 className="pixel-title large text-center">
              [ QUEST NOT FOUND ]
            </h2>
            <p className="pixel-text text-center">
              The page you're looking for doesn't exist in this realm.
              <br />
              Perhaps it was moved to another dimension?
            </p>

            <div className="action-buttons">
              <Link to="/" className="btn btn-primary">
                [ RETURN TO BASE ]
              </Link>
              <Link to="/contact" className="btn btn-outline">
                [ REPORT BUG ]
              </Link>
            </div>
          </div>

          <div className="error-stats">
            <div className="stat-item">
              <span className="label">ERROR CODE</span>
              <span className="value error-code">404</span>
            </div>
            <div className="stat-item">
              <span className="label">STATUS</span>
              <span className="value">PAGE NOT FOUND</span>
            </div>
            <div className="stat-item">
              <span className="label">LOCATION</span>
              <span className="value">UNKNOWN DIMENSION</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
