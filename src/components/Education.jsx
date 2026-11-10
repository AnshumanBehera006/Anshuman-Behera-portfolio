import React from 'react';
import './Education.css';

export default function Education() {
  const educationList = [
    {
      degree: 'B.Tech (Pursuing) — 4th Year',
      institution: 'Engineering & Technology',
      year: 'Graduating 2026',
      board: 'Degree Program',
      score: '4th Year Standing',
      details: 'Focusing on computer science fundamentals, web engineering, software design, and practical full-stack projects.'
    },
    {
      degree: 'Higher Secondary (XII) — CHSE, Odisha',
      institution: 'North Odisha Higher Secondary School, Balasore',
      year: '2023',
      board: 'CHSE, Odisha',
      score: 'Score: 70%',
      details: 'Science stream with foundational focus in Mathematics, Physics, and analytical problem solving.'
    },
    {
      degree: 'Secondary (X) — BSE, Odisha',
      institution: 'Saraswati Shishu Vidya Mandir, Udala',
      year: '2021',
      board: 'BSE, Odisha',
      score: 'Score: 86%',
      details: 'Completed secondary education with high distinction across Mathematics, Science, and Languages.'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academics</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and qualification milestones.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-list">
          {educationList.map((item, idx) => (
            <div key={idx} className="education-card card-clean">
              <div className="edu-top">
                <div>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <h4 className="edu-institution">{item.institution}</h4>
                </div>
                <div className="edu-meta-badge">
                  <span className="edu-year">{item.year}</span>
                  <span className="edu-score">{item.score}</span>
                </div>
              </div>

              <p className="edu-details">{item.details}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
