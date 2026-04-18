import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ background: '#0f172a', color: 'white', padding: '5rem 0 2rem', borderTop: '4px solid var(--secondary)' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ marginBottom: '4rem' }}>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img src={logo} alt="KM Title Insurance" style={{ height: '80px', objectFit: 'contain' }} />
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Trusted US-based Title Insurance company dedicated to protecting homeowners, buyers, and lenders from potential title risks.
            </p>
            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>
              Serving Raleigh, NC and clients across the United States.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#94a3b8' }}><Share2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: '#94a3b8' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#94a3b8' }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: '#94a3b8' }}>Our Services</Link></li>
              <li><Link to="/why-title-insurance" style={{ color: '#94a3b8' }}>Why Title Insurance?</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8' }}>Contact</Link></li>
              <li><Link to="/privacy" style={{ color: '#94a3b8' }}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#94a3b8' }}>Owner's Title Insurance</li>
              <li style={{ color: '#94a3b8' }}>Lender's Title Insurance</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8' }}>
                <MapPin size={20} style={{ color: 'var(--secondary)' }} />
                <span>1428 Bailey's Run Ct, Raleigh, NC 27606</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8' }}>
                <Mail size={20} style={{ color: 'var(--secondary)' }} />
                <span>support@kmtitleinsurance.com</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8' }}>
                <Phone size={20} style={{ color: 'var(--secondary)' }} />
                <span>(470) 706-5858</span>
              </li>
              <li style={{ fontSize: '0.85rem', color: 'var(--secondary)', paddingLeft: '2.25rem' }}>
                Mon–Fri: 9 AM–5 PM EST
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
              © {new Date().getFullYear()} KM Title Insurance. All rights reserved.
            </p>
            <p style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.5 }}>
              Disclaimer: This is not a commitment to insure. All services and policies are subject to underwriting approval and state-specific regulations. Information provided on this website is for educational purposes and does not constitute legal advice.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--secondary)' }}>Protecting Your Property, Securing Your Future.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
