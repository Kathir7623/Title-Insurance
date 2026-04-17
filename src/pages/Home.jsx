import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Search, FileText, Lock, Users, ChevronRight, CheckCircle, Star, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { 
      icon: <Shield className="text-secondary" size={32} />, 
      title: "Owner’s Title Insurance", 
      desc: "Protects homeowners from title defects and legal claims." 
    },
    { 
      icon: <Lock className="text-secondary" size={32} />, 
      title: "Lender’s Title Insurance", 
      desc: "Ensures the lender’s investment is protected during mortgage transactions." 
    },
    { 
      icon: <Search className="text-secondary" size={32} />, 
      title: "Title Search & Examination", 
      desc: "We thoroughly review public records to identify any issues before closing." 
    },
    { 
      icon: <FileText className="text-secondary" size={32} />, 
      title: "Title Settlement Services", 
      desc: "Smooth and secure closing process for buyers, sellers, and agents." 
    },
    { 
      icon: <Shield className="text-secondary" size={32} />, 
      title: "Escrow Services", 
      desc: "Safe handling of funds and documents during transactions." 
    }
  ];

  const features = [
    "Fast & Accurate Title Search",
    "100% Transparent Process",
    "Nationwide Coverage",
    "Experienced Professionals",
    "Secure Transactions",
    "Dedicated Customer Support"
  ];

  const steps = [
    { step: "01", title: "Order Title Search", desc: "Start the process with a simple request." },
    { step: "02", title: "We Examine Records", desc: "Our experts dive deep into public records." },
    { step: "03", title: "Resolve Any Issues", desc: "We clear any liens or ownership disputes." },
    { step: "04", title: "Issue Policy", desc: "Formal protection for your property ownership." },
    { step: "05", title: "Close with Confidence", desc: "Finalize your transaction worry-free." }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        background: 'var(--primary)'
      }}>
        <div className="hero-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 30%, rgba(15, 23, 42, 0.4) 100%)',
          zIndex: 1
        }}></div>
        <img 
          src={heroImg} 
          alt="Modern Home" 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            right: 0,
            top: 0
          }} 
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '20px', width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '650px' }}
          >
            <span className="badge">Trusted Across the USA</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Protect Your Property. <br />
              <span style={{ color: 'var(--secondary)' }}>Secure Your Future.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '550px' }}>
              Trusted Title Insurance Services Across the United States — ensuring your property ownership is clear, protected, and stress-free.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                Order Title Search
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div {...fadeIn}>
              <span className="badge">About Us</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Who We Are</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                We are a trusted US-based Title Insurance company dedicated to protecting homeowners, buyers, lenders, and real estate professionals from potential title risks.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                With years of experience in real estate transactions, we ensure every property you invest in has a clear, legal, and undisputed ownership history.
              </p>
              <div style={{ padding: '2rem', borderLeft: '4px solid var(--secondary)', background: '#F8FAFC' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--muted)' }}>To provide secure, transparent, and efficient title insurance services that give our clients peace of mind in every transaction.</p>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              style={{ position: 'relative' }}
            >
              <img src={heroImg} alt="Office" style={{ borderRadius: 'var(--radius)', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
              <div style={{ 
                position: 'absolute', 
                bottom: '-2rem', 
                right: '-2rem', 
                background: 'var(--secondary)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: 'var(--radius)',
                display: 'none' /* Will show on desktop */
              }} className="exp-box">
                <span style={{ fontSize: '3rem', fontWeight: 800 }}>15+</span>
                <p>Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="section-padding" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Understanding Title Insurance</h2>
            <p style={{ color: '#94a3b8' }}>Title Insurance protects you from financial loss due to past issues that could affect your ownership.</p>
          </div>
          <div className="grid grid-cols-4">
            {[
              { title: "Unknown Liens", desc: "Outstanding debts against the property." },
              { title: "Ownership Disputes", desc: "Conflicting claims from past owners." },
              { title: "Fraud or Forgery", desc: "Illegal transfer of property rights." },
              { title: "Public Record Errors", desc: "Mistakes in legal documentation." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="card" 
                style={{ background: '#1e293b', borderColor: '#334155' }}
              >
                <CheckCircle className="text-secondary" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'white' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: 'rgba(237, 122, 28, 0.1)', borderRadius: 'var(--radius)' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: 600 }}>Why It Matters: Without title insurance, your dream property could become a legal nightmare.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Our Expertise</span>
            <h2 style={{ fontSize: '2.5rem' }}>Comprehensive Services</h2>
          </div>
          <div className="grid grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="card">
                <div style={{ marginBottom: '1.5rem' }}>{s.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{s.desc}</p>
                <Link to="/services" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 600 }}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose KM Title?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} style={{ color: 'var(--secondary)' }} />
                    <span style={{ fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ padding: '3rem', background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(i => <Star key={i} fill="var(--secondary)" color="var(--secondary)" size={24} />)}
                </div>
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  “Smooth and hassle-free closing process. Highly recommend!”
                </p>
                <div style={{ fontWeight: 600 }}>— Happy Homeowner</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>How It Works</h2>
            <p style={{ color: 'var(--muted)' }}>A streamlined 5-step process to secure your property.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', flexWrap: 'wrap', gap: '2rem' }}>
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', flex: 1, minWidth: '200px' }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--secondary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 800,
                  margin: '0 auto 1.5rem'
                }}>
                  {step.step}
                </div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Secure Your Property?</h2>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Get expert title insurance services today and protect your investment from hidden risks.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>
              Request a Free Quote Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
