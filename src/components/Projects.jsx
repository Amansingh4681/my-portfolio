import React, { useState } from 'react';
import { ExternalLink, X, Info } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Premium Glassmorphic Portfolio",
    category: "frontend",
    tagline: "Highly interactive personal site styled with native glassmorphic CSS.",
    description: "A showcase portfolio that incorporates smooth component scrolling, a local storage-backed accent color palette customizer, responsive drawer transitions, and clean typography. Coded with generative AI tools.",
    tags: ["React", "HTML5", "Vanilla CSS", "Vite", "AI tools"],
    github: "https://github.com/Amansingh4681",
    demo: "https://example.com",
    isComingSoon: false,
    details: {
      challenge: "Building a high-end feel (including dynamic HSL accents and sticky backdrop filters) with light-weight, clean Vanilla CSS.",
      solution: "Employed global root CSS custom parameters and responsive layout grid systems.",
      features: ["Custom color swapper panel", "Simulated coding terminal hero layout", "Sleek floating layout states", "Contact validator mechanisms"]
    }
  },
  {
    id: 2,
    title: "React Web Application",
    category: "frontend",
    tagline: "Under construction — coming soon.",
    description: "An upcoming React-based web application focused on state management, interactive list layouts, and dynamic frontend components.",
    tags: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/Amansingh4681",
    demo: "#",
    isComingSoon: true,
    details: {
      challenge: "TBD",
      solution: "TBD",
      features: ["Component lifecycle design", "State bindings", "AI-assisted troubleshooting"]
    }
  },
  {
    id: 3,
    title: "Node.js Backend Service",
    category: "backend",
    tagline: "Under planning — coming soon.",
    description: "An upcoming Node.js and Express RESTful server featuring database connectivity, router handlers, and request checks.",
    tags: ["Node.js", "Express", "REST API"],
    github: "https://github.com/Amansingh4681",
    demo: "#",
    isComingSoon: true,
    details: {
      challenge: "TBD",
      solution: "TBD",
      features: ["REST endpoints setup", "JSON token validation", "Error middleware routines"]
    }
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected <span>Work</span></h2>
        
        {/* Category Filters */}
        <div className="projects-filters">
          {['all', 'frontend', 'backend', 'fullstack'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2 projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-card-header">
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span className="badge project-category-badge">{project.category}</span>
                  {project.isComingSoon && (
                    <span className="badge" style={{ 
                      background: 'rgba(245, 158, 11, 0.1)', 
                      color: '#f59e0b', 
                      borderColor: 'rgba(245, 158, 11, 0.25)',
                      textTransform: 'none'
                    }}>
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" title="Github Code" aria-label="GitHub Repo">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo" aria-label="Live Demo Link">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-tagline">{project.tagline}</p>
              
              <div className="project-tags">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="project-tag">{t}</span>
                ))}
              </div>

              <button 
                className="btn btn-secondary project-detail-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details <Info size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <span className="badge modal-badge">{selectedProject.category}</span>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-desc">{selectedProject.description}</p>
            
            <div className="modal-split">
              <div className="modal-details-col">
                <h4 className="detail-section-title">The Challenge</h4>
                <p className="detail-section-text">{selectedProject.details.challenge}</p>

                <h4 className="detail-section-title">The Solution</h4>
                <p className="detail-section-text">{selectedProject.details.solution}</p>
              </div>

              <div className="modal-features-col">
                <h4 className="detail-section-title">Key Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.details.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-tags">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="modal-actions">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <Github size={16} /> Code
                </a>
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
