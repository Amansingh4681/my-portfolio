# Aman Singh's Portfolio - Comprehensive Website Documentation

This document serves as the complete developer guide for your portfolio website. It details the architecture, design tokens, folder structures, component logic, and step-by-step instructions on how to maintain and update the site.

---

## 📁 1. Project Directory Structure
The application follows a standard Vite + React project structure, keeping styling modular and separate for each component:

```
my-portfolio/
├── index.html                   # Entry HTML page (loads fonts, viewport, and SEO meta tags)
├── package.json                 # Project dependencies, scripts, and dev configurations
├── vite.config.js               # Vite configurations for React plugin building
├── src/
│   ├── main.jsx                 # Entry JavaScript file (mounts React App on HTML root)
│   ├── App.jsx                  # Main assembly page (connects header, footer, and sections)
│   ├── index.css                # Global stylesheet (design tokens, glass cards, buttons)
│   ├── components/              # Modular UI components folder
│   │   ├── Icons.jsx            # Custom SVG Brand Icon exports (Github, Linkedin, Leetcode)
│   │   ├── Navbar.jsx           # Sticky glass navbar, accent theme switcher & mobile menu
│   │   ├── Navbar.css           # Styling for navbar, color switcher dropdown, and drawer
│   │   ├── Hero.jsx             # Hero presentation section & simulated IDE code widget
│   │   ├── Hero.css             # Floating animations, layout grid, and code highlighters
│   │   ├── About.jsx            # Bio details, stats cards, and professional timeline
│   │   ├── About.css            # Styles for stats hover zoom and vertical timeline line
│   │   ├── Skills.jsx           # Technical skills categories with progress bars
│   │   ├── Skills.css           # Bar filling transitions and hover card glows
│   │   ├── DSA.jsx              # DSA question counters & GitHub directory links
│   │   ├── DSA.css              # Trophy cards, difficulty badges, and solved status blocks
│   │   ├── Projects.jsx         # Case studies card list & filter capsule tabs
│   │   ├── Projects.css         # Grid layouts and full-screen detailed popup modal overlays
│   │   ├── Contact.jsx          # Glass message form & direct email links
│   │   └── Contact.css          # Floating input field labels & submission loaders
```

---

## 🛠️ 2. Core Technologies Used
Your website is built using lightweight, high-performance web frameworks:

1. **React 19**: A modern declarative library for building user interfaces. It handles page state dynamically (e.g., active navigation section, accent color selection, filter tabs, and modal popups).
2. **Vite 7**: A hyper-fast frontend build tool. It handles HMR (Hot Module Replacement) during development and compresses your project into three minified asset files for production.
3. **Vanilla CSS3**: Used exclusively for styles. It leverages hardware-accelerated transitions, HSL color calculation variables, and blurred backdrops (`backdrop-filter`) without needing bulky external framework libraries.
4. **Lucide React**: Supplies clean, outline-based SVG icon nodes.
5. **Custom SVG Icons (`Icons.jsx`)**: Custom react component files created to draw brand-specific logos (GitHub, LinkedIn, LeetCode) since brand icons are deprecated in newer versions of lucide-react.

---

## 🎨 3. Design System & Accent Theme Switcher
The styling relies on a unified obsidian-glass layout defined in `src/index.css`.

### HSL Color Model Accent Swapper
Instead of using fixed hex codes, the theme colors are computed using **HSL (Hue, Saturation, Lightness)** coordinates on the root HTML element.
- Default Violet Hue: `--accent-h: 262`
- Accent Formula: `hsl(var(--accent-h), var(--accent-s), var(--accent-l))`

When you click a color dot in the theme picker, `Navbar.jsx` executes:
```javascript
document.documentElement.setAttribute('data-accent', 'emerald');
```
This overrides the active hue value in CSS:
```css
[data-accent="emerald"] {
  --accent-h: 142;
}
```
All border highlights, glow boxes, text highlights, and button gradients dynamically calculate their shades based on the active hue value. Selected states are cached in `localStorage` so they persist when the page is refreshed.

---

## 🧩 4. File-by-File Component Guide

### 🧱 [App.jsx](file:///c:/Users/amanr/my-portfolio/src/App.jsx)
- **Role**: Assembles the core structure of your portfolio.
- **Details**: Imports and layers your sections vertically in a semantic `<main>` tag. Houses the bottom copyright footer.

### ⚓ [Navbar.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Navbar.jsx) & [Navbar.css](file:///c:/Users/amanr/my-portfolio/src/components/Navbar.css)
- **State Hooks**:
  - `isOpen`: Controls toggling of the mobile navigation overlay menu.
  - `scrolled`: Monitors `window.scrollY`. Adds a `scrolled` glass blur class when you scroll past 20px.
  - `activeSection`: Updates dynamically to highlight the active menu link as you scroll (using a ScrollSpy bounding hook).
  - `showAccentPicker`: Manages display of the HSL color switcher dropdown.

### 💻 [Hero.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Hero.jsx) & [Hero.css](file:///c:/Users/amanr/my-portfolio/src/components/Hero.css)
- **Role**: Landing presentation card.
- **Details**:
  - Displays your rounded profile picture loaded dynamically from GitHub.
  - Features action links that scroll smoothly to the projects or contact section.
  - Renders a mockup code editor terminal highlighting a JSON representation of your profile.
  - Uses CSS `@keyframes float` to create a smooth floating motion.

### 🎓 [About.jsx](file:///c:/Users/amanr/my-portfolio/src/components/About.jsx) & [About.css](file:///c:/Users/amanr/my-portfolio/src/components/About.css)
- **Role**: Biography and timeline tracker.
- **Details**:
  - Houses three glass stats cards pointing out your academic profile.
  - Formats an interactive timeline. A vertical line connects details cards while timeline node badges highlight on hover.

### 📊 [Skills.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Skills.jsx) & [Skills.css](file:///c:/Users/amanr/my-portfolio/src/components/Skills.jsx)
- **Role**: Ability percentages meter.
- **Details**:
  - Separates skills into three primary cards.
  - Iterates over skill objects to draw progress meters using custom transition speeds.

### 🏆 [DSA.jsx](file:///c:/Users/amanr/my-portfolio/src/components/DSA.jsx) & [DSA.css](file:///c:/Users/amanr/my-portfolio/src/components/DSA.jsx)
- **Role**: Problem-solving showcase dashboard.
- **Details**:
  - Renders total questions solved (34 solved) and profile redirects.
  - Maps an array of DSA topics. Code link buttons map directly to the respective folders (`Array_problems` and `sorting`) in your GitHub repository `DSA_CPP`.

### 📂 [Projects.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Projects.jsx) & [Projects.css](file:///c:/Users/amanr/my-portfolio/src/components/Projects.css)
- **Role**: Custom filterable project portfolio.
- **Details**:
  - Filter pills update an `activeFilter` string state (All, Frontend, Backend). Only matching cards are rendered.
  - Clicking *"View Details"* stores the selected project object in state (`selectedProject`), triggering a full-screen blurred modal overlay showing challenges, solutions, and features.
  - Displays a custom amber *"Coming Soon"* badge for placeholder cards.

### ✉️ [Contact.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Contact.jsx) & [Contact.css](file:///c:/Users/amanr/my-portfolio/src/components/Contact.jsx)
- **Role**: User connection terminal.
- **Details**:
  - Implements floating labels: when an input is focused or contains text, CSS translates its label upwards, shrinks it, and colors it with your active accent hue.
  - Handles mock submissions. Disables buttons and shows a success tick animation when sent.

---

## 📝 5. How to Edit and Update Content

### 🔄 Updating DSA Question Counts
Open [DSA.jsx](file:///c:/Users/amanr/my-portfolio/src/components/DSA.jsx):
1. Change the overall count variable:
   ```javascript
   const totalQuestionsSolved = 34;
   ```
2. Modify the category object counts in the `dsaTopics` array:
   ```javascript
   {
     topic: "Array Problems",
     solved: 29, // Change this number
     difficulty: "Easy/Medium",
     githubFolderUrl: "..."
   }
   ```

### 🆕 Adding Real Projects
Open [Projects.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Projects.jsx). Locate `projectsData` and append a new object:
```javascript
{
  id: 4,
  title: "My New Application",
  category: "frontend", // frontend, backend, or fullstack
  tagline: "Brief description tagline",
  description: "Full descriptive paragraph...",
  tags: ["React", "CSS3"],
  github: "https://github.com/...",
  demo: "https://...",
  isComingSoon: false, // Set false to show live links, true to show Coming Soon badge
  details: {
    challenge: "What challenge did you face?",
    solution: "How did you solve it?",
    features: ["Feature 1", "Feature 2"]
  }
}
```

### 🔗 Enabling Real Email Delivery (Web3Forms Setup)
To receive real message emails from visitors to your personal inbox:
1. Go to [Web3Forms](https://web3forms.com/) and enter your email address to receive a **Free API Access Key**.
2. Open [Contact.jsx](file:///c:/Users/amanr/my-portfolio/src/components/Contact.jsx).
3. Update the `handleSubmit` code block to execute a post request instead of a simple timeout:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus('submitting');
     
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({
         access_key: "YOUR_ACCESS_KEY_HERE", // Paste your API key here
         name: formData.name,
         email: formData.email,
         subject: formData.subject,
         message: formData.message,
       }),
     });
     
     const result = await response.json();
     if (result.success) {
       setStatus('success');
       setFormData({ name: '', email: '', subject: '', message: '' });
     } else {
       setStatus('idle');
       alert("Error sending message. Please try again.");
     }
   };
   ```
