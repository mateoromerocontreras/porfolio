import data from '../data.json';

export default function Hero() {
  const { personalInfo, summary } = data;

  return (
    <section
      id="hero"
      className="scanlines"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        overflow: 'hidden',
      }}
    >
      {/* Radial nebula glow — top left */}
      <div style={{
        position: 'absolute', top: '-5%', left: '-10%',
        width: '45%', height: '55%',
        background: 'radial-gradient(ellipse, rgba(64,150,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Radial nebula glow — bottom right */}
      <div style={{
        position: 'absolute', bottom: '5%', right: '-5%',
        width: '35%', height: '40%',
        background: 'radial-gradient(ellipse, rgba(224,53,53,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>

        {/* Mission label */}
        <div className="animate-fade-in-up" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.5rem',
            color: 'var(--crimson)',
            letterSpacing: '0.15em',
            textShadow: '0 0 8px rgba(224, 53, 53, 0.6)',
          }}>
            ◆ MISSION BRIEFING
          </span>
          <span style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(90deg, var(--crimson), transparent)', opacity: 0.6 }} />
        </div>

        {/* Hero name — pixel font with glitch */}
        <h1
          className="font-pixel animate-glitch animate-fade-in-up delay-100"
          style={{
            fontSize: 'clamp(1.1rem, 4vw, 2rem)',
            color: 'var(--star)',
            marginBottom: '0.5rem',
            lineHeight: '1.6',
            textShadow: '0 0 24px rgba(64, 150, 255, 0.5)',
          }}
        >
          {personalInfo.name.replace(' ', '_').toUpperCase()}
          <span className="animate-blink" style={{ color: 'var(--phosphor)', marginLeft: '4px' }}>█</span>
        </h1>

        {/* Title as terminal prompt */}
        <div className="animate-fade-in-up delay-200" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--phosphor)', fontSize: '0.85rem' }}>{'>'}</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: 'var(--crimson)',
            letterSpacing: '0.05em',
          }}>
            {personalInfo.title.toUpperCase().replace(/ \/ /g, ' :: ')}
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--console)', fontSize: '0.75rem', marginLeft: '0.5rem' }}>
            // {personalInfo.location}
          </span>
        </div>

        {/* Terminal window for summary */}
        <div
          className="terminal-window animate-fade-in-up delay-300"
          style={{ maxWidth: '700px', marginBottom: '3rem' }}
        >
          <div className="terminal-titlebar">
            <span className="terminal-dot" style={{ background: 'var(--crimson)' }} />
            <span className="terminal-dot" style={{ background: '#f59f00' }} />
            <span className="terminal-dot" style={{ background: 'var(--green-sys)' }} />
            <span style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.45rem',
              color: 'var(--console)',
              marginLeft: '0.5rem',
              letterSpacing: '0.1em',
            }}>
              personnel_file.txt
            </span>
          </div>
          <div style={{ padding: '1.25rem 1.5rem' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem',
              color: 'var(--text)',
              lineHeight: '1.85',
              opacity: 0.9,
            }}>
              <span style={{ color: 'var(--phosphor)' }}>$&nbsp;</span>
              <span style={{ color: 'var(--console)' }}>cat&nbsp;</span>
              <span style={{ color: 'var(--star)' }}>bio.txt</span>
              <br /><br />
              {summary}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="#projects" className="btn-primary">
            <span style={{ color: 'var(--phosphor)', marginRight: '4px' }}>▶</span>
            VIEW_PROJECTS
          </a>
          <a href="#contact" className="btn-secondary">
            <span>⬡</span>
            CONTACT
          </a>
        </div>
      </div>

      {/* Bottom terminal prompt */}
      <div className="animate-fade-in-up delay-500" style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        zIndex: 2,
      }}>
        <a href="#projects" style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.45rem',
          color: 'var(--console)',
          textDecoration: 'none',
          letterSpacing: '0.15em',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          transition: 'color 0.15s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--phosphor)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--console)')}
        >
          <span>SCROLL_DOWN</span>
          <span style={{ fontSize: '0.8rem' }}>↓</span>
        </a>
      </div>
    </section>
  );
}
