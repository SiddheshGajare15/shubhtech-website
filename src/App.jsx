import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Services from './components/Services';
import ConceptWork from './components/ConceptWork';
import InteractiveEstimator from './components/InteractiveEstimator';
import Process from './components/Process';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="shubhtech-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <Packages />
        <Services />
        <ConceptWork onOpenProjectModal={(project) => setSelectedProject(project)} />
        <InteractiveEstimator />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Breakdown Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Persistent Floating WhatsApp Quick-Chat Trigger for India */}
      <a
        href="https://wa.me/919699603323?text=Namaste%20ShubhTech%2C%20I%20am%20interested%20in%20discussing%20a%20website%20package%20(Starting%20at%20%E2%82%B96%2C999)."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          zIndex: 999,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.55)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
        }}
        title="Chat with ShubhTech on WhatsApp"
      >
        <MessageCircle size={30} fill="#ffffff" color="#25d366" />
      </a>
    </div>
  );
}
