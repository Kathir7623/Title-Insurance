import { Link } from 'react-router-dom';
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
            About KM Title Insurance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#94a3b8', fontSize: '1.25rem' }}
          >
            Based in Raleigh, NC — Serving Clients Nationwide
          </motion.p>
        </div>
      </section>

      {/* Hero-like Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid" style={{ gridTemplateColumns: '1fr 40%', alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Protecting Your Investment</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                KM Title Insurance is a US-based title company supporting buyers, homeowners, lenders, and real estate professionals with clear, accurate title work for smooth closings. Based in Raleigh, North Carolina, we provide title services across NC and other states in the US.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Buying a home or investing in property is one of the biggest decisions you will make. Our job is to remove title surprises so your closing stays on track. Since our founding, we've supported over 10,000 residential and investment property transactions, helping our clients close with confidence.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                We combine thorough research with clear communication, so you, your agent, and your lender always know exactly where things stand. Learn more about our specialized support on our <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: 600 }}>Services</Link> page.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '400px' }}>
                <img src={aboutImg} alt="Our Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid" style={{ gridTemplateColumns: '45% 1fr', alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', height: '400px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Title Experts" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Team</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Our team includes experienced title examiners, closing coordinators, and customer support specialists dedicated to keeping your transaction moving smoothly. We pride ourselves on being accessible and proactive on every deal.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Experienced in North Carolina and multi-state transactions",
                  "Familiar with residential, investment, and new construction deals",
                  "Available to coordinate with your real estate agent, attorney, and lender"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', fontWeight: 500 }}>
                    <Shield size={20} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
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
                To deliver secure, transparent, and efficient title services so every client can close with confidence on any deal.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye size={48} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--muted)' }}>
                To lead the nationwide title industry with accuracy, clear communication, and proactive problem-solving.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={48} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Goal</h3>
              <p style={{ color: 'var(--muted)' }}>
                To ensure every property we touch has a clear, legal, and undisputed ownership history before you sign at closing.
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
          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {[
              { type: "Home Buyers", desc: "We help protect your biggest investment by checking for liens, claims, or errors that could affect you later." },
              { type: "Real Estate Agents", desc: "We provide fast, reliable title work and proactive communication to keep your deals on schedule." },
              { type: "Mortgage Lenders", desc: "We secure your interest with thorough searches and lender’s policies that reduce risk on every loan." },
              { type: "Investors", desc: "We support single and multi‑property portfolios with efficient services tailored to repeat transactions." },
              { type: "Builders & Developers", desc: "We help clear land and new construction titles so projects move from planning to closing smoothly." }
            ].map((persona, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(237, 122, 28, 0.1)', 
                  color: 'var(--secondary)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <Shield size={28} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{persona.type}</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{persona.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
