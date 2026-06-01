import React from 'react';
import { Brain, Trophy, ExternalLink, Code2 } from 'lucide-react';
import { Github, Leetcode } from './Icons';
import './DSA.css';

// EDIT THIS ARRAY TO UPDATE YOUR DSA TOPICS AND QUESTION COUNTS IN THE FUTURE
const dsaTopics = [
  {
    topic: "Array Problems",
    solved: 29,
    difficulty: "Easy/Medium",
    githubFolderUrl: "https://github.com/Amansingh4681/DSA_CPP/tree/main/Array_problems"
  },
  {
    topic: "Sorting Algorithms",
    solved: 5,
    difficulty: "Easy/Medium",
    githubFolderUrl: "https://github.com/Amansingh4681/DSA_CPP/tree/main/sorting"
  },
  {
    topic: "Linked Lists & Stacks",
    solved: 0,
    difficulty: "Medium",
    githubFolderUrl: "https://github.com/Amansingh4681/DSA_CPP"
  },
  {
    topic: "Trees & Graphs",
    solved: 0,
    difficulty: "Medium/Hard",
    githubFolderUrl: "https://github.com/Amansingh4681/DSA_CPP"
  },
  {
    topic: "Dynamic Programming",
    solved: 0,
    difficulty: "Hard",
    githubFolderUrl: "https://github.com/Amansingh4681/DSA_CPP"
  }
];

// EDIT THESE OVERALL COUNTS
const totalQuestionsSolved = 34; // 29 Array + 5 Sorting
const leetcodeProfileUrl = "https://leetcode.com/u/Aman_singh87/";
const githubDsaRepoUrl = "https://github.com/Amansingh4681/DSA_CPP";

export default function DSA() {
  return (
    <section id="dsa" className="dsa-section">
      <div className="container">
        <h2 className="section-title">DSA <span>Showcase</span></h2>
        
        {/* Core Stats Overview */}
        <div className="grid-3 dsa-overview">
          <div className="glass-card dsa-stat-card">
            <div className="dsa-stat-icon accent-icon">
              <Trophy size={24} />
            </div>
            <div className="dsa-stat-val">{totalQuestionsSolved}+</div>
            <div className="dsa-stat-lbl">Questions Solved</div>
          </div>

          <div className="glass-card dsa-stat-card">
            <div className="dsa-stat-icon">
              <Leetcode size={24} />
            </div>
            <a 
              href={leetcodeProfileUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="dsa-stat-val link-val"
            >
              LeetCode <ExternalLink size={14} />
            </a>
            <div className="dsa-stat-lbl">Active Profile</div>
          </div>

          <div className="glass-card dsa-stat-card">
            <div className="dsa-stat-icon">
              <Github size={24} />
            </div>
            <a 
              href={githubDsaRepoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="dsa-stat-val link-val"
            >
              GitHub Repo <ExternalLink size={14} />
            </a>
            <div className="dsa-stat-lbl">Stored Solutions</div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="dsa-grid-container">
          <h3 className="dsa-subtitle">
            <Brain size={18} className="brain-icon" /> Topic-wise Progress
          </h3>
          <div className="grid-3 dsa-topics-grid">
            {dsaTopics.map((item, idx) => (
              <div key={idx} className="glass-card dsa-topic-card">
                <div className="dsa-topic-header">
                  <h4 className="dsa-topic-name">{item.topic}</h4>
                  <span className="badge dsa-difficulty-badge">{item.difficulty}</span>
                </div>
                
                <div className="dsa-topic-body">
                  <div className="dsa-solved-count">
                    <span className="count-num">{item.solved}</span> questions solved
                  </div>
                  
                  <a 
                    href={item.githubFolderUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary dsa-code-link"
                  >
                    View Code <Code2 size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
