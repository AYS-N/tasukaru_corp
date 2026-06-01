// AboutIntro.jsx — homepage condensed company summary
const AboutIntro = () => (
  <section style={{ padding: '120px 40px', background: 'var(--cream)' }}>
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div className="eyebrow-jp">ABOUT US</div>
          <h2 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 500, lineHeight: 1.4,
            letterSpacing: '0.06em',
            margin: '24px 0 32px',
          }}>会社概要</h2>
          <a href="about.html" className="btn-arrow" style={{ fontSize: 14 }}>
            会社情報を詳しく見る
            <span style={{ color: 'var(--tascal-cyan)', fontSize: 18 }}>→</span>
          </a>
        </div>

        <dl style={{ margin: 0, padding: 0 }}>
          {[
            { label: '社名',       value: '株式会社タスカル' },
            { label: '所在地',     value: '埼玉県上尾市仲町1-7-25' },
            { label: '事業内容',   value: '遺品整理・生前整理・福祉整理・お片付け・買取・インターネット販売' },
            { label: '対応エリア', value: '埼玉県・東京都・千葉県・神奈川県(関東一円)' },
            { label: '許認可',     value: '古物商許可、産業廃棄物収集運搬業許可(埼玉県)、酒類販売業免許、特別国際種事業者登録' },
            { label: '保有資格',   value: '遺品整理士、3Rディレクター' },
          ].map(row => (
            <div key={row.label} style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: 24,
              padding: '18px 0',
              borderBottom: '1px solid var(--border-hair)',
              alignItems: 'start',
            }}>
              <dt style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 500, fontSize: 14,
                letterSpacing: '0.06em',
                color: 'var(--ink-1)',
              }}>{row.label}</dt>
              <dd style={{
                margin: 0, fontSize: 14,
                color: 'var(--ink-2)', lineHeight: 1.9,
              }}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

window.AboutIntro = AboutIntro;
