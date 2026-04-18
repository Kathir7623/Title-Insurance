import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Why Title Insurance?', path: '/why-title-insurance' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '110px', transition: 'height 0.3s ease' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="KM Title Insurance" className="nav-logo" style={{ height: '90px', objectFit: 'contain', transition: 'height 0.3s ease' }} />
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-menu" style={{ gap: '1.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                style={{ 
                  fontWeight: 600, 
                  fontSize: '0.95rem',
                  color: location.pathname === link.path ? 'var(--secondary)' : 'var(--muted)',
                  position: 'relative'
                }}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
              Request a Free Title Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: scrolled ? 'white' : 'var(--primary)', padding: '0.5rem', border: 'none', background: 'none' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 90vw)',
          background: 'var(--secondary)',
          zIndex: 2000,
          boxShadow: '-10px 0 40px rgba(0,0,0,0.2)',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
        className="mobile-drawer"
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            <X size={32} />
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              style={{ 
                fontSize: '1.35rem', 
                fontWeight: 800,
                color: 'white',
                fontFamily: 'var(--font-heading)',
                textDecoration: location.pathname === link.path ? 'underline' : 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-outline" style={{ marginTop: '1rem', width: '100%', padding: '1.2rem', background: 'white', color: 'var(--secondary)', border: 'none', fontWeight: 800 }}>
            Request a Free Title Quote
          </Link>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Protecting Your Property, Securing Your Future.</p>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 1999
          }}
        />
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .desktop-menu { display: flex; }
        .mobile-toggle { display: none; }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--secondary);
          transition: width 0.3s ease;
        }
        .nav-link:hover:after { width: 100%; }
        
        @media (max-width: 991px) {
          .desktop-menu { gap: 1rem; }
          .nav-link { font-size: 0.85rem; }
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          .nav-container { height: 75px !important; }
          .nav-logo { height: 50px !important; }
        }
        
        @media (max-width: 480px) {
          .nav-container { height: 65px !important; }
          .nav-logo { height: 40px !important; }
        }
      `}} />
    </>
  );
};

export default Navbar;

