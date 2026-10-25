import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Lock, 
  Zap, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: <Terminal size={22} color="#0284c7" />,
      title: 'No Bloated Page Builders',
      desc: 'We avoid clunky WordPress/Elementor setups that inject heavy scripts and slow down on Indian mobile networks. Our sites load in under 1 second.'
    },
    {
      icon: <Cpu size={22} color="#0ea5e9" />,
      title: 'Direct Developer Access',
      desc: 'You communicate directly with the software engineers writing your codebase. No corporate middlemen or non-technical salespeople.'
    },
    {
      icon: <Lock size={22} color="#38bdf8" />,
      title: '100% Code & Asset Ownership',
      desc: 'No platform hostage situations. All React code, graphic assets, domain keys, and deployment accounts belong 100% to you from day one.'
    },
    {
      icon: <Zap size={22} color="#0284c7" />,
      title: 'Commercial Velocity & SEO',
      desc: 'Engineered for Indian search queries and local Google Business maps, turning smartphone visitors into direct WhatsApp and phone inquiries.'
    }
  ];

  const technologies = [
    'React 18 / Vite',
    'Modern ESNext JavaScript',
    'CSS3 & Modern Flex/Grid',
    'WhatsApp Business URL API',
    'UPI & Razorpay Ready',
    'Google Search Console',
    'Semantic HTML5 & Microdata',
    'Responsive Core Web Vitals'
  ];

  return (
    <section id="about" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Code2 size={14} />
            <span>Studio Ethos & Principles</span>
          </div>
          <h2 className="section-title">
            Engineering High-Quality Websites for Indian Businesses
          </h2>
          <p className="section-subtitle">
            ShubhTech was established to offer clean, modern code and transparent pricing (starting at ₹6,999) without fake claims or hidden agency fees.
          </p>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              <MapPin size={16} />
              <span>Based in India • Serving MSMEs & Creators Nationwide</span>
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#0b1a2d', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.3 }}>
              We build websites as strategic business assets, not passive digital brochures.
            </h3>
            
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              In India, over 80% of your prospective customers will view your website on a mobile device. If your site is sluggish, clunky, or lacks direct WhatsApp ordering, you lose customers to competitors who make it frictionless.
            </p>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              At ShubhTech, we combine fast front-end engineering with conversational tools like WhatsApp and UPI. Starting from ₹6,999 for small business starter sites to customized e-commerce storefronts, we deliver honest work on clear milestone payments.
            </p>

            <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0b1a2d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                Primary Engineering Stack:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {technologies.map(t => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Principles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {principles.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  {p.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#0b1a2d', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
