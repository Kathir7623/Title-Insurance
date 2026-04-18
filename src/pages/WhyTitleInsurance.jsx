import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, FileText, Search, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyTitleInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const risks = [
    { title: "Hidden Liens", desc: "Unpaid taxes or judgments by previous owners can become your legal responsibility." },
    { title: "Forgery & Fraud", desc: "Illegal signatures on past deeds can jeopardize your entire ownership claim." },
    { title: "Public Record Errors", desc: "Misfiled documents or clerical errors can create long-term legal nightmares." },
    { title: "Unknown Heirs", desc: "Claims from long-lost family members of previous owners can suddenly emerge." },
    { title: "Easement Issues", desc: "Third-party rights to use parts of your property without your knowledge." },
    { title: "Boundary Disputes", desc: "Incorrect surveys can lead to legal battles over property lines." }
  ];

  return (
    <div className="why-insurance-page">
      {/* Page Header */}
      <section style={{ padding: '120px 0 60px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
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
            Safeguarding your most significant investment from unknown risks.
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
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Title insurance is unique. Unlike other insurance policies that protect you from future events (like a fire or theft), title insurance protects you from <strong>past events</strong> that could threaten your ownership rights today.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary">Protect Your Home Now</Link>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <div style={{ padding: '3rem', background: 'rgba(237, 122, 28, 0.05)', borderRadius: 'var(--radius)', border: '1px dashed var(--secondary)' }}>
                <Shield size={64} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>A One-Time Investment</h3>
                <p style={{ color: 'var(--muted)' }}>Unlike most insurance, there are no monthly premiums. You pay a single one-time fee at closing, and your property is protected for as long as you or your heirs own it.</p>
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
            <h2 style={{ fontSize: '2.5rem' }}>Hidden Risks You Might Face</h2>
            <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '1rem auto' }}>
              Even with a thorough title search, some issues are "off-record" and can only be discovered after you've already purchased the property.
            </p>
          </div>
          <div className="grid grid-cols-3">
            {risks.map((risk, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <AlertTriangle size={20} style={{ color: 'var(--secondary)' }} />
                  <h3 style={{ fontSize: '1.2rem' }}>{risk.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{risk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div {...fadeIn} style={{ order: 2 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Lender's vs. Owner's Policy</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Most lenders require you to purchase a <strong>Lender's Policy</strong>. However, this only protects the bank's investment. It does <strong>not</strong> protect your equity or your right to stay in the home.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
                An <strong>Owner's Policy</strong> is what protects you, the homeowner. It covers the full purchase price of the home and includes legal defense costs if someone challenges your title in court.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Protection against legal fees",
                  "Loss coverage up to the purchase price",
                  "Peace of mind for your family",
                  "Marketability of title for future sale"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                    <CheckCircle size={18} style={{ color: 'var(--secondary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeIn} style={{ order: 1 }}>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  width: '100%', 
                  height: '450px', 
                  background: 'var(--primary)', 
                  borderRadius: 'var(--radius)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  padding: '3rem',
                  color: 'white'
                }}>
                  <Lock size={48} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Absolute Security</h3>
                  <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>With KM Title, you are choosing more than just a policy; you are choosing a partner dedicated to the long-term integrity of your property rights.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Don't Leave Your Home to Chance</h2>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2.5rem' }}>
              Contact KM Title today to learn more about how we protect your ownership rights.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem' }}>
              Get Protected Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyTitleInsurance;
