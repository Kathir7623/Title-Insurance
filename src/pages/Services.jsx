import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Search, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ownersImg from '../assets/owners.png';
import lendersImg from '../assets/lenders.png';
import searchImg from '../assets/search.png';
import settlementImg from '../assets/settlement.png';

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
      image: ownersImg,
      title: "Owner’s Title Insurance",
      cta: "Protect your ownership",
      desc: "An Owner's Policy protects you, the property owner, from title defects that could arise after closing. For a one-time premium at closing, you receive long-term protection against covered title issues for as long as you own the property.",
      features: [
        "Protects against fraud and forgery", 
        "Covers ownership disputes", 
        "Covers unknown liens and judgments", 
        "Includes professional legal defense for covered claims"
      ]
    },
    {
      icon: <Lock size={40} className="text-secondary" />,
      image: lendersImg,
      title: "Lender’s Title Insurance",
      cta: "Schedule a lender closing call",
      desc: "A Lender's Policy ensures the mortgage lender’s investment is protected and is typically required by most mortgage lenders to protect their security interest in the property.",
      features: [
        "Protects lender priority and ensures a valid mortgage lien", 
        "Coverage tied to outstanding loan balance", 
        "Typically required by bank lenders",
        "Protects lender from hidden ownership claims"
      ]
    },
    {
      icon: <Search size={40} className="text-secondary" />,
      image: searchImg,
      title: "Title Search & Examination",
      cta: "Order a detailed Title Search",
      desc: "We carefully review public records, deeds, liens, and legal documents to identify issues that could affect ownership or delay your closing, typically before you sign a purchase contract.",
      features: [
        "Identify existing liens and judgments", 
        "Confirm correct chain of title", 
        "Flag easements and restrictions", 
        "Prevent surprises before closing"
      ]
    },
    {
      icon: <FileText size={40} className="text-secondary" />,
      image: settlementImg,
      title: "Title Settlement Services",
      cta: "Partner with KM Title on your next listing",
      desc: "We coordinate the final steps of your transaction so closing day goes smoothly, managing documentation and funds with precision.",
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
      <SEO 
        title="Our Title Insurance Services"
        description="Comprehensive title insurance solutions for residential and commercial transactions. Owner's policies, lender's policies, and settlement services."
        keywords="residential title insurance, commercial title insurance, settlement services, title search North Carolina, lender policies"
      />
      {/* Page Header */}
      <section style={{ padding: '200px 0 100px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
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
            Whether you are a home buyer, lender, investor, or developer, we offer tailored title solutions for your next closing. We provide title insurance services throughout North Carolina and support clients with real estate transactions nationwide. Our experienced team helps keep your closings smooth, compliant, and on schedule.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 services-grid" style={{ gap: '8rem' }}>
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
                  <div className="service-image-container" style={{ 
                    width: '100%', 
                    height: '450px', 
                    borderRadius: '2rem', 
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)'
                  }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
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
                  { aspect: "Main purpose", owner: "Protects your ownership and equity from covered title problems that existed before you bought the property", lender: "Protects lender’s security interest" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td data-label="Aspect" style={{ padding: '1.25rem', fontWeight: 700, background: '#F8FAFC', width: '200px' }}>{row.aspect}</td>
                    <td data-label="Owner's Policy" style={{ padding: '1.25rem', fontSize: '0.95rem' }}>{row.owner}</td>
                    <td data-label="Lender's Policy" style={{ padding: '1.25rem', fontSize: '0.95rem' }}>{row.lender}</td>
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
              Not sure which type of title coverage you need or managing multiple transactions? Our specialists can walk you through your options and help you secure your property.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="tel:+14707065858" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Call Us: (470) 706-5858
              </a>
              <span className="desktop-only" style={{ opacity: 0.5, fontSize: '1.5rem' }}>·</span>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Contact us Online
              </Link>
            </div>
            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
                To learn more about why title insurance matters and how it protects your property, visit our <Link to="/why-title-insurance" style={{ color: 'var(--secondary)', fontWeight: 700 }}>Why Title Insurance?</Link> page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 991px) {
          .service-row { flex-direction: column !important; gap: 3rem !important; }
          .service-row > div { width: 100% !important; }
          .service-image-container { height: 400px !important; }
          .service-row img { height: 100% !important; }
        }
        @media (max-width: 768px) {
          .services-page section:first-of-type { padding: 180px 0 60px !important; }
          .services-page h1 { font-size: 2.5rem !important; }
          .services-page h2 { font-size: 2rem !important; }
          .services-page .section-padding { padding: 4rem 0 !important; }
          .services-page ul { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .services-grid { gap: 4rem !important; }
          .service-row { gap: 3rem !important; }
          .service-image-container { height: 300px !important; }
          
          /* Non-scrollable Stacked Table */
          .services-page table, 
          .services-page thead, 
          .services-page tbody, 
          .services-page th, 
          .services-page td, 
          .services-page tr { 
            display: block !important; 
            width: 100% !important;
          }
          .services-page thead tr { 
            position: absolute !important;
            top: -9999px !important;
            left: -9999px !important;
          }
          .services-page tr { 
            border: 1px solid var(--border) !important; 
            margin-bottom: 1.5rem !important; 
            border-radius: 1rem !important;
            overflow: hidden !important;
          }
          .services-page td { 
            border: none !important;
            position: relative !important;
            padding-left: 1.5rem !important;
            padding-top: 3rem !important;
            white-space: normal !important;
          }
          .services-page td:before { 
            position: absolute !important;
            top: 1rem !important;
            left: 1.5rem !important;
            width: 100% !important; 
            content: attr(data-label) !important;
            font-weight: 800 !important;
            color: var(--secondary) !important;
            text-transform: uppercase !important;
            font-size: 0.75rem !important;
            letter-spacing: 0.05em !important;
          }
          .services-page td[data-label="Aspect"] {
            background: var(--primary) !important;
            color: white !important;
            padding-top: 1.25rem !important;
            font-size: 1.1rem !important;
          }
          .services-page td[data-label="Aspect"]:before {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default Services;
