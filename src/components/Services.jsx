import React, { useState } from 'react';
import { services } from '../data/servicesData';
import { 
  Briefcase, 
  ShoppingBag, 
  Flame, 
  MessageCircle, 
  Search, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const getIcon = (name) => {
    switch (name) {
      case 'Briefcase': return <Briefcase size={24} color="#0284c7" />;
      case 'ShoppingBag': return <ShoppingBag size={24} color="#0ea5e9" />;
      case 'Flame': return <Flame size={24} color="#f97316" />;
      case 'MessageCircle': return <MessageCircle size={24} color="#22c55e" />;
      case 'Search': return <Search size={24} color="#8b5cf6" />;
      case 'ShieldCheck': return <ShieldCheck size={24} color="#0284c7" />;
      default: return <Briefcase size={24} color="#0284c7" />;
    }
  };

  const filteredServices = selectedFilter === 'all'
    ? services
    : services.filter(s => s.category.toLowerCase().includes(selectedFilter.toLowerCase()) || s.id.includes(selectedFilter));

  return (
    <section id="services" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="section-title">
            Tailored Web Solutions Built for Real Business Outcomes
          </h2>
          <p className="section-subtitle">
            From credible corporate sites to direct conversational WhatsApp ordering flows, every deliverable is coded with clean architecture, speed, and responsiveness.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
          {[
            { id: 'all', label: 'All Services' },
            { id: 'corporate', label: 'Business & Corporate' },
            { id: 'sales', label: 'E-Commerce' },
            { id: 'performance', label: 'Landing Pages' },
            { id: 'conversational', label: 'WhatsApp Commerce' },
            { id: 'visibility', label: 'Basic SEO' },
            { id: 'reliability', label: 'Maintenance' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: selectedFilter === f.id ? '#0284c7' : '#e2e8f0',
                background: selectedFilter === f.id ? '#f0f9ff' : '#ffffff',
                color: selectedFilter === f.id ? '#0284c7' : '#64748b',
                transition: 'all 0.2s ease',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-base"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              <div>
                {/* Header with icon and badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '12px',
                      background: '#f0f9ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #e0f2fe'
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      background: '#f8fafc',
                      color: '#0f172a',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#0b1a2d', fontWeight: 700 }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {service.shortDesc}
                </p>

                {/* Deliverables List */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#0284c7', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    What's Included:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {service.deliverables.map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#334155' }}>
                        <span style={{ color: '#0284c7', marginTop: '2px', flexShrink: 0 }}>
                          <Check size={16} strokeWidth={2.6} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Box */}
                <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.8rem', color: '#64748b', border: '1px solid #edf2f7', marginBottom: '1.75rem' }}>
                  <strong style={{ color: '#1e293b' }}>Ideal For: </strong> {service.idealFor}
                </div>
              </div>

              {/* Bottom Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
                <a
                  href={`#contact`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#0284c7',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0369a1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0284c7')}
                >
                  <span>Request Proposal</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href={`https://wa.me/919699603323?text=Hi%20ShubhTech%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#15803d',
                    background: '#f0fdf4',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid #bbf7d0',
                  }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
