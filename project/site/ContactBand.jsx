// ContactBand.jsx — pre-footer CTA + recruit link
const ContactBand = () => (
  <section style={{
    padding: '120px 40px',
    background: 'var(--cream)',
  }}>
    <div style={{ maxWidth: 1320, margin: '0 auto' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 24,
      }}>
        <a href="contact.html" style={{
          textDecoration: 'none',
          background: '#fff',
          border: '1px solid var(--border-hair)',
          borderRadius: 12,
          padding: 40,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: 220,
          transition: 'all 280ms ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          <div>
            <div className="eyebrow-jp" style={{ marginBottom: 16 }}>CONTACT</div>
            <h2 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 28, fontWeight: 500,
              letterSpacing: '0.06em',
              margin: '0 0 12px', color: 'var(--ink-1)',
            }}>お問い合わせ</h2>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>
              ご相談・ご依頼は、お電話またはフォームよりお気軽にご連絡ください。
            </p>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            fontSize: 13, color: 'var(--tascal-cyan-deep)', fontWeight: 600,
          }}>
            お問い合わせフォームへ
            <span style={{ fontSize: 18 }}>→</span>
          </div>
        </a>

        <a href="recruit.html" style={{
          textDecoration: 'none',
          background: '#fff',
          border: '1px solid var(--border-hair)',
          borderRadius: 12,
          padding: 40,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: 220,
          transition: 'all 280ms ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          <div>
            <div className="eyebrow-jp" style={{ marginBottom: 16 }}>RECRUIT</div>
            <h2 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 28, fontWeight: 500,
              letterSpacing: '0.06em',
              margin: '0 0 12px', color: 'var(--ink-1)',
            }}>採用情報</h2>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>
              一緒に働く仲間を募集しています。未経験の方も歓迎いたします。
            </p>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            fontSize: 13, color: 'var(--tascal-cyan-deep)', fontWeight: 600,
          }}>
            募集要項を見る
            <span style={{ fontSize: 18 }}>→</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

window.ContactBand = ContactBand;
