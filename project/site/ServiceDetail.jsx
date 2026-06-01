// ServiceDetail.jsx — shared template for each of the 6 service detail pages.
// Pass: meta + concerns + features + flow + relatedHrefs.

const ServiceDetail = ({ meta, concerns, features, areaNote, related }) => (
  <main style={{ background: 'var(--cream)' }}>

    {/* Hero with breadcrumb */}
    <section style={{
      padding: '64px 40px 80px',
      background: meta.accentBg || 'var(--cream-deep)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <nav style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 24 }}>
          <a href="index.html" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>ホーム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="services.html" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>事業内容</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--ink-1)', fontWeight: 600 }}>{meta.title}</span>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="eyebrow-jp" style={{ marginBottom: 16 }}>{meta.en}</div>
            <h1 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 'clamp(36px, 4.4vw, 56px)',
              fontWeight: 500, lineHeight: 1.35,
              letterSpacing: '0.06em', margin: '0 0 20px',
            }}>{meta.title}</h1>
            <p style={{
              fontSize: 16, color: 'var(--ink-2)', lineHeight: 2.1, margin: 0,
            }}>{meta.lead}</p>
          </div>

          <div style={{
            aspectRatio: '4 / 5',
            background: '#fff',
            borderRadius: 12,
            boxShadow: 'var(--shadow-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontWeight: 300, fontSize: 120,
                color: 'var(--tascal-cyan)', opacity: 0.5,
                lineHeight: 1, letterSpacing: '-0.04em',
              }}>{meta.num}</div>
              <div style={{
                fontFamily: 'var(--font-jp-serif)',
                fontSize: 28, fontWeight: 500,
                letterSpacing: '0.06em',
                color: 'var(--ink-1)', marginTop: 20,
              }}>{meta.title}</div>
            </div>
            <div style={{
              position: 'absolute', top: 20, left: 20,
              fontFamily: 'var(--font-latin)',
              fontSize: 10, fontWeight: 600, letterSpacing: '0.28em',
              color: 'var(--tascal-cyan-deep)',
            }}>NO. {meta.num}</div>
          </div>
        </div>
      </div>
    </section>

    {/* Concerns — "こんなお悩みありませんか?" */}
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>CONCERNS</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em', margin: '0 0 56px',
        }}>こんなお悩みは<br/>ありませんか？</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {concerns.map((c, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 8,
              padding: '24px 28px', boxShadow: 'var(--shadow-1)',
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <span style={{
                flexShrink: 0,
                color: 'var(--tascal-cyan)', fontWeight: 700,
                fontFamily: 'var(--font-jp-serif)', fontSize: 22, lineHeight: 1.3,
              }}>✓</span>
              <span style={{ fontSize: 15, color: 'var(--ink-1)', lineHeight: 1.85 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section style={{ padding: '120px 40px', background: 'var(--cream-deep)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>FEATURES</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em', margin: '0 0 56px',
        }}>サービスの特徴</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12,
              padding: 28, boxShadow: 'var(--shadow-1)',
            }}>
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 12, fontWeight: 500,
                letterSpacing: '0.24em',
                color: 'var(--tascal-cyan-deep)', marginBottom: 12,
              }}>NO. {String(i + 1).padStart(2, '0')}</div>
              <h3 style={{
                fontFamily: 'var(--font-jp-serif)',
                fontSize: 19, fontWeight: 500,
                letterSpacing: '0.04em', margin: '0 0 12px',
              }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 2, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Flow */}
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>FLOW</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em', margin: '0 0 56px',
        }}>作業の流れ</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 32, left: '12%', right: '12%',
            height: 1, borderTop: '1.5px dashed var(--taupe)', opacity: 0.5,
          }}/>
          {[
            { n: '01', en: 'INQUIRY',    title: 'お問い合わせ',     body: 'お電話・メール・フォームよりお気軽にご連絡ください。' },
            { n: '02', en: 'ESTIMATE',   title: '出張お見積もり',   body: 'スタッフがお伺いし、内容を確認の上、お見積もりを作成します。' },
            { n: '03', en: 'WORK',       title: '作業実施',         body: '当日は丁寧に作業を進めます。立ち合いなしでも対応可能です。' },
            { n: '04', en: 'COMPLETE',   title: '完了・お支払い',   body: 'お客様にご確認いただいた後、作業完了となります。' },
          ].map(s => (
            <div key={s.n} style={{ position: 'relative' }}>
              <div style={{
                position: 'relative', zIndex: 1,
                width: 64, height: 64, borderRadius: '50%',
                background: '#fff',
                border: '1.5px solid var(--tascal-cyan)',
                color: 'var(--tascal-cyan-deep)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-latin)', fontWeight: 500, fontSize: 20,
                margin: '0 auto 24px', boxShadow: 'var(--shadow-1)',
              }}>{s.n}</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-latin)',
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.28em',
                  color: 'var(--tascal-cyan-deep)', marginBottom: 8,
                }}>{s.en}</div>
                <h3 style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontSize: 17, fontWeight: 500,
                  letterSpacing: '0.04em', margin: '0 0 10px',
                }}>{s.title}</h3>
                <p style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.9, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Area */}
    <section style={{ padding: '0 40px 120px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{
          background: '#fff', border: '1px solid var(--border-hair)',
          borderRadius: 12, padding: '32px 40px',
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center',
        }}>
          <div>
            <div className="eyebrow-jp">AREA</div>
            <div style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 22, fontWeight: 500,
              letterSpacing: '0.04em', marginTop: 8,
            }}>対応エリア</div>
          </div>
          <div style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.95 }}>
            {areaNote || '埼玉県・東京都・千葉県・神奈川県を中心に対応しております。その他のエリアもご相談ください。'}
          </div>
        </div>
      </div>
    </section>

    {/* Related services */}
    <section style={{ padding: '0 40px 160px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>RELATED</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(24px, 2.6vw, 30px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em', margin: '0 0 32px',
        }}>関連サービス</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {related.map(r => (
            <a key={r.title} href={r.href} style={{
              textDecoration: 'none',
              background: '#fff', borderRadius: 12,
              padding: 24, boxShadow: 'var(--shadow-1)',
              transition: 'all 200ms ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.transform = ''; }}
            >
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 10, fontWeight: 600, letterSpacing: '0.24em',
                color: 'var(--tascal-cyan-deep)',
              }}>{r.en}</div>
              <h3 style={{
                fontFamily: 'var(--font-jp-serif)',
                fontSize: 19, fontWeight: 500,
                letterSpacing: '0.04em',
                margin: '8px 0 0', color: 'var(--ink-1)',
              }}>{r.title} →</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  </main>
);

window.ServiceDetail = ServiceDetail;
