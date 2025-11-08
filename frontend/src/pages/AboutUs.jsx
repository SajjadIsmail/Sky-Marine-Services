import React from 'react';
import { Award, Target, Users, Globe2, Shield, TrendingUp } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality maritime services'
    },
    {
      icon: <Shield size={40} />,
      title: 'Reliability',
      description: 'Trusted partner for all your shipping and manning needs'
    },
    {
      icon: <Users size={40} />,
      title: 'Team Work',
      description: 'Dedicated professionals working together for your success'
    },
    {
      icon: <Globe2 size={40} />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise'
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <h1 className="fade-in">About Sky Marine Services</h1>
            <p className="fade-in">Your Trusted Partner in Maritime Excellence</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section company-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content fade-in">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are</h2>
              <p className="overview-text">
                Sky Marine Services (SMS) is one of the blooming service providers in the field of ship manning and logistics. Established with a vision to provide exceptional maritime services, we have grown to become a trusted name in the industry.
              </p>
              <p className="overview-text">
                Working towards the goal of providing best services round the clock, Sky Marine Services pays much attention to the requirements of the market. With the best management and dedicated staff, we assure timely response and quality services.
              </p>
              <p className="overview-text">
                Located in the Sea Gateway of Tamil Nadu, Tuticorin, and has a branch office in Mumbai. We believe in building careers, not just jobs. Our commitment to excellence and our seafarers' welfare sets us apart in the maritime industry.
              </p>
            </div>
            <div className="overview-image fade-in">
              <img src="https://holyangelmarineservices.com/wp-content/uploads/2024/03/Group.png" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card fade-in">
              <div className="mv-icon">
                <Target size={50} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide world-class maritime services by maintaining the highest standards of safety, quality, and reliability. We strive to build long-lasting relationships with our clients and seafarers through trust, transparency, and excellence.
              </p>
            </div>
            <div className="mv-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mv-icon">
                <TrendingUp size={50} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading maritime service provider recognized globally for our commitment to excellence, innovation, and sustainable growth. We aim to set new benchmarks in the shipping industry through continuous improvement and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-choose-grid">
            <div className="why-card fade-in">
              <h3>Experienced Team</h3>
              <p>Our team comprises seasoned professionals with extensive experience in maritime operations and crew management.</p>
            </div>
            <div className="why-card fade-in" style={{ animationDelay: '0.1s' }}>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support ensures that your needs are met promptly, regardless of time zones or emergencies.</p>
            </div>
            <div className="why-card fade-in" style={{ animationDelay: '0.2s' }}>
              <h3>Global Network</h3>
              <p>Our extensive network enables us to provide seamless services across multiple ports and countries worldwide.</p>
            </div>
            <div className="why-card fade-in" style={{ animationDelay: '0.3s' }}>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control measures ensure that all our services meet the highest industry standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
