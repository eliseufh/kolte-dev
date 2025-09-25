import "./Header.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a
            href="https://linkedin.com/in/eliseu03"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <FaLinkedin className="icon" />
            <span className="text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/eliseufh"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <FaGithub className="icon" />
            <span className="text">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
