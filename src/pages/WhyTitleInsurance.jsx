import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, FileText, Search, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import investmentImg from '../assets/investment.png';

const WhyTitleInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const risks = [
    { title: "Hidden Liens", desc: "Previous owner's unpaid property taxes or contractor bills can result in a lien placed against your home after you move in." },
    { title: "Forgery & Fraud", desc: "Illegal signatures or fraudulent deeds from years ago can suddenly jeopardize your entire ownership claim." },
    { title: "Public Record Errors", desc: "Clerical mistakes or misfiled documents in county records can create expensive legal nightmares for current owners." },
    { title: "Unknown Heirs", desc: "A previously unknown heir of a former owner can appear years later and claim a legal right to your property." },
    { title: "Easement Issues", desc: "Third-party rights to use parts of your land that were never properly disclosed or discovered during purchase." },
    { title: "Boundary Disputes", desc: "Inaccurate historical surveys can lead to high-stakes legal battles with neighbors over property lines." }
  ];

  return (
    <div className="why-insurance-page">
      <SEO 
        title="Why You Need Title Insurance | Property Protection"
        description="Understand the critical importance of title insurance in protecting your home from hidden past-title risks like liens, forgery, and undiscovered heirs."
        keywords="importance of title insurance, why title insurance, title risk protection, homeowner protection"
      />
      {/* Page Header */}
      <section style={{ padding: '200px 0 100px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            Why You Need Title Insurance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#94a3b8', fontSize: '1.25rem' }}
          >
            Safeguarding your home and equity from hidden, past-title risks.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#64748b', fontSize: '1rem', marginTop: '1rem' }}
          >
            Title insurance protects you from problems in the property’s past that could affect your ownership today.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <motion.div {...fadeIn}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Property is Your Future</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                When you buy a home, you aren't just buying the building; you are buying the legal right to occupy and use that land. However, every property comes with a history.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Title insurance is unique. Unlike other policies that protect you from future events (like fire or theft), title insurance protects you from <strong>past events</strong> that could threaten your ownership rights today.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2.5rem', fontStyle: 'italic' }}>
                For example, an old unpaid tax bill, a forged signature, or an undiscovered heir could suddenly threaten your right to keep the home.
              </p>
              <div>
                <Link to="/contact" className="btn btn-primary" style={{ marginBottom: '1rem' }}>Protect Your Home Now</Link>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>Contact our team to review your upcoming closing in North Carolina or nationwide.</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <div style={{ 
                padding: '4rem', 
                borderRadius: '2rem', 
                position: 'relative', 
                overflow: 'hidden',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <img 
                  src={investmentImg} 
                  alt="One-time investment" 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    zIndex: -1
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 100%)',
                  zIndex: -1
                }} />
                
                <Shield size={64} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', fontWeight: 700 }}>A One-Time Investment</h3>
                <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '90%' }}>
                  For a single premium paid at closing, you receive ongoing protection against covered title issues for as long as you own the property. Unlike most insurance, there are no monthly premiums.
                </p>
                <p style={{ fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                  <CheckCircle size={24} className="text-secondary" /> Lifetime Protection
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hidden Risks */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Critical Protection</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Hidden Risks You Might Face</h2>
            <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '1rem auto' }}>
              Even with a thorough title search, some issues are "off-record" and may only surface after you become the owner.
            </p>
          </div>
          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {risks.map((risk, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                className="card"
                style={{ background: 'white', padding: '2.5rem', borderRadius: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(237, 122, 28, 0.1)', padding: '0.75rem', borderRadius: '1rem' }}>
                    <AlertTriangle size={24} style={{ color: 'var(--secondary)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem' }}>{risk.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>{risk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div {...fadeIn} style={{ order: 1 }}>
              <div style={{ background: 'var(--primary)', padding: '4rem', borderRadius: '2.5rem', color: 'white' }}>
                <Lock size={48} style={{ color: 'var(--secondary)', marginBottom: '2rem' }} />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Absolute Security</h2>
                <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.7 }}>
                  With KM Title, you are choosing more than just a policy; you are choosing a partner dedicated to preventing title surprises and defending your ownership if issues arise.
                </p>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} style={{ order: 2 }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Lender's vs. Owner's Policy</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
                  To see specific coverage for both policies, visit our <Link to="/services" style={{ color: 'var(--secondary)', fontWeight: 600 }}>Services page</Link>.
                </p>
              </div>
              
              <div style={{ overflowX: 'auto', background: 'white', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)', marginBottom: '3rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'var(--primary)', color: 'white' }}>
                      <th style={{ padding: '1.25rem' }}>Aspect</th>
                      <th style={{ padding: '1.25rem' }}>Owner's Policy</th>
                      <th style={{ padding: '1.25rem' }}>Lender's Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Who is protected", owner: "You and your heirs", lender: "The mortgage lender" },
                      { aspect: "Coverage amount", owner: "Full purchase price", lender: "Outstanding loan balance" },
                      { aspect: "Duration", owner: "As long as you own the home", lender: "Until loan is paid off" },
                      { aspect: "Required?", owner: "Optional but strongly recommended", lender: "Typically required by lenders" }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0' }}>
                        <td data-label="Aspect" style={{ padding: '1rem', fontWeight: 700, fontSize: '0.9rem', background: '#F8FAFC' }}>{row.aspect}</td>
                        <td data-label="Owner's Policy" style={{ padding: '1rem', fontSize: '0.9rem' }}>{row.owner}</td>
                        <td data-label="Lender's Policy" style={{ padding: '1rem', fontSize: '0.9rem' }}>{row.lender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>An Owner’s Policy typically includes:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Protection against legal fees and court costs",
                  "Loss coverage up to the full purchase price",
                  "Long-term peace of mind for your family",
                  "Helps keep your title marketable when you sell or refinance"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 500 }}>
                    <CheckCircle size={18} style={{ color: 'var(--secondary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Don't Leave Your Home to Chance</h2>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
              Whether you are a homebuyer, investor, agent, or lender, contact KM Title today to discuss your next closing and ensure absolute protection.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>
              Protect Your Closing
            </Link>
          </motion.div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .why-insurance-page .grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .why-insurance-page .grid[grid-cols-2] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .why-insurance-page section:first-of-type { padding: 180px 0 60px !important; }
          .why-insurance-page h1 { font-size: 2.5rem !important; }
          .why-insurance-page h2 { font-size: 2rem !important; }
          .why-insurance-page .section-padding { padding: 4rem 0 !important; }
          .why-insurance-page .motion-div > div { min-height: 300px !important; padding: 2.5rem !important; }
          
          /* Non-scrollable Stacked Table */
          .why-insurance-page table, 
          .why-insurance-page thead, 
          .why-insurance-page tbody, 
          .why-insurance-page th, 
          .why-insurance-page td, 
          .why-insurance-page tr { 
            display: block !important; 
            width: 100% !important;
          }
          .why-insurance-page thead tr { 
            position: absolute !important;
            top: -9999px !important;
            left: -9999px !important;
          }
          .why-insurance-page tr { 
            border: 1px solid var(--border) !important; 
            margin-bottom: 1.5rem !important; 
            border-radius: 1rem !important;
            overflow: hidden !important;
          }
          .why-insurance-page td { 
            border: none !important;
            position: relative !important;
            padding-left: 1.25rem !important;
            padding-top: 2.75rem !important;
            white-space: normal !important;
          }
          .why-insurance-page td:before { 
            position: absolute !important;
            top: 0.85rem !important;
            left: 1.25rem !important;
            width: 100% !important; 
            content: attr(data-label) !important;
            font-weight: 800 !important;
            color: var(--secondary) !important;
            text-transform: uppercase !important;
            font-size: 0.7rem !important;
            letter-spacing: 0.05em !important;
          }
          .why-insurance-page td[data-label="Aspect"] {
            background: var(--primary) !important;
            color: white !important;
            padding-top: 1rem !important;
            font-size: 1rem !important;
          }
          .why-insurance-page td[data-label="Aspect"]:before {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default WhyTitleInsurance;
