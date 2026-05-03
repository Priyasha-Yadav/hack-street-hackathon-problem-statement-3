# 🚀 VELOX 2026 — The Ultimate Hackathon Experience

> **48 hours of innovation, collaboration, and creation.** Join 1,200+ builders from across India at the most electrifying hackathon of 2026.

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0050?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Design System](#design-system)
- [Components](#components)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌐 Overview

**VELOX 2026** is a premium, production-grade hackathon landing page built with React 19 and Vite. It features a fully immersive dark-themed design with interactive particle animations, glassmorphism UI, and a multi-step registration flow that generates a shareable participant ID card.

The site is designed to captivate visitors from the first interaction — with a physics-based particle hero, smooth scroll animations, and a cohesive design system built around the VELOX brand identity.

---

## ✨ Features

| Feature | Description |
|---|---|
| **🎆 Interactive Particle Hero** | Canvas-based particle system with mouse repulsion physics, elastic collisions, and twinkling background stars |
| **📌 Sticky Glassmorphic Navbar** | Fixed navigation with backdrop blur that transitions on scroll, responsive mobile hamburger menu |
| **⏱️ Live Countdown Timer** | Real-time countdown to the event date (July 15, 2026) with hover-animated time blocks |
| **📝 Multi-Step Registration** | 3-step form (Personal Info → Experience → Team & Tracks) with validation and animated transitions |
| **🪪 Shareable ID Card** | Auto-generated participant card (16:9) with download & social sharing via Web Share API |
| **🏆 Animated Prize Cards** | Prize showcase with gold/silver/bronze theming, glow effects, and hover animations |
| **📅 Event Timeline** | Chronological event schedule with staggered reveal animations |
| **❓ FAQ Accordion** | Expandable FAQ section using Radix UI primitives |
| **🤝 Sponsors Marquee** | Auto-scrolling sponsor logo cloud |
| **🦶 Full Footer** | Multi-column footer with social links and legal pages |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19.2 with Vite 8 |
| **Styling** | Tailwind CSS v4.2 + Custom CSS Design System |
| **Animation** | Framer Motion 12.x |
| **UI Primitives** | Radix UI (Accordion, Slot) |
| **Icons** | Lucide React, Radix Icons, HugeIcons |
| **Typography** | Inter (sans-serif), JetBrains Mono (monospace) via Google Fonts |
| **Canvas** | HTML5 Canvas (particle physics engine) |
| **Export** | html2canvas (ID card generation) |
| **Linting** | ESLint with React Hooks & Refresh plugins |

---

## 📁 Project Structure

```
velox-2026/
├── index.html                 # Entry HTML with SEO meta tags
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration with path aliases
├── public/
│   ├── favicon.svg
│   ├── gif-coding.gif         # ID card decorative GIF
│   └── gif-tech.gif           # ID card decorative GIF
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Root component — assembles all sections
│   ├── index.css              # Global design system (tokens, utilities, animations)
│   ├── components/
│   │   ├── Navbar.jsx         # 📌 Sticky glassmorphic navigation
│   │   ├── AboutSection.jsx   # Event overview + stats grid + feature cards
│   │   ├── TimelineSection.jsx# Chronological event schedule
│   │   ├── PrizesSection.jsx  # Prize categories with animated cards
│   │   ├── SponsorsSection.jsx# Sponsor logo marquee
│   │   ├── FAQSection.jsx     # Accordion-based FAQ
│   │   ├── RegistrationSection.jsx # Multi-step form + ID card generator
│   │   ├── Footer.jsx         # Site footer with link groups
│   │   └── ui/                # Reusable UI primitives
│   │       ├── particle-effect-for-hero.tsx  # Canvas particle engine + hero content
│   │       ├── liquid-glass-button.tsx       # Liquid glass CTA button
│   │       ├── button.tsx                    # Base button component
│   │       ├── input.tsx                     # Form input component
│   │       ├── accordion.tsx                 # Radix accordion wrapper
│   │       └── ...                           # Additional UI components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions (cn, etc.)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/velox-2026.git
cd velox-2026

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Design System

The project uses a custom design system defined in `src/index.css`:

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-velox-bg` | `#050505` | Page background |
| `--color-velox-surface` | `#0a0a0a` | Surface elements |
| `--color-velox-card` | `#111111` | Card backgrounds |
| `--color-velox-accent` | `#3B82F6` | Primary accent (blue) |
| `--color-velox-cyan` | `#06D6A0` | Secondary accent |
| `--color-velox-pink` | `#F472B6` | Tertiary accent |

### Utility Classes

- **`.glass`** — Glassmorphism with subtle blur and border
- **`.glass-strong`** — Enhanced glassmorphism with stronger blur
- **`.glow-purple`** / **`.glow-cyan`** / **`.glow-amber`** — Glow box-shadows
- **`.grid-pattern`** — Subtle grid overlay background
- **`.radial-glow`** / **`.radial-glow-bottom`** — Radial gradient backgrounds
- **`.section-divider`** — Gradient horizontal rule between sections

### Animations

- `animate-fade-in-up` — Entrance animation
- `animate-float` — Floating hover effect
- `animate-pulse-glow` — Pulsating glow
- `animate-shimmer` — Shimmer loading effect
- `animate-gradient-shift` — Moving gradient background
- `animate-spin-slow` — Slow rotation

---

## 🧩 Components

### Navbar (`Navbar.jsx`)
Fixed-position navigation bar with:
- Transparent → glassmorphic background transition on scroll
- Animated entrance via Framer Motion
- Responsive mobile hamburger menu with AnimatePresence
- Highlighted "Register" CTA button

### Hero (`particle-effect-for-hero.tsx`)
Full-screen hero with:
- **AntiGravityCanvas** — Physics-based particle system (mouse repulsion, spring forces, elastic collisions, twinkling stars)
- **CountdownTimer** — Live countdown with animated number blocks
- **HeroContent** — Title, tagline, and liquid glass CTA button

### Registration Flow (`RegistrationSection.jsx`)
Three-step registration:
1. **Personal Info** — Name, email, GitHub
2. **Experience** — Skill level, tech stack, bio
3. **Team & Tracks** — Team preference, track selection, code of conduct

Generates a **16:9 participant ID card** with:
- Download as PNG (via html2canvas)
- Share via Web Share API
- Fallback clipboard copy

---

## 🌍 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy the `dist/` folder
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Netlify

```bash
npm run build
# Deploy `dist/` with publish directory set to `dist`
```

### Static Hosting

The production build outputs a static site to `dist/` that can be hosted on any static file server.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is built for the **Hack Street Hackathon** (Problem Statement 3).

© 2026 VELOX Hackathon. All rights reserved.
