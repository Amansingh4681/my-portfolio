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
    github: "https://github.com/Amansingh4681/my-portfolio",
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
  title: "Image Gallery App",
  category: "frontend",
  tagline: "Fetches and displays images from a public API.",
  description: "A responsive frontend application that retrieves images from an external API and dynamically renders them in a clean gallery layout. Built to practice API integration, asynchronous JavaScript, and DOM manipulation.",
  tags: ["HTML", "CSS", "JavaScript", "API"],
  github: "https://github.com/Amansingh4681/Gallery_project",
  demo: "#",
  isComingSoon: false,
  details: {
    challenge: "Fetching and displaying API data efficiently while handling loading states and errors.",
    solution: "Used JavaScript Fetch API with async/await to retrieve image data and dynamically generate image cards on the page.",
    features: [
      "Image fetching from external API",
      "Dynamic image rendering",
      "Responsive gallery layout",
      "Loading and error handling"
    ]
  }
},
  {
  id: 3,
  title: "Post Upload API",
  category: "backend",
  tagline: "Upload and retrieve image-based posts.",
  description: "A backend-focused project built with Node.js and Express that allows users to upload images and create posts. The uploaded content is stored and served through REST APIs, while a simple frontend is used to test post creation and display the feed.",
  tags: ["Node.js", "Express", "MongoDB", "Multer"],
  github: "https://github.com/Amansingh4681/Post_creation_backend_project",
  demo: "#",
  isComingSoon: false,
  details: {
    challenge: "Managing image uploads and serving uploaded content through APIs.",
    solution: "Implemented Express routes for post creation, used Multer for file uploads, and stored post data in MongoDB for retrieval on the frontend.",
    features: [
      "Image upload handling",
      "Post creation API",
      "MongoDB data storage",
      "RESTful endpoints",
      "Feed data retrieval"
    ]
  }
},
 {
id: 4,
title: "Kanban Task Board",
category: "frontend",
tagline: "Organize and track tasks with drag-and-drop functionality.",
description: "A JavaScript-based Kanban board that helps users manage tasks across different stages such as To Do, In Progress, and Done. Task data is stored in Local Storage, ensuring persistence even after the browser is refreshed.",
tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
github: "https://github.com/Amansingh4681/kanban_board",
demo: "#",
isComingSoon: false,
details: {
challenge: "Maintaining task state and persisting data without a backend.",
solution: "Used Local Storage to save task information and dynamically updated the UI using JavaScript DOM manipulation.",
features: [
"Create and delete tasks",
"Drag-and-drop task management",
"Local Storage persistence",
"Task status tracking",
"Dynamic UI updates"
]
}
},

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
