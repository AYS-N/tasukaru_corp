// AboutPage.jsx — /about company overview (full)
const COMPANY_INFO = [
  { label: '社名',           value: '株式会社タスカル (Tasukaru Inc.)' },
  { label: '所在地',         value: '〒362-0035 埼玉県上尾市仲町1-7-25' },
  { label: '電話番号',       value: '0120-433-233 (受付 10:00-19:00 / 年中無休)' },
  { label: '代表者',         value: '代表取締役 竹井 信二' },
  { label: '設立',           value: '◯◯◯◯年◯月' },
  { label: '資本金',         value: '◯◯◯万円' },
  { label: '従業員数',       value: '◯◯名' },
  { label: '事業内容',       value: '・買取事業\n・インターネット販売事業\n・お片付け\n・遺品整理\n・生前整理\n・福祉整理' },
  { label: '対応エリア',     value: '埼玉県・東京都・千葉県・神奈川県を中心に関東一円' },
  { label: '加盟団体',       value: '一般社団法人遺品整理士認定協会、その他' },
  { label: '取引銀行',       value: '◯◯銀行 ◯◯支店、◯◯信用金庫' },
  { label: '主要取引先',     value: '不動産会社様、士業事務所様、福祉施設様、葬儀社様 他' },
];

const AboutPage = () => (
  <main style={{ background: 'var(--cream)' }}>
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>OVERVIEW</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(28px, 3vw, 36px)',
          fontWeight: 500, lineHeight: 1.4,
          letterSpacing: '0.06em',
          margin: '0 0 48px',
        }}>会社概要</h2>

        <dl style={{ margin: 0, padding: 0 }}>
          {COMPANY_INFO.map(row => (
            <div key={row.label} style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: 24,
              padding: '20px 0',
              borderBottom: '1px solid var(--border-hair)',
              alignItems: 'start',
            }}>
              <dt style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 500, fontSize: 15,
                letterSpacing: '0.06em',
                color: 'var(--ink-1)',
              }}>{row.label}</dt>
              <dd style={{
                margin: 0, fontSize: 14.5,
                color: 'var(--ink-2)', lineHeight: 1.95,
                whiteSpace: 'pre-line',
              }}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Quick links to greeting / history */}
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          <a href="about-greeting.html" style={{
            textDecoration: 'none',
            background: '#fff', border: '1px solid var(--border-hair)',
            borderRadius: 12, padding: 36,
            transition: 'all 280ms ease', display: 'block',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
          >
            <div className="eyebrow-jp" style={{ marginBottom: 16 }}>GREETING</div>
            <h3 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 22, fontWeight: 500,
              letterSpacing: '0.06em',
              margin: '0 0 10px', color: 'var(--ink-1)',
            }}>代表挨拶 →</h3>
            <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>
              タスカルの理念と、創業からの想い。代表より一言ご挨拶申し上げます。
            </p>
          </a>
          <a href="about-history.html" style={{
            textDecoration: 'none',
            background: '#fff', border: '1px solid var(--border-hair)',
            borderRadius: 12, padding: 36,
            transition: 'all 280ms ease', display: 'block',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
          >
            <div className="eyebrow-jp" style={{ marginBottom: 16 }}>HISTORY</div>
            <h3 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 22, fontWeight: 500,
              letterSpacing: '0.06em',
              margin: '0 0 10px', color: 'var(--ink-1)',
            }}>会社沿革 →</h3>
            <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>
              創業からの主要な出来事を年表でまとめております。
            </p>
          </a>
        </div>
      </div>
    </section>

    {/* Access */}
    <section style={{ padding: '0 40px 120px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>ACCESS</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(24px, 2.6vw, 30px)',
          fontWeight: 500, lineHeight: 1.4,
          letterSpacing: '0.06em',
          margin: '0 0 32px',
        }}>アクセス</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'center' }}>
          <div style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 2.05 }}>
            <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 17, color: 'var(--ink-1)', marginBottom: 12 }}>
              株式会社タスカル
            </div>
            〒362-0035<br/>
            埼玉県上尾市仲町1-7-25<br/>
            <br/>
            <strong style={{ color: 'var(--ink-1)' }}>最寄駅:</strong> JR高崎線「上尾駅」<br/>
            <strong style={{ color: 'var(--ink-1)' }}>TEL:</strong> 0120-433-233
          </div>
          <div style={{
            aspectRatio: '4 / 3',
            background: 'var(--sand)',
            borderRadius: 12,
            boxShadow: 'var(--shadow-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--bark)',
            fontFamily: 'var(--font-latin)',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.28em',
          }}>MAP — 埼玉県上尾市仲町1-7-25</div>
        </div>
      </div>
    </section>
  </main>
);

window.AboutPage = AboutPage;
