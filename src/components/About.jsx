import React from 'react';
import './About.css';

export default function About() {
  const strengths = [
    {
      title: 'Commitment & Dedication',
      desc: 'Takes ownership of assignments with disciplined execution, attention to detail, and a focus on clean, reliable code.'
    },
    {
      title: 'Fast Learner',
      desc: 'Quickly adapts to modern frameworks, libraries, and design specifications, translating concepts into functional applications.'
    },
    {
      title: 'Collaborative Teamwork',
      desc: 'Experienced in group engineering workflows, code integration, and clear communication fostered during defence R&D training.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Overview</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Background, core strengths, and career orientation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Main Story & Profile Summary Card */}
          <div className="about-summary card-clean">
            <h3 className="about-heading">
              Engineering web interfaces with focus on usability and structure
            </h3>

            <div className="about-text">
              <p>
                I am a final-year B.Tech student with a strong interest in frontend and web development. My objective is to apply and further develop my technical skills within a forward-thinking organization, contributing effectively to team projects and supporting company growth through strong commitment and a willingness to learn.
              </p>
              <p>
                During my internship training at <strong>DRDO - Proof &amp; Experimental Establishment (PXE)</strong>, I worked on frontend interfaces and modular components for the VISION project in a collaborative group setting. I also designed and deployed a full-stack <strong>Zerodha Clone</strong> web application with RESTful APIs supporting complete CRUD operations.
              </p>
            </div>

            {/* Quick Profile Details */}
            <div className="about-details-table">
              <div className="detail-row">
                <span className="detail-label">Location</span>
                <span className="detail-value">Nudadiha, Mayurbhanj, Odisha 757077</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Languages</span>
                <span className="detail-value">English, Hindi, Odia</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Interests &amp; Hobbies</span>
                <span className="detail-value">Video Editing, Photography, Travelling</span>
              </div>
            </div>
          </div>

          {/* Strengths Column */}
          <div className="about-strengths">
            <h3 className="strengths-title">Core Strengths</h3>
            <div className="strengths-list">
              {strengths.map((item, idx) => (
                <div key={idx} className="strength-card card-clean">
                  <h4 className="strength-heading">{item.title}</h4>
                  <p className="strength-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
