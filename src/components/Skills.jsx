import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Server, 
  Cpu, 
  Sparkles, 
  Check, 
  FileCode2, 
  Atom, 
  Boxes,
  Database
} from 'lucide-react';
import './Skills.css';

const skillsData = [
  // Frontend Category
  {
    name: 'React.js',
    category: 'Frontend',
    icon: <Atom size={28} className="skill-icon-atom" />,
    level: 'Core Specialization',
    description: 'Component architecture, Hooks (useState, useEffect), reactive state management, and reusable UI systems.',
    tags: ['Hooks', 'JSX', 'Virtual DOM', 'Component Design'],
    accent: '#38bdf8'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    icon: <FileCode2 size={28} className="skill-icon-js" />,
    level: 'Advanced',
    description: 'Modern syntax, Arrow functions, Async/Await, Promises, Destructuring, Closures, and DOM manipulation.',
    tags: ['ES6+', 'Async/Await', 'Event Loop', 'Modular JS'],
    accent: '#facc15'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: <Code size={28} className="skill-icon-html" />,
    level: 'Strong Foundation',
    description: 'Semantic markup, accessibility (a11y) standards, SEO best practices, and structured document hierarchy.',
    tags: ['Semantic Web', 'Forms', 'SEO', 'Web Accessibility'],
    accent: '#f97316'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: <Layers size={28} className="skill-icon-css" />,
    level: 'Advanced',
    description: 'CSS Grid, Flexbox layouts, CSS Custom Properties (Variables), Responsive Media Queries, and Glassmorphism.',
    tags: ['CSS Grid', 'Flexbox', 'CSS Variables', 'Keyframe Animations'],
    accent: '#38bdf8'
  },

  // Backend Category
  {
    name: 'Node.js',
    category: 'Backend',
    icon: <Server size={28} className="skill-icon-node" />,
    level: 'Proficient',
    description: 'Server-side JavaScript runtime, npm package ecosystem, asynchronous I/O, and server setup.',
    tags: ['Node Runtime', 'npm', 'File System', 'Async I/O'],
    accent: '#22c55e'
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: <Cpu size={28} className="skill-icon-express" />,
    level: 'Proficient',
    description: 'Fast minimalist web framework, RESTful API endpoints, request/response lifecycle, and middleware creation.',
    tags: ['REST APIs', 'Middleware', 'Routing', 'JSON Processing'],
    accent: '#a855f7'
  }
];

const categories = ['All Skills', 'Frontend', 'Backend'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All Skills');

  const filteredSkills = activeCategory === 'All Skills'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Focused on crafting dynamic, robust, and responsive web applications from interactive client UI to backend APIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Frontend' && <Layers size={14} />}
              {cat === 'Backend' && <Server size={14} />}
              {cat === 'All Skills' && <Boxes size={14} />}
              <span>{cat}</span>
              <span className="filter-count">
                {cat === 'All Skills' 
                  ? skillsData.length 
                  : skillsData.filter(s => s.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* CSS Grid of Interactive Skill Cards */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card card-glass"
              style={{ '--skill-color': skill.accent }}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <div className="skill-title-block">
                  <span className="skill-category-badge">{skill.category}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>

              <div className="skill-level-strip">
                <span className="level-dot"></span>
                <span className="level-name">{skill.level}</span>
              </div>

              <p className="skill-description">
                {skill.description}
              </p>

              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span key={tag} className="skill-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="skill-glow-accent"></div>
            </div>
          ))}
        </div>

        {/* Additional Architecture & Workflow Highlights */}
        <div className="skills-workflow-card card-glass">
          <div className="workflow-left">
            <div className="workflow-badge">
              <Sparkles size={16} className="text-cyan" />
              <span>Modern Development Standards</span>
            </div>
            <h4 className="workflow-title">
              Writing clean, modular, and performance-optimized code
            </h4>
            <p className="workflow-text">
              Committed to component-driven design, responsive-first CSS layouts, semantic accessibility, and clean Git version control workflows.
            </p>
          </div>
          <div className="workflow-checks">
            <div className="workflow-check-item">
              <Check size={18} className="check-icon" />
              <span>Functional Components &amp; React Hooks</span>
            </div>
            <div className="workflow-check-item">
              <Check size={18} className="check-icon" />
              <span>CSS Flexbox &amp; CSS Grid Mastery</span>
            </div>
            <div className="workflow-check-item">
              <Check size={18} className="check-icon" />
              <span>Mobile-First Responsive Web Design</span>
            </div>
            <div className="workflow-check-item">
              <Check size={18} className="check-icon" />
              <span>RESTful API Integration &amp; JSON Handling</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
