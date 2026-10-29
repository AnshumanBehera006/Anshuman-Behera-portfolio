# Anshuman Behera — Portfolio Website

A modern, responsive, and interactive single-page portfolio website for **Anshuman Behera** (Frontend & Web Developer | B.Tech Final Year Student).

Built with **React.js** and **pure custom CSS (Vanilla CSS & CSS Variables)** — completely free of third-party CSS frameworks like Tailwind or Bootstrap.

---

## 🚀 Tech Stack & Design System

- **Framework:** React.js 19 (Functional components, React Hooks like `useState`, `useEffect`)
- **Build Tool:** Vite
- **Icons:** [Lucide React](https://lucide.dev)
- **Styling:** Custom CSS with CSS variables, Flexbox, and CSS Grid
- **Aesthetics:** Sleek dark-mode theme
  - Deep Navy / Slate Background (`#0b0f19`)
  - Elevated Card Surfaces (`#111827`)
  - Electric Sky Blue Accent (`#38bdf8`) & Soft Indigo (`#818cf8`)
  - Glassmorphism Navigation (`backdrop-filter: blur(12px)`)
  - Smooth Scrolling & Hover Lift Animations (`transform: translateY(-4px)`)

---

## 📁 Project Structure

```text
├── public/
│   └── profile.jpg               # Anshuman's photo
├── src/
│   ├── assets/
│   │   └── profile.jpg           # Profile image asset
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky blurred navbar with mobile drawer
│   │   ├── Navbar.css
│   │   ├── Hero.jsx              # Hero section with profile photo & stats
│   │   ├── Hero.css
│   │   ├── About.jsx             # Personal story, quick chips & strengths
│   │   ├── About.css
│   │   ├── Skills.jsx            # CSS Grid technical skills with filter tabs
│   │   ├── Skills.css
│   │   ├── Experience.jsx        # DRDO PXE internship & VISION project
│   │   ├── Experience.css
│   │   ├── Education.jsx         # Timeline cards with academic grades
│   │   ├── Education.css
│   │   ├── Contact.jsx           # Controlled form & direct contact cards
│   │   ├── Contact.css
│   │   ├── Footer.jsx            # Copyright, navigation, and scroll-to-top
│   │   ├── Footer.css
│   │   ├── ResumeModal.jsx       # Interactive CV modal with print/copy
│   │   └── ResumeModal.css
│   ├── App.jsx                   # Root layout with ambient lights
│   ├── index.css                 # Global CSS variables, resets & typography
│   └── main.jsx                  # React DOM entry point
├── index.html                    # HTML entry with Google Fonts
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📬 Contact Information
- **Email:** anshumanbehera006@gmail.com
- **Phone & WhatsApp:** +91 7978580823
- **Location:** Mayurbhanj, Odisha, India

