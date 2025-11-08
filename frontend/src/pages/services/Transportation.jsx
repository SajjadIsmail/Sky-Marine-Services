import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, Shield, MapPin, Package, TrendingUp } from 'lucide-react';
import './ServiceDetail.css';

const Transportation = () => {
  return (
    <div className="service-detail-page">
      <section className="service-hero" style={{ backgroundImage: 'url(https://holyangelmarineservices.com/wp-content/uploads/2025/02/3.jpg)' }}>
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="fade-in">Transportation Services</h1>
            <p className="fade-in">Reliable Cargo Transportation Solutions</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-content fade-in">
            <h2>About Our Transportation Services</h2>
            <p>
              We provide reliable transportation services for cargo movement with a fleet of well-maintained vehicles 
              and experienced drivers. Our transportation solutions cover door-to-door delivery, ensuring your cargo 
              reaches its destination safely and on time.
            </p>
            <p>
              Whether it's local transportation within the city or long-distance haulage across states, we have the 
              infrastructure and expertise to handle all your transportation needs efficiently and cost-effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><Truck size={40} /></div>
              <h3>Modern Fleet</h3>
              <p>Well-maintained vehicles of all sizes</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon"><Clock size={40} /></div>
              <h3>Timely Delivery</h3>
              <p>On-time delivery guaranteed</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon"><Shield size={40} /></div>
              <h3>Cargo Safety</h3>
              <p>Secure and safe transportation</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon"><MapPin size={40} /></div>
              <h3>GPS Tracking</h3>
              <p>Real-time location tracking</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon"><Package size={40} /></div>
              <h3>All Cargo Types</h3>
              <p>Handling of diverse cargo types</p>
            </div>
            <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon"><TrendingUp size={40} /></div>
              <h3>Cost Effective</h3>
              <p>Competitive transportation rates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-offered">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="services-list fade-in">
            <div className="service-item">
              <h3>Container Transportation</h3>
              <ul>
                <li>20ft & 40ft Container Movement</li>
                <li>Port to Door Delivery</li>
                <li>ICD to Port Transportation</li>
                <li>Empty Container Positioning</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Truck Services</h3>
              <ul>
                <li>Covered Truck Services</li>
                <li>Open Truck Services</li>
                <li>Flatbed Trailers</li>
                <li>Low Bed Trailers</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Specialized Transport</h3>
              <ul>
                <li>ODC (Over Dimensional Cargo)</li>
                <li>Project Cargo Movement</li>
                <li>Heavy Equipment Transport</li>
                <li>Hazardous Cargo Handling</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Value Added Services</h3>
              <ul>
                <li>Loading & Unloading</li>
                <li>Packing Services</li>
                <li>Transit Insurance</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="service-cta-content fade-in">
            <h2>Need Transportation Services?</h2>
            <p>Contact us for reliable cargo transportation</p>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
