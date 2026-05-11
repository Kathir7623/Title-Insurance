import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Search, FileText, Lock, Users, ChevronRight, CheckCircle, Star, ArrowRight, ChevronDown, Award, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import heroImg from '../assets/hero.png';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const inputStyle = {
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    fontSize: '1rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'all 0.3s ease',
    width: '100%',
    backgroundColor: '#F8FAFC'
  };


  return (
    <div className="home-page">
      <SEO 
        title="Title Insurance & Closing Services | Full North Carolina Coverage"
        description="Elite title insurance and closing services throughout North Carolina and nationwide. Protecting buyers, sellers, investors, and lenders with fast, secure property protection."
        keywords="title insurance North Carolina, real estate closing NC, title search North Carolina, US title insurance"
      />
      {/* Hero Section */}
      <section className="hero" style={{
        position: 'relative',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: '130px',
        paddingBottom: '60px',
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
            top: 0,
            zIndex: 0
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, color: 'white', width: '100%' }}>
          <div style={{ maxWidth: '850px', textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Title Insurance Specialists <br className="desktop-only" />
                <span style={{ color: 'var(--secondary)' }}>Across North Carolina</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: 1.6 }}>
                Protect your property with expert title insurance that guards against hidden liens, ownership claims, and fraud—so you can close with confidence today.
              </p>
              
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} className="hero-btns">
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                  Contact Our Team
                </Link>
                <Link to="/why-title-insurance" style={{ color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} className="secondary-link">
                  Why KM Title? <ArrowRight size={20} />
                </Link>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                color: 'rgba(255,255,255,0.6)', 
                fontSize: '0.9rem',
                fontWeight: 600,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '1.5rem',
                maxWidth: '750px'
              }}>
                <Award size={18} className="text-secondary" />
                <span>Licensed in NC - ALTA Member - Protecting homeowners, buyers, and lenders nationwide.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audience Segmentation */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-3" style={{ gap: '3rem' }}>
            <motion.div {...fadeIn} style={{ textAlign: 'left' }}>
              <span className="badge" style={{ background: 'rgba(237, 122, 28, 0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>For Homebuyers & Owners</span>
              <h3 style={{ marginBottom: '1rem' }}>Secure Your Dream Home</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Ideal for buyers who want lifetime protection from hidden title issues and past risks.</p>
              <Link to="/services" className="text-secondary" style={{ fontWeight: 600 }}>Protect your ownership →</Link>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} style={{ textAlign: 'left' }}>
              <span className="badge" style={{ background: 'rgba(237, 122, 28, 0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>For Real Estate Agents & Attorneys</span>
              <h3 style={{ marginBottom: '1rem' }}>Streamline Your Closings</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Partner with KM Title on your next listing for proactive communication and fast curative work.</p>
              <Link to="/contact" className="text-secondary" style={{ fontWeight: 600 }}>Partner with us →</Link>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ textAlign: 'left' }}>
              <span className="badge" style={{ background: 'rgba(237, 122, 28, 0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>For Lenders & Investors</span>
              <h3 style={{ marginBottom: '1rem' }}>Professional Asset Protection</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Full multi-state support for complex acquisitions and nationwide lender security.</p>
              <Link to="/services" className="text-secondary" style={{ fontWeight: 600 }}>Schedule a lender closing call →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are / Mission Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid who-we-are-grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <h2 className="badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Who We Are</h2>
              <h3 className="who-we-are-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Elite Service Across North Carolina</h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                Ideal for agents and lenders who want proactive communication, fast curative work, and on-time closings in multiple states. We provide comprehensive title coverage throughout North Carolina—serving all 100 counties—with deep local expertise and nationwide capability.
              </p>
              <div className="stats-container" style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', flex: 1 }}>
                  <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>72hr</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600 }}>Typical Curative Turnaround</p>
                </div>
                <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', flex: 1 }}>
                  <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Multi-State</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600 }}>Licensed Experts</p>
                </div>
              </div>
              <div style={{ padding: '2rem', borderLeft: '4px solid var(--secondary)', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Case Study: North Carolina</h4>
                <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>"Cleared a complex lien issue in 72 hours so a local buyer could close on time."</p>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              className="who-we-are-image-container"
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
                    Contact Us <ArrowRight size={16} />
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
                    Contact Us <ArrowRight size={16} />
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
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>Why Choose KM Title?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.25rem' }}>Choose a title partner that keeps your transaction moving and keeps you informed at every step.</p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
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


        </div>
      </section>

      {/* How It Works (Process) */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge" style={{ background: 'rgba(237, 122, 28, 0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>The Process</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>How It Works</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.25rem', marginBottom: '1rem' }}>A simple 5-step process that takes you from title search to confident closing.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', flexWrap: 'wrap', gap: '2.5rem' }}>
            {[
              { step: "Step 01", title: "Order Title Search", icon: <FileText />, desc: "Share your property and transaction details in a simple online form." },
              { step: "Step 02", title: "We Examine Records", icon: <Search />, desc: "Our experts review deeds, liens, and public records to spot risks early." },
              { step: "Step 03", title: "Resolve Any Issues", icon: <Shield />, desc: "We clear any liens or ownership disputes before closing day." },
              { step: "Step 04", title: "Issue Policy", icon: <Award />, desc: "We issue your title insurance policy for long-term protection." },
              { step: "Step 05", title: "Close with Confidence", desc: "You finalize your transaction knowing your ownership is protected." }
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
                  margin: '0 auto 1.5rem'
                }}>
                  {step.icon ? React.cloneElement(step.icon, { size: 32 }) : <CheckCircle size={32} />}
                </div>
                <p style={{ fontWeight: 800, color: 'var(--secondary)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{step.step}</p>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Lead Form */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Secure Your Property?</h2>
              <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Whether you are a buyer, agent, or lender, KM Title provides the expert title services you need to close with confidence throughout North Carolina or nationwide.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(237, 122, 28, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={20} className="text-secondary" />
                  </div>
                  <p style={{ fontWeight: 600 }}>Fast & Accurate Curative Work</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(237, 122, 28, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={20} className="text-secondary" />
                  </div>
                  <p style={{ fontWeight: 600 }}>Multi-State Closing Expertise</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(237, 122, 28, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={20} className="text-secondary" />
                  </div>
                  <p style={{ fontWeight: 600 }}>Transparent E-Signature Ready Process</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="home-form-container" style={{ background: 'white', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-xl)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Contact Our Team</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder="Full Name" style={inputStyle} required />
                  <input type="email" placeholder="Email Address" style={inputStyle} required />
                </div>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="tel" placeholder="Phone Number" style={inputStyle} required />
                  <select style={inputStyle} required>
                    <option value="">I am a...</option>
                    <option value="Homebuyer">Homebuyer</option>
                    <option value="Agent">Real Estate Agent</option>
                    <option value="Lender">Lender</option>
                    <option value="Attorney">Attorney</option>
                  </select>
                </div>
                <input type="text" placeholder="Property State (e.g., NC, SC, GA)" style={inputStyle} required />
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '0.5rem' }}>
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge" style={{ background: 'rgba(237, 122, 28, 0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>Education</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Understanding Title Insurance</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Expert answers to common title insurance inquiries. A one-time premium that protects you for as long as you own the property.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { 
                q: "Do I need owner's title insurance if the lender has a policy?", 
                a: "Yes. A lender's policy only protects the bank's mortgage interest, which decreases as you pay it down. Only an owner's policy protects your full equity and covers your legal defense costs in the event of a title challenge."
              },
              { 
                q: "How much does title insurance cost in North Carolina?", 
                a: "In NC, title insurance rates are set by the state. The premium is typically based on the property’s purchase price and is a one-time fee paid at closing that provides protection for as long as you own the home."
              },
              { 
                q: "What is the difference between lender’s and owner’s title insurance?", 
                a: "Lender's insurance covers the outstanding loan balance for the bank. Owner's insurance covers the homeowner's full purchase price and equity. Both are crucial for comprehensive protection during a real estate transaction."
              },
              { 
                q: "Do I need owner's title insurance if I'm buying cash?", 
                a: "Yes. Even without a lender, you are risking your entire cash investment. Title insurance protects you from hidden risks like forgery, unknown heirs, or old unpaid tax bills that could threaten your right to the property."
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
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-container {
          padding-top: 20px;
        }
        @media (max-width: 1024px) {
          .home-page .section-padding { padding: 4rem 0 !important; }
        }
        @media (max-width: 768px) {
          .hero {
            height: auto !important;
            padding: 180px 0 100px !important;
            align-items: flex-start !important;
          }
          .hero h1 { font-size: 2.5rem !important; }
          .hero-container {
            padding-top: 0;
          }
          .exp-box {
            position: relative !important;
            right: 0 !important;
            bottom: 0 !important;
            margin: 2rem auto 0 !important;
            max-width: 320px !important;
            width: 100% !important;
            text-align: center !important;
          }
          .home-page h3 { font-size: 1.75rem !important; }
          .home-page h2 { font-size: 2rem !important; }
          .home-page .grid { gap: 1.5rem !important; }
          
          /* Force grid stacks */
          .grid-cols-2, .grid-cols-3, .grid-cols-4 {
            grid-template-columns: 1fr !important;
          }
          .hero-btns { flex-direction: column; align-items: stretch !important; gap: 1rem !important; }
          .hero-btns .btn { width: 100%; justify-content: center; }
          .secondary-link { justify-content: center; padding: 0.5rem; }
          .who-we-are-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .who-we-are-title { font-size: 2.2rem !important; }
          .stats-container { gap: 1rem !important; }
          .stats-container div { padding: 1rem !important; }
          .stats-container p:first-child { font-size: 1.5rem !important; }
          .who-we-are-image-container { margin-top: 2rem; }
          .exp-box { position: relative !important; bottom: 0 !important; right: 0 !important; max-width: 100% !important; margin-top: 1.5rem; gap: 1rem !important; padding: 1.5rem !important; }
          .exp-box div p { font-size: 0.95rem !important; }
          
          .form-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .home-form-container { padding: 2rem !important; }
          .home-page .section-padding { padding: 3rem 0 !important; }
        }
      `}} />
    </div>
  );
};

export default Home;
