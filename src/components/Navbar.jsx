import React, { useState, useEffect } from 'react';
import { Menu, X, Palette, Check } from 'lucide-react';
import './Navbar.css';

const accents = [
  { name: 'violet', label: 'Violet', color: '#8b5cf6' },
  { name: 'emerald', label: 'Emerald', color: '#10b981' },
  { name: 'cyan', label: 'Cyan', color: '#06b6d4' },
  { name: 'amber', label: 'Amber', color: '#f59e0b' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAccentPicker, setShowAccentPicker] = useState(false);
  const [currentAccent, setCurrentAccent] = useState('violet');
  const [scrolled, setScrolled] = useState(false);

  // Set default/stored accent
  useEffect(() => {
    const savedAccent = localStorage.getItem('portfolio-accent') || 'violet';
    setCurrentAccent(savedAccent);
    document.documentElement.setAttribute('data-accent', savedAccent);
  }, []);

  // Set accent
  const changeAccent = (accentName) => {
    setCurrentAccent(accentName);
    document.documentElement.setAttribute('data-accent', accentName);
    localStorage.setItem('portfolio-accent', accentName);
    setShowAccentPicker(false);
  };

  // Monitor scroll for header styling and scrollspy
  useEffect(() => {
    const handleScroll = () => {
      // Header scrolled background change
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active link mapping
      const sections = ['home', 'about', 'skills', 'dsa', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Navbar height offset
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, 'home')}>
          AMAN SINGH<span>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <ul className="nav-links">
            {['home', 'about', 'skills', 'dsa', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link-item ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item === 'dsa' ? 'DSA' : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Accent Color Palette Selector */}
          <div className="accent-picker-container">
            <button
              className="accent-picker-trigger"
              onClick={() => setShowAccentPicker(!showAccentPicker)}
              title="Change Accent Color"
              aria-label="Theme Customizer"
            >
              <Palette size={20} />
            </button>
            
            {showAccentPicker && (
              <div className="accent-picker-dropdown glass-card">
                <div className="accent-picker-header">Accent Color</div>
                <div className="accent-grid">
                  {accents.map((accent) => (
                    <button
                      key={accent.name}
                      className={`accent-dot-btn ${currentAccent === accent.name ? 'active' : ''}`}
                      onClick={() => changeAccent(accent.name)}
                      style={{ '--dot-color': accent.color }}
                      title={accent.label}
                    >
                      {currentAccent === accent.name && <Check size={12} className="check-icon" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="nav-mobile-actions">
          {/* Accent picker shortcut for mobile */}
          <div className="accent-picker-container">
            <button
              className="accent-picker-trigger mobile-trigger"
              onClick={() => setShowAccentPicker(!showAccentPicker)}
              aria-label="Theme Customizer"
            >
              <Palette size={18} />
            </button>
            {showAccentPicker && (
              <div className="accent-picker-dropdown glass-card mobile-dropdown">
                <div className="accent-grid">
                  {accents.map((accent) => (
                    <button
                      key={accent.name}
                      className={`accent-dot-btn ${currentAccent === accent.name ? 'active' : ''}`}
                      onClick={() => changeAccent(accent.name)}
                      style={{ '--dot-color': accent.color }}
                      title={accent.label}
                    >
                      {currentAccent === accent.name && <Check size={10} className="check-icon" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`nav-menu-mobile glass-panel ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links-mobile">
          {['home', 'about', 'skills', 'dsa', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`nav-link-item-mobile ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item)}
              >
                {item === 'dsa' ? 'DSA' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
