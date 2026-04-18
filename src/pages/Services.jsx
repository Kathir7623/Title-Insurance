import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Search, FileText, Landmark, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import closingImg from '../assets/closing.png';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const servicesDetailed = [
    {
      icon: <Shield size={40} className="text-secondary" />,
      title: "Owner’s Title Insurance",
      cta: "Request an Owner’s Policy Quote",
      desc: "An Owner's Policy protects you, the property owner, from title defects that could arise after closing. It is issued for the full purchase price and stays in effect as long as you or your heirs own the property.",
      features: [
        "Protects against fraud and forgery", 
        "Covers ownership disputes", 
        "Covers unknown liens and judgments", 
        "Includes professional legal defense for covered claims"
      ]
    },
    {
      icon: <Lock size={40} className="text-secondary" />,
      title: "Lender’s Title Insurance",
      cta: "Order Lender’s Title Coverage",
      desc: "A Lender's Policy ensures the mortgage lender’s investment is protected and is typically required by mortgage lenders to protect their security interest in the property.",
      features: [
        "Protects lender priority", 
        "Ensures valid mortgage lien", 
        "Coverage tied to outstanding loan balance", 
        "Typically required by lenders"
      ]
    },
    {
      icon: <Search size={40} className="text-secondary" />,
      title: "Title Search & Examination",
      cta: "Order a Title Search",
      desc: "We carefully review public records, deeds, liens, and legal documents to identify issues that could affect ownership or delay your closing, typically before you sign a purchase contract.",
      features: [
        "Identify existing liens & judgments", 
        "Confirm correct chain of title", 
        "Flag easements & restrictions", 
        "Prevent surprises before closing"
      ]
    },
    {
      icon: <FileText size={40} className="text-secondary" />,
      title: "Title Settlement Services",
      cta: "Request Settlement Support",
      desc: "We coordinate the final steps of your transaction so closing day goes smoothly, managing documentation and funds with absolute precision.",
      features: [
        "Prepare final title documents", 
        "Coordinate with all deal parties", 
        "Manage county document recording", 
        "Ensure proper fund disbursement"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section style={{ padding: '120px 0 60px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '1.5rem' }}
          >
            Comprehensive title and escrow protection for your real estate transactions in North Carolina and nationwide.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#64748b', fontSize: '1rem', maxWidth: '800px', margin: '0 auto' }}
          >
            Whether you are a home buyer, lender, investor, or developer, we offer tailored title solutions for your next closing. We provide title insurance services in Raleigh, North Carolina and support clients with nationwide real estate transactions.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1" style={{ gap: '6rem' }}>
            {servicesDetailed.map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                style={{
                  display: 'flex',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  gap: '5rem',
                  alignItems: 'center'
                }}
                className="service-row"
              >
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.15rem', color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>{service.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', fontWeight: 500, color: 'var(--primary-light)' }}>
                        <CheckCircle size={20} style={{ color: 'var(--secondary)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '3rem' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                      {service.cta} <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div style={{ 
                    width: '100%', 
                    height: '450px', 
                    background: '#F1F5F9', 
                    borderRadius: '2rem', 
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)'
                  }}>
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                      opacity: 0.05,
                      position: 'absolute',
                      inset: 0
                    }} />
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      height: '100%',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      {React.cloneElement(service.icon, { size: 120, style: { opacity: 0.2 } })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Owner’s vs. Lender’s Title Insurance at a Glance</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Understanding the key differences in coverage and protection.</p>
          </div>
          
          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--primary)', color: 'white' }}>
                  <th style={{ padding: '1.5rem' }}>Aspect</th>
                  <th style={{ padding: '1.5rem' }}>Owner’s Title Insurance</th>
                  <th style={{ padding: '1.5rem' }}>Lender’s Title Insurance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Who is protected", owner: "The homeowner and their heirs", lender: "The mortgage lender" },
                  { aspect: "Coverage amount", owner: "Purchase price of the property", lender: "Outstanding loan balance" },
                  { aspect: "Duration", owner: "As long as you or your heirs own the property", lender: "Until the loan is paid off or refinanced" },
                  { aspect: "Typical requirement", owner: "Optional but strongly recommended", lender: "Typically required by lenders" },
                  { aspect: "Main purpose", owner: "Protects your ownership and equity from covered title problems", lender: "Protects lender’s security interest" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '1.25rem', fontWeight: 700, background: '#F8FAFC', width: '200px' }}>{row.aspect}</td>
                    <td style={{ padding: '1.25rem', fontSize: '0.95rem' }}>{row.owner}</td>
                    <td style={{ padding: '1.25rem', fontSize: '0.95rem' }}>{row.lender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>Still Have Questions?</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
              Not sure which type of title coverage you need or managing multiple transactions? Our specialists can walk you through your options and provide a clear quote.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="tel:+14707065858" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Call Us: (470) 706-5858
              </a>
              <span className="desktop-only" style={{ width: '1px', height: '30px', background: '#E2E8F0' }}></span>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Contact us Online
              </Link>
            </div>
            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
                To learn more about why title insurance matters, visit our <Link to="/why-title-insurance" style={{ color: 'var(--secondary)', fontWeight: 700 }}>Why Title Insurance?</Link> page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 991px) {
          .service-row { flex-direction: column !important; gap: 2rem !important; }
        }
      `}} />
    </div>
  );
};

export default Services;
