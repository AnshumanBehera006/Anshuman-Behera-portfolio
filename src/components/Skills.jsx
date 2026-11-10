import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', description: 'Functional components, Hooks, and modular UI structure' },
        { name: 'JavaScript (ES6+)', description: 'Modern syntax, async operations, DOM manipulation' },
        { name: 'HTML5', description: 'Semantic structure, accessibility, and clean markup' },
        { name: 'CSS3', description: 'Responsive layouts, Flexbox, and CSS Grid systems' }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', description: 'Server-side runtime and package ecosystem' },
        { name: 'Express.js', description: 'Minimalist web framework and middleware setup' },
        { name: 'REST APIs', description: 'Designing endpoints and HTTP request handling' },
        { name: 'CRUD Operations', description: 'Data creation, reading, updating, and deletion' }
      ]
    },
    {
      title: 'Workflow & Fundamentals',
      skills: [
        { name: 'Git & GitHub', description: 'Version control, commit history, and code management' },
        { name: 'Responsive Design', description: 'Mobile-first adaptation across varied screen sizes' },
        { name: 'Component Architecture', description: 'Reusable, maintainable interface patterns' },
        { name: 'Collaborative Engineering', description: 'Team-based integration and code reviews' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies and engineering methodologies applied across academic and project work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card card-clean">
              <h3 className="category-title">{cat.title}</h3>
              <div className="category-skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-desc">{skill.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
