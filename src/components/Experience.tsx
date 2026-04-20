import data from '../data.json';

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience" style={{ padding: '6rem 1.5rem', position: 'relative' }}>

      {/* Background accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '40%', height: '40%',
        background: 'radial-gradient(ellipse, rgba(224,53,53,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="section-label">SECTOR_03</span>
        </div>
        <h2 className="section-title">// WORK_LOG</h2>
        <div className="section-divider" style={{ maxWidth: '300px' }} />

        {/* Changelog-style entries */}
        <div style={{ position: 'relative' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--phosphor) 0%, var(--border) 60%, transparent 100%)',
            opacity: 0.4,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {experience.map((job, idx) => (
              <div
                key={idx}
                style={{
                  paddingLeft: '2rem',
                  paddingBottom: idx === experience.length - 1 ? 0 : '2.5rem',
                  position: 'relative',
                }}
              >
                {/* Timeline node */}
                <div style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '0.75rem',
                  width: '12px',
                  height: '12px',
                  backgroundColor: idx === 0 ? 'var(--phosphor)' : 'var(--surface)',
                  border: `2px solid ${idx === 0 ? 'var(--phosphor)' : 'var(--border)'}`,
                  boxShadow: idx === 0 ? '0 0 10px rgba(64, 150, 255, 0.6)' : 'none',
                }} />

                {/* Entry card */}
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem 1.5rem',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-hi)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(64, 150, 255, 0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Entry header */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                  }}>
                    {/* Period badge */}
                    <span style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '0.45rem',
                      color: 'var(--console)',
                      backgroundColor: 'var(--deep)',
                      border: '1px solid var(--border)',
                      padding: '0.25rem 0.5rem',
                      letterSpacing: '0.08em',
                    }}>
                      [{job.period}]
                    </span>

                    {/* Role */}
                    <h3 style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '0.6rem',
                      color: 'var(--star)',
                      lineHeight: '1.8',
                      letterSpacing: '0.05em',
                    }}>
                      {job.role.toUpperCase().replace(/ /g, '_')}
                    </h3>
                  </div>

                  {/* Company as @ handle */}
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: 'var(--crimson)',
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}>
                    <span style={{ color: 'var(--console)', fontSize: '0.8rem' }}>@</span>
                    {job.company}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.73rem',
                    color: 'var(--text-dim)',
                    lineHeight: '1.75',
                  }}>
                    {job.description}
                  </p>

                  {/* Corner decoration */}
                  <div style={{
                    position: 'absolute', bottom: '8px', right: '8px',
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.35rem',
                    color: 'var(--border)',
                    letterSpacing: '0.05em',
                  }}>
                    ENTRY_{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
