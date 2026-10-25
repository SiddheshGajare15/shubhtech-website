import React from 'react';
import { processSteps } from '../data/processData';
import { GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section
      id="process"
      className="section-py"
      style={{
        background: 'linear-gradient(180deg, #07111e 0%, #0b1a2d 100%)',
        color: '#ffffff',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag badge-dark">
            <GitBranch size={14} />
            <span>Workflow & Reliability</span>
          </div>
          <h2 className="section-title light">
            Our Transparent 5-Stage Engineering Process
          </h2>
          <p className="section-subtitle light">
            Clear milestones, proactive communication, and zero ambiguity from initial concept to public go-live.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            position: 'relative',
          }}
        >
          {processSteps.map((stepItem, index) => (
            <div
              key={stepItem.step}
              style={{
                background: 'rgba(16, 36, 61, 0.65)',
                border: '1px solid rgba(56, 189, 248, 0.18)',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      color: '#38bdf8',
                      lineHeight: 1
                    }}
                  >
                    {stepItem.step}
                  </span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7' }} />
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.35 }}>
                  {stepItem.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {stepItem.description}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '1rem',
                  fontSize: '0.8rem',
                  color: '#7dd3fc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <CheckCircle2 size={15} color="#38bdf8" />
                <span><strong>Milestone:</strong> {stepItem.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            background: 'rgba(56, 189, 248, 0.06)',
            border: '1px solid rgba(56, 189, 248, 0.18)',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
            Have a custom timeline or strict launch deadline?
          </span>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}
          >
            <span>Discuss Timeline</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
