import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, TrendingUp, Users, Globe2, FileText, Clock } from 'lucide-react';
import './ServiceDetail.css';

const ShipChartering = () => {
  return (
    <div className="service-detail-page">
      <section className="service-hero" style={{ backgroundImage: 'url(https://holyangelmarineservices.com/wp-content/uploads/2025/02/1.jpg)' }}>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="fade-in">Ship Chartering & Brokering</h1>
            <p className="fade-in">Connecting Shipowners with Charterers</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-content fade-in">
            <h2>About Our Ship Chartering & Brokering Services</h2>
            <p>
              Sky Marine Services provides expert ship chartering and brokering services, connecting ship owners 
              with charterers for optimal vessel utilization. Our extensive network and market knowledge enable us to 
              negotiate the best terms for both parties.
            </p>
            <p>
              We handle all types of chartering arrangements including voyage charter, time charter, and bareboat charter. 
              Our experienced brokers work diligently to match the right vessel with the right cargo, ensuring efficient 
              and profitable operations for all stakeholders.
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
              <h3>Vessel Matching</h3>
              <p>Perfect match of vessels to cargo requirements</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon"><TrendingUp size={40} /></div>
              <h3>Market Intelligence</h3>
              <p>Up-to-date market rates and trends</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon"><Users size={40} /></div>
              <h3>Expert Brokers</h3>
              <p>Experienced maritime brokers</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon"><Globe2 size={40} /></div>
              <h3>Global Network</h3>
              <p>Worldwide vessel and cargo connections</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon"><FileText size={40} /></div>
              <h3>Documentation</h3>
              <p>Complete charter party documentation</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>Quick Turnaround</h3>
              <p>Fast negotiation and fixture process</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-offered">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="services-list fade-in">
            <div className="service-item">
              <h3>Chartering Services</h3>
              <ul>
                <li>Voyage Charter</li>
                <li>Time Charter</li>
                <li>Bareboat Charter</li>
                <li>Contract of Affreightment (COA)</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Brokering Services</h3>
              <ul>
                <li>Vessel Sourcing</li>
                <li>Cargo Sourcing</li>
                <li>Negotiation Services</li>
                <li>Fixture Services</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Sale & Purchase</h3>
              <ul>
                <li>Vessel Sale Brokering</li>
                <li>Vessel Purchase Brokering</li>
                <li>Market Valuation</li>
                <li>Demolition Sales</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Advisory Services</h3>
              <ul>
                <li>Market Analysis</li>
                <li>Freight Rate Consulting</li>
                <li>Contract Review</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="service-cta-content fade-in">
            <h2>Need Chartering Services?</h2>
            <p>Contact us for expert ship chartering and brokering</p>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShipChartering;
