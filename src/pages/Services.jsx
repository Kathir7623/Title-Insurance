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
      desc: "Protects homeowners from title defects and legal claims. This policy is issued in the amount of the real estate purchase price and remains in effect as long as you or your heirs own the property.",
      features: ["Protects against fraud/forgery", "Ownership dispute coverage", "Covers unknown liens", "Professional legal defense"]
    },
    {
      icon: <Lock size={40} className="text-secondary" />,
      title: "Lender’s Title Insurance",
      desc: "Ensures the lender’s investment is protected during mortgage transactions. Most lenders require this insurance to protect their security interest in the property.",
      features: ["Protects lender priority", "Ensures valid mortgage lien", "Coverage decreases as loan is paid", "Required by most lenders"]
    },
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
            style={{ color: '#94a3b8', fontSize: '1.25rem' }}
          >
            Comprehensive Protection for Your Real Estate Investments
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1" style={{ gap: '4rem' }}>
            {servicesDetailed.map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                style={{
                  display: 'flex',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  gap: '4rem',
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden'
                }}
                className="service-row"
              >
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
                  <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>{service.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: 500 }}>
                        <CheckCircle size={18} style={{ color: 'var(--secondary)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '2.5rem' }}>
                    <Link to="/contact" className="btn btn-primary">
                      Get Started Today <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div style={{ flex: 1, background: '#F8FAFC', padding: '4rem', borderRadius: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: '300px', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center' }}>
                    <div>
                      {React.cloneElement(service.icon, { size: 80, style: { opacity: 0.1, marginBottom: '1rem' } })}
                      <p style={{ fontWeight: 700, fontSize: '1.5rem', opacity: 0.5 }}>{service.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section inherited from Home for consistency */}
      <section className="section-padding" style={{ background: '#F8FAFC', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Still Have Questions?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>Our specialists are ready to help you navigate through the complexities of title insurance.</p>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Call Us: (470) 706-5858</Link>
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
