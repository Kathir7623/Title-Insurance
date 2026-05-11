import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    outline: 'none'
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us | Secure Your Property"
        description="Ready to secure your property? Contact KM Title Insurance today for closing services or to discuss your upcoming real estate closing."
        keywords="contact title company North Carolina, title service request, real estate closing support"
      />
      {/* Page Header */}
      <section style={{ padding: '200px 0 100px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '1.5rem' }}
          >
            Ready to secure your property? Reach out to our title team today to discuss your next closing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: 600 }}
          >
            New to title insurance? Visit our <Link to="/why-title-insurance" style={{ color: 'white', textDecoration: 'underline' }}>Why Title Insurance?</Link> page before you reach out.
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '5rem' }}>
            {/* Contact Info */}
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                We typically respond to all inquiries within one business day. Our goal is to make your title experience as smooth and transparent as possible.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(237, 122, 28, 0.1)',
                    color: 'var(--secondary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--muted)', marginBottom: '0.25rem' }}>support@kmtitleinsurance.com</p>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>For secure document sharing, we will provide specific instructions after initial contact.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(237, 122, 28, 0.1)',
                    color: 'var(--secondary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <a href="tel:+14707065858" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                        (470) 706-5858
                      </a>
                      <a href="tel:+19842558817" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                        (984) 255-8817
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(237, 122, 28, 0.1)',
                    color: 'var(--secondary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Business Hours</h4>
                    <p style={{ color: 'var(--muted)' }}>Mon - Fri: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#F8FAFC', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'white', padding: '0.5rem', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                    <Shield className="text-secondary" />
                  </div>
                  <h3 style={{ fontSize: '1.4rem' }}>Secure Transaction Focus</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                  All information shared with us is encrypted and handled with the highest level of security and confidentiality in accordance with industry standards.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeIn} className="contact-form-container" style={{ background: 'white', padding: '3.5rem', borderRadius: '2.5rem', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border)' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>Contact Us</h3>
                <p style={{ color: 'var(--muted)' }}>Complete the form below to start your title search or request information.</p>
              </div>
              
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-light)' }}>Full Name <span style={{ color: 'var(--secondary)' }}>*</span></label>
                    <input type="text" placeholder="John Doe" style={inputStyle} required />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-light)' }}>Email Address <span style={{ color: 'var(--secondary)' }}>*</span></label>
                    <input type="email" placeholder="john@example.com" style={inputStyle} required />
                  </div>
                </div>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-light)' }}>Who are you? <span style={{ color: 'var(--secondary)' }}>*</span></label>
                    <select style={inputStyle} required>
                      <option value="">Select option</option>
                      <option>Home Buyer</option>
                      <option>Home Seller</option>
                      <option>Real Estate Agent</option>
                      <option>Lender / Bank</option>
                      <option>Investor</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-light)' }}>Service Needed <span style={{ color: 'var(--secondary)' }}>*</span></label>
                    <select style={inputStyle} required>
                      <option value="">Select service</option>
                      <option>Owner's Title Insurance</option>
                      <option>Lender's Title Insurance</option>
                      <option>Title Search & Examination</option>
                      <option>Settlement / Closing</option>
                      <option>Escrow Services</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-light)' }}>Your Message <span style={{ color: 'var(--secondary)' }}>*</span></label>
                  <textarea 
                    placeholder="Share details about your property, closing date, and how we can help." 
                    style={{ ...inputStyle, height: '140px', resize: 'none' }}
                    required
                  ></textarea>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', width: '100%', justifyContent: 'center', fontSize: '1.1rem' }}>
                    Start Your Title Order <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
                  </button>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1.25rem' }}>
                    By submitting, you agree that we may contact you regarding your transaction. We will never sell or share your information with third parties unrelated to your closing.
                  </p>
                </div>
              </form>
              
              <div style={{ marginTop: '2.5rem', padding: '1rem', background: 'rgba(237, 122, 28, 0.05)', borderRadius: '1rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600 }}>
                  We’ll review your information and follow up with a response within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .contact-page .grid-cols-2 { 
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 768px) {
          .contact-page section:first-of-type { padding: 180px 0 60px !important; }
          .contact-page h1 { font-size: 2.5rem !important; }
          .contact-page .section-padding { padding: 4rem 0 !important; }
          .contact-page .form-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .contact-page .contact-form-container {
            padding: 2rem !important;
          }
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--secondary) !important;
          box-shadow: 0 0 0 4px rgba(237, 122, 28, 0.1);
        }
      `}} />
    </div>
  );
};

export default Contact;
