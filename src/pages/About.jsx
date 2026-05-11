import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Award } from 'lucide-react';
import SEO from '../components/SEO';
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
      <SEO 
        title="About Our Title Experts"
        description="Meet the dedicated team at KM Title Insurance. With decades of experience in real estate law and title examination, we ensure your property is protected."
        keywords="KM Title Insurance team, real estate title experts, title insurance professionals, North Carolina title company"
      />
      {/* Page Header */}
      <section style={{ padding: '200px 0 100px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
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
            Serving Full North Carolina — Nationwide Support
          </motion.p>
        </div>
      </section>

      {/* Intro/Hero-like Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid" style={{ gridTemplateColumns: '1fr 40%', alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Protecting Your Investment</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                KM Title Insurance is a US-based title company supporting buyers, homeowners, lenders, and real estate professionals with clear, accurate title work for smooth, on-time closings. Serving all of North Carolina, we provide title insurance services across the state and support clients with nationwide real estate transactions.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Buying a home or investing in property is one of the biggest decisions you will make. Our job is to remove title surprises so your closing stays on track. Our experienced team supports residential and investment property transactions of all sizes, helping our clients close with confidence.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                We combine thorough research with clear communication, so you, your agent, and your lender always know exactly where things stand. Learn more about our specialized support and nationwide capability on our <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: 600 }}>Services</Link> page.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="image-container" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '400px' }}>
                <img src={aboutImg} alt="KM Title Insurance Professionals" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <div className="image-container" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', height: '400px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Title Experts" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Team</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Our team includes experienced title examiners, closing coordinators, and customer support specialists dedicated to keeping your transaction moving smoothly. We pride ourselves on being accessible and proactive on every deal.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '2rem', fontStyle: 'italic' }}>
                "No matter the size of your transaction, you will always have a real person you can reach for updates and questions."
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Experienced in North Carolina and multi-state transactions",
                  "Skilled with residential, investment, and new construction deals",
                  "Ready to coordinate with your real estate agent, attorney, and lender"
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
                To deliver secure, transparent, and efficient title services so every client can close with confidence.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye size={48} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--muted)' }}>
                To lead the nationwide title industry through accuracy, clear communication, and proactive problem‑solving.
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

      {/* Who We Serve Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Who We Serve</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 0.5rem' }}>
              We provide specialized title solutions for a wide range of clients.
            </p>
            <p style={{ color: 'var(--primary)', fontWeight: 600 }}>
              Whether you are closing one home or managing multiple deals, we tailor our services to fit your needs and timelines.
            </p>
          </div>
          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {[
              { type: "Home Buyers", desc: "Protecting your biggest investment by identifying liens, claims, or title defects." },
              { type: "Real Estate Agents", desc: "Providing fast, reliable title work and proactive communication to keep deals on schedule." },
              { type: "Mortgage Lenders", desc: "Securing your interest with thorough searches and lender’s policies that reduce risk." },
              { type: "Investors", desc: "Supporting single and multi‑property portfolios with efficient, high-volume title services." },
              { type: "Builders & Developers", desc: "Clearing land and new construction titles to ensure projects move from planning to closing." },
              { type: "Commercial Clients", desc: "Handling complex commercial title searches and insurance for business property acquisitions." }
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
                  margin: '0 auto 1.5rem'
                }}>
                  <Shield size={28} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{persona.type}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{persona.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
              If you are a buyer, agent, lender, or investor, <Link to="/contact" style={{ color: 'var(--secondary)', fontWeight: 700, textDecoration: 'underline' }}>contact us</Link> to discuss how we can support your next closing.
            </p>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .about-page .grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .about-page .grid div:nth-child(2) {
            order: -1;
          }
          .about-page .grid[grid-cols-3] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .about-page section:first-of-type { padding: 180px 0 60px !important; }
          .about-page h1 { font-size: 2.5rem !important; }
          .about-page h2 { font-size: 2rem !important; }
          .about-page .section-padding { padding: 4rem 0 !important; }
          .about-page .image-container { height: 300px !important; }
          .about-page .image-container img { height: 100% !important; }
        }
      `}} />
    </div>
  );
};

export default About;
