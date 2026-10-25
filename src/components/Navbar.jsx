import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Packages (₹6,999)', href: '#packages' },
    { name: 'Services', href: '#services' },
    { name: 'Work / Concepts', href: '#concepts' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 17, 30, 0.94)'
          : 'rgba(7, 17, 30, 0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid rgba(56, 189, 248, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }} title="ShubhTech - Web Development Agency India">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.88rem',
                fontWeight: link.name.includes('6,999') ? 700 : 500,
                color: link.name.includes('6,999') ? '#38bdf8' : '#cbd5e1',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.name.includes('6,999') ? '#38bdf8' : '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-actions">
          <a
            href="https://wa.me/919699603323?text=Namaste%20ShubhTech%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem', borderRadius: '8px' }}
            title="Chat directly on WhatsApp"
          >
            <MessageSquare size={16} />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.875rem', borderRadius: '8px' }}
          >
            <span>Get a Quote</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '8px',
            color: '#f8fafc',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#07111e',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.25rem 1.5rem 1.75rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: link.name.includes('6,999') ? '#38bdf8' : '#e2e8f0',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="https://wa.me/919699603323?text=Namaste%20ShubhTech%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare size={17} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get a Quote</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      )}

      {/* Inline styles for media queries */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
