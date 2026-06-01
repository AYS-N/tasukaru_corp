// PageHero.jsx — shared sub-page hero
const PageHero = ({ en, jp, lead, crumbs }) => (
  <section style={{
    padding: '64px 40px 72px',
    background: 'var(--cream-deep)',
    borderBottom: '1px solid var(--border-hair)',
  }}>
    <div style={{ maxWidth: 1320, margin: '0 auto' }}>
      {crumbs && (
        <nav style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 24 }}>
          <a href="index.html" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>ホーム</a>
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              <span style={{ margin: '0 8px' }}>›</span>
              {c.href ? (
                <a href={c.href} style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>{c.label}</a>
              ) : (
                <span style={{ color: 'var(--ink-1)', fontWeight: 600 }}>{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}
      <div style={{
        fontFamily: 'var(--font-latin)',
        fontSize: 12, fontWeight: 600, letterSpacing: '0.32em',
        color: 'var(--tascal-cyan-deep)',
        marginBottom: 20,
      }}>{en}</div>
      <h1 style={{
        fontFamily: 'var(--font-jp-serif)',
        fontSize: 'clamp(36px, 4.4vw, 56px)',
        fontWeight: 500, lineHeight: 1.35,
        letterSpacing: '0.06em',
        color: 'var(--ink-1)',
        margin: '0 0 20px',
      }}>{jp}</h1>
      {lead && (
        <p style={{
          fontSize: 16, color: 'var(--ink-2)',
          lineHeight: 2.05, margin: 0, maxWidth: 720,
        }}>{lead}</p>
      )}
    </div>
  </section>
);

window.PageHero = PageHero;
