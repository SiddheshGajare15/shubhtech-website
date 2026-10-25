import React from 'react';
import { pricingPackages } from '../data/pricingData';
import { Check, MessageSquare, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ background: '#e0f2fe', color: '#0369a1', borderColor: 'rgba(2, 132, 199, 0.3)' }}>
            <Sparkles size={14} />
            <span>Honest & Transparent Pricing</span>
          </div>
          <h2 className="section-title">
            Clear Packages Starting from ₹6,999
          </h2>
          <p className="section-subtitle">
            No hidden costs, no recurring monthly page-builder subscriptions. Complete code ownership with UPI and Net Banking support for businesses across India.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
          marginBottom: '3rem'
        }}>
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="card-base"
              style={{
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: pkg.highlighted ? 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)' : '#ffffff',
                border: pkg.highlighted ? '2px solid #0284c7' : '1px solid #e2e8f0',
                boxShadow: pkg.highlighted ? '0 15px 30px -5px rgba(2, 132, 199, 0.2)' : 'var(--shadow-md)',
                transform: pkg.highlighted ? 'translateY(-6px)' : 'none',
              }}
            >
              {/* Highlight Badge */}
              {pkg.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: pkg.highlighted ? '#0284c7' : '#0b1a2d',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0b1a2d', marginBottom: '0.5rem', marginTop: pkg.badge ? '0.5rem' : '0' }}>
                  {pkg.name}
                </h3>
                
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, minHeight: '42px', marginBottom: '1.5rem' }}>
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0b1a2d', letterSpacing: '-0.03em' }}>
                      {pkg.price}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                      INR / one-time
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 600, marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Zap size={14} />
                    <span>Timeline: {pkg.deliveryTime}</span>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: '#1e293b', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                    Included Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {pkg.features.map((feat, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: '#334155' }}>
                        <span style={{ color: '#0284c7', marginTop: '2px', flexShrink: 0 }}>
                          <Check size={16} strokeWidth={2.8} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                >
                  <MessageSquare size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                >
                  <span>Request Custom Scope</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Indian Business Trust & Payment Options Banner */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            borderRadius: '16px',
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '650px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', flexShrink: 0 }}>
              <Shield size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0b1a2d', marginBottom: '0.2rem' }}>
                Payment Methods & Fair Milestone Split
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                We accept <strong>UPI (GPay / PhonePe / Paytm), IMPS/NEFT Bank Transfer, and Razorpay</strong>. We operate on a milestone basis (50% booking advance, 50% only after live staging approval) with GST invoice provided upon request.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/?text=Hi%20ShubhTech%2C%20I%20have%20questions%20regarding%20website%20packages%20and%20payment%20options."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Ask About Payment Terms</span>
          </a>
        </div>

      </div>
    </section>
  );
}
