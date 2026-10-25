import React, { useState } from 'react';
import { demoProjects } from '../data/projectsData';
import { 
  Sparkles, 
  ExternalLink, 
  Info, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Smartphone,
  Eye
} from 'lucide-react';

export default function ConceptWork({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Business Website', 'E-Commerce & WhatsApp Ordering', 'High-Converting Landing Page', 'Local Business & SEO'];

  const filteredProjects = activeCategory === 'All'
    ? demoProjects
    : demoProjects.filter(p => p.category === activeCategory);

  return (
    <section id="concepts" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ background: '#e0f2fe', color: '#0369a1', borderColor: 'rgba(2, 132, 199, 0.3)' }}>
            <Sparkles size={14} />
            <span>Interactive Concept Prototypes</span>
          </div>
          <h2 className="section-title">
            Our Work: Engineering Demonstrations & UX Prototypes
          </h2>
          <p className="section-subtitle">
            We don't invent fake client logos. Instead, we demonstrate our architectural capabilities through real, fully coded interactive concepts.
          </p>
        </div>

        {/* Prominent Transparency Notice Box */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto 2.5rem auto',
            background: 'rgba(2, 132, 199, 0.05)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ color: '#0284c7', flexShrink: 0 }}>
            <Info size={24} />
          </div>
          <div style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.5 }}>
            <strong style={{ color: '#0b1a2d' }}>Transparency & Integrity Statement: </strong>
            All demo projects showcased below are <strong>concepts & technical prototypes</strong> developed in-house by ShubhTech to demonstrate clean layout architecture, responsiveness, and performance benchmarks.
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                fontSize: '0.825rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeCategory === cat ? '#0284c7' : '#cbd5e1',
                background: activeCategory === cat ? '#0284c7' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.25rem',
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-base"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #e2e8f0',
              }}
            >
              {/* Concept Banner Header */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0b1a2d 0%, #172f4f 100%)',
                  padding: '1.75rem 1.75rem 1.5rem 1.75rem',
                  position: 'relative',
                  color: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  {/* PROMINENT CONCEPT BADGE */}
                  <span
                    style={{
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      color: '#38bdf8',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }}></span>
                    {project.conceptType}
                  </span>

                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                  {project.tagline}
                </p>

                {/* Performance Pill Indicators */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#7dd3fc' }}>
                    <Zap size={14} />
                    <span>Lighthouse: <strong>{project.metrics.lighthouse}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#7dd3fc' }}>
                    <Smartphone size={14} />
                    <span>Speed: <strong>{project.metrics.loadTime}</strong></span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.overview}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0b1a2d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                      Architecture & UX Features:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {project.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: '#334155' }}>
                          <CheckCircle2 size={15} color="#0ea5e9" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.72rem',
                          background: '#f1f5f9',
                          color: '#475569',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => onOpenProjectModal(project)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <Eye size={16} />
                  <span>Inspect Concept Breakdown</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
