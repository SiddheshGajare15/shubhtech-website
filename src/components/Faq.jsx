import React, { useState } from 'react';
import { faqList } from '../data/processData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers to Common Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our development scope, WhatsApp flows, code ownership, and timelines.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1.5px solid',
                  borderColor: isOpen ? '#0284c7' : '#e2e8f0',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'none',
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? '#0284c7' : '#0b1a2d', lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  <span style={{ color: isOpen ? '#0284c7' : '#94a3b8', flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.35rem 1.5rem',
                      fontSize: '0.925rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1rem',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '1rem' }}>
            Have a question specific to your industry or setup?
          </p>
          <a
            href="https://wa.me/?text=Hello%20ShubhTech%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}
          >
            <MessageCircle size={17} />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
