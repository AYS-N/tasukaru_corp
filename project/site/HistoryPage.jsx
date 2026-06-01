// HistoryPage.jsx — 会社沿革
const HISTORY = [
  { year: '◯◯◯◯', month: '◯月', body: '創業前史:代表◯◯が、リユース・整理業界での経験を積む。' },
  { year: '◯◯◯◯', month: '◯月', body: '株式会社タスカル設立。埼玉県上尾市にて事業開始。古物商許可取得。' },
  { year: '◯◯◯◯', month: '◯月', body: '酒類販売業免許取得。買取品目を拡大。' },
  { year: '◯◯◯◯', month: '◯月', body: '産業廃棄物収集運搬業許可(埼玉県)取得。法人取引対応体制を整備。' },
  { year: '◯◯◯◯', month: '◯月', body: '特別国際種事業者登録。象牙等の特殊品の合法取扱い体制を確立。' },
  { year: '◯◯◯◯', month: '◯月', body: '遺品整理士・3Rディレクター資格を取得。専門資格を有するスタッフ体制を整備。' },
  { year: '◯◯◯◯', month: '◯月', body: '法人提携パッケージを正式リリース。' },
];

const HistoryPage = () => (
  <main style={{ background: 'var(--cream)', padding: '96px 40px 160px' }}>
    <div style={{ maxWidth: 880, margin: '0 auto' }}>
      <div className="eyebrow-jp" style={{ marginBottom: 24 }}>HISTORY</div>
      <h2 style={{
        fontFamily: 'var(--font-jp-serif)',
        fontSize: 'clamp(28px, 3vw, 36px)',
        fontWeight: 500, lineHeight: 1.4,
        letterSpacing: '0.06em',
        margin: '0 0 24px',
      }}>会社沿革</h2>
      <p style={{
        fontSize: 14.5, color: 'var(--ink-2)',
        lineHeight: 2.05, margin: '0 0 56px',
        maxWidth: 640,
      }}>
        創業からこれまでの主要な出来事を、年表形式でご紹介いたします。
      </p>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 130, top: 12, bottom: 12,
          width: 1, background: 'var(--taupe)', opacity: 0.4,
        }}/>
        {HISTORY.map((h, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr',
            gap: 24, padding: '20px 0',
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontWeight: 500, fontSize: 22,
                color: 'var(--tascal-cyan-deep)',
                letterSpacing: '0.04em',
              }}>{h.year}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{h.month}</div>
              <span style={{
                position: 'absolute',
                left: 130, top: 14,
                width: 11, height: 11,
                borderRadius: '50%',
                background: 'var(--tascal-cyan)',
                border: '3px solid var(--cream)',
              }}/>
            </div>
            <div style={{
              fontSize: 14.5, color: 'var(--ink-1)',
              lineHeight: 2, paddingTop: 4,
            }}>{h.body}</div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

window.HistoryPage = HistoryPage;
