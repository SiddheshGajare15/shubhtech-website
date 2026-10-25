export const demoProjects = [
  {
    id: 'aura-interior',
    title: 'Aura Living Interiors',
    conceptType: 'Concept Prototype',
    category: 'Business Website',
    tagline: 'High-end interior architecture & bespoke residential design studio concept.',
    overview: 'This project is a conceptual demonstration built by ShubhTech to showcase modern corporate aesthetics for Indian architecture and design firms, featuring smooth image showcases, filterable portfolios, and interactive consultation booking.',
    techStack: ['React', 'CSS Custom Properties', 'Vite', 'Lucide Icons'],
    highlights: [
      'Editorial grid typography with refined navy and off-white color palette',
      'Filterable project gallery with modal zoom previews',
      'Interactive consultation booking questionnaire with WhatsApp hook',
      'Mobile-optimized touch carousels and smooth scroll transitions'
    ],
    demoLink: '#demo-aura',
    accentColor: '#0ea5e9',
    metrics: {
      lighthouse: '99/100',
      loadTime: '0.6s',
      responsive: '100% Mobile Ready'
    }
  },
  {
    id: 'chai-spice',
    title: 'Chai & Spice Co.',
    conceptType: 'Concept Prototype',
    category: 'E-Commerce & WhatsApp Ordering',
    tagline: 'Direct-to-consumer specialty tea & spice blends with instant WhatsApp order dispatch.',
    overview: 'Developed as a working concept to show how Indian retail merchants can eliminate expensive monthly e-commerce platform fees and streamline orders with direct cart-to-WhatsApp messaging and UPI payment.',
    techStack: ['React', 'Cart State Engine', 'WhatsApp URL Protocol', 'UPI Integration Mock', 'Vite'],
    highlights: [
      'Interactive shopping cart drawer with weight variant selectors (100g, 250g, 500g)',
      'One-click "Order via WhatsApp" button generating structured itemized bill in ₹ INR',
      'Zero commission checkout flow tailored for Indian local delivery and UPI / COD',
      'Micro-animations on add-to-cart actions with visual badge indicators'
    ],
    demoLink: '#demo-chai',
    accentColor: '#0284c7',
    metrics: {
      lighthouse: '98/100',
      loadTime: '0.7s',
      responsive: 'Frictionless Mobile Flow'
    }
  },
  {
    id: 'pulsesaas-india',
    title: 'PulseMetrics India Platform',
    conceptType: 'Concept Prototype',
    category: 'High-Converting Landing Page',
    tagline: 'B2B SaaS product conversion landing page for automated GST & invoicing workflows.',
    overview: 'A concept landing page designed to demonstrate ShubhTech’s conversion rate optimization (CRO) principles for Indian tech startups: clear value proposition, interactive pricing tiers in ₹, and objection-handling FAQs.',
    techStack: ['React', 'CSS Glassmorphism', 'Responsive Flex/Grid', 'Vite'],
    highlights: [
      'Strategic visual hierarchy with dual contrasting CTA placements',
      'Interactive monthly vs annual pricing calculation switcher in Indian Rupees',
      'Feature breakdown comparing legacy accounting software vs modern cloud tools',
      'Speed-optimized SVG diagrams and zero render-blocking scripts'
    ],
    demoLink: '#demo-pulsesaas',
    accentColor: '#38bdf8',
    metrics: {
      lighthouse: '100/100',
      loadTime: '0.5s',
      responsive: 'Adaptive Breakpoints'
    }
  },
  {
    id: 'sanjeevani-physio',
    title: 'Sanjeevani Physiotherapy & Rehab',
    conceptType: 'Concept Prototype',
    category: 'Local Business & SEO',
    tagline: 'Multi-location health clinic website with local SEO architecture and quick appointments.',
    overview: 'A demonstrative health clinic template created to illustrate how Indian local clinics and professionals can rank on Google Maps in their city while making doctor appointment booking seamless.',
    techStack: ['React', 'Local Schema Markup', 'CSS Modules', 'Vite'],
    highlights: [
      'Rich Google Local Business schema structure ready for search engines across Indian cities',
      'Instant appointment time-slot selection form with WhatsApp confirmation hook',
      'Service-specific treatment pages with transparent fee cards in ₹ INR',
      'Accessibility compliant (WCAG AA) contrast ratios and font sizing'
    ],
    demoLink: '#demo-sanjeevani',
    accentColor: '#0ea5e9',
    metrics: {
      lighthouse: '99/100',
      loadTime: '0.6s',
      responsive: 'Accessible & Fast'
    }
  }
];
