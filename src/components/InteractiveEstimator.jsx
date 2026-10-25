import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function InteractiveEstimator() {
  const [projectType, setProjectType] = useState('basic');
  const [addons, setAddons] = useState({
    whatsapp: true,
    seo: true,
    maintenance: false,
    copywriting: false
  });

  const baseConfigs = {
    basic: {
      title: 'Starter / Basic Website',
      baseDays: '3 - 5 Days',
      basePrice: 6999,
      desc: 'Mobile-responsive business site, WhatsApp lead link, contact form & Google Map.'
    },
    business: {
      title: 'Multi-Page Business Website',
      baseDays: '7 - 12 Days',
      basePrice: 14999,
      desc: '5-7 custom pages, lead capture funnels, SEO setup & speed tuning.'
    },
    ecommerce: {
      title: 'E-Commerce & WhatsApp Store',
      baseDays: '12 - 18 Days',
      basePrice: 21999,
      desc: 'Product catalog, 1-click WhatsApp order dispatch, UPI/Razorpay payment gateway.'
    }
  };

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentBase = baseConfigs[projectType];

  let extra = 0;
  if (addons.whatsapp && projectType !== 'ecommerce') { extra += 1499; }
  if (addons.seo) { extra += 1999; }
  if (addons.maintenance) { extra += 1499; } // monthly upkeep
  if (addons.copywriting) { extra += 1999; }

  const total = currentBase.basePrice + extra;

  const buildWhatsAppMessage = () => {
    const selectedAddonNames = [];
    if (addons.whatsapp) selectedAddonNames.push('WhatsApp Ordering Flow');
    if (addons.seo) selectedAddonNames.push('Basic SEO & Search Indexing');
    if (addons.maintenance) selectedAddonNames.push('Monthly Maintenance Care');
    if (addons.copywriting) selectedAddonNames.push('Content & Copy Assistance');

    const message = `Namaste ShubhTech! I used your Website Scope Estimator:
- Selected Package: ${currentBase.title}
- Add-ons: ${selectedAddonNames.length ? selectedAddonNames.join(', ') : 'None'}
- Estimated Total: ₹${total.toLocaleString('en-IN')} INR
Could you please share the proposal and discuss requirements?`;

    return `https://wa.me/919699603323?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Calculator size={14} />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="section-title">
            Calculate Your Website Scope & Budget (INR)
          </h2>
          <p className="section-subtitle">
            Transparent pricing based in India with packages starting from ₹6,999. Select your requirements below to see an instant estimate.
          </p>
        </div>

        {/* Calculator Container */}
        <div
          style={{
            maxWidth: '940px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
            border: '1.5px solid #e2e8f0',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-xl)',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            
            {/* Left Options Form */}
            <div style={{ padding: '2.5rem' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0b1a2d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                  1. Choose Base Package:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    { id: 'basic', label: 'Starter / Basic Website (₹6,999)', sub: 'Fast launch for local business & service clinics' },
                    { id: 'business', label: 'Multi-Page Business Website (₹14,999)', sub: 'Complete 5-7 pages for growing MSMEs & firms' },
                    { id: 'ecommerce', label: 'E-Commerce & WhatsApp Store (₹21,999)', sub: 'Product catalog, WhatsApp cart & UPI checkout' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      style={{
                        padding: '0.9rem 1.15rem',
                        borderRadius: '12px',
                        border: '1.5px solid',
                        borderColor: projectType === item.id ? '#0284c7' : '#e2e8f0',
                        background: projectType === item.id ? '#f0f9ff' : '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0b1a2d' }}>{item.label}</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.sub}</div>
                      </div>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: projectType === item.id ? '#0284c7' : '#cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: projectType === item.id ? '#0284c7' : 'transparent',
                          flexShrink: 0
                        }}
                      >
                        {projectType === item.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addons Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0b1a2d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                  2. Select Optional Add-ons:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
                  {[
                    { key: 'whatsapp', label: 'WhatsApp Cart / Order Flow (+₹1,499)' },
                    { key: 'seo', label: 'Basic SEO & Search Console (+₹1,999)' },
                    { key: 'maintenance', label: 'Monthly Technical Care (+₹1,499)' },
                    { key: 'copywriting', label: 'Professional Content Writing (+₹1,999)' }
                  ].map((ad) => (
                    <div
                      key={ad.key}
                      onClick={() => toggleAddon(ad.key)}
                      style={{
                        padding: '0.75rem 0.9rem',
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: addons[ad.key] ? '#0284c7' : '#e2e8f0',
                        background: addons[ad.key] ? '#f0f9ff' : '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: addons[ad.key] ? '#0b1a2d' : '#475569',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: '1.5px solid',
                          borderColor: addons[ad.key] ? '#0284c7' : '#94a3b8',
                          background: addons[ad.key] ? '#0284c7' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          flexShrink: 0
                        }}
                      >
                        {addons[ad.key] && <Check size={13} strokeWidth={3} />}
                      </div>
                      <span>{ad.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #07111e 0%, #0f2744 100%)',
                color: '#ffffff',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  <Sparkles size={16} />
                  <span>Transparent Estimate (INR)</span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Selected Configuration:</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                    {currentBase.title}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                    {currentBase.desc}
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                    Estimated Project Cost:
                  </div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '-0.02em' }}>
                    ₹{total.toLocaleString('en-IN')} <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>INR</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                    * Transparent one-time fee. 50% booking & 50% upon live staging approval.
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: '#94a3b8' }}>Target Delivery:</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>{currentBase.baseDays}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: '#94a3b8' }}>Payment Gateways:</span>
                  <span style={{ color: '#7dd3fc', fontWeight: 600 }}>UPI, NetBanking, Razorpay</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.65rem 0' }}>
                  <span style={{ color: '#94a3b8' }}>Code Ownership:</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>100% Client Owned</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={buildWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.85rem 1rem' }}
                >
                  <MessageSquare size={18} />
                  <span>Send This Estimate via WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-light"
                  style={{ width: '100%', padding: '0.85rem 1rem' }}
                >
                  <span>Request Written Formal Proposal</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
