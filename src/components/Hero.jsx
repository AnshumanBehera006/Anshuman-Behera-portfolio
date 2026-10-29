import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  GraduationCap, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2,
  MapPin
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

export default function Hero() {
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
          {/* Intro Badge */}
          <div className="hero-badge">
            <span className="pulse-indicator">
              <span className="pulse-dot"></span>
              <span className="pulse-ring"></span>
            </span>
            <GraduationCap size={16} className="badge-icon" />
            <span className="badge-text">B.Tech Final Year Student</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Anshuman Behera</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            Frontend &amp; Web Developer crafting clean, modern user interfaces.
          </h2>

          {/* Bio Snippet */}
          <p className="hero-bio">
            Motivated and detail-oriented developer passionate about building high-performance web applications and solving real-world problems.
          </p>

          {/* Quick Info Tags */}
          <div className="hero-quick-meta">
            <span className="meta-item">
              <MapPin size={15} className="meta-icon" /> Mayurbhanj, Odisha, India
            </span>
            <span className="meta-item">
              <CheckCircle2 size={15} className="meta-icon text-cyan" /> Ready for Frontend Roles
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary hero-btn-main"
              onClick={() => handleScrollTo('experience')}
            >
              <span>Explore Experience</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn btn-outline hero-btn-sub"
              onClick={() => handleScrollTo('contact')}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Highlight stat mini-strip */}
          <div className="hero-stats-strip">
            <div className="stat-pill">
              <span className="stat-value">DRDO</span>
              <span className="stat-label">Intern Trainee</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <span className="stat-value">React.js</span>
              <span className="stat-label">Core Specialization</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <span className="stat-value">2026</span>
              <span className="stat-label">Graduation Year</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Anshuman's Photo */}
        <div className="hero-visual">
          <div className="photo-card-wrapper">
            
            {/* Ambient Background Glow Behind Photo */}
            <div className="photo-glow-backdrop"></div>

            {/* Glowing Border Card */}
            <div className="photo-frame">
              <img
                src={profileImg}
                alt="Anshuman Behera - Frontend & Web Developer"
                className="profile-photo"
                loading="eager"
              />

              {/* Status Badge overlay on bottom */}
              <div className="photo-overlay-status">
                <span className="status-live-indicator"></span>
                <span className="status-live-text">Open to Work &amp; Collaborations</span>
              </div>
            </div>

            {/* Floating Floating Chips / Interactive Badges */}
            <div className="floating-badge badge-top-right">
              <Code2 size={16} className="float-icon cyan" />
              <div className="float-text-wrap">
                <span className="float-title">React Developer</span>
                <span className="float-sub">Modern Web Apps</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Terminal size={16} className="float-icon indigo" />
              <div className="float-text-wrap">
                <span className="float-title">Full Stack Ready</span>
                <span className="float-sub">MERN Ecosystem</span>
              </div>
            </div>

            {/* Subtle decorative code snippet tag */}
            <div className="code-pill-tag">
              <Sparkles size={14} className="tag-sparkle" />
              <span>&lt;CreativeCode /&gt;</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
