import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Zap, 
  Shield, 
  Send 
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('business');
  const [deviceView, setDeviceView] = useState('desktop');
  const [cartCount, setCartCount] = useState(1);
  const [orderedSuccess, setOrderedSuccess] = useState(false);

  const previewData = {
    business: {
      tag: 'B2B & MSME Concept',
      headline: 'Vanguard Architectural Studio',
      sub: 'Bespoke residential blueprints & structural advisory.',
      cta: 'Book Discovery Call',
      color: '#0284c7',
      statLabel: 'Lead Conversion',
      statValue: '+42% Inbound'
    },
    ecommerce: {
      tag: 'E-Commerce + WhatsApp Concept',
      headline: 'Chai & Co. Artisanal Blends',
      sub: 'Single-estate Assam Golden Tips & Spiced CTC (250g).',
      cta: 'Order via WhatsApp (₹499)',
      color: '#0ea5e9',
      statLabel: 'Checkout Drop-off',
      statValue: 'Near 0% with WhatsApp + UPI'
    },
    landing: {
      tag: 'High-Converting Landing Page Concept',
      headline: 'NextGen Financial Analytics',
      sub: 'Automated GST, TDS & cash flow tracking for Indian businesses.',
      cta: 'Book Free Demo',
      color: '#38bdf8',
      statLabel: 'Ad Conversion',
      statValue: '12.4% Avg'
    }
  };

  const currentPreview = previewData[activeTab];

  const handleSimulateWhatsApp = () => {
    setOrderedSuccess(true);
    setTimeout(() => setOrderedSuccess(false), 3000);
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14, 165, 233, 0.18), transparent 70%), linear-gradient(180deg, #07111e 0%, #0b1c31 100%)',
        color: '#ffffff',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Headline and Pitch */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                color: '#38bdf8',
                marginBottom: '1.5rem',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}
            >
              <Sparkles size={16} />
              <span>India-Focused Web Engineering • Packages from ₹6,999</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.4rem',
                color: '#ffffff'
              }}
            >
              High-Performance Websites <br />
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #7dd3fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Built for Indian Businesses.
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: '#94a3b8',
                marginBottom: '2.25rem',
                maxWidth: '540px'
              }}
            >
              ShubhTech builds custom business websites, high-converting landing pages, and direct WhatsApp + UPI ordering storefronts for Indian MSMEs, D2C brands, and service professionals. Complete code ownership, zero monthly fees.
            </p>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#packages" className="btn btn-primary" style={{ padding: '0.85rem 1.65rem', fontSize: '1rem' }}>
                <span>View Packages (From ₹6,999)</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/?text=Namaste%20ShubhTech%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20my%20business%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.85rem 1.45rem', fontSize: '1rem' }}
              >
                <MessageCircle size={19} />
                <span>Quick WhatsApp Chat</span>
              </a>

              <a href="#estimator" className="btn btn-outline-light" style={{ padding: '0.85rem 1.45rem', fontSize: '0.95rem' }}>
                <span>Calculate Cost in ₹</span>
              </a>
            </div>

            {/* Feature points */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="#38bdf8" />
                <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Basic Package at ₹6,999</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Zap size={18} color="#38bdf8" />
                <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>UPI & WhatsApp Order Flows</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MessageCircle size={18} color="#38bdf8" />
                <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>100% Mobile First for India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Shield size={18} color="#38bdf8" />
                <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Full Code & Domain Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Concept Sandbox */}
          <div>
            <div
              style={{
                background: 'rgba(16, 36, 61, 0.75)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(14, 165, 233, 0.15)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Sandbox Header / Switchers */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(7, 17, 30, 0.6)', padding: '0.25rem', borderRadius: '10px' }}>
                  <button
                    onClick={() => setActiveTab('business')}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: activeTab === 'business' ? '#0284c7' : 'transparent',
                      color: activeTab === 'business' ? '#ffffff' : '#94a3b8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Business Site
                  </button>
                  <button
                    onClick={() => setActiveTab('ecommerce')}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: activeTab === 'ecommerce' ? '#0284c7' : 'transparent',
                      color: activeTab === 'ecommerce' ? '#ffffff' : '#94a3b8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    WhatsApp + UPI Store
                  </button>
                  <button
                    onClick={() => setActiveTab('landing')}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: activeTab === 'landing' ? '#0284c7' : 'transparent',
                      color: activeTab === 'landing' ? '#ffffff' : '#94a3b8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Ad Landing Page
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(7, 17, 30, 0.6)', padding: '0.25rem', borderRadius: '8px' }}>
                  <button
                    onClick={() => setDeviceView('desktop')}
                    title="Desktop Preview"
                    style={{
                      padding: '0.35rem',
                      borderRadius: '6px',
                      color: deviceView === 'desktop' ? '#38bdf8' : '#64748b',
                      background: deviceView === 'desktop' ? 'rgba(56, 189, 248, 0.15)' : 'transparent'
                    }}
                  >
                    <Monitor size={17} />
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    title="Mobile Preview"
                    style={{
                      padding: '0.35rem',
                      borderRadius: '6px',
                      color: deviceView === 'mobile' ? '#38bdf8' : '#64748b',
                      background: deviceView === 'mobile' ? 'rgba(56, 189, 248, 0.15)' : 'transparent'
                    }}
                  >
                    <Smartphone size={17} />
                  </button>
                </div>
              </div>

              {/* Simulated Screen Frame */}
              <div
                style={{
                  background: '#07111e',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  maxWidth: deviceView === 'mobile' ? '300px' : '100%',
                  margin: '0 auto',
                  transition: 'all 0.35s ease'
                }}
              >
                {/* Browser bar */}
                <div style={{ background: '#0c1d33', padding: '0.65rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f43f5e' }}></span>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f59e0b' }}></span>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981' }}></span>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '4px', padding: '0.15rem 0.6rem', fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    https://shubhtech.in/concepts/{activeTab}
                  </div>
                </div>

                {/* Inner Simulated Viewport */}
                <div style={{ padding: '1.5rem', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, color: currentPreview.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                      {currentPreview.tag}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 700 }}>
                      {currentPreview.headline}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {currentPreview.sub}
                    </p>

                    {/* Interactive Widget per Tab */}
                    {activeTab === 'ecommerce' && (
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.825rem', color: '#cbd5e1' }}>
                          <span>Pack Quantity:</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <button
                              onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                              style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                            >-</button>
                            <span style={{ fontWeight: 700, color: '#38bdf8' }}>{cartCount}</span>
                            <button
                              onClick={() => setCartCount(cartCount + 1)}
                              style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                            >+</button>
                          </div>
                        </div>
                        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
                          Subtotal: ₹{(cartCount * 499).toLocaleString('en-IN')} INR • UPI / COD Ready
                        </div>
                      </div>
                    )}

                    {activeTab === 'business' && (
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '0.72rem', background: 'rgba(14, 165, 233, 0.15)', color: '#7dd3fc', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>⚡ 0.6s Speed</span>
                        <span style={{ fontSize: '0.72rem', background: 'rgba(14, 165, 233, 0.15)', color: '#7dd3fc', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>🇮🇳 India Local SEO</span>
                        <span style={{ fontSize: '0.72rem', background: 'rgba(14, 165, 233, 0.15)', color: '#7dd3fc', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>💼 Inbound Leads</span>
                      </div>
                    )}

                    {activeTab === 'landing' && (
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Target: Google & Meta Ads ROAS in India</div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
                          <div style={{ width: '88%', height: '100%', background: '#38bdf8' }}></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Simulated Action Button */}
                  <div>
                    {activeTab === 'ecommerce' ? (
                      <div>
                        <button
                          onClick={handleSimulateWhatsApp}
                          className="btn btn-whatsapp"
                          style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                        >
                          <Send size={15} />
                          <span>Simulate WhatsApp Order Dispatch</span>
                        </button>
                        {orderedSuccess && (
                          <div style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: '#4ade80', textAlign: 'center', fontWeight: 600 }}>
                            ✓ Pre-formatted WhatsApp order payload with UPI details generated!
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href="#packages"
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                      >
                        <span>{currentPreview.cta}</span>
                        <ArrowRight size={15} />
                      </a>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.75rem', color: '#94a3b8' }}>
                      <span>Architecture Standard:</span>
                      <span style={{ color: '#38bdf8', fontWeight: 600 }}>{currentPreview.statLabel}: {currentPreview.statValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div style={{ marginTop: '0.85rem', fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                * Interactive concept preview — built directly in React to demonstrate code quality.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
