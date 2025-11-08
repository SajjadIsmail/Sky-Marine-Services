import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Package, Clock, Globe2 } from 'lucide-react';
import './ServiceDetail.css';

const FreightForwarding = () => {
  return (
    <div className="service-detail-page">
      <section className="service-hero" style={{ backgroundImage: 'url(https://holyangelmarineservices.com/wp-content/uploads/2025/02/2.jpg)' }}>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="fade-in">Freight Forwarding Services</h1>
            <p className="fade-in">Global Logistics Solutions</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-content fade-in">
            <h2>About Our Freight Forwarding Services</h2>
            <p>
              Sky Marine Services offers comprehensive freight forwarding solutions for sea, air, and land transportation. 
              We provide end-to-end logistics support, ensuring your cargo reaches its destination safely and on time.
            </p>
            <p>
              Our global network of partners and agents enables us to offer seamless freight forwarding services worldwide. 
              We handle all aspects of cargo movement, from booking to delivery, with full tracking and visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><Ship size={40} /></div>
              <h3>Sea Freight</h3>
              <p>FCL and LCL cargo services worldwide</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon"><Plane size={40} /></div>
              <h3>Air Freight</h3>
              <p>Fast air cargo services for urgent shipments</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon"><Truck size={40} /></div>
              <h3>Land Transport</h3>
              <p>Door-to-door inland transportation</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon"><Package size={40} /></div>
              <h3>Cargo Handling</h3>
              <p>Expert handling of all cargo types</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>Real-time Tracking</h3>
              <p>Complete visibility of your shipments</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon"><Globe2 size={40} /></div>
              <h3>Global Network</h3>
              <p>Worldwide coverage through our partners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-offered">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="services-list fade-in">
            <div className="service-item">
              <h3>Sea Freight Services</h3>
              <ul>
                <li>Full Container Load (FCL)</li>
                <li>Less Container Load (LCL)</li>
                <li>Break Bulk Cargo</li>
                <li>Project Cargo Handling</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Air Freight Services</h3>
              <ul>
                <li>Express Air Freight</li>
                <li>Consolidated Air Cargo</li>
                <li>Charter Services</li>
                <li>Dangerous Goods Handling</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Value Added Services</h3>
              <ul>
                <li>Cargo Insurance</li>
                <li>Warehousing Solutions</li>
                <li>Packing and Crating</li>
                <li>Cargo Consolidation</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Documentation</h3>
              <ul>
                <li>Bill of Lading</li>
                <li>Airway Bill</li>
                <li>Certificate of Origin</li>
                <li>Commercial Invoices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="service-cta-content fade-in">
            <h2>Need Freight Forwarding Services?</h2>
            <p>Contact us for global logistics solutions</p>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreightForwarding;
