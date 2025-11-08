import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Ship, Clock, Shield, CheckCircle, Truck } from 'lucide-react';
import './ServiceDetail.css';

const ShipChandelling = () => {
  return (
    <div className="service-detail-page">
      <section className="service-hero" style={{ backgroundImage: 'url(https://holyangelmarineservices.com/wp-content/uploads/2025/02/CHIP.png)' }}>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="fade-in">Ship Chandelling Services</h1>
            <p className="fade-in">Quality Ship Supplies and Provisions</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-content fade-in">
            <h2>About Our Ship Chandelling Services</h2>
            <p>
              Sky Marine Services offers comprehensive ship chandelling services, providing quality provisions, 
              deck stores, engine stores, and safety equipment to vessels at competitive prices. We understand the 
              critical importance of timely and reliable supply to keep your vessels operational.
            </p>
            <p>
              Our extensive inventory and efficient logistics ensure that all your ship supply needs are met promptly. 
              We work with trusted suppliers to guarantee the quality and authenticity of all products delivered to your vessels.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><Package size={40} /></div>
              <h3>Complete Range</h3>
              <p>Extensive inventory of ship stores and provisions</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>Timely Delivery</h3>
              <p>Fast and reliable delivery to all major ports</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon"><Shield size={40} /></div>
              <h3>Quality Assured</h3>
              <p>Only genuine and certified products supplied</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon"><CheckCircle size={40} /></div>
              <h3>Competitive Pricing</h3>
              <p>Best rates without compromising on quality</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon"><Ship size={40} /></div>
              <h3>24/7 Service</h3>
              <p>Round-the-clock support for urgent requirements</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon"><Truck size={40} /></div>
              <h3>Port Coverage</h3>
              <p>Services available at all major Indian ports</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-offered">
        <div className="container">
          <h2 className="section-title">Products We Supply</h2>
          <div className="services-list fade-in">
            <div className="service-item">
              <h3>Provisions & Bonded Stores</h3>
              <ul>
                <li>Fresh Provisions (Vegetables, Fruits, Meat)</li>
                <li>Dry Provisions (Rice, Flour, Cereals)</li>
                <li>Bonded Stores (Liquor, Tobacco)</li>
                <li>Frozen Items</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Deck Stores</h3>
              <ul>
                <li>Ropes and Wires</li>
                <li>Paints and Coatings</li>
                <li>Cleaning Materials</li>
                <li>Deck Equipment</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Engine Stores</h3>
              <ul>
                <li>Lubricating Oils</li>
                <li>Spare Parts</li>
                <li>Tools and Equipment</li>
                <li>Consumables</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Safety Equipment</h3>
              <ul>
                <li>Life Saving Equipment</li>
                <li>Fire Fighting Equipment</li>
                <li>Personal Protective Equipment</li>
                <li>Navigation Equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="service-cta-content fade-in">
            <h2>Need Ship Supplies?</h2>
            <p>Contact us for quality ship chandelling services</p>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShipChandelling;
