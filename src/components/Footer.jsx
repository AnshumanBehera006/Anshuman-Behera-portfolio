import React from 'react';
import { ArrowUp } from 'lucide-react';
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
              <span className="logo-bracket"> /&gt;</span>
            </a>
            <p className="footer-bio">
              Anshuman Behera — B.Tech (4th Year), Frontend &amp; Web Developer. Experienced in building responsive interfaces with React.js and RESTful services with Node.js.
            </p>
            <div className="footer-contact-mini">
              <span>Nudadiha, Mayurbhanj, Odisha 757077</span>
              <span className="mini-dot">•</span>
              <a href="mailto:anshumanbehera006@gmail.com">anshumanbehera006@gmail.com</a>
              <span className="mini-dot">•</span>
              <a href="https://wa.me/917978580823" target="_blank" rel="noopener noreferrer">+91 7978580823</a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Anshuman Behera. All rights reserved.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
