import { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Feed from './components/Feed';
import Contact from './components/Contact';
import WireframeGlobe from './components/WireframeGlobe';
// 3D wireframe globe for visual interest

const navLinks = [
  ['#projects', 'PROJECTS'],
  ['#skills', 'STACK'],
  ['#experience', 'LOG'],
  ['#updates', 'UPDATES'],
  ['#contact', 'CONTACT'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: 'var(--void)', minHeight: '100vh', position: 'relative' }}>
      {/* Star field background — fixed, behind everything */}
      <div className="starfield" aria-hidden="true" />

      {/* 3D Wireframe Globe */}
      <WireframeGlobe />

      {/* HUD Grid overlay */}
      <div className="hud-grid" style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.5
      }} aria-hidden="true" />

      {/* Mission Control Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(3, 8, 15, 0.92)',
        borderBottom: '2px solid var(--border)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 20px rgba(64, 150, 255, 0.08)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span className="font-pixel" style={{ fontSize: '0.65rem', color: 'var(--phosphor)', textShadow: '0 0 12px rgba(64, 150, 255, 0.7)', letterSpacing: '0.1em' }}>
              [<span style={{ color: 'var(--crimson)' }}>M</span>R]
            </span>
          </a>

          {/* Desktop Nav links */}
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="hide-scrollbar desktop-nav">
            {navLinks.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.5rem',
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    transition: 'all 0.15s ease',
                    padding: '0.25rem 0',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--phosphor)';
                    e.currentTarget.style.textShadow = '0 0 8px rgba(64, 150, 255, 0.6)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-dim)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              background: 'transparent',
              border: '2px solid var(--border)',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--phosphor)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Scanning line effect on navbar bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--phosphor) 30%, var(--crimson) 60%, transparent)',
          opacity: 0.6,
        }} />

        {/* Mobile Menu Overlay */}
        <div
          className="mobile-menu-overlay"
          style={{
            display: menuOpen ? 'flex' : 'none',
            position: 'fixed',
            top: '62px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 8, 15, 0.98)',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '3rem',
            gap: '1.5rem',
            zIndex: 49,
            borderTop: '2px solid var(--border)',
          }}
        >
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '0.65rem',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                letterSpacing: '0.15em',
                padding: '1rem 2rem',
                border: '2px solid var(--border)',
                transition: 'all 0.15s ease',
                width: '80%',
                maxWidth: '300px',
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--phosphor)';
                e.currentTarget.style.borderColor = 'var(--phosphor)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(64, 150, 255, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Feed />
        <Contact />
      </main>

      {/* Mobile Menu Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
