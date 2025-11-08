import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info Column */}
            <div className="footer-column footer-column-left">
              <div className="footer-logo-section">
                <div className="footer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/logos/sky-marine-logo.png`}
                    alt="SKY MARINE SERVICES"
                  />
                </div>
                <h2 className="footer-brand-name">SKY MARINE SERVICES</h2>
              </div>
              <div className="footer-description">
                <p>Your trusted partner in comprehensive maritime solutions. Delivering excellence in crew manning, ship chandelling, and freight forwarding since 2014.</p>
              </div>
            </div>

            {/* Career Column */}
            <div className="footer-column footer-column-center">
              <h3 className="footer-heading">CAREER OPPORTUNITIES</h3>
              <div className="resume-section">
                <p className="section-subtitle">Send Your Resume/CV to:</p>
                <div className="email-links">
                  <a href="mailto:skymarineservicestuty@gmail.com" className="email-link">
                    <Mail size={18} />
                    <span>skymarineservicestuty@gmail.com</span>
                  </a>
                </div>
                <p className="highlight-text">
                  📋 Please mention: Rank • Availability Date • Last Salary • Expected Salary
                </p>
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer-column footer-column-right">
              <h3 className="footer-heading">GET IN TOUCH</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="contact-label">WHATS APP</p>
                    <p className="contact-value">+91 9944383726</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="contact-label">CORPORATE OFFICE</p>
                    <p className="contact-value">Upstairs Sherin Cool Point Ettayapuram Road, Thoothukkudi, 628002, TamilNadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2014 - {new Date().getFullYear()} Sky Marine Services. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <span>•</span>
              <Link to="/services">Services</Link>
              <span>•</span>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
