import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Eliseu Silva</h3>
            <p>
              Junior Developer specialized in .NET Core, learning modern
              technologies like React, TypeScript and Golang.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <span className="disabled-link">Projects (Coming Soon)</span>
              </li>
              <li>
                <span className="disabled-link">Blog (Coming Soon)</span>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social Media</h4>
            <div className="social-links">
              <a
                href="https://github.com/koltee"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eliseu03"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Eliseu Silva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
