import React from 'react';

export default function Logo({ size = 'default', showTagline = true }) {
  const isSmall = size === 'small';
  const iconSize = isSmall ? '2.1rem' : '2.6rem';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      {/* Vector Logo Icon */}
      <div
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: '11px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 0 18px rgba(14, 165, 233, 0.35)',
          background: 'linear-gradient(135deg, #0b1e36 0%, #07111e 100%)',
          border: '1.2px solid rgba(56, 189, 248, 0.4)'
        }}
      >
        <svg viewBox="0 0 48 48" style={{ width: '100%', height: '100%' }} fill="none">
          <defs>
            <linearGradient id="logoInnerGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <path d="M33 16L24 11L15 16V22L24 27L33 22V16Z" stroke="url(#logoInnerGrad)" strokeWidth="2.8" strokeLinejoin="round" fill="none" />
          <path d="M15 26L24 31L33 26V32L24 37L15 32V26Z" stroke="url(#logoInnerGrad)" strokeWidth="2.8" strokeLinejoin="round" fill="none" />
          <circle cx="24" cy="24" r="3" fill="#38bdf8" />
          <circle cx="24" cy="24" r="1.2" fill="#ffffff" />
        </svg>
      </div>

      {/* Typography */}
      <div>
        <span
          style={{
            fontSize: isSmall ? '1.15rem' : '1.35rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1.1,
            fontFamily: 'var(--font-heading)'
          }}
        >
          Shubh<span style={{ color: '#38bdf8' }}>Tech</span>
        </span>
        {showTagline && (
          <span
            style={{
              display: 'block',
              fontSize: '0.67rem',
              color: '#94a3b8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginTop: '1px'
            }}
          >
            Web Engineering • India
          </span>
        )}
      </div>
    </div>
  );
}
