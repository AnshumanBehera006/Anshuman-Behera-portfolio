import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

// Clean SVG GitHub icon
function GithubIcon({ size = 16 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Zerodha Clone — Stock Trading Platform',
      category: 'Full-Stack Web Application',
      stack: ['React.js', 'Node.js', 'Express.js', 'REST API', 'CRUD Operations'],
      description: 'A full-stack clone of Zerodha, India\'s leading online stock broking platform, featuring both a public marketing site and a functional trading dashboard.',
      highlights: [
        'Built responsive pages and user dashboard components including Watchlist, Portfolio Holdings, Positions, and Orders using React.js.',
        'Created backend REST APIs with Node.js and Express.js to handle user data, portfolio records, and process buy/sell orders via CRUD operations.',
        'Structured modular frontend state management for market tracking and trade simulation.'
      ],
      liveUrl: 'https://zerodha-clone-1-sci2.onrender.com/',
      githubUrl: 'https://github.com/AnshumanBehera006/zerodha_clone',
      isFeatured: true
    },
    {
      title: 'VISION — Visual Information Storage, Indexing & Organisation Network',
      category: 'Defence Engineering Project (DRDO PXE)',
      stack: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'UI Architecture'],
      description: 'A specialized visual data indexing and storage network interface developed during an internship training group project at DRDO - Proof & Experimental Establishment (PXE).',
      highlights: [
        'Developed clean, modular frontend interfaces and reusable UI components in collaboration with engineering team members.',
        'Implemented search, cataloging, and retrieval interfaces for high-volume telemetry visual data.',
        'Adhered to structured software engineering practices within a defense research environment.'
      ],
      liveUrl: null,
      githubUrl: null,
      isFeatured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Practical web applications and systems built with modern frontend frameworks and backend REST APIs.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card card-clean">
              <div className="project-card-header">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                {/* External Action Links */}
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn live-btn"
                      title="Visit Live Application"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              {/* Bullet Points */}
              <ul className="project-bullets">
                {project.highlights.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="project-footer">
                <div className="project-tech-tags">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="project-action-row">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-demo-link"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
