import React, { useState } from 'react';
import { Search, Ship } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const vessels = [
    { id: 1, name: 'M.T. ADENA', type: 'Tanker', image: 'https://images.unsplash.com/photo-1593618997051-46b3bc094b16?w=800' },
    { id: 2, name: 'M.T. BELLAGIO', type: 'Tanker', image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800' },
    { id: 3, name: 'M.V. TIGER 7', type: 'Cargo Ship', image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800' },
    { id: 4, name: 'M.V. OCEAN PRIDE', type: 'Container Vessel', image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800' },
    { id: 5, name: 'M.T. SERENITY', type: 'Oil Tanker', image: 'https://images.unsplash.com/photo-1569608434096-e3d89a7d26a4?w=800' },
    { id: 6, name: 'M.V. ATLANTIC STAR', type: 'Bulk Carrier', image: 'https://images.unsplash.com/photo-1572685165919-135d5f49f155?w=800' },
    { id: 7, name: 'M.T. HORIZON', type: 'Chemical Tanker', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800' },
    { id: 8, name: 'M.V. PACIFIC QUEEN', type: 'Container Ship', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800' },
    { id: 9, name: 'M.T. VOYAGER', type: 'Product Tanker', image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800' },
    { id: 10, name: 'M.V. NAVIGATOR', type: 'General Cargo', image: 'https://images.unsplash.com/photo-1583468323330-9032ad490fed?w=800' },
    { id: 11, name: 'M.T. ENDEAVOUR', type: 'LPG Tanker', image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800' },
    { id: 12, name: 'M.V. EXPLORER', type: 'Ro-Ro Vessel', image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVessel, setSelectedVessel] = useState(null);

  const filteredVessels = vessels.filter(vessel =>
    vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vessel.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="container">
          <div className="gallery-hero-content">
            <h1 className="fade-in">Vessel Gallery</h1>
            <p className="fade-in">Our Fleet of Managed Vessels</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section gallery-search-section">
        <div className="container">
          <div className="gallery-search-wrapper fade-in">
            <div className="search-box">
              <Search size={24} />
              <input
                type="text"
                placeholder="Search vessels by name or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredVessels.map((vessel, index) => (
              <div
                key={vessel.id}
                className="gallery-card fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedVessel(vessel)}
              >
                <div className="gallery-image-wrapper">
                  <img src={vessel.image} alt={vessel.name} className="gallery-image" />
                  <div className="gallery-overlay">
                    <Ship size={40} />
                    <p>View Details</p>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3>{vessel.name}</h3>
                  <p>{vessel.type}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredVessels.length === 0 && (
            <div className="no-results">
              <Ship size={60} />
              <h3>No vessels found</h3>
              <p>Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedVessel && (
        <div className="vessel-modal" onClick={() => setSelectedVessel(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedVessel(null)}>×</button>
            <img src={selectedVessel.image} alt={selectedVessel.name} className="modal-image" />
            <div className="modal-info">
              <h2>{selectedVessel.name}</h2>
              <p className="vessel-type">{selectedVessel.type}</p>
              <div className="vessel-details">
                <p><strong>Status:</strong> Active</p>
                <p><strong>Management:</strong> Sky Marine Services</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
