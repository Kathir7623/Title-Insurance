import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Award } from 'lucide-react';
import aboutImg from '../assets/about-img.png';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      {/* Page Header */}
      <section style={{ padding: '120px 0 60px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#94a3b8', fontSize: '1.25rem' }}
          >
            Your Trusted Partner in Title Protection
          </motion.p>
        </div>
      </section>

      {/* Hero-like Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Dedicated to Your Peace of Mind</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                At KM Title Insurance, we understand that buying a home or investing in property is one of the most significant decisions you'll ever make. That's why we've dedicated ourselves to providing the most thorough, transparent, and reliable title services in the United States.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Since our founding, we have handled thousands of transactions for homeowners, real estate agents, and mortgage lenders. Our team of experienced professionals works tirelessly to ensure that every title we insure is clear of defects, giving you the confidence to close.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <img src={aboutImg} alt="Our Team" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our Core Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-3">
            <motion.div {...fadeIn} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Target size={48} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--muted)' }}>
                To provide secure, transparent, and efficient title insurance services that give our clients peace of mind in every transaction.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye size={48} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--muted)' }}>
                To be the nationwide leader in title insurance, setting the standard for accuracy, security, and customer service excellence.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={48} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Goal</h3>
              <p style={{ color: 'var(--muted)' }}>
                Ensuring every property you invest in has a clear, legal, and undisputed ownership history, protecting your future today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Who We Serve</h2>
            <p style={{ color: 'var(--muted)' }}>We provide specialized title solutions for a wide range of clients.</p>
          </div>
          <div className="grid grid-cols-5" style={{ textAlign: 'center' }}>
            {["Home Buyers", "Real Estate Agents", "Mortgage Lenders", "Investors", "Builders & Developers"].map((type, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'rgba(237, 122, 28, 0.1)', 
                  color: 'var(--secondary)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <Shield size={32} />
                </div>
                <h4 style={{ fontSize: '1.1rem' }}>{type}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
