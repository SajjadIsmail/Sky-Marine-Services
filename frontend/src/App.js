import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import CrewManning from './pages/services/CrewManning.jsx';
import ShipChandelling from './pages/services/ShipChandelling.jsx';
import Transportation from './pages/services/Transportation.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/crew-manning" element={<CrewManning />} />
          <Route path="/services/ship-chandelling" element={<ShipChandelling />} />
          <Route path="/services/transportation" element={<Transportation />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
