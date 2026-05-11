import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhyTitleInsurance from './pages/WhyTitleInsurance';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-title-insurance" element={<WhyTitleInsurance />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating Action Button - Hidden on Contact page */}
          <FloatingFAB />
        </div>
      </Router>
    </HelmetProvider>
  );
}

const FloatingFAB = () => {
  const location = useLocation();
  if (location.pathname === '/contact') return null;

  return (
    <Link 
      to="/contact" 
      className="fab"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'var(--secondary)',
        color: 'white',
        width: 'auto',
        padding: '0 1.5rem',
        height: '56px',
        borderRadius: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        boxShadow: '0 10px 25px rgba(237, 122, 28, 0.4)',
        zIndex: 1000,
        textDecoration: 'none',
        fontSize: '0.95rem'
      }}
    >
      Contact Us →
    </Link>
  );
};

export default App;
