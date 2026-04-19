# Mateo Romero Contreras | Portfolio
### Systems Analyst & QA Specialist

[![Deploy to GitHub Pages](https://github.com/mateoromerocontreras/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/mateoromerocontreras/portfolio/actions/workflows/deploy.yml)
[![Trilingual](https://img.shields.io/badge/Language-ES%20%7C%20EN%20%7C%20FR-blue)](#)

This repository hosts my professional portfolio, built with a focus on high-performance web standards and automated CI/CD pipelines. It serves as a centralized hub for my projects in full-stack development (Java/Spring Boot, Python/Django) and Software Quality Assurance.

## 🚀 Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS (Mobile-first, Responsive Design)
- **Infrastructure:** GitHub Actions (CI/CD), Cloudflare DNS
- **Development Environment:** Antigravity (Agent-Oriented IDE)

## 🛠 Project Architecture

The project follows a modular architecture designed for scalability and ease of testing:

- `src/components/`: Atomic UI components.
- `src/data/`: Structured JSON files (source of truth for trilingual content).
- `src/hooks/`: Custom React hooks for state management.
- `.github/workflows/`: Automated build and deployment pipelines.

## 🤖 Agent-Oriented Development

This project was developed using **Antigravity** and **MCP (Model Context Protocol)** integrations. By utilizing AI Agents, the development workflow included:
- Automated parsing of multi-language resumes into structured site data.
- Agent-led UI consistency checks and Tailwind optimization.
- Automated generation of GitHub Actions deployment scripts.

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm / yarn

### Installation & Local Development
```bash
# Clone the repository
git clone [https://github.com/mateoromerocontreras/portfolio.git](https://github.com/mateoromerocontreras/portfolio.git)

# Install dependencies
npm install

# Start development server
npm run dev
````

## 🚢 CI/CD & Deployment

This repository uses **GitHub Actions** for a zero-downtime deployment strategy.

1.  **Build:** On every push to `main`, a workflow triggers a production build using Vite.
2.  **Artifact:** The build output (`dist/`) is uploaded as a secure artifact.
3.  **Deploy:** The artifact is deployed directly to **GitHub Pages** and served via **Cloudflare** at [romeromateo.com.ar](https://romeromateo.com.ar).

### Domain Configuration

  - **Apex Domain:** `romeromateo.com.ar`
  - **DNS Provider:** Cloudflare (Full SSL/TLS)
  - **Host:** GitHub Pages (via `public/CNAME`)

## 👨‍💻 About the Author

I am a Systems Analyst student currently working as a QA intern. With over a decade of experience in teaching Math and Physics, I bring a logical, data-driven approach to software development and testing.

  - **Location:** Córdoba, Argentina
  - **Interests:** Olympic Weightlifting, Horology (Casio mods), and Philosophy.

-----

© 2026 Mateo Romero Contreras

```
