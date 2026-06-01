// ServiceIntro.jsx — homepage 6-service preview
// Renders from window.SERVICES_DATA so the catalog stays single-source.
const ServiceIntro = () => {
  const D = window.SERVICES_DATA;
  const KEYS = ['ihin-seiri', 'seizen-seiri', 'fukushi-seiri', 'cleanup', 'kaitori', 'ec'];
  const HREFS = {
    'ihin-seiri':   'services-ihin-seiri.html',
    'seizen-seiri': 'services-seizen-seiri.html',
    'fukushi-seiri':'services-fukushi-seiri.html',
    'cleanup':      'services-cleanup.html',
    'kaitori':      'services-kaitori.html',
    'ec':           'services-ec.html',
  };

  return (
    <section style={{
      padding: '120px 40px',
      background: 'var(--cream)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'end', marginBottom: 64,
        }}>
          <div>
            <div className="eyebrow-jp">SERVICES</div>
            <div className="rule-diagonal"/>
            <h2 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 500, lineHeight: 1.4,
              letterSpacing: '0.06em',
              margin: '20px 0 0',
            }}>
              ６つの事業で、<br/>暮らしと法人のご依頼に対応。
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="services.html" className="btn-arrow" style={{ fontSize: 14 }}>
              事業内容一覧を見る
              <span style={{ color: 'var(--tascal-cyan)', fontSize: 18 }}>→</span>
            </a>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24, alignItems: 'stretch',
        }}>
          {KEYS.map((k) => {
            const s = D[k];
            return (
              <a key={k} href={HREFS[k]} style={{
                textDecoration: 'none', display: 'block',
                position: 'relative',
                background: '#fff', borderRadius: 10,
                border: '1px solid var(--border-hair)',
                padding: '28px 28px 24px', boxShadow: 'none',
                transition: 'all 280ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-2)';
                e.currentTarget.style.borderColor = 'var(--leaf-soft)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-hair)';
              }}
              >
                {/* angled green tick accent */}
                <div className="concept-ticks" style={{ marginBottom: 18 }}>
                  <span/><span/><span/>
                </div>
                <div style={{
                  fontFamily: 'var(--font-latin)',
                  fontWeight: 300, fontSize: 40,
                  color: 'var(--leaf)', opacity: 0.4,
                  lineHeight: 1, letterSpacing: '-0.04em',
                  marginBottom: 10,
                }}>{s.num}</div>
                <div style={{
                  fontFamily: 'var(--font-latin)',
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.24em',
                  color: 'var(--tascal-cyan-deep)',
                  marginBottom: 6,
                }}>{s.en}</div>
                <h3 className="jp-spaced" style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontSize: 21, fontWeight: 500,
                  margin: '0 0 12px', color: 'var(--ink-1)',
                }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.85, margin: 0 }}>
                  {s.short}
                </p>
                <div style={{
                  marginTop: 20, paddingTop: 16,
                  borderTop: '1px solid var(--border-hair)',
                  fontSize: 12, color: 'var(--ink-3)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  詳しく見る
                  <span style={{ color: 'var(--tascal-cyan)' }}>→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.ServiceIntro = ServiceIntro;
