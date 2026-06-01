// Footer.jsx — corporate footer with sitemap + license bar
const SITEMAP = [
  {
    head: '会社情報',
    en: 'ABOUT',
    items: [
      { t: '会社概要',    h: 'about.html' },
      { t: '代表挨拶',    h: 'about-greeting.html' },
      { t: '会社沿革',    h: 'about-history.html' },
    ],
  },
  {
    head: '事業内容',
    en: 'SERVICES',
    items: [
      { t: '遺品整理',          h: 'services-ihin-seiri.html' },
      { t: '生前整理',          h: 'services-seizen-seiri.html' },
      { t: '福祉整理',          h: 'services-fukushi-seiri.html' },
      { t: 'お片付け',          h: 'services-cleanup.html' },
      { t: '買取事業',          h: 'services-kaitori.html' },
      { t: 'インターネット販売', h: 'services-ec.html' },
    ],
  },
  {
    head: 'その他',
    en: 'OTHERS',
    items: [
      { t: '法人のお客様へ',     h: 'business.html' },
      { t: '採用情報',           h: 'recruit.html' },
      { t: 'お問い合わせ',       h: 'contact.html' },
      { t: 'プライバシーポリシー', h: 'privacy.html' },
    ],
  },
];

const Footer = () => (
  <footer style={{
    background: 'var(--ink-1)',
    color: '#fff',
    padding: '80px 40px 32px',
  }}>
    <div style={{ maxWidth: 1320, margin: '0 auto' }}>

      {/* License bar — persistent compliance signal */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        padding: '20px 24px',
        marginBottom: 64,
      }}>
        <div style={{
          fontFamily: 'var(--font-latin)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.28em',
          color: 'var(--tascal-cyan)',
          marginBottom: 12,
        }}>LICENSES &amp; QUALIFICATIONS</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { kind: '許認可', name: '古物商許可' },
            { kind: '許認可', name: '産業廃棄物収集運搬業 (埼玉)' },
            { kind: '許認可', name: '酒類販売業免許' },
            { kind: '許認可', name: '特別国際種事業者登録' },
            { kind: '資格',   name: '遺品整理士' },
            { kind: '資格',   name: '3Rディレクター' },
          ].map(l => (
            <span key={l.name} style={{
              fontSize: 12, fontWeight: 500,
              color: '#fff',
              padding: '5px 12px',
              borderRadius: 999,
              border: `1px solid ${l.kind === '許認可' ? 'var(--tascal-cyan)' : 'var(--taupe)'}`,
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

      <div style={{
        display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
        gap: 56, marginBottom: 56,
      }}>
        <div>
          <img src="../assets/logo-tasukaru.png" alt="タスカル tasukaru" style={{ height: 56, filter: 'brightness(0) invert(1)' }}/>
          <div style={{ marginTop: 28, fontSize: 13, color: '#B8C2CB', lineHeight: 2 }}>
            株式会社タスカル<br/>
            〒362-0035<br/>
            埼玉県上尾市仲町1-7-25
          </div>
          <div style={{ marginTop: 20, lineHeight: 1.4 }}>
            <a href="tel:0120433233" style={{
              fontFamily: 'var(--font-latin)',
              fontSize: 22, fontWeight: 600,
              color: '#fff', textDecoration: 'none',
            }}>0120-433-233</a>
            <div style={{ fontSize: 11, color: '#7B8D98' }}>受付 10:00 - 19:00 / 年中無休</div>
          </div>
        </div>

        {SITEMAP.map(col => (
          <div key={col.head}>
            <div style={{
              fontFamily: 'var(--font-latin)',
              fontSize: 10, fontWeight: 600, letterSpacing: '0.28em',
              color: 'var(--tascal-cyan)', marginBottom: 16,
            }}>{col.en}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map(it => (
                <li key={it.t}>
                  <a href={it.h} style={{
                    fontSize: 13.5, color: '#fff',
                    textDecoration: 'none',
                  }}>— {it.t}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        fontSize: 12, color: '#7B8D98',
      }}>
        <div>© 株式会社タスカル All Rights Reserved.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="privacy.html" style={{ color: '#7B8D98', textDecoration: 'none' }}>プライバシーポリシー</a>
          <a href="contact.html" style={{ color: '#7B8D98', textDecoration: 'none' }}>お問い合わせ</a>
        </div>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
