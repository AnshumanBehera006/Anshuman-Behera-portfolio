import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
ANSHUMAN BEHERA - Frontend & Web Developer
Email: anshumanbehera006@gmail.com | Phone: +91 7605913242 | Location: Mayurbhanj, Odisha, India

SUMMARY:
Motivated and detail-oriented B.Tech final-year developer passionate about building high-performance web applications and solving real-world problems.

WORK EXPERIENCE:
Internship Trainee (Group Project)
DRDO - Proof & Experimental Establishment (PXE), Chandipur, Balasore (June 2026 – July 2026)
Project: VISION (Visual Information Storage, Indexing & Organisation Network)
- Developed frontend interfaces and modular UI components using React.js, JavaScript, HTML, and CSS.
- Implemented UI functionality and contributed effectively in a collaborative group engineering project.

TECHNICAL SKILLS:
- Frontend: React.js, JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid)
- Backend: Node.js, Express.js
- Tools: Git, GitHub, Vite

EDUCATION:
- B.Tech (Pursuing 4th Year / Final Year)
- Higher Secondary (XII) – CHSE, Odisha (2023): North Odisha Higher Secondary School, Balasore | 70%
- Secondary (X) – BSE, Odisha (2021): Saraswati Shishu Vidya Mandir, Udala | 86%

LANGUAGES & INTERESTS:
- Languages: English, Hindi, Odia
- Interests: Video Editing, Photography, Traveling
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container card-glass" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <h3 className="modal-title">Curriculum Vitae</h3>
            <span className="modal-subtitle">Anshuman Behera — Frontend Engineer</span>
          </div>

          <div className="modal-actions">
            <button 
              type="button" 
              className="modal-action-btn"
              onClick={handleCopyText}
              title="Copy as plain text"
            >
              {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button 
              type="button" 
              className="modal-action-btn btn-primary-tint"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>

            <button 
              type="button" 
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Printable Sheet Body */}
        <div className="modal-body printable-sheet">
          
          {/* Resume Header */}
          <div className="sheet-header">
            <div>
              <h1 className="sheet-name">Anshuman Behera</h1>
              <h2 className="sheet-tagline">Frontend &amp; Web Developer | B.Tech Final Year</h2>
            </div>
            <div className="sheet-contact-block">
              <div><Mail size={13} /> anshumanbehera006@gmail.com</div>
              <div><Phone size={13} /> +91 7605913242</div>
              <div><MapPin size={13} /> Mayurbhanj, Odisha, India</div>
            </div>
          </div>

          {/* Profile Objective */}
          <div className="sheet-section">
            <h3 className="sheet-sec-title">Professional Summary</h3>
            <p className="sheet-p">
              Motivated and detail-oriented developer passionate about building high-performance web applications and solving real-world problems. Proven hands-on capability in React.js, modern CSS, and component design demonstrated through engineering project delivery at DRDO.
            </p>
          </div>

          {/* Work Experience */}
          <div className="sheet-section">
            <h3 className="sheet-sec-title">Work Experience</h3>
            
            <div className="sheet-item">
              <div className="sheet-item-row">
                <span className="sheet-item-role">Internship Trainee (Group Project)</span>
                <span className="sheet-item-dates">June 2026 – July 2026</span>
              </div>
              <div className="sheet-item-org">
                DRDO - Proof &amp; Experimental Establishment (PXE), Chandipur, Balasore
              </div>
              <div className="sheet-project-flag">
                <strong>Project:</strong> VISION (Visual Information Storage, Indexing &amp; Organisation Network)
              </div>
              <ul className="sheet-bullets">
                <li>Developed frontend interfaces and modular UI components using React.js, JavaScript, HTML, and CSS.</li>
                <li>Implemented UI functionality and contributed effectively in a collaborative group engineering project.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="sheet-section">
            <h3 className="sheet-sec-title">Technical Skills</h3>
            <div className="sheet-skills-grid">
              <div>
                <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Flexbox, CSS Grid
              </div>
              <div>
                <strong>Backend:</strong> Node.js, Express.js
              </div>
              <div>
                <strong>Concepts &amp; Tools:</strong> Component Architecture, Responsive Web Design, Git, Vite
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="sheet-section">
            <h3 className="sheet-sec-title">Education</h3>
            
            <div className="sheet-edu-row">
              <div>
                <strong>B.Tech (Pursuing 4th Year)</strong>
                <div className="sheet-sub">Graduating Class of 2026</div>
              </div>
              <span className="sheet-grade">Final Year Standing</span>
            </div>

            <div className="sheet-edu-row">
              <div>
                <strong>Higher Secondary (XII) – CHSE, Odisha (2023)</strong>
                <div className="sheet-sub">North Odisha Higher Secondary School, Balasore</div>
              </div>
              <span className="sheet-grade">70%</span>
            </div>

            <div className="sheet-edu-row">
              <div>
                <strong>Secondary (X) – BSE, Odisha (2021)</strong>
                <div className="sheet-sub">Saraswati Shishu Vidya Mandir, Udala</div>
              </div>
              <span className="sheet-grade">86%</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="sheet-section">
            <h3 className="sheet-sec-title">Languages &amp; Personal Interests</h3>
            <div className="sheet-p">
              <strong>Languages:</strong> English, Hindi, Odia &nbsp;|&nbsp; 
              <strong>Interests:</strong> Video Editing, Photography, Traveling
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
