import { ArrowRight } from 'lucide-react';
import blogData from '../blog.json';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  content: string;
  link?: string;
  linkText?: string;
}

export default function Feed() {
  return (
    <section id="updates" style={{
      padding: '6rem 1.5rem',
      backgroundColor: 'rgba(6, 14, 28, 0.5)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="section-label">SECTOR_04</span>
        </div>
        <h2 className="section-title">// UPDATES</h2>
        <div className="section-divider" style={{ maxWidth: '280px' }} />

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
          {(blogData as BlogPost[]).map((post) => (
            <li
              key={post.id}
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
                e.currentTarget.style.boxShadow = '0 0 12px rgba(64, 150, 255, 0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left accent bar */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                background: 'linear-gradient(180deg, var(--phosphor), var(--crimson))',
              }} />

              {/* Date */}
              <div style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '0.45rem',
                color: 'var(--console)',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
              }}>
                {'>>> '}[{post.date.toUpperCase()}]
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '0.6rem',
                color: 'var(--star)',
                lineHeight: '1.8',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em',
              }}>
                {post.title}
              </h3>

              {/* Content */}
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                lineHeight: '1.75',
                marginBottom: post.link ? '1rem' : 0,
              }}>
                {post.content}
              </p>

              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.5rem',
                    color: 'var(--phosphor)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    letterSpacing: '0.08em',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--star)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--phosphor)')}
                >
                  {post.linkText ?? 'READ_MORE'}
                  <ArrowRight size={12} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
