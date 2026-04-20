import { Mail, Phone } from 'lucide-react';
import data from '../data.json';

// LinkedIn SVG (not exported by lucide-react v1.x)
const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


const contactItems = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: (info: typeof data.personalInfo) => info.email,
    href: (info: typeof data.personalInfo) => `mailto:${info.email}`,
    accent: 'var(--phosphor)',
    command: '$ mateo --contact email',
  },
  {
    icon: LinkedinIcon,
    label: 'LINKEDIN',
    value: () => 'Mateo Romero',
    href: (info: typeof data.personalInfo) => info.linkedin,
    accent: '#60a5fa',
    command: '$ mateo --contact linkedin',
  },
  {
    icon: Phone,
    label: 'WHATSAPP',
    value: (info: typeof data.personalInfo) => info.phone,
    href: (info: typeof data.personalInfo) => `https://wa.me/${info.phone.replace(/\D/g, '')}`,
    accent: 'var(--green-sys)',
    command: '$ mateo --contact whatsapp',
  },
];

export default function Contact() {
  const { personalInfo } = data;

  return (
    <section id="contact" style={{
      padding: '6rem 1.5rem 4rem',
      backgroundColor: 'rgba(3, 8, 15, 0.8)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background planet/nebula glow */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '40%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(64,150,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="section-label">SECTOR_05</span>
        </div>
        <h2 className="section-title">// CONNECT</h2>
        <div className="section-divider" style={{ maxWidth: '260px' }} />

        {/* Tagline */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem',
          color: 'var(--text-dim)',
          marginBottom: '3rem',
          lineHeight: '1.7',
          maxWidth: '520px',
        }}>
          <span style={{ color: 'var(--phosphor)' }}>{'>'}</span>{' '}
          Currently open to new missions. Send a transmission if you'd like to connect,
          discuss a project, or just say hi.
        </p>

        {/* Contact cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href(personalInfo)}
                target={item.label !== 'EMAIL' ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'var(--surface)',
                  border: '2px solid var(--border)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = item.accent;
                  e.currentTarget.style.boxShadow = `0 0 20px rgba(64, 150, 255, 0.1)`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: item.accent, opacity: 0.8 }} />

                {/* Command line */}
                <span style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '0.42rem',
                  color: 'var(--console)',
                  letterSpacing: '0.08em',
                }}>
                  {item.command}
                </span>

                {/* Icon + label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `2px solid var(--border)`,
                    backgroundColor: 'var(--deep)',
                    flexShrink: 0,
                    color: item.accent,
                  }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '0.5rem',
                      color: 'var(--star)',
                      letterSpacing: '0.1em',
                      marginBottom: '0.25rem',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                    }}>
                      {item.value(personalInfo)}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '2px solid var(--border)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.45rem',
            color: 'var(--console)',
            letterSpacing: '0.1em',
          }}>
            © {new Date().getFullYear()} MATEO_ROMERO :: CÓRDOBA, ARG
          </span>
          <span style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.4rem',
            color: 'var(--border)',
            letterSpacing: '0.1em',
          }}>
            v2.0.0 — MISSION_ACTIVE
          </span>
        </div>
      </div>
    </section>
  );
}
