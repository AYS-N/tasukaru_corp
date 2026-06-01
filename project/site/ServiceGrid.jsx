// ServiceGrid.jsx — editorial offset layout, overlapping-card motif
const SERVICES = [
  {
    num: '01',
    title: 'DX推進支援',
    en: 'Digital Transformation',
    icon: 'icon-dx.svg',
    items: ['クラウドシステム導入設定 (会計・請求・給与・勤怠)', '業務フローの再設計', 'ペーパーレス化支援'],
  },
  {
    num: '02',
    title: '記帳代行',
    en: 'Bookkeeping',
    icon: 'icon-bookkeeping.svg',
    items: ['会計ソフトへの仕訳入力', '帳簿作成・保管', '領収書等証憑書類の整理'],
  },
  {
    num: '03',
    title: '給与計算代行',
    en: 'Payroll',
    icon: 'icon-payroll.svg',
    items: ['勤怠管理システム運用', '給与明細書・給与台帳作成', '社会保険・労働保険手続き資料'],
  },
  {
    num: '04',
    title: '経理事務代行',
    en: 'Accounting Operations',
    icon: 'icon-accounting.svg',
    items: ['請求書発行', '売掛金管理', '振込支払登録', '経費精算'],
  },
];

const ServiceGrid = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section id="service" style={{
      padding: '160px 40px',
      background: 'var(--cream-deep)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 96 }}>
          <div className="eyebrow-jp">SERVICE</div>
          <h2 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontSize: 'clamp(32px, 3.4vw, 44px)',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '0.06em',
            margin: '24px 0 0',
            maxWidth: 640,
          }}>
            ４つの領域で、<br/>
            御社の<span style={{ color: 'var(--tascal-cyan-deep)' }}>バックオフィス</span>を支えます。
          </h2>
        </div>

        {/* Offset/staggered grid — every other card pushed down (editorial rhythm) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 48,
          rowGap: 64,
        }}>
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                marginTop: i % 2 === 1 ? 48 : 0,
                cursor: 'pointer',
              }}
            >
              {/* Number badge — floats above card */}
              <div style={{
                position: 'absolute',
                top: -28, left: 32,
                fontFamily: 'var(--font-latin)',
                fontWeight: 300,
                fontSize: 96,
                color: hovered === i ? 'var(--tascal-cyan)' : 'var(--taupe)',
                opacity: 0.45,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                transition: 'color 280ms ease',
                pointerEvents: 'none',
              }}>{s.num}</div>

              <div style={{
                position: 'relative',
                background: '#fff',
                borderRadius: 12,
                padding: '56px 40px 40px',
                boxShadow: hovered === i ? 'var(--shadow-2)' : 'var(--shadow-1)',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 280ms ease',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
                  <img src={`../assets/${s.icon}`} width="72" height="72" alt=""/>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-latin)',
                      fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.24em',
                      color: 'var(--tascal-cyan-deep)',
                      marginBottom: 4,
                    }}>{s.en}</div>
                    <h3 style={{
                      fontFamily: 'var(--font-jp-serif)',
                      fontSize: 26,
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: '0.04em',
                    }}>{s.title}</h3>
                  </div>
                </div>

                <ul style={{
                  margin: 0, padding: 0, listStyle: 'none',
                  display: 'flex', flexDirection: 'column', gap: 12,
                  borderTop: '1px solid var(--border-hair)',
                  paddingTop: 24,
                }}>
                  {s.items.map(it => (
                    <li key={it} style={{
                      position: 'relative',
                      paddingLeft: 20,
                      fontSize: 14,
                      color: 'var(--ink-2)',
                      lineHeight: 1.8,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '0.85em',
                        width: 10, height: 1.5,
                        background: 'var(--tascal-cyan)',
                      }}/>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.ServiceGrid = ServiceGrid;
