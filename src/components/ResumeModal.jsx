import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check } from 'lucide-react';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
ANSHUMAN BEHERA
B.Tech (Pursuing) — 4th Year
Phone: +91 7605913242 | WhatsApp: +91 7978580823 | Email: anshumanbehera006@gmail.com
Location: Nudadiha, Mayurbhanj, Odisha 757077

CAREER OBJECTIVE
Motivated and detail-oriented B.Tech student seeking an opportunity within a forward-thinking organization to apply and further develop technical skills, contribute effectively to team projects, and support the company's growth through strong commitment and a willingness to learn.

EXPERIENCE
DRDO – Proof & Experimental Establishment (PXE), Chandipur, Balasore (Jun 2026 – Jul 2026)
Internship Trainee — Group Project
- Completed internship training on VISION: Visual Information Storage, Indexing & Organisation Network as part of a collaborative group project at DRDO PXE.
- Contributed to the development of frontend interfaces using HTML, CSS, JavaScript, and React.js.
- Implemented and refined basic UI components and frontend functionality in collaboration with team members.

PROJECTS
Zerodha Clone — Stock Trading Platform (React.js, Node.js, Express.js)
Personal Project | Live: https://zerodha-clone-1-sci2.onrender.com/ | GitHub: https://github.com/AnshumanBehera006/zerodha_clone
- Developed a full-stack clone of Zerodha, India's leading online stock broking platform, with a public landing site and a user trading dashboard.
- Built responsive pages and dashboard components such as watchlist, holdings, positions and orders using React.js.
- Created REST APIs with Node.js and Express.js to manage user data and process buy/sell orders.

EDUCATION
- North Odisha Higher Secondary School, Balasore (2023)
  Higher Secondary (XII) — CHSE, Odisha | Score: 70%
- Saraswati Shishu Vidya Mandir, Udala (2021)
  Secondary (X) — BSE, Odisha | Score: 86%

TECHNICAL SKILLS
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Express.js

STRENGTHS
- Strong commitment and dedication
- Willingness to learn new technologies and concepts quickly
- Positive attitude and effective team collaboration

PERSONAL PROFILE
- Father's Name: Basanta Kumar Behera
- Mother's Name: Sarojini Parida
- Date of Birth: 30-06-2005
- Gender: Male | Marital Status: Single | Nationality: Indian
- Languages Known: Hindi, English, Odia

HOBBIES
- Video Editing, Photography, Travelling
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Resume / Curriculum Vitae</h3>
            <span className="modal-subtitle">Anshuman Behera — Official Resume</span>
          </div>

          <div className="modal-actions">
            <a 
              href="/Anshuman_Behera_Resume.pdf" 
              download="Anshuman_Behera_Resume.pdf"
              className="modal-action-btn primary-action"
              title="Download official PDF document"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button 
              type="button" 
              className="modal-action-btn"
              onClick={handlePrint}
              title="Print document"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <button 
              type="button" 
              className="modal-action-btn"
              onClick={handleCopyText}
              title="Copy plain text"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button 
              type="button" 
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Resume Document Body */}
        <div className="modal-body">
          <div className="resume-sheet">
            
            {/* Document Header */}
            <header className="sheet-header">
              <h1 className="sheet-name">ANSHUMAN BEHERA</h1>
              <p className="sheet-degree">B.Tech (Pursuing) — 4th Year</p>
              <div className="sheet-contact-line">
                <span>+91 7605913242</span>
                <span className="bullet-sep">•</span>
                <span>WhatsApp: +91 7978580823</span>
                <span className="bullet-sep">•</span>
                <span>anshumanbehera006@gmail.com</span>
                <span className="bullet-sep">•</span>
                <span>Nudadiha, Mayurbhanj, Odisha 757077</span>
              </div>
            </header>

            {/* Career Objective */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">CAREER OBJECTIVE</h2>
              <p className="sheet-text">
                Motivated and detail-oriented B.Tech student seeking an opportunity within a forward-thinking organization to apply and further develop technical skills, contribute effectively to team projects, and support the company's growth through strong commitment and a willingness to learn.
              </p>
            </section>

            {/* Experience */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">EXPERIENCE</h2>
              <div className="sheet-entry">
                <div className="entry-header-row">
                  <strong className="entry-title">DRDO – Proof &amp; Experimental Establishment (PXE)</strong>
                  <span className="entry-date">Jun 2026 – Jul 2026</span>
                </div>
                <div className="entry-sub-row">
                  <span className="entry-role">Internship Trainee — Group Project</span>
                  <span className="entry-loc">Chandipur, Balasore</span>
                </div>
                <ul className="entry-bullets">
                  <li>Completed internship training on VISION: Visual Information Storage, Indexing &amp; Organisation Network as part of a collaborative group project at DRDO PXE.</li>
                  <li>Contributed to the development of frontend interfaces using HTML, CSS, JavaScript, and React.js.</li>
                  <li>Implemented and refined basic UI components and frontend functionality in collaboration with team members.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">PROJECTS</h2>
              <div className="sheet-entry">
                <div className="entry-header-row">
                  <strong className="entry-title">Zerodha Clone — Stock Trading Platform</strong>
                  <span className="entry-date">React.js, Node.js, Express.js</span>
                </div>
                <div className="entry-sub-row">
                  <span className="entry-role">Personal Project (REST API with CRUD Operations)</span>
                  <span className="entry-loc">
                    <a href="https://zerodha-clone-1-sci2.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/AnshumanBehera006/zerodha_clone" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </span>
                </div>
                <ul className="entry-bullets">
                  <li>Developed a full-stack clone of Zerodha, India's leading online stock broking platform, with a public landing site and a user trading dashboard.</li>
                  <li>Built responsive pages and dashboard components such as watchlist, holdings, positions and orders using React.js.</li>
                  <li>Created REST APIs with Node.js and Express.js to manage user data and process buy/sell orders.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">EDUCATION</h2>
              <div className="sheet-entry">
                <div className="entry-header-row">
                  <strong className="entry-title">North Odisha Higher Secondary School, Balasore</strong>
                  <span className="entry-date">2023</span>
                </div>
                <div className="entry-sub-row">
                  <span>Higher Secondary (XII) — CHSE, Odisha</span>
                  <strong>Score: 70%</strong>
                </div>
              </div>

              <div className="sheet-entry" style={{ marginTop: '0.65rem' }}>
                <div className="entry-header-row">
                  <strong className="entry-title">Saraswati Shishu Vidya Mandir, Udala</strong>
                  <span className="entry-date">2021</span>
                </div>
                <div className="entry-sub-row">
                  <span>Secondary (X) — BSE, Odisha</span>
                  <strong>Score: 86%</strong>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">TECHNICAL SKILLS</h2>
              <ul className="entry-bullets">
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
                <li><strong>Backend:</strong> Node.js, Express.js</li>
              </ul>
            </section>

            {/* Strengths */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">STRENGTHS</h2>
              <ul className="entry-bullets">
                <li>Strong commitment and dedication</li>
                <li>Willingness to learn new technologies and concepts quickly</li>
                <li>Positive attitude and effective team collaboration</li>
              </ul>
            </section>

            {/* Personal Profile */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">PERSONAL PROFILE</h2>
              <div className="profile-grid">
                <div><strong>Father's Name:</strong> Basanta Kumar Behera</div>
                <div><strong>Mother's Name:</strong> Sarojini Parida</div>
                <div><strong>Date of Birth:</strong> 30-06-2005</div>
                <div><strong>Gender:</strong> Male | <strong>Marital Status:</strong> Single</div>
                <div><strong>Nationality:</strong> Indian</div>
                <div><strong>Languages Known:</strong> Hindi, English, Odia</div>
              </div>
            </section>

            {/* Hobbies */}
            <section className="sheet-section">
              <h2 className="sheet-sec-heading">HOBBIES</h2>
              <ul className="entry-bullets">
                <li>Video Editing</li>
                <li>Photography</li>
                <li>Travelling</li>
              </ul>
            </section>

            {/* Declaration */}
            <section className="sheet-section" style={{ borderBottom: 'none', paddingBottom: '0' }}>
              <h2 className="sheet-sec-heading">DECLARATION</h2>
              <p className="sheet-text">
                I hereby declare that the information given above is true and correct to the best of my knowledge and belief.
              </p>
              <div className="declaration-sign">
                <span>Anshuman Behera</span>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
