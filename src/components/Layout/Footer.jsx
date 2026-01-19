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
    <footer className="app-footer">
      {/* Scroll to Top - Android FAB Style */}
      <button
        className="footer-backtop shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <div className="container py-5">
        <div className="row gy-5">
          {/* Brand Section */}
          <div className="col-12 col-md-6 col-lg-4 text-center text-md-start">
            <div className="footer-logo-box mx-auto mx-md-0 mb-3">
              <FaLaptopCode />
            </div>
            <h3 className="brand-name">Hridesh</h3>
            <p className="brand-tagline">
              Frontend Developer • Crafting Digital Experiences with React
            </p>
            <div className="social-links-row d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a href="https://github.com" className="social-icon-btn shadow-sm"><FaGithub /></a>
              <a href="https://linkedin.com" className="social-icon-btn shadow-sm"><FaLinkedin /></a>
              <a href="mailto:hrideshbharati027@gmail.com" className="social-icon-btn shadow-sm"><FaEnvelope /></a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading mb-4">Navigation</h5>
            <ul className="list-unstyled footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="footer-heading mb-4">Core Skills</h5>
            <ul className="list-unstyled footer-list">
              <li><span className="skill-dot"></span> React & JS</li>
              <li><span className="skill-dot"></span> UI/UX Design</li>
              <li><span className="skill-dot"></span> API Integration</li>
              <li><span className="skill-dot"></span> Study Notes</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="col-12 col-lg-3 text-center text-lg-start">
            <h5 className="footer-heading mb-4">Let's Collaborate</h5>
            <p className="small mb-4 text-secondary-custom">
              Looking for a developer to build your next big idea? Let's connect.
            </p>
            <Link to="/contact" className="btn m3-footer-btn px-4 py-2 shadow-sm">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="footer-divider my-5"></div>

        {/* Bottom Bar */}
        <div className="row align-items-center text-center text-md-start pb-2">
          <div className="col-md-8 mb-3 mb-md-0">
            <p className="mb-0 footer-bottom-text">
              © {year} Hridesh. Crafted in <span className="text-primary-custom">2026</span>
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <div className="footer-legal-links">
              <a href="#" className="me-3">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;