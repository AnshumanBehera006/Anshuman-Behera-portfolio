import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>B.Tech (Pursuing) — 4th Year</span>
          </div>

          <h1 className="hero-title">
            Anshuman Behera
          </h1>

          <h2 className="hero-role">
            Frontend &amp; Web Developer
          </h2>

          <p className="hero-bio">
            Motivated and detail-oriented B.Tech student passionate about developing clean, responsive user interfaces and full-stack web applications. Experienced with React.js, Node.js, Express.js, and modern REST APIs.
          </p>

          <div className="hero-meta">
            <span>Nudadiha, Mayurbhanj, Odisha 757077</span>
            <span className="meta-sep">•</span>
            <span>Available for Developer Opportunities</span>
          </div>

          {/* Clean CTA Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScrollTo('projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="https://wa.me/917978580823?text=Hi%20Anshuman,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>WhatsApp Chat</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onOpenResume}
            >
              <span>Resume</span>
            </button>
          </div>

          {/* Professional Highlights Strip */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-title">DRDO (PXE)</span>
              <span className="stat-desc">Internship Trainee</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-title">Zerodha Clone</span>
              <span className="stat-desc">Full-Stack Project</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-title">2022 – 2026</span>
              <span className="stat-desc">B.Tech Standing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="hero-visual">
          <div className="photo-container">
            <img
              src={profileImg}
              alt="Anshuman Behera - Frontend & Web Developer"
              className="profile-photo"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
