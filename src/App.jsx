import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DSA from './components/DSA';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
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
        <div className="container">
          <p>© {new Date().getFullYear()} Aman. All rights reserved.</p>
          <p style={{ marginTop: '0.4rem', fontSize: '0.75rem', opacity: 0.8 }}>
            Crafted with React, Vite &amp; Vanilla CSS Glassmorphism
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
