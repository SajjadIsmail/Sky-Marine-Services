import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight, Ship, Anchor, Truck } from 'lucide-react';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'CREW MANNING',
      image: `${process.env.PUBLIC_URL}/images/services/crew-manning.jpg`,
      fallback: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      link: '/services/crew-manning',
      icon: <Ship size={40} />
    },
    {
      title: 'SHIP CHANDELLING',
      image: `${process.env.PUBLIC_URL}/images/services/ship-chandelling.jpg`,
      fallback: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop',
      link: '/services/ship-chandelling',
      icon: <Anchor size={40} />
    },
    {
      title: 'TRANSPORTATION',
      image: `${process.env.PUBLIC_URL}/images/services/transportation.jpg`,
      fallback: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      link: '/services/transportation',
      icon: <Truck size={40} />
    }
  ];

  return (
    <div className="home-page">
      {/* Job Offer Banner */}
      <div className="job-offer-banner">
        <div className="job-offer-scroll">
          <span className="job-badge">JOBS OFFER</span>
          <span className="job-text">
            POST APPLIED DATE : 25-08-25 - URGENTLY WE NEED BELOW RANKS FOR OUR MANNING PANAMAX & MR TANKER SECOND ENG - 9,500 usd, Fourth Eng - 3,500 usd, Third Officer - 3,700usd & ETO - 6,500 usd, Ab with Indian Cop - 1,600usd, Oiler with Indian Cop - 1,500usd ( SALARY IS NEGOTIABLE , JOINING WILL BE IMMEDIATELY )
          </span>
        </div>
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-text fade-in">
              <h2 className="about-title">Sky Marine Services</h2>
              <p className="about-description">
                SMS is one of the blooming service providers in the field of ship manning and logistics. 
                Working towards the goal of providing best services round the clock, Sky Marine Services 
                pays much attention to the requirements of the market. With the best management and dedicated staff, 
                we assure timely response and quality services. Located in the Sea Gateway of Tamil Nadu, Tuticorin, 
                and has a branch office in Mumbai. We believe in building careers, not just jobs.
              </p>
              <Link to="/about-us" className="btn-primary">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-image fade-in">
              <img 
                src={`${process.env.PUBLIC_URL}/images/about-shipping.jpg`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop'; }}
                alt="Shipping" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    onError={(e) => { e.target.src = service.fallback; }}
                    alt={service.title} 
                    className="service-image" 
                  />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <Link to={service.link} className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>We're here to provide the best maritime services for your needs</p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn-primary">Contact Us</Link>
              <Link to="/services" className="btn-secondary">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
