import React from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "Web Foundation",
    icon: <Monitor size={22} />,
    skills: [
      { name: "HTML5 Structure", level: 90 },
      { name: "CSS3 Flexbox / Grid", level: 85 },
      { name: "Responsive Page Design", level: 80 }
    ]
  },
  {
    title: "JavaScript & Frameworks",
    icon: <Server size={22} />,
    skills: [
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React Components", level: 75 },
      { name: "State & Hooks Management", level: 70 }
    ]
  },
  {
    title: "Backend & Development",
    icon: <Wrench size={22} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Git / GitHub Versioning", level: 80 },
      { name: "Mern stack ", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        
        <div className="grid-3 skills-categories-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="category-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ '--skill-percent': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
