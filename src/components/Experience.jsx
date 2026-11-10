import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Internship training and engineering project contributions in a professional environment.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="experience-card card-clean">
          <div className="exp-header">
            <div>
              <span className="exp-role">Internship Trainee — Group Project</span>
              <h3 className="exp-org">DRDO – Proof &amp; Experimental Establishment (PXE)</h3>
              <span className="exp-location">Chandipur, Balasore, Odisha</span>
            </div>
            <div className="exp-duration">
              Jun 2026 – Jul 2026
            </div>
          </div>

          <div className="exp-project-strip">
            <span className="project-badge">Project</span>
            <span className="project-title-text">
              VISION: Visual Information Storage, Indexing &amp; Organisation Network
            </span>
          </div>

          <div className="exp-body">
            <ul className="exp-points">
              <li>
                Completed internship training on VISION: Visual Information Storage, Indexing &amp; Organisation Network as part of a collaborative group project at DRDO PXE.
              </li>
              <li>
                Contributed to the development of frontend interfaces using HTML, CSS, JavaScript, and React.js.
              </li>
              <li>
                Implemented and refined basic UI components and frontend functionality in collaboration with team members.
              </li>
            </ul>

            <div className="exp-tech-row">
              <span className="tech-label">Technologies:</span>
              <div className="tech-list">
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">JavaScript</span>
                <span className="tech-pill">HTML</span>
                <span className="tech-pill">CSS</span>
                <span className="tech-pill">Collaborative Engineering</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
