// TrustBar.jsx — 全ページ共通の許認可・資格バッジ
// Renders compact OR full mode based on prop.

const LICENSES = [
  { kind: '許認可', name: '古物商許可' },
  { kind: '許認可', name: '産業廃棄物収集運搬業 (埼玉)' },
  { kind: '許認可', name: '酒類販売業免許' },
  { kind: '許認可', name: '特別国際種事業者登録' },
  { kind: '資格',   name: '遺品整理士' },
  { kind: '資格',   name: '3Rディレクター' },
];

const TrustBar = ({ compact = false, theme = 'light' }) => {
  if (compact) {
    return (
      <div style={{
        background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'var(--cream-deep)',
        borderTop: '1px solid var(--border-hair)',
        borderBottom: '1px solid var(--border-hair)',
        padding: '14px 36px',
      }}>
        <div style={{
          maxWidth: 1320, margin: '0 auto',
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 14,
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-latin)',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.24em',
            color: theme === 'dark' ? 'var(--tascal-cyan)' : 'var(--tascal-cyan-deep)',
            marginRight: 8,
          }}>LICENSES &amp; QUALIFICATIONS</span>
          {LICENSES.map(l => (
            <span key={l.name} style={{
              fontSize: 12, fontWeight: 600,
              color: theme === 'dark' ? '#E2D9C7' : 'var(--ink-1)',
              padding: '4px 12px',
              borderRadius: 999,
              border: `1px solid ${l.kind === '許認可' ? 'var(--tascal-cyan)' : 'var(--taupe)'}`,
              background: theme === 'dark' ? 'transparent' : '#fff',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: l.kind === '許認可' ? 'var(--tascal-cyan)' : 'var(--taupe)',
              }}/>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Full mode for the About / Business pages
  return (
    <section style={{ padding: '96px 40px', background: 'var(--cream-deep)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>LICENSES &amp; QUALIFICATIONS</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(28px, 3vw, 36px)',
          fontWeight: 500, lineHeight: 1.4,
          letterSpacing: '0.06em',
          margin: '0 0 24px',
        }}>許認可・資格</h2>
        <p style={{
          fontSize: 14.5, color: 'var(--ink-2)',
          lineHeight: 2.05, margin: '0 0 56px',
          maxWidth: 640,
        }}>
          法令を遵守し、適切な許認可を取得した上で事業を運営しています。専門資格を持つスタッフが、責任を持って対応いたします。
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {LICENSES.map((l, i) => (
            <div key={l.name} style={{
              background: '#fff', borderRadius: 12,
              padding: '24px 28px', boxShadow: 'var(--shadow-1)',
              display: 'flex', gap: 20, alignItems: 'flex-start',
            }}>
              <div style={{
                flexShrink: 0,
                width: 44, height: 44, borderRadius: '50%',
                background: l.kind === '許認可' ? 'var(--tascal-cyan-tint)' : 'var(--cream-deep)',
                border: `1.5px solid ${l.kind === '許認可' ? 'var(--tascal-cyan)' : 'var(--taupe)'}`,
                color: l.kind === '許認可' ? 'var(--tascal-cyan-deep)' : 'var(--bark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-latin)', fontWeight: 500, fontSize: 13,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
                  color: l.kind === '許認可' ? 'var(--tascal-cyan-deep)' : 'var(--bark)',
                  background: l.kind === '許認可' ? 'var(--tascal-cyan-tint)' : 'var(--sand)',
                  padding: '3px 10px', borderRadius: 999, marginBottom: 8,
                }}>{l.kind}</div>
                <h3 style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontSize: 17, fontWeight: 500, letterSpacing: '0.04em',
                  margin: 0, color: 'var(--ink-1)',
                }}>{l.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.TrustBar = TrustBar;
window.LICENSES_DATA = LICENSES;
