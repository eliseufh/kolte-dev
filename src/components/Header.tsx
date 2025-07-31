import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h2 className="text-glow terminal-text">[ KOLTE.DEV ]</h2>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <span className="nav-link disabled" title="Coming Soon">
                Projects
              </span>
            </li>
            <li>
              <span className="nav-link disabled" title="Coming Soon">
                Blog
              </span>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
