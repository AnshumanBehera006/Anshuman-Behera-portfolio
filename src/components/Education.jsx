import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './Education.css';

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    status: 'Pursuing 4th Year (Final Year)',
    timeline: 'Present (2022 – 2026)',
    institution: 'Engineering & Technology',
    board: 'B.Tech Program',
    location: 'Odisha, India',
    score: 'Final Year Student',
    scoreType: 'Current Standing',
    highlights: [
      'Comprehensive focus on Computer Science and Frontend Engineering fundamentals.',
      'Core coursework in Data Structures, Web Technologies, Software Engineering, and Database Management.',
      'Practical hands-on projects specializing in React.js, JavaScript (ES6+), and modern UI architecture.'
    ],
    isCurrent: true
  },
  {
    degree: 'Higher Secondary School Certificate (Class XII)',
    status: 'Completed',
    timeline: '2021 – 2023',
    institution: 'North Odisha Higher Secondary School, Balasore',
    board: 'CHSE, Odisha',
    location: 'Balasore, Odisha',
    score: '70%',
    scoreType: 'Aggregate Score',
    highlights: [
      'Science Stream with rigorous focus on Mathematics, Physics, and Chemistry.',
      'Developed foundational analytical, logical, and computational problem-solving abilities.',
      'Participated in academic and technical group activities.'
    ],
    isCurrent: false
  },
  {
    degree: 'Secondary School Examination (Class X)',
    status: 'Completed',
    timeline: 'Passed in 2021',
    institution: 'Saraswati Shishu Vidya Mandir, Udala',
    board: 'BSE, Odisha',
    location: 'Udala, Mayurbhanj, Odisha',
    score: '86%',
    scoreType: 'Distinction Grade',
    highlights: [
      'Graduated with honors / high distinction with an 86% aggregate score.',
      'Strong academic foundation across Mathematics, Sciences, and Languages.',
      'Active participant in regional competitions and school leadership initiatives.'
    ],
    isCurrent: false
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            A solid academic foundation backing continuous technical growth and dedication to learning.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {educationData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${item.isCurrent ? 'current-item' : ''}`}
            >
              {/* Timeline Marker / Node */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  {item.isCurrent ? (
                    <Sparkles size={16} className="marker-current-icon" />
                  ) : (
                    <GraduationCap size={16} />
                  )}
                </div>
              </div>

              {/* Timeline Card */}
              <div className="timeline-card card-glass">
                
                {/* Header Strip */}
                <div className="timeline-card-header">
                  <div>
                    <div className="timeline-meta-top">
                      <span className="timeline-period">
                        <Calendar size={14} />
                        {item.timeline}
                      </span>
                      {item.isCurrent && (
                        <span className="current-badge">In Progress</span>
                      )}
                    </div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <h4 className="timeline-institution">{item.institution}</h4>
                  </div>

                  {/* Score Badge */}
                  <div className="score-badge-wrapper">
                    <div className="score-badge">
                      <Award size={16} className="award-icon" />
                      <span className="score-value">{item.score}</span>
                    </div>
                    <span className="score-label">{item.scoreType}</span>
                  </div>
                </div>

                {/* Meta details strip */}
                <div className="timeline-meta-bar">
                  <span className="meta-pill">
                    <strong>Board:</strong> {item.board}
                  </span>
                  <span className="meta-pill">
                    <MapPin size={13} className="text-cyan" /> {item.location}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="timeline-highlights">
                  {item.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle2 size={15} className="check-bullet" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
