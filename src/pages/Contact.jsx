import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Shield, ArrowRight } from 'lucide-react';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section style={{ padding: '120px 0 60px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
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
            style={{ color: '#94a3b8', fontSize: '1.25rem' }}
          >
            Ready to secure your property? Reach out to our team today.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '5rem' }}>
            {/* Contact Info */}
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>
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
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Location</h4>
                    <p style={{ color: 'var(--muted)' }}>1428 Bailey's Run Ct, Raleigh, NC 27606</p>
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
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--muted)' }}>support@kmtitleinsurance.com</p>
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
                    <p style={{ color: 'var(--muted)' }}>(470) 706-5858</p>
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

              <div style={{ marginTop: '4rem', padding: '2rem', background: '#F8FAFC', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Shield className="text-secondary" />
                  <h3 style={{ fontSize: '1.25rem' }}>Secure Transaction</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>All information shared with us is encrypted and handled with the highest level of security and confidentiality.</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeIn} style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Request a Free Title Quote</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Who are you?</label>
                    <select style={inputStyle}>
                      <option>Home Buyer</option>
                      <option>Home Seller</option>
                      <option>Real Estate Agent</option>
                      <option>Lender / Bank</option>
                      <option>Investor</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Service Needed</label>
                    <select style={inputStyle}>
                      <option>Owner's Title Insurance</option>
                      <option>Lender's Title Insurance</option>
                      <option>Title Search & Examination</option>
                      <option>Settlement / Closing</option>
                      <option>Escrow Services</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Your Message</label>
                  <textarea placeholder="How can we help you today?" style={{ ...inputStyle, height: '150px', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem' }}>
                  Start Your Title Order <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  fontSize: '1rem',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  '&:focus': {
    borderColor: 'var(--secondary)'
  }
};

export default Contact;
