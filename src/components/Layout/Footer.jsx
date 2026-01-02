import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaLaptopCode,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pf-footer footer">
         
      {/* Back to top */}
      <button
        className="footer-backtop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <FaLaptopCode />
            </div>
            <h3 className="brand-title">Hridesh</h3>
            <p className="brand-role">
              Frontend Developer • React
            </p>

            <div className="brand-socials">
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:hrideshbharati027@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Tech */}
          <div className="footer-col">
            <h4 className="footer-title">Core Skills</h4>
            <ul>
              <li>React & JavaScript</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-col footer-cta">
            <h4 className="footer-title">Contact</h4>
            <p>
              Available for professional opportunities and collaborations.
            </p>

            <Link to="/contact" className="footer-btn text-light">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Hridesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
