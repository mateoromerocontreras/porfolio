// GitHub SVG inline (lucide-react v1.x does not export Github)
const GithubIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
import data from '../data.json';

// Map project names to unique accent colors and pixel icons
const projectMeta: Record<string, { icon: string; accent: string; label: string }> = {
  'UTN-Conecta':         { icon: '🔗', accent: 'var(--phosphor)',  label: 'JAVA :: SPRING BOOT :: REACT' },
  'Gym Flow':            { icon: '⚡', accent: 'var(--green-sys)', label: 'MOBILE :: REST API :: DOCKER' },
  'E-store / Bookstore Backend': { icon: '⬡', accent: 'var(--crimson)',  label: 'PYTHON :: DJANGO :: SQL :: RBAC' },
  'AI Telegram Bot':     { icon: '◈', accent: '#c084fc',           label: 'GEMINI API :: GCLOUD :: DOCKER' },
};

export default function Projects() {
  const { projects } = data;

  return (
    <section id="projects" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '30%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(64,150,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="section-label">SECTOR_01</span>
        </div>
        <h2 className="section-title">// PROJECTS</h2>
        <div className="section-divider" style={{ maxWidth: '400px' }} />

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, idx) => {
            const meta = projectMeta[project.name] ?? { icon: '▣', accent: 'var(--phosphor)', label: 'PROJECT' };

            return (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = meta.accent;
                  el.style.boxShadow = `0 0 24px ${meta.accent === 'var(--phosphor)' ? 'rgba(64,150,255,0.2)' : 'rgba(224,53,53,0.15)'}`;
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--border)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Top accent bar (cartridge label) */}
                <div style={{
                  height: '4px',
                  background: `linear-gradient(90deg, ${meta.accent}, transparent)`,
                  boxShadow: `0 0 8px ${meta.accent === 'var(--phosphor)' ? 'rgba(64,150,255,0.4)' : 'rgba(224,53,53,0.4)'}`,
                }} />

                {/* Card image area — pixel console screen */}
                <div style={{
                  height: '120px',
                  background: 'var(--deep)',
                  borderBottom: '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Scanlines on card image */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)',
                    pointerEvents: 'none',
                  }} />
                  {/* Corner brackets */}
                  <div style={{ position: 'absolute', top: '8px', left: '8px', width: '16px', height: '16px', borderTop: '2px solid var(--border)', borderLeft: '2px solid var(--border)' }} />
                  <div style={{ position: 'absolute', top: '8px', right: '8px', width: '16px', height: '16px', borderTop: '2px solid var(--border)', borderRight: '2px solid var(--border)' }} />
                  <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '16px', height: '16px', borderBottom: '2px solid var(--border)', borderLeft: '2px solid var(--border)' }} />
                  <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '16px', height: '16px', borderBottom: '2px solid var(--border)', borderRight: '2px solid var(--border)' }} />

                  <span style={{ fontSize: '3rem', position: 'relative', zIndex: 1 }}>{meta.icon}</span>
                </div>

                {/* Card content */}
                <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Label */}
                  <div style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.45rem',
                    color: 'var(--console)',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}>
                    {meta.label}
                  </div>

                  <h3 style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--star)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.8',
                    textShadow: '0 0 8px rgba(168, 196, 224, 0.2)',
                  }}>
                    {project.name.toUpperCase()}
                  </h3>

                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                    lineHeight: '1.7',
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}>
                    {project.description}
                  </p>

                  {/* Footer link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '0.5rem',
                      color: 'var(--phosphor)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid var(--border)',
                      transition: 'all 0.15s ease',
                      alignSelf: 'flex-start',
                      letterSpacing: '0.08em',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'var(--phosphor)';
                      el.style.boxShadow = '0 0 8px rgba(64, 150, 255, 0.3)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'var(--border)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <GithubIcon size={12} />
                    VIEW_SOURCE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
