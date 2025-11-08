import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="main-header">
        <div className="container header-content">
          <div className="logo-brand-section">
            <Link to="/" className="logo">
              <img 
                src={`${process.env.PUBLIC_URL}/images/logos/sky-marine-logo.png`}
                alt="Sky Marine Services"
              />
            </Link>
            
            <div className="brand-title">
              <h1>SKY MARINE SERVICES</h1>
            </div>
          </div>

          <nav className="nav-menu">
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              HOME
            </Link>
            
            <div 
              className="dropdown"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/about-us" className={isActive('/about-us') ? 'active' : ''}>
                ABOUT US <ChevronDown size={16} />
              </Link>
            </div>

            <div 
              className="dropdown"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/services" className={isActive('/services') ? 'active' : ''}>
                SERVICES <ChevronDown size={16} />
              </Link>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  <Link to="/services/crew-manning">Crew Manning</Link>
                  <Link to="/services/ship-chandelling">Ship Chandelling</Link>
                  <Link to="/services/transportation">Transportation</Link>
                </div>
              )}
            </div>

            <div 
              className="dropdown"
              onMouseEnter={() => setActiveDropdown('verification')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="nav-link">
                ONLINE VERIFICATION <ChevronDown size={16} />
              </span>
              {activeDropdown === 'verification' && (
                <div className="dropdown-menu verification-dropdown">
                  <a href="https://dgshipping.gov.in/" target="_blank" rel="noopener noreferrer">INDIAN CDC / COC CHECKER</a>
                  <a href="https://public.bahamasmaritime.com/account/" target="_blank" rel="noopener noreferrer">BAHAMAS CDC / COC CHECKER</a>
                  <a href="https://www.palaureg.com/information-centre/certificate-verification/seafarer-certificate-verification/" target="_blank" rel="noopener noreferrer">PALAU CDC / COC CHECKER</a>
                  <a href="https://consultapublica.marinamercantehn.gob.hn/" target="_blank" rel="noopener noreferrer">HONDURAS CDC / COC CHECKER</a>
                  <a href="https://www.liscr.com/seafarer-search-tool/" target="_blank" rel="noopener noreferrer">LIBERIAN CDC / COE CHECKER</a>
                  <a href="https://marad-db.com/certificate-verification/mariner/" target="_blank" rel="noopener noreferrer">PANAMA CDC / COC CHECKER</a>
                  <a href="http://201.225.255.174/stcw78_95_nuevo/" target="_blank" rel="noopener noreferrer">DOMINICA CDC CHECKER</a>
                  <a href="https://immarbe.com/verification/" target="_blank" rel="noopener noreferrer">BELIZE CDC / COC CHECKER</a>
                </div>
              )}
            </div>

            <Link to="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
