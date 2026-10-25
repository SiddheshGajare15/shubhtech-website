import React from 'react';
import { X, CheckCircle2, Zap, Smartphone, ExternalLink, MessageCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 17, 30, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid #e2e8f0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #07111e 0%, #172f4f 100%)',
            padding: '2rem',
            color: '#ffffff',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {project.conceptType}
          </div>

          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
            {project.title}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            {project.tagline}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '0.3rem 0.75rem', borderRadius: '6px', color: '#e2e8f0' }}>
              ⚡ Lighthouse: <strong style={{ color: '#38bdf8' }}>{project.metrics.lighthouse}</strong>
            </span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '0.3rem 0.75rem', borderRadius: '6px', color: '#e2e8f0' }}>
              🚀 Load Benchmark: <strong style={{ color: '#38bdf8' }}>{project.metrics.loadTime}</strong>
            </span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '0.3rem 0.75rem', borderRadius: '6px', color: '#e2e8f0' }}>
              📱 Mobile: <strong style={{ color: '#38bdf8' }}>{project.metrics.responsive}</strong>
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#0b1a2d', fontWeight: 700, marginBottom: '0.5rem' }}>
              Concept Scope & Purpose
            </h4>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
              {project.overview}
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#0b1a2d', fontWeight: 700, marginBottom: '0.65rem' }}>
              Technical Implementation Standards
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                  <CheckCircle2 size={17} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: '#334155' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#0b1a2d', fontWeight: 700, marginBottom: '0.5rem' }}>
              Technologies Utilized
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.8rem',
                    background: '#e0f2fe',
                    color: '#0369a1',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
            <button
              onClick={onClose}
              className="btn btn-outline"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              Close
            </button>
            <a
              href={`https://wa.me/?text=Hi%20ShubhTech%2C%20I%20like%20your%20concept%20for%20${encodeURIComponent(project.title)}.%20Can%20we%20discuss%20building%20something%20similar%20for%20my%20business%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              <MessageCircle size={17} />
              <span>Discuss Similar Build</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
