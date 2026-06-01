import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin, Leetcode } from './Icons';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset form status back to idle after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>

        <div className="grid-2 contact-wrapper">
          {/* Contact Details & Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's build something epic together.</h3>
            <p className="contact-info-desc">
              Have an exciting project idea, a position open, or just want to chat about front-end mechanics
              and design paradigms? Feel free to drop a message. I'll get back to you within 24 hours.
            </p>

            <div className="contact-channels">
              <div className="channel-item">
                <div className="channel-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="channel-label">Email Me</div>
                  <a href="mailto:amanrajput4617@gmail.com" className="channel-link">amanrajput4617@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="social-links-panel">
              <h4 className="socials-title">Follow My Progress</h4>
              <div className="socials-grid">
                <a href="https://github.com/Amansingh4681" target="_blank" rel="noreferrer" className="social-link-btn" title="Github" aria-label="GitHub Profile">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aman-singh-022755326/" target="_blank" rel="noreferrer" className="social-link-btn" title="LinkedIn" aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
                <a href="https://leetcode.com/u/Aman_singh87/" target="_blank" rel="noreferrer" className="social-link-btn" title="LeetCode" aria-label="LeetCode Profile">
                  <Leetcode size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            {status === 'success' ? (
              <div className="form-success-message">
                <CheckCircle2 size={48} className="success-check-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I will respond to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="form-input"
                  />
                  <label htmlFor="subject" className="form-label">Subject (Optional)</label>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder=" "
                    className="form-input"
                  ></textarea>
                  <label htmlFor="message" className="form-label">Your Message</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
