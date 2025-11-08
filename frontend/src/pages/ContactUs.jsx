import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './ContactUs.css';
import { sendContactMessage } from '@/lib/contact';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic honeypot check
    const honey = e.target?.elements?.company?.value;
    if (honey) {
      return; // bot detected
    }

    try {
      setSubmitting(true);
      await sendContactMessage(formData);
      setSubmitted(true);
      // Removed toast notifications
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      // Silent error handling - removed toast
      console.error('Contact form error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="fade-in">Contact Us</h1>
            <p className="fade-in">Get in Touch with Sky Marine Services</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card fade-in">
              <div className="contact-info-icon">
                <MapPin size={40} />
              </div>
              <h3>Corporate Office</h3>
              <p>Upstairs Sherin Cool Point Ettayapuram Road</p>
              <p>Thoothukkudi, 628002</p>
              <p>Tamilnadu, India</p>
            </div>

            <div className="contact-info-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="contact-info-icon">
                <Phone size={40} />
              </div>
              <h3>Phone</h3>
              <p><strong>WhatsApp:</strong> +91 9944383726</p>
            </div>

            <div className="contact-info-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="contact-info-icon">
                <Mail size={40} />
              </div>
              <h3>Email</h3>
              <p>skymarineservicestuty@gmail.com</p>
            </div>

            <div className="contact-info-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="contact-info-icon">
                <Clock size={40} />
              </div>
              <h3>Business Hours</h3>
              <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Sat:</strong> 9:00 AM - 1:00 PM</p>
              <p><strong>Sun:</strong> Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-form-text fade-in">
              <h2>Send Us a Message</h2>
              <p>
                Have a question or need assistance? Fill out the form and our team will get back to you as soon as possible.
              </p>
              <div className="contact-form-features">
                <div className="contact-feature">
                  <div className="contact-feature-icon">
                    <Send size={24} />
                  </div>
                  <div>
                    <h4>Quick Response</h4>
                    <p>We typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="contact-feature-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Emergency support available round the clock</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper fade-in" style={{ animationDelay: '0.1s' }}>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {/* Honeypot field (hidden from users) */}
                  <input type="text" name="company" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary submit-btn" disabled={submitting}>
                    <Send size={18} />
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Sky Marine Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.942315!2d78.141363!3d8.805011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef7a0c5e8c8d%3A0x0!2zOMKwNDgnMTguMCJOIDc4wrAwOCczNy43IkU!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
