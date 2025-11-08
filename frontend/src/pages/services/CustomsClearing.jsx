import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Clock, Shield, TrendingUp, Users, Globe2 } from 'lucide-react';
import './ServiceDetail.css';

const CustomsClearing = () => {
  return (
    <div className="service-detail-page">
      <section className="service-hero" style={{ backgroundImage: 'url(https://holyangelmarineservices.com/wp-content/uploads/2025/02/4.jpg)' }}>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="fade-in">Customs Clearing Services</h1>
            <p className="fade-in">Efficient Customs and Regulatory Compliance</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-content fade-in">
            <h2>About Our Customs Clearing Services</h2>
            <p>
              We provide comprehensive customs clearing services to ensure smooth and timely clearance of cargo through 
              all regulatory procedures. Our experienced team handles all documentation and compliance requirements, 
              making the customs process hassle-free for our clients.
            </p>
            <p>
              With in-depth knowledge of customs regulations and procedures, we help minimize delays and ensure compliance 
              with all import and export requirements. Our services cover all major Indian ports and inland container depots.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><FileCheck size={40} /></div>
              <h3>Documentation</h3>
              <p>Complete handling of all customs documentation</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>Fast Processing</h3>
              <p>Quick turnaround time for customs clearance</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon"><Shield size={40} /></div>
              <h3>Compliance</h3>
              <p>Full adherence to customs regulations</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon"><TrendingUp size={40} /></div>
              <h3>Cost Effective</h3>
              <p>Competitive rates with transparent pricing</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon"><Users size={40} /></div>
              <h3>Expert Team</h3>
              <p>Experienced customs brokers and agents</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon"><Globe2 size={40} /></div>
              <h3>Pan-India Coverage</h3>
              <p>Services at all major ports and ICDs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-offered">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="services-list fade-in">
            <div className="service-item">
              <h3>Import Clearance</h3>
              <ul>
                <li>Bill of Entry Processing</li>
                <li>Duty Assessment and Payment</li>
                <li>Import License Management</li>
                <li>Out of Charge Documentation</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Export Clearance</h3>
              <ul>
                <li>Shipping Bill Processing</li>
                <li>Export Documentation</li>
                <li>Let Export Order (LEO)</li>
                <li>Certificate of Origin</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Regulatory Compliance</h3>
              <ul>
                <li>DGFT Compliance</li>
                <li>Food Safety Standards</li>
                <li>Plant Quarantine</li>
                <li>Drug Controller Approvals</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Additional Services</h3>
              <ul>
                <li>Duty Drawback Claims</li>
                <li>MEIS/SEIS Benefits</li>
                <li>Advance Authorization</li>
                <li>Consultation Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="service-cta-content fade-in">
            <h2>Need Customs Clearing Services?</h2>
            <p>Contact us for efficient customs clearance solutions</p>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomsClearing;
