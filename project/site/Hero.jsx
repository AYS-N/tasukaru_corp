// Hero.jsx — editorial overlapping-card hero (previous version, restored)
const Hero = () => (
  <section id="top" style={{
    position: 'relative',
    padding: '80px 40px 140px',
    overflow: 'hidden',
  }}>
    {/* Background atmosphere: soft leaf washes (shakujii-dc nature feel) */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
    }}>
      <div style={{
        position: 'absolute', top: '-12%', right: '-12%', width: '64%', height: '116%',
        background: 'var(--leaf-tint)',
        transform: 'rotate(-7deg)',
        borderRadius: '42% 32% 36% 40%',
        opacity: 0.9,
      }}/>
      <div style={{
        position: 'absolute', top: '8%', right: '2%', width: '44%', height: '76%',
        background: 'var(--leaf-soft)',
        transform: 'rotate(-13deg)',
        borderRadius: '46% 34% 40% 30%',
        opacity: 0.55,
      }}/>
    </div>

    <div style={{
      position: 'relative', zIndex: 1,
      maxWidth: 1320, margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 0.85fr',
      gap: 80,
      alignItems: 'center',
      paddingTop: 80,
    }}>
      <div>
        <div className="eyebrow-jp" style={{ marginBottom: 32 }}>
          REUSE × ORGANIZE × CARE
        </div>
        <h1 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(40px, 4.8vw, 64px)',
          fontWeight: 500,
          lineHeight: 1.45,
          letterSpacing: '0.08em',
          color: 'var(--ink-1)',
          margin: '0 0 32px',
        }}>
          かたづかない<span style={{ color: 'var(--leaf-deep)' }}>モノ</span>と<br/>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            思い出を、丁寧に。
            <span style={{
              position: 'absolute', left: 0, bottom: -8,
              width: '100%', height: 8,
              background: 'var(--leaf)',
              opacity: 0.3,
              borderRadius: 4,
            }}/>
          </span>
        </h1>
        <p style={{
          fontSize: 17,
          color: 'var(--ink-2)',
          lineHeight: 1.95,
          maxWidth: 540,
          margin: '0 0 48px',
        }}>
          お片付け・遺品整理・生前整理・福祉整理から、買取・インターネット販売まで。<br/>
          埼玉・上尾を拠点に、ご家庭の「困った」をまるごとお引き受けします。
        </p>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="contact.html" className="btn btn-primary">
            お問い合わせ
            <span style={{ fontSize: 18 }}>→</span>
          </a>
          <a href="business.html" className="btn-arrow" style={{
            fontFamily: 'var(--font-base)', fontSize: 14, fontWeight: 600,
          }}>
            法人のお客様へ
            <span style={{ color: 'var(--tascal-cyan)' }}>→</span>
          </a>
        </div>
      </div>

      {/* Overlapping plates */}
      <div style={{ position: 'relative', height: 560 }}>
        <a href="services-kaitori.html" style={{
          textDecoration: 'none',
          position: 'absolute', top: 0, right: 60,
          width: 260, height: 340,
          background: '#fff',
          borderRadius: 8,
          boxShadow: 'var(--shadow-2)',
          padding: 32,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          transform: 'rotate(2.5deg)',
          transition: 'transform 280ms ease, box-shadow 280ms ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px) rotate(2.5deg)'; e.currentTarget.style.boxShadow = 'var(--shadow-3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(2.5deg)'; e.currentTarget.style.boxShadow = 'var(--shadow-2)'; }}
        >
          <div style={{ fontFamily: 'var(--font-latin)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--leaf-deep)', fontWeight: 600 }}>SERVICE 05</div>
          <div>
            <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 32, fontWeight: 500, letterSpacing: '0.04em', lineHeight: 1.3, color: 'var(--ink-1)' }}>買取<br/>事業</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 12, lineHeight: 1.8 }}>
              貴金属・時計・カメラ<br/>骨董・着物・酒類まで
            </div>
          </div>
        </a>

        <a href="services-ihin-seiri.html" style={{
          textDecoration: 'none',
          position: 'absolute', top: 120, left: 0,
          width: 240, height: 320,
          background: 'var(--cream-deep)',
          borderRadius: 8,
          boxShadow: 'var(--shadow-2)',
          padding: 28,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          transform: 'rotate(-3deg)',
          transition: 'transform 280ms ease, box-shadow 280ms ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px) rotate(-3deg)'; e.currentTarget.style.boxShadow = 'var(--shadow-3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-3deg)'; e.currentTarget.style.boxShadow = 'var(--shadow-2)'; }}
        >
          <div style={{ fontFamily: 'var(--font-latin)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--bark)', fontWeight: 600 }}>SERVICE 01</div>
          <div>
            <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 30, fontWeight: 500, letterSpacing: '0.04em', lineHeight: 1.3, color: 'var(--ink-1)' }}>遺品<br/>整理</div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 12, lineHeight: 1.8 }}>
              故人を偲びながら、<br/>ひとつずつ丁寧に。
            </div>
          </div>
        </a>

        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: 220, height: 220,
          background: 'var(--ink-1)',
          color: '#fff',
          borderRadius: 8,
          boxShadow: 'var(--shadow-3)',
          transform: 'rotate(1.5deg)',
          padding: 28,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{
            fontFamily: 'var(--font-latin)',
            fontSize: 10, fontWeight: 600,
            letterSpacing: '0.3em',
            color: 'var(--leaf-bright)',
          }}>FROM SAITAMA</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 22, fontWeight: 500, lineHeight: 1.4,
              letterSpacing: '0.06em',
            }}>上尾から、<br/>関東一円へ。</div>
            <div style={{ fontSize: 11, marginTop: 12, color: '#B8C2CB', letterSpacing: '0.08em' }}>
              Ageo, Saitama
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{
      position: 'absolute', bottom: 32, left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-latin)',
      fontSize: 10, letterSpacing: '0.3em',
      color: 'var(--ink-3)',
      writingMode: 'vertical-rl',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <span>SCROLL</span>
      <span style={{ width: 1, height: 40, background: 'var(--ink-3)' }}/>
    </div>
  </section>
);

window.Hero = Hero;
