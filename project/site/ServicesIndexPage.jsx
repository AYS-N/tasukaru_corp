// ServicesIndexPage.jsx — /services list with 6 services in 2 rows (整理 / 買取・販売)
const ServicesIndexPage = () => {
  const D = window.SERVICES_DATA;
  const HREFS = {
    'ihin-seiri':   'services-ihin-seiri.html',
    'seizen-seiri': 'services-seizen-seiri.html',
    'fukushi-seiri':'services-fukushi-seiri.html',
    'cleanup':      'services-cleanup.html',
    'kaitori':      'services-kaitori.html',
    'ec':           'services-ec.html',
  };

  const Group = ({ heading, en, keys }) => (
    <div style={{ marginBottom: 80 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 16,
        borderBottom: '1px solid var(--border-hair)',
        paddingBottom: 16, marginBottom: 32,
      }}>
        <div style={{
          fontFamily: 'var(--font-latin)',
          fontSize: 11, fontWeight: 600, letterSpacing: '0.28em',
          color: 'var(--tascal-cyan-deep)',
        }}>{en}</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 26, fontWeight: 500,
          letterSpacing: '0.06em',
          margin: 0, color: 'var(--ink-1)',
        }}>{heading}</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${keys.length}, 1fr)`,
        gap: 20,
      }}>
        {keys.map(k => {
          const s = D[k];
          return (
            <a key={k} href={HREFS[k]} style={{
              textDecoration: 'none',
              background: '#fff', borderRadius: 12,
              padding: 32, boxShadow: 'var(--shadow-1)',
              transition: 'all 280ms ease',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-1)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                <div style={{
                  fontFamily: 'var(--font-latin)',
                  fontWeight: 300, fontSize: 48,
                  color: 'var(--taupe)', opacity: 0.5,
                  lineHeight: 1, letterSpacing: '-0.04em',
                }}>{s.num}</div>
                <span style={{
                  color: 'var(--tascal-cyan)', fontSize: 22,
                }}>→</span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-latin)',
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.24em',
                  color: 'var(--tascal-cyan-deep)',
                  marginBottom: 6,
                }}>{s.en}</div>
                <h3 style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontSize: 22, fontWeight: 500,
                  letterSpacing: '0.04em',
                  margin: '0 0 10px', color: 'var(--ink-1)',
                }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.85, margin: 0 }}>
                  {s.short}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );

  return (
    <main style={{ background: 'var(--cream)', padding: '96px 40px 160px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <Group heading="整理サービス"   en="ORGANIZE" keys={['ihin-seiri', 'seizen-seiri', 'fukushi-seiri', 'cleanup']}/>
        <Group heading="買取・販売事業" en="REUSE"     keys={['kaitori', 'ec']}/>

        <div style={{
          background: 'var(--cream-deep)',
          borderRadius: 12, padding: '40px 48px',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
          marginTop: 24,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 22, fontWeight: 500, letterSpacing: '0.04em', marginBottom: 8 }}>
              「整理 → 買取 → 再販売」の垂直統合
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>
              整理現場で発生したお品物を、自社で買取し、自社のECで換金する一貫体制。お客様のご負担を最小化します。
            </p>
          </div>
          <a href="business.html" className="btn btn-primary">法人のお客様へ <span style={{ fontSize: 18 }}>→</span></a>
        </div>
      </div>
    </main>
  );
};

window.ServicesIndexPage = ServicesIndexPage;
