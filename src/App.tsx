import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Feed from './components/Feed';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--void)', minHeight: '100vh', position: 'relative' }}>
      {/* Star field background — fixed, behind everything */}
      <div className="starfield" aria-hidden="true" />

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

          {/* Nav links */}
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="hide-scrollbar">
            {[
              ['#projects', 'PROJECTS'],
              ['#skills', 'STACK'],
              ['#experience', 'LOG'],
              ['#updates', 'UPDATES'],
              ['#contact', 'CONTACT'],
            ].map(([href, label]) => (
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
        </div>

        {/* Scanning line effect on navbar bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--phosphor) 30%, var(--crimson) 60%, transparent)',
          opacity: 0.6,
        }} />
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
    </div>
  );
}

export default App;
