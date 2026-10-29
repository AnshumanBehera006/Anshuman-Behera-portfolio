import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reactive API/form response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Automatically reset status message after 6 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1000);
  };

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
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Impactful Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, a developer role, or just want to connect, feel free to drop a message!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <h3 className="contact-subhead">Direct Contact Channels</h3>
            <p className="contact-subtext">
              Reach out directly via email, call, or drop by if you are in Odisha. I usually respond within 24 hours.
            </p>

            <div className="contact-cards-stack">
              
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

              {/* Phone Card */}
              <div className="contact-card card-glass">
                <div className="contact-card-icon-box text-indigo">
                  <Phone size={22} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Phone &amp; WhatsApp</span>
                  <a href="tel:+917605913242" className="contact-value">
                    +91 7605913242
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy('+917605913242', 'phone')}
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  <span className="tooltip">{copiedType === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-card card-glass">
                <div className="contact-card-icon-box text-emerald">
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

          {/* Right Column: Controlled React Contact Form */}
          <div className="contact-form-wrapper card-glass">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-desc">
              Fill out the form below to initiate an immediate inquiry or conversation.
            </p>

            {isSubmitted && (
              <div className="submission-alert success">
                <CheckCircle size={20} className="alert-icon" />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <p>Thank you for reaching out. Anshuman will review and get back to you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="form-input"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                  className="form-input"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or open opportunity..."
                  required
                  className="form-input form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={17} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
