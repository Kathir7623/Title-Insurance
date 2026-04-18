import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Search, FileText, Lock, Users, ChevronRight, CheckCircle, Star, ArrowRight, ChevronDown, Award, Clock } from 'lucide-react';
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

  const [openFaq, setOpenFaq] = useState(null);

  const heroBadge = {
    background: 'rgba(237, 122, 28, 0.15)',
    color: 'var(--secondary)',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    fontSize: '0.9rem',
    fontWeight: 600,
    border: '1px solid var(--secondary)',
    display: 'inline-block',
    marginBottom: '1rem'
  };

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
          alt="Modern luxury home exterior representing property protection"
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
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Protect Your Property. <br />
              <span style={{ color: 'var(--secondary)' }}>Secure Your Future.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '550px' }}>
              Fast, accurate title insurance services for homeowners, buyers, lenders, and real estate professionals across the United States.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Request a Free Title Quote <ArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderColor: 'white', color: 'white' }}>
                Order a Title Search
              </Link>
            </div>
            {/* Trust Elements */}
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} className="text-secondary" /> <span>Licensed in NC</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} className="text-secondary" /> <span>Experienced Professionals</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} className="text-secondary" /> <span>Serving Nationwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are / Mission Section */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div {...fadeIn}>
              <h2 className="badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Who We Are</h2>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Partners in Protection</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Based in Raleigh, NC, KM Title Insurance is a specialized firm helping homeowners, buyers, lenders, and real estate professionals close with confidence by eliminating title risks before they become costly problems.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Serving clients across North Carolina and nationwide, we act as the ideal partner for real estate agents, attorneys, and lenders who want reliable title support and proactive communication on every deal.
              </p>
              <div style={{ padding: '2rem', borderLeft: '4px solid var(--secondary)', background: '#F8FAFC' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Our Mission</h4>
                <p style={{ color: 'var(--muted)' }}>To deliver clear title, on time, so closings never get delayed and your investment stays protected.</p>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              style={{ position: 'relative' }}
            >
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Professional real estate consultation session" style={{ borderRadius: 'var(--radius)', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                background: 'var(--secondary)',
                color: 'white',
                padding: '2rem',
                borderRadius: 'var(--radius)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                maxWidth: '280px'
              }} className="exp-box">
                <div style={{ textAlign: 'center' }}>
                  <Shield size={32} style={{ marginBottom: '0.75rem', margin: '0 auto' }} />
                  <p style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3 }}>Experienced Title Professionals</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ textAlign: 'center' }}>
                  <Award size={32} style={{ marginBottom: '0.75rem', margin: '0 auto' }} />
                  <p style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3 }}>Industry-Standard Processes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education / Understanding Section */}
      <section className="section-padding" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="badge" style={{ color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>Education</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Understanding Title Insurance</h2>
            <p style={{ color: '#94a3b8' }}>
              If you are buying, refinancing, or investing, title insurance protects you from past issues that could threaten your ownership later.
            </p>
          </div>
          
          <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Here are some common issues title insurance helps protect against:
          </p>

          <div className="grid grid-cols-4">
            {[
              { title: "Unknown Liens", icon: <Lock />, desc: "Unpaid property taxes or contractor bills from previous owners." },
              { title: "Ownership Disputes", icon: <Users />, desc: "Claims from long-lost heirs or errors in legal documentation." },
              { title: "Fraud or Forgery", icon: <Shield />, desc: "Falsified signatures on past deeds or illegal property transfers." },
              { title: "Record Errors", icon: <Search />, desc: "Clerical mistakes in public records that cloud your ownership." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="card"
                style={{ background: '#1e293b', borderColor: '#334155', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--secondary)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'white' }}>{item.title}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', background: 'rgba(237, 122, 28, 0.08)', borderRadius: 'var(--radius)', border: '1px dashed var(--secondary)' }}>
            <p style={{ fontSize: '1.35rem', color: '#f8fafc', fontWeight: 600, marginBottom: '1.5rem' }}>Without title insurance, your dream property could become a legal nightmare.</p>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Get protected before you close
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Our Professional Services</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>Comprehensive Solutions</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Tailored title and escrow support for every party in the transaction.</p>
          </div>

          <div style={{ marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '40px', height: '4px', background: 'var(--secondary)', display: 'block' }}></span>
              For Buyers & Owners
            </h3>
            <div className="grid grid-cols-3">
              {[
                { 
                  icon: <Shield />, 
                  title: "Owner’s Title Insurance", 
                  desc: "Ideal for buyers and homeowners who want lifetime protection from hidden title issues." 
                },
                { 
                  icon: <Search />, 
                  title: "Title Search & Examination", 
                  desc: "Helps buyers and agents avoid surprises and ownership defects before closing day." 
                },
                { 
                  icon: <Users />, 
                  title: "Escrow & Closing Support", 
                  desc: "Secure, neutral handling of earnest money and legal docs to protect all parties." 
                }
              ].map((s, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="card">
                  <div style={{ marginBottom: '1.25rem', color: 'var(--secondary)' }}>
                    {React.cloneElement(s.icon, { size: 36 })}
                  </div>
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '1.35rem' }}>{s.title}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', minHeight: '3rem' }}>{s.desc}</p>
                  <Link to="/contact" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 600 }}>
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '40px', height: '4px', background: 'var(--secondary)', display: 'block' }}></span>
              For Lenders & Commercial Clients
            </h3>
            <div className="grid grid-cols-3">
              {[
                { 
                  icon: <Lock />, 
                  title: "Lender’s Title Insurance", 
                  desc: "Gives your lender confidence that their mortgage is secured by a clear title." 
                },
                { 
                  icon: <FileText />, 
                  title: "Title Settlement Services", 
                  desc: "We coordinate documents, recording, and funds so closing day is smooth and on-time." 
                },
                { 
                  icon: <Search />, 
                  title: "Commercial Title Services", 
                  desc: "Specialized support for complex commercial property acquisitions and multi-state deals." 
                }
              ].map((s, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="card">
                  <div style={{ marginBottom: '1.25rem', color: 'var(--secondary)' }}>
                    {React.cloneElement(s.icon, { size: 36 })}
                  </div>
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '1.35rem' }}>{s.title}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', minHeight: '3rem' }}>{s.desc}</p>
                  <Link to="/contact" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 600 }}>
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>Why Choose KM Title?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.25rem' }}>Choose a title partner that keeps your transaction moving and keeps you informed at every step.</p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '3rem', marginBottom: '6rem' }}>
            {[
              { title: "Fast & Accurate Title Search", benefit: "Quick turnarounds so your closing doesn't get delayed." },
              { title: "100% Transparent Process", benefit: "Clear communication at every step, with no hidden fees." },
              { title: "Nationwide Coverage", benefit: "Full support for multi-state investors and national lenders." },
              { title: "Experienced Professionals", benefit: "Handled complex title issues across residential and commercial deals." },
              { title: "Secure Transactions", benefit: "State-of-the-art protected handling of funds and sensitive information." },
              { title: "Dedicated Customer Support", benefit: "Easy access to our team by phone and email for any questions." }
            ].map((feature, i) => (
              <motion.div key={i} {...fadeIn} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(237, 122, 28, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{feature.title}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{feature.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {[
              { 
                text: "“Smooth and hassle-free closing process. Their communication was miles ahead of other companies we've used in the past.”",
                author: "Residential Agent",
                location: "Raleigh, NC"
              },
              { 
                text: "“As a first-time buyer, I was nervous about title risks. KM Title explained everything and protected my investment.”",
                author: "First‑Time Homebuyer",
                location: "Purchase in Raleigh, NC"
              }
            ].map((t, idx) => (
              <motion.div key={idx} {...fadeIn} style={{ padding: '3rem', background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', textAlign: 'left', borderTop: '4px solid var(--secondary)' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="var(--secondary)" color="var(--secondary)" size={18} />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--primary-light)' }}>{t.text}</p>
                <div>
                  <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>{t.author}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Process) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>How It Works</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.25rem', marginBottom: '1rem' }}>A simple 5-step process that takes you from title search to confident closing.</p>
            <p style={{ color: 'var(--secondary)', fontWeight: 600 }}>Most title searches and preliminary reports are completed within 3–5 business days.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', flexWrap: 'wrap', gap: '2.5rem' }}>
            {[
              { title: "Order Title Search", icon: <FileText />, desc: "Share your property and transaction details in a simple online form." },
              { title: "We Examine Records", icon: <Search />, desc: "We review deeds, liens, and public records to spot risks early." },
              { title: "Resolve Any Issues", icon: <Shield />, desc: "We clear any liens or ownership disputes before closing day." },
              { title: "Issue Policy", icon: <Award />, desc: "We issue your title insurance policy for long-term protection." },
              { title: "Close with Confidence", icon: <CheckCircle />, desc: "You finalize your transaction knowing your ownership is protected." }
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', flex: 1, minWidth: '220px' }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'var(--secondary)',
                  color: 'white',
                  borderRadius: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(237, 122, 28, 0.3)',
                  margin: '0 auto 2rem'
                }}>
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{step.title}</h4>
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
              Whether you are a buyer, agent, or lender, we provide the expert title insurance services you need to close with confidence.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>
              Request a Free Title Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Common Questions</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Expert answers to the most common title insurance inquiries for owners, agents, and lenders.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { 
                q: "Do I need owner's title insurance if I'm buying cash?", 
                a: "Yes. Even if you don't have a lender requiring a policy, owner's title insurance is vital to protect your cash investment from hidden risks like forgery or unknown heirs that a title search might miss."
              },
              { 
                q: "What does a title search include?", 
                a: "A comprehensive title search includes a review of public records relating to the property's history, including deeds, mortgages, tax liens, judgments, and easements to ensure clear ownership."
              },
              { 
                q: "Can you work directly with my real estate agent and lender?", 
                a: "Yes, we regularly coordinate with agents, lenders, and attorneys to keep all parties aligned and closings on schedule. We are multi-state experts capable of handling complex coordinate needs."
              },
              { 
                q: "How long does it take to get title insurance?", 
                a: "Most title searches and preliminary reports are completed within 3–5 business days. Complex properties or multi-state transactions may take longer depending on record availability."
              }
            ].map((faq, idx) => (
              <div key={idx} style={{ border: '1px solid var(--border)', borderRadius: '12px', background: 'white', overflow: 'hidden' }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary)' }}>{faq.q}</span>
                  <ChevronDown size={20} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', color: 'var(--secondary)' }} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 2rem 1.5rem', color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
