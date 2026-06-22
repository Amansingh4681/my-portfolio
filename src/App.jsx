import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DSA from './components/DSA';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import { Settings } from 'lucide-react';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return (
      <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', color: 'var(--text-color)' }}>
        <AdminDashboard onClose={() => setShowAdmin(false)} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <DSA />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer style={{
        padding: '2.5rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-darker)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: 0 }}>
            © {new Date().getFullYear()} Aman. All rights reserved.
            <button 
              onClick={() => setShowAdmin(true)} 
              style={{
                background: 'transparent',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                opacity: 0.6,
                padding: '2px',
                transition: 'opacity 0.2s, color 0.2s',
                outline: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--primary-color)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.6; e.currentTarget.style.color = 'inherit'; }}
              title="Admin Dashboard"
              aria-label="Admin Dashboard"
            >
              <Settings size={13} />
            </button>
          </p>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', opacity: 0.8 }}>
            Crafted with React, Vite &amp; Vanilla CSS Glassmorphism
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
