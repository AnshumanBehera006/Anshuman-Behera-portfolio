import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import './Contact.css';

// WhatsApp icon SVG component
function WhatsAppIcon({ size = 22, className = '' }) {
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
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const whatsappNumber = "7978580823";
  const formattedNumber = "+91 7978580823";
  const defaultWhatsAppUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent("Hi Anshuman, I came across your portfolio and would like to connect!")}`;

  const quickMessages = [
    {
      label: "Discuss a Frontend Role",
      text: "Hi Anshuman, I came across your portfolio and would like to discuss an open developer opportunity."
    },
    {
      label: "Project Collaboration",
      text: "Hi Anshuman, I would love to collaborate on a web application project with you."
    },
    {
      label: "General Inquiry / Say Hi",
      text: "Hi Anshuman, saw your portfolio and wanted to connect!"
    }
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageCircle size={14} />
            <span>Instant Connect</span>
          </div>
          <h2 className="section-title">
            Let's Connect Directly on <span className="text-gradient-whatsapp">WhatsApp</span>
          </h2>
          <p className="section-subtitle">
            Skip the slow email forms. Reach out directly for project collaborations, job opportunities, or a quick conversation.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <h3 className="contact-subhead">Direct Contact Details</h3>
            <p className="contact-subtext">
              Reach out directly via WhatsApp, call, or email. I am actively available and typically respond within minutes.
            </p>

            <div className="contact-cards-stack">
              
              {/* WhatsApp & Phone Card */}
              <div className="contact-card card-glass highlight-whatsapp">
                <div className="contact-card-icon-box text-emerald">
                  <WhatsAppIcon size={24} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">WhatsApp &amp; Direct Call</span>
                  <a 
                    href={`https://wa.me/91${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-value text-emerald"
                  >
                    {formattedNumber}
                  </a>
                </div>
                <div className="card-actions">
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy(formattedNumber, 'phone')}
                    title="Copy phone number"
                  >
                    {copiedType === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                    <span className="tooltip">{copiedType === 'phone' ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <a
                    href={`https://wa.me/91${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="redirect-icon-btn"
                    title="Open in WhatsApp"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card card-glass">
                <div className="contact-card-icon-box text-cyan">
                  <Mail size={22} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Email Address</span>
                  <a href="mailto:anshumanbehera006@gmail.com" className="contact-value">
                    anshumanbehera006@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy('anshumanbehera006@gmail.com', 'email')}
                  title="Copy email address"
                >
                  {copiedType === 'email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  <span className="tooltip">{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-card card-glass">
                <div className="contact-card-icon-box text-indigo">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Current Base Location</span>
                  <div className="contact-value">
                    Mayurbhanj, Odisha, India
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Status Pill */}
            <div className="hire-callout">
              <Sparkles size={18} className="text-cyan" />
              <span>Seeking Junior / Graduate Frontend Developer &amp; Web Engineering roles.</span>
            </div>
          </div>

          {/* Right Column: High-Impact WhatsApp Redirect Card (Replaces the Form) */}
          <div className="whatsapp-redirect-card card-glass">
            
            <div className="wa-card-badge">
              <span className="wa-live-indicator"></span>
              <span>Direct WhatsApp Channel</span>
            </div>

            <div className="wa-card-header">
              <div className="wa-logo-box">
                <WhatsAppIcon size={36} />
              </div>
              <div>
                <h3 className="wa-card-title">Chat with Anshuman</h3>
                <span className="wa-phone-number">{formattedNumber}</span>
              </div>
            </div>

            <p className="wa-card-desc">
              Click below to immediately redirect to WhatsApp and start a conversation. No contact forms needed — straight to chat!
            </p>

            {/* Primary Main WhatsApp Redirect Button */}
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-primary"
            >
              <WhatsAppIcon size={20} />
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight size={18} className="wa-btn-arrow" />
            </a>

            {/* Quick Conversation Starter Prompts */}
            <div className="quick-starters-wrap">
              <span className="starters-label">Or choose a pre-filled conversation starter:</span>
              <div className="starters-list">
                {quickMessages.map((item, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(item.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="starter-chip"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="chip-arrow" />
                  </a>
                ))}
              </div>
            </div>

            {/* Safe & Direct Note */}
            <div className="wa-guarantee-note">
              <span>⚡ Direct redirection to official WhatsApp Web or WhatsApp Mobile App</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
