# Simple Portfolio Guide: How Your Website Works

This guide explains your portfolio website in plain, simple language using diagrams and flowcharts.

---

## 🗺️ 1. Main Website Sections (The Layout)
Think of your website as a single page divided into 7 blocks. When visitors click a link in the Navbar, it scrolls them smoothly to that section.

```mermaid
graph TD
    A[Navbar / Header] --> B[Hero: Hello & Code Console]
    A --> C[About Me: Story & Timeline]
    A --> D[Technical Skills: Progress Meters]
    A --> E[DSA Showcase: Solved Questions]
    A --> F[Projects Grid: Work & Detailed Popups]
    A --> G[Contact Form: Send Message]
```

---

## 🎨 2. How the Accent Color Switcher Works
Your website has a unique feature: visitors can change the highlight colors (Violet, Emerald, Cyan, or Amber). Here is how that color-switching magic happens:

```mermaid
flowchart TD
    Start[User clicks Palette button in Navbar] --> Select[User selects a color dot, e.g., Emerald]
    Select --> Trigger[Navbar executes code to change HTML attribute to 'emerald']
    Trigger --> ApplyCSS[CSS reads 'emerald' and switches active HSL Hue to 142]
    ApplyCSS --> Glow[Borders, links, buttons, and graphics glow Green instantly]
    Glow --> Save[Selected choice is saved in browser cache 'localStorage']
    Save --> Persist[If visitor refreshes the page, your site stays Green]
```

---

## 🏆 3. How Your DSA Questions Showcase Works
This section pulls data from your GitHub repository `DSA_CPP` and shows your problem-solving progress.

```mermaid
flowchart LR
    A[DSA Component] --> B(Trophy Card: 34 Solved)
    A --> C(Array Problems Card: 29 Solved)
    A --> D(Sorting Algorithms Card: 5 Solved)
    
    C --> |User clicks View Code| E[Opens GitHub: DSA_CPP/Array_problems]
    D --> |User clicks View Code| F[Opens GitHub: DSA_CPP/sorting]
```

---

## 📁 4. The Project File Directory (Brief Explanation)
Here is a simple map of where files are located and what they do:

```mermaid
graph TD
    src[src Folder] --> Components[components Folder]
    src --> Styles[index.css: Core Themes & Fonts]
    src --> CoreApp[App.jsx: Links everything together]
    
    Components --> Navigation[Navbar: Color swapper & Header]
    Components --> Welcome[Hero: Welcome text & Terminal code]
    Components --> Bio[About: Story, Timeline, and Stats]
    Components --> BarCharts[Skills: Ability percentage meters]
    Components --> Solved[DSA: Practice metrics & Github directories]
    Components --> Gallery[Projects: Work display & popups]
    Components --> Mail[Contact: Form fields & email buttons]
```

---

## ✉️ 5. How the Contact Form Works
When a visitor wants to send you a message, the contact form goes through these steps:

```mermaid
stateDiagram-v2
    [*] --> Idle: Form is empty
    Idle --> Typing: User enters Name, Email, and Message
    Typing --> Submitting: User clicks "Send Message"
    Submitting --> Success: Mock API timer finishes (1.5 seconds)
    Success --> Idle: Form resets and message clears (after 5 seconds)
```

---

## 💻 6. Simple Tech Glossary (Bite-sized Definitions)

Here is a quick lookup of the technologies used to build your website, written in plain language:

| Technology | What it is | Role on Your Website |
| :--- | :--- | :--- |
| **HTML5** | **The skeleton** (HyperText Markup Language) | Defines the structure: tells the browser where your text, image boxes, and inputs go on the page. |
| **CSS3** | **The clothes & style** (Cascading Style Sheets) | Sets the looks: colors, glowing borders, font sizing, margins, and the blurred glass backdrop cards. |
| **JavaScript (ES6+)** | **The muscles & brain** | Makes things move: controls menu clicks, monitors page scroll positions, and changes active links. |
| **React** | **The building block kit** (JS Library) | Instead of building one giant page, React lets us build small, reusable blocks (called *Components*) like Navbar, Hero, or Projects. |
| **Node.js** | **The local engine** | Lets us run compilation tools (like Vite) and install icon helper packages directly on your PC. |
| **Vite** | **The quick delivery guy** (Build Tool) | Bundles your JavaScript and CSS into small, clean packages so the website loads instantly in the browser. |
