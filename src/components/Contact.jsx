import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Starter / Basic Website (₹6,999)',
    budget: '₹6,999 (Basic Starter)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleLaunchWhatsApp = () => {
    const text = `Namaste ShubhTech! My name is ${formData.name || 'a visitor'}.
I am inquiring about: ${formData.projectType}.
Budget: ${formData.budget}
Phone: ${formData.phone || 'Not specified'}
Message: ${formData.message || 'Looking forward to discussing website requirements.'}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Mail size={14} />
            <span>Initiate Your Website Project</span>
          </div>
          <h2 className="section-title">
            Let's Build Your Website in India
          </h2>
          <p className="section-subtitle">
            Packages starting from ₹6,999 with zero hidden costs. Reach out via our inquiry form or message us directly on WhatsApp.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Left: Contact Info & WhatsApp Connect */}
          <div>
            <h3 style={{ fontSize: '1.65rem', color: '#0b1a2d', fontWeight: 800, marginBottom: '1rem' }}>
              Direct Indian Developer Consultation
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '2rem' }}>
              No call center queues or pushy sales reps. You speak directly with web developers who understand the Indian market, local SEO, UPI checkouts, and mobile-first speeds.
            </p>

            {/* WhatsApp Direct Highlight Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1.5px solid #86efac',
                borderRadius: '16px',
                padding: '1.75rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#14532d', fontWeight: 700 }}>
                    Fastest Response: WhatsApp
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 600 }}>Mon – Sat • 9:30 AM to 7:30 PM IST</span>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Have a quick question about the ₹6,999 basic package or want to share a reference website? Connect with us on WhatsApp right away.
              </p>

              <a
                href="https://wa.me/?text=Namaste%20ShubhTech%2C%20I%20would%20like%20to%20consult%20about%20a%20website%20project%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.75rem 1rem' }}
              >
                <MessageCircle size={18} />
                <span>Open Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Communication Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0f9ff', border: '1px solid #e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Email Inquiries</div>
                  <a href="mailto:contact@shubhtech.in" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0b1a2d' }}>
                    contact@shubhtech.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0f9ff', border: '1px solid #e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Working Hours & Response</div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#0b1a2d' }}>
                    Within 24 business hours (IST)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0f9ff', border: '1px solid #e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>No Spam Promise</div>
                  <div style={{ fontSize: '0.925rem', color: '#475569' }}>
                    Your phone and email are never shared. Direct project communications only.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Proposal Request Form */}
          <div
            style={{
              background: '#f8fafc',
              border: '1.5px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle size={36} />
                </div>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0b1a2d', marginBottom: '0.75rem' }}>
                  Inquiry Received!
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our team has received your project outline for <strong>{formData.projectType}</strong>. We will review your requirements and respond within 24 business hours.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={handleLaunchWhatsApp}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', padding: '0.75rem 1rem' }}
                  >
                    <MessageCircle size={18} />
                    <span>Also Send Copy to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.65rem 1rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0b1a2d', marginBottom: '0.35rem' }}>
                  Get Your Website Proposal
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  Fill in your details below to receive a customized quote in INR.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.4rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none',
                        background: '#ffffff'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="rahul@business.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none',
                        background: '#ffffff'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.4rem' }}>
                      WhatsApp / Mobile (+91) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none',
                        background: '#ffffff'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.4rem' }}>
                      Package of Interest
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none',
                        background: '#ffffff',
                        color: '#1e293b'
                      }}
                    >
                      <option value="Starter / Basic Website (₹6,999)">Starter / Basic Website (₹6,999)</option>
                      <option value="Growth Business Website (₹14,999)">Growth Business Website (₹14,999)</option>
                      <option value="E-Commerce & WhatsApp Store (₹21,999)">E-Commerce & WhatsApp Store (₹21,999)</option>
                      <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                      <option value="Basic SEO & Google Maps Indexing">Basic SEO & Google Maps Indexing</option>
                      <option value="Website Maintenance & Support">Website Maintenance & Support</option>
                      <option value="Custom Enterprise Build">Custom Enterprise Build</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.4rem' }}>
                    Estimated Budget Bracket (INR)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      background: '#ffffff',
                      color: '#1e293b'
                    }}
                  >
                    <option value="₹6,999 (Basic Starter)">₹6,999 (Basic Starter Package)</option>
                    <option value="₹7,000 - ₹15,000">₹7,000 - ₹15,000 (Multi-Page Business Site)</option>
                    <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000 (E-Commerce + WhatsApp)</option>
                    <option value="₹25,000+">₹25,000+ (Custom Portal / Advanced System)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.4rem' }}>
                    Brief Requirements / City / Goals
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your business, city in India, desired features, reference websites, or launch deadline..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      background: '#ffffff',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.95rem' }}
                >
                  {loading ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>Submit Proposal Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
