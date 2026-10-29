import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Code2,
  Globe,
  ExternalLink
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Top Footer Section */}
        <div className="footer-top">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">AB</span>
              <span className="logo-slash">&#47;</span>
              <span className="logo-bracket">&gt;</span>
            </a>
            <p className="footer-bio">
              Anshuman Behera — Final year B.Tech student &amp; Frontend Web Developer specializing in React.js, modern CSS architectures, and performant user interfaces.
            </p>
            <div className="footer-contact-mini">
              <span>Mayurbhanj, Odisha, India</span>
              <span className="mini-dot">•</span>
              <a href="mailto:anshumanbehera006@gmail.com">anshumanbehera006@gmail.com</a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">DRDO Experience</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#education">Education &amp; Scores</a></li>
              <li><a href="#contact">Contact Details</a></li>
            </ul>
          </div>

          {/* Tech Stack of Portfolio */}
          <div className="footer-stack-col">
            <h4 className="footer-heading">Portfolio Stack</h4>
            <div className="footer-pills">
              <span className="footer-pill">React.js</span>
              <span className="footer-pill">Vanilla CSS</span>
              <span className="footer-pill">CSS Variables</span>
              <span className="footer-pill">CSS Grid &amp; Flex</span>
              <span className="footer-pill">Lucide Icons</span>
              <span className="footer-pill">Vite</span>
            </div>
            <p className="zero-framework-note">
              Built with 0% external UI CSS frameworks (no Tailwind or Bootstrap) — 100% handcrafted pure CSS.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} <strong>Anshuman Behera</strong>. All rights reserved.
          </p>

          <p className="footer-crafted">
            Engineered with <Code2 size={14} className="crafted-icon text-cyan" /> &amp; React.js
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
