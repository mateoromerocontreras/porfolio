import data from '../data.json';

const categoryMeta = [
  { key: 'languages',            label: 'LANGUAGES',         icon: '⟨/⟩', accent: 'var(--phosphor)' },
  { key: 'backendAndFrameworks', label: 'BACKEND',            icon: '⬡',   accent: 'var(--green-sys)' },
  { key: 'cloudAndDevOps',       label: 'CLOUD & DEVOPS',    icon: '☁',   accent: '#60a5fa' },
  { key: 'testingAndQA',         label: 'TESTING & QA',      icon: '◉',   accent: '#f59f00' },
  { key: 'frontendAndUI',        label: 'FRONTEND & UI',     icon: '▣',   accent: '#c084fc' },
  { key: 'appliedAI',            label: 'APPLIED AI',        icon: '◈',   accent: 'var(--crimson)' },
] as const;

export default function Skills() {
  const { technicalStack, certifications } = data;

  return (
    <section id="skills" style={{
      padding: '6rem 1.5rem',
      backgroundColor: 'rgba(6, 14, 28, 0.6)',
      position: 'relative',
    }}>
      {/* Side accent line */}
      <div style={{
        position: 'absolute', left: 0, top: '10%', bottom: '10%', width: '2px',
        background: 'linear-gradient(180deg, transparent, var(--phosphor) 30%, var(--crimson) 70%, transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="section-label">SECTOR_02</span>
        </div>
        <h2 className="section-title">// TECH_STACK</h2>
        <div className="section-divider" style={{ maxWidth: '350px' }} />

        {/* Stats panels grid — RPG equipment screen */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {categoryMeta.map((cat) => {
            const items = technicalStack[cat.key] as string[];
            return (
              <div
                key={cat.key}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  padding: '1.25rem',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cat.accent;
                  e.currentTarget.style.boxShadow = `0 0 20px ${cat.accent === 'var(--phosphor)' ? 'rgba(64,150,255,0.15)' : 'rgba(0,0,0,0.2)'}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: cat.accent, opacity: 0.7 }} />

                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1rem', filter: 'grayscale(0.3)' }}>{cat.icon}</span>
                  <span style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.5rem',
                    color: cat.accent,
                    letterSpacing: '0.1em',
                  }}>
                    {cat.label}
                  </span>
                </div>

                {/* Skill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications — "Achievements Unlocked" */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.55rem',
              color: 'var(--star)',
              letterSpacing: '0.1em',
              textShadow: '0 0 8px rgba(168, 196, 224, 0.3)',
            }}>
              ★ ACHIEVEMENTS_UNLOCKED
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0.75rem',
          }}>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem 1rem',
                  backgroundColor: 'var(--deep)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#f59f00';
                  e.currentTarget.style.boxShadow = '0 0 8px rgba(245, 159, 0, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ color: '#f59f00', fontSize: '0.9rem', marginTop: '1px', flexShrink: 0 }}>★</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: 'var(--text)',
                  lineHeight: '1.6',
                }}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
