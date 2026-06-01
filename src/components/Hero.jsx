import React from 'react';
import { ArrowRight, Code, Terminal, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container grid-2">
        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="hero-profile-header">
            <img 
              src="https://github.com/Amansingh4681.png" 
              alt="Aman Singh Profile" 
              className="hero-profile-img" 
              onError={(e) => {
                // fallback if github avatar is blocked or fails
                e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80";
              }}
            />
            <div className="hero-badge badge">
              <Sparkles size={12} className="sparkle-icon" /> B.Tech 3rd Year Student
            </div>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Aman Singh</span>
          </h1>
          <p className="hero-description">
            I am a B.Tech student who believes in the power of building and coding with AI support. 
            I focus on creating clean interfaces and solid logic using HTML, CSS, JavaScript, 
            React, and Node.js.
          </p>
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              Explore Work <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              Get In Touch <Terminal size={18} />
            </a>
          </div>
        </div>

        {/* Hero Right Graphic - Simulated IDE Terminal */}
        <div className="hero-visual animated-float">
          <div className="ide-window glass-panel">
            <div className="ide-header">
              <div className="ide-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="ide-tab">
                <Code size={12} /> developer.json
              </div>
            </div>
            <div className="ide-body">
              <pre className="ide-code">
                <code>
                  <span className="code-keyword">const</span> student = &#123;
                  <br />
                  &nbsp;&nbsp;name: <span className="code-string">"Aman Singh"</span>,
                  <br />
                  &nbsp;&nbsp;education: <span className="code-string">"B.Tech (Undergraduate)"</span>,
                  <br />
                  &nbsp;&nbsp;year: <span className="code-string">"3rd Year"</span>,
                  <br />
                  &nbsp;&nbsp;skills: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"HTML5"</span>, <span className="code-string">"CSS3"</span>, <span className="code-string">"JavaScript"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />
                  &nbsp;&nbsp;approach: <span className="code-string">"AI-assisted creations"</span>,
                  <br />
                  &nbsp;&nbsp;readyToBuild: <span className="code-keyword">true</span>
                  <br />
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
