import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Ship, Award, Clock, Shield, Globe2 } from 'lucide-react';
import './ServiceDetail.css';

const CrewManning = () => {
  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="fade-in">Crew Manning Services</h1>
            <p className="fade-in">Professional Seafarer Recruitment and Management</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section service-overview">
        <div className="container">
          <div className="overview-content fade-in">
            <h2>About Our Crew Manning Services</h2>
            <p>
              Sky Marine Services provides comprehensive crew manning solutions for vessel operators worldwide. 
              We specialize in recruiting, training, and managing qualified seafarers for all types of vessels. 
              Our extensive network and rigorous selection process ensure that you get the right crew members for your fleet.
            </p>
            <p>
              With years of experience in the maritime industry, we understand the critical importance of having a 
              competent and reliable crew. We handle all aspects of crew management, from initial recruitment to 
              ongoing training and certification management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><Users size={40} /></div>
              <h3>Qualified Personnel</h3>
              <p>Highly skilled and certified seafarers with extensive maritime experience</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon"><Ship size={40} /></div>
              <h3>All Vessel Types</h3>
              <p>Crew solutions for tankers, bulk carriers, container ships, and more</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon"><Award size={40} /></div>
              <h3>Quality Assurance</h3>
              <p>Rigorous screening and selection process for all candidates</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for crew management and emergencies</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon"><Shield size={40} /></div>
              <h3>Compliance</h3>
              <p>Full adherence to international maritime regulations and standards</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon"><Globe2 size={40} /></div>
              <h3>Global Reach</h3>
              <p>Crew deployment services across all major ports worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section services-offered">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="services-list fade-in">
            <div className="service-item">
              <h3>Officer Recruitment</h3>
              <ul>
                <li>Master & Chief Officer</li>
                <li>Chief Engineer & Second Engineer</li>
                <li>Third Officer & Fourth Engineer</li>
                <li>Electro-Technical Officers (ETO)</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Rating Recruitment</h3>
              <ul>
                <li>Able Seamen (AB)</li>
                <li>Oilers & Fitters</li>
                <li>Bosun & Pumpman</li>
                <li>Wiper & Ordinary Seamen</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Specialized Staff</h3>
              <ul>
                <li>Hotel Management Staff (Cruise Vessels)</li>
                <li>Welders & Fabricators</li>
                <li>Electricians</li>
                <li>Catering Staff</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Crew Management</h3>
              <ul>
                <li>Certification Management</li>
                <li>Travel Arrangements</li>
                <li>Payroll Management</li>
                <li>Training & Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="service-cta-content fade-in">
            <h2>Need Crew Manning Services?</h2>
            <p>Contact us today to discuss your crew requirements</p>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrewManning;
