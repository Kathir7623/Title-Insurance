import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '110px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="KM Title Insurance" style={{ height: '90px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
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
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

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
        
        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
