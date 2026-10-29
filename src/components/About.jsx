import React from 'react';
import { 
  User, 
  MapPin, 
  Languages, 
  Heart, 
  Zap, 
  Users2, 
  Target, 
  Video, 
  Camera, 
  Plane,
  Sparkles
} from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <Zap size={22} className="about-hl-icon text-cyan" />,
      title: "Fast Learner",
      desc: "Rapidly grasps new frameworks, libraries, and design specifications to turn conceptual ideas into production-ready web interfaces."
    },
    {
      icon: <Target size={22} className="about-hl-icon text-indigo" />,
      title: "Strong Dedication",
      desc: "Passionate about pixel-perfection, clean semantic structure, responsive behavior, and robust user experience across devices."
    },
    {
      icon: <Users2 size={22} className="about-hl-icon text-emerald" />,
      title: "Collaborative Teamwork",
      desc: "Experienced in collaborative engineering environments, code reviews, and group workflows honed during defence R&D project exposure."
    }
  ];

  const quickChips = [
    {
      category: "Location",
      icon: <MapPin size={17} />,
      items: ["Mayurbhanj, Odisha, India"]
    },
    {
      category: "Languages",
      icon: <Languages size={17} />,
      items: ["English", "Hindi", "Odia"]
    },
    {
      category: "Interests & Creative Passions",
      icon: <Heart size={17} />,
      items: [
        { label: "Video Editing", icon: <Video size={14} /> },
        { label: "Photography", icon: <Camera size={14} /> },
        { label: "Traveling", icon: <Plane size={14} /> }
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="text-gradient">Modern Digital Experiences</span>
          </h2>
          <p className="section-subtitle">
            A blend of technical precision, design sensitivity, and continuous curiosity for modern web development.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Main Story & Profile Summary Card */}
          <div className="about-summary-card card-glass">
            <div className="summary-badge">
              <Sparkles size={14} className="text-cyan" />
              <span>Developer Journey</span>
            </div>

            <h3 className="summary-heading">
              Building interactive, accessible, and high-performance interfaces
            </h3>

            <div className="summary-paragraphs">
              <p>
                I am a final-year B.Tech student with a deep passion for frontend web development. 
                My focus centers on constructing intuitive, seamless, and reactive interfaces using React.js 
                and modern CSS architectures.
              </p>
              <p>
                Having contributed to project development at <strong>DRDO - Proof &amp; Experimental Establishment (PXE)</strong>, 
                I thrive in environments requiring methodical planning, strong dedication, fast adaptability, and 
                harmonious team collaboration.
              </p>
              <p>
                Beyond standard code implementation, I appreciate the aesthetics of UI/UX, bringing creative skills 
                from video editing and photography into visual balance, rhythm, and interactive details.
              </p>
            </div>

            {/* Quick Info Chips Container */}
            <div className="quick-chips-wrapper">
              <h4 className="chips-section-title">Personal Quick Highlights:</h4>
              <div className="chips-list">
                
                {/* Location Chip */}
                <div className="chip-card">
                  <div className="chip-header">
                    <MapPin size={16} className="chip-icon text-cyan" />
                    <span className="chip-label">Location</span>
                  </div>
                  <div className="chip-value">Mayurbhanj, Odisha, India</div>
                </div>

                {/* Languages Chip */}
                <div className="chip-card">
                  <div className="chip-header">
                    <Languages size={16} className="chip-icon text-indigo" />
                    <span className="chip-label">Languages</span>
                  </div>
                  <div className="chip-pills">
                    <span className="lang-pill">English</span>
                    <span className="lang-pill">Hindi</span>
                    <span className="lang-pill">Odia</span>
                  </div>
                </div>

                {/* Interests Chip */}
                <div className="chip-card full-width">
                  <div className="chip-header">
                    <Heart size={16} className="chip-icon text-rose" />
                    <span className="chip-label">Creative Interests</span>
                  </div>
                  <div className="chip-pills">
                    <span className="interest-pill">
                      <Video size={14} /> Video Editing
                    </span>
                    <span className="interest-pill">
                      <Camera size={14} /> Photography
                    </span>
                    <span className="interest-pill">
                      <Plane size={14} /> Traveling
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Pillars of Strength Cards Column */}
          <div className="about-pillars">
            {highlights.map((item, idx) => (
              <div key={idx} className="pillar-card card-glass">
                <div className="pillar-icon-box">
                  {item.icon}
                </div>
                <div className="pillar-body">
                  <h4 className="pillar-title">{item.title}</h4>
                  <p className="pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Interactive Quote / Motto Box */}
            <div className="motto-box">
              <p className="motto-text">
                "Writing clean, maintainable code is an art — making it performant and delighting users is the mission."
              </p>
              <div className="motto-author">
                <div className="author-avatar-initials">AB</div>
                <div>
                  <span className="author-name">Anshuman Behera</span>
                  <span className="author-role">Frontend Engineer</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
