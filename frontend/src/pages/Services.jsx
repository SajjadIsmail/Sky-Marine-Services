import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const SERVICE_CARDS = [
  {
    title: 'Crew Manning',
    description:
      'End-to-end crew sourcing, documentation, and deployment for every vessel class with 24/7 operational support.',
    image: 'https://images.unsplash.com/photo-1547414367-e5d7c181e042?w=1600&auto=format&fit=crop&q=80',
    link: '/services/crew-manning'
  },
  {
    title: 'Ship Chandelling',
    description:
      'Provisioning, deck and engine stores, safety gear, and bonded items delivered pier-side across Indian ports.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&auto=format&fit=crop&q=80',
    link: '/services/ship-chandelling'
  },
  {
    title: 'Transportation',
    description:
      'Specialised logistics for marine spares, crew movement, and time-critical deliveries with live tracking.',
    image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1600&auto=format&fit=crop&q=80',
    link: '/services/transportation'
  }
];

const Services = () => {
  return (
    <main className="services-page" role="main">
      <section className="services-hero" aria-labelledby="services-heading">
        <div className="services-hero-overlay" />
        <div className="services-container hero-container">
          <div className="hero-text">
            <p className="eyebrow">Sky Marine Services</p>
            <h1 id="services-heading">Operational Excellence On Every Voyage</h1>
            <p className="hero-subtitle">
              Integrated maritime support covering crew management, chandelling, and logistics under one responsive team.
            </p>
          </div>
        </div>
      </section>

      <section className="services-overview" aria-labelledby="services-overview-heading">
        <div className="services-container">
          <header className="overview-header">
            <h2 id="services-overview-heading">What We Deliver</h2>
            <p>
              Three core verticals tailored for ship owners, managers, and principals who expect fast turnarounds,
              transparent coordination, and meticulous compliance on every call.
            </p>
          </header>

          <div className="services-grid" role="list">
            {SERVICE_CARDS.map(({ title, description, image, link }) => (
              <article className="service-card" role="listitem" key={title}>
                <figure className="card-media">
                  <img src={image} alt={title} loading="lazy" />
                </figure>
                <div className="card-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="card-footer">
                  <Link to={link} className="card-link" aria-label={`Learn more about ${title}`}>
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta" aria-labelledby="cta-heading">
        <div className="services-container cta-container">
          <div className="cta-content">
            <h2 id="cta-heading">Need A Rapid Turnaround?</h2>
            <p>
              Speak with our duty team for port call assistance, emergency crew change, or chandelling requirements in under an hour.
            </p>
            <Link to="/contact-us" className="cta-button">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
