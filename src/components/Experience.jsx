import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  FolderGit2, 
  Users, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Database
} from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Work Experience &amp; <span className="text-gradient">Internship</span>
          </h2>
          <p className="section-subtitle">
            Applying core frontend engineering principles to mission-critical systems and collaborative defense R&amp;D projects.
          </p>
        </div>

        {/* Featured Experience Card */}
        <div className="experience-card card-glass">
          
          {/* Card Top Header */}
          <div className="exp-top-bar">
            <div className="exp-org-badge">
              <ShieldCheck size={20} className="shield-icon" />
              <div>
                <h3 className="org-title">DRDO - Proof &amp; Experimental Establishment (PXE)</h3>
                <span className="org-subtitle">Chandipur, Balasore, Odisha</span>
              </div>
            </div>

            <div className="exp-duration-badge">
              <Calendar size={15} />
              <span>June 2026 – July 2026</span>
            </div>
          </div>

          {/* Role and Project Overview */}
          <div className="exp-role-strip">
            <div className="role-main">
              <span className="role-type">Group Project Internship</span>
              <h4 className="role-title">Internship Trainee</h4>
            </div>

            <div className="project-banner">
              <span className="project-flag">Project Code</span>
              <span className="project-name">
                VISION <span className="project-acronym-expand">(Visual Information Storage, Indexing &amp; Organisation Network)</span>
              </span>
            </div>
          </div>

          {/* Detailed Contributions Grid */}
          <div className="exp-content-grid">
            
            {/* Left: Key Contributions */}
            <div className="exp-contributions">
              <h5 className="block-label">
                <Layers size={16} className="text-cyan" />
                <span>Key Engineering Contributions</span>
              </h5>

              <ul className="contributions-list">
                <li>
                  <ChevronRight size={18} className="list-marker" />
                  <div>
                    <strong>Modular Component Architecture:</strong> Developed responsive frontend interfaces and reusable UI components using <strong>React.js, JavaScript (ES6+), HTML5, and CSS3</strong>.
                  </div>
                </li>
                <li>
                  <ChevronRight size={18} className="list-marker" />
                  <div>
                    <strong>Interactive UI Functionality:</strong> Implemented dynamic user interface workflows for indexing, organizing, and accessing critical visual data assets efficiently.
                  </div>
                </li>
                <li>
                  <ChevronRight size={18} className="list-marker" />
                  <div>
                    <strong>Collaborative Group Engineering:</strong> Actively collaborated within a dedicated engineering team, participating in design discussions, modular integration, and rigorous testing phases.
                  </div>
                </li>
                <li>
                  <ChevronRight size={18} className="list-marker" />
                  <div>
                    <strong>Performance &amp; Layout Optimization:</strong> Structured CSS grid and flexbox layouts to ensure intuitive viewing and rapid navigation across disparate data tables and imagery indexes.
                  </div>
                </li>
              </ul>

              {/* Technologies Used Pills */}
              <div className="exp-tech-stack">
                <span className="tech-stack-label">Technologies Applied:</span>
                <div className="tech-tags-list">
                  <span className="tech-pill">React.js</span>
                  <span className="tech-pill">JavaScript ES6+</span>
                  <span className="tech-pill">CSS3 Modules</span>
                  <span className="tech-pill">HTML5</span>
                  <span className="tech-pill">UI Component Architecture</span>
                  <span className="tech-pill">Git / Team Collaboration</span>
                </div>
              </div>
            </div>

            {/* Right: Project Highlights & Architecture Box */}
            <div className="exp-project-box">
              <div className="project-box-header">
                <FolderGit2 size={18} className="text-cyan" />
                <span>Project Architecture: VISION</span>
              </div>

              <p className="project-box-desc">
                VISION provides a structured environment for organizing high-volume visual telemetry, optical recordings, and indexing experimental trials.
              </p>

              <div className="project-features-list">
                <div className="feat-item">
                  <div className="feat-num">01</div>
                  <div>
                    <div className="feat-title">Visual Storage &amp; Categorization</div>
                    <div className="feat-detail">Organized media repositories with fast metadata lookups.</div>
                  </div>
                </div>

                <div className="feat-item">
                  <div className="feat-num">02</div>
                  <div>
                    <div className="feat-title">Dynamic Indexing Interface</div>
                    <div className="feat-detail">Interactive filters for search and asset retrieval.</div>
                  </div>
                </div>

                <div className="feat-item">
                  <div className="feat-num">03</div>
                  <div>
                    <div className="feat-title">Multi-member Teamwork</div>
                    <div className="feat-detail">Seamless integration in a high-security defense establishment.</div>
                  </div>
                </div>
              </div>

              <div className="project-status-note">
                <Users size={15} />
                <span>Successfully demonstrated &amp; evaluated in group review</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

