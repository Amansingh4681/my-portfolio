import React from 'react';
import { Briefcase, Award, GitCommit, GraduationCap } from 'lucide-react';
import './About.css';

const stats = [
  { icon: <GraduationCap size={22} />, title: "Current Status", value: "B.Tech 3rd Yr" },
  { icon: <Briefcase size={22} />, title: "Experience Level", value: "Undergraduate" },
  { icon: <GitCommit size={22} />, title: "Coding Approach", value: "AI + Code" }
];

const timeline = [
  {
    year: "2023 - Present",
    role: "B.Tech Computer Science Student",
    company: "Undergraduate Program",
    description: "Focusing on database concepts, algorithms, and core web architecture. Crafting project user interfaces and backend setups using HTML, CSS, JavaScript, React, and Node.js."
  },
  {
    year: "2023 - Present",
    role: "AI-Assisted Development",
    company: "Personal Workflow",
    description: "Leveraging generative AI helpers to understand complex APIs, debug code, and quickly prototype clean responsive front-end structures."
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        {/* Biography & Stats */}
        <div className="grid-2 bio-container">
          <div className="bio-text">
            <h3 className="bio-header">B.Tech student combining human insight with AI capabilities.</h3>
            <p className="bio-paragraph">
              I am an undergraduate student who believes in staying ahead of the curve. By combining core 
              academic studies in computing with AI-assisted software building, I build and learn at a rapid pace. 
              I specialize in HTML5, CSS3, ES6 JavaScript, React frontend designs, and basic Node.js servers.
            </p>
            <p className="bio-paragraph">
              For me, coding is not just about typing syntax—it is about having a complete understanding of how 
              modules interact. I strive to make web pages that load quickly and present information gracefully.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <h3 className="timeline-title-main">My Professional Journey</h3>
          <div className="timeline-line-wrapper">
            <div className="timeline-vertical-line"></div>
            
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-badge">
                  <GraduationCap size={16} />
                </div>
                <div className="glass-card timeline-card">
                  <div className="timeline-date">{item.year}</div>
                  <h4 className="timeline-role">{item.role}</h4>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
