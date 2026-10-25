import React from 'react';
import { Code2, MessageSquare, ArrowUp, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#07111e',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={20} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Shubh<span style={{ color: '#38bdf8' }}>Tech</span>
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Indian web development studio crafting high-speed business websites, e-commerce stores, and WhatsApp ordering systems with packages starting from ₹6,999.
            </p>

            <a
              href="https://wa.me/919699603323?text=Namaste%20ShubhTech%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.55rem 1rem', fontSize: '0.825rem' }}
            >
              <MessageSquare size={15} />
              <span>WhatsApp: +91 96996 03323</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94a3b8' }}>
              <li><a href="#packages" style={{ color: '#38bdf8', fontWeight: 600 }}>Packages (From ₹6,999)</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Services & Solutions</a></li>
              <li><a href="#concepts" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Concept Prototypes</a></li>
              <li><a href="#estimator" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>INR Cost Estimator</a></li>
              <li><a href="#process" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>5-Stage Process</a></li>
              <li><a href="#about" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Studio Philosophy</a></li>
              <li><a href="#faqs" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Frequently Asked Questions</a></li>
              <li><a href="#contact" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Get a Proposal</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>
              India Offerings
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94a3b8' }}>
              <li><a href="#packages" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Starter Website (₹6,999)</a></li>
              <li><a href="#packages" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Growth MSME Website (₹14,999)</a></li>
              <li><a href="#packages" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>E-Commerce + WhatsApp (₹21,999)</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>WhatsApp Order Automation</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Google Maps & Local SEO India</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s ease' }} onMouseEnter={e => e.target.style.color='#38bdf8'} onMouseLeave={e => e.target.style.color='#94a3b8'}>Annual Maintenance & Backups</a></li>
            </ul>
          </div>

          {/* Ethics & Payment Statement */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>
              Payment & Security
            </h4>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.55 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, marginBottom: '0.4rem' }}>
                <Shield size={15} />
                <span>UPI & Milestone Security</span>
              </div>
              50% advance booking, 50% only after live staging review. Full code ownership and master access handed over.
            </div>
          </div>

        </div>

        {/* Legal Transparency Disclaimer */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            marginBottom: '1.75rem',
            fontSize: '0.78rem',
            color: '#64748b',
            lineHeight: 1.6,
          }}
        >
          <strong>Portfolio Integrity Notice: </strong>
          All demo projects showcased in the work section are conceptual prototypes built by ShubhTech to demonstrate real performance, mobile responsiveness, and design craft. We do not invent fake client testimonials or unverifiable claims.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: '#94a3b8',
          }}
        >
          <div>
            © {new Date().getFullYear()} ShubhTech Web Engineering Studio. Built in India with clean code.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#38bdf8',
              fontSize: '0.825rem',
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              cursor: 'pointer'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
