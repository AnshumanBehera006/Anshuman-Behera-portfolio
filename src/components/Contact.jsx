import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const whatsappNumber = "7978580823";
  const defaultWhatsAppUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent("Hi Anshuman, I came across your portfolio and would like to discuss an opportunity.")}`;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Communication</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Reach out directly for roles, project collaborations, or general inquiries.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-list card-clean">
            <h3 className="contact-box-title">Contact Information</h3>
            
            <div className="contact-item">
              <div className="item-text">
                <span className="item-label">WhatsApp (Direct Connect)</span>
                <a 
                  href={`https://wa.me/91${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="item-value highlight-link"
                >
                  +91 7978580823
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('+91 7978580823', 'wa')}
                title="Copy WhatsApp Number"
              >
                {copiedType === 'wa' ? <Check size={15} /> : <Copy size={15} />}
                <span className="tooltip">{copiedType === 'wa' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-item">
              <div className="item-text">
                <span className="item-label">Phone</span>
                <a href="tel:+917605913242" className="item-value">
                  +91 7605913242
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('+91 7605913242', 'phone')}
                title="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check size={15} /> : <Copy size={15} />}
                <span className="tooltip">{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-item">
              <div className="item-text">
                <span className="item-label">Email</span>
                <a href="mailto:anshumanbehera006@gmail.com" className="item-value">
                  anshumanbehera006@gmail.com
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('anshumanbehera006@gmail.com', 'email')}
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check size={15} /> : <Copy size={15} />}
                <span className="tooltip">{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-item">
              <div className="item-text">
                <span className="item-label">Location</span>
                <span className="item-value static-value">
                  Nudadiha, Mayurbhanj, Odisha 757077
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Direct Redirect Action */}
          <div className="contact-action-box card-clean">
            <span className="action-tag">Instant Response</span>
            <h3 className="action-title">Message via WhatsApp</h3>
            <p className="action-desc">
              For direct communication, discussions about open frontend positions, or technical inquiries, click below to open a conversation directly on WhatsApp.
            </p>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-wa-direct"
            >
              <span>Open WhatsApp (+91 7978580823)</span>
              <ExternalLink size={15} />
            </a>

            <div className="prefilled-prompts">
              <span className="prompts-label">Quick conversation links:</span>
              <div className="prompts-list">
                <a
                  href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent("Hi Anshuman, I am interested in discussing a Frontend Developer role with you.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prompt-link"
                >
                  <span>Discuss a Frontend Developer Role</span>
                  <ExternalLink size={13} />
                </a>
                <a
                  href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent("Hi Anshuman, I saw your Zerodha Clone project and would like to discuss it.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prompt-link"
                >
                  <span>Inquire about Zerodha Clone Project</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
