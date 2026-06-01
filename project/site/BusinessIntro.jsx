// BusinessIntro.jsx — homepage link block to 法人のお客様へ
const BusinessIntro = () => (
  <section style={{ padding: '120px 40px', background: 'var(--ink-1)', color: '#fff' }}>
    <div style={{
      maxWidth: 1320, margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      gap: 80, alignItems: 'center',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-latin)',
          fontSize: 12, fontWeight: 600, letterSpacing: '0.32em',
          color: 'var(--tascal-cyan)',
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginBottom: 24,
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--tascal-cyan)' }}/>
          FOR BUSINESS
        </div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em',
          color: '#fff',
          margin: '0 0 24px',
        }}>
          法人のお客様へ。<br/>
          整理・買取の<span style={{ color: 'var(--tascal-cyan)' }}>協業パートナー</span>として。
        </h2>
        <p style={{
          fontSize: 15.5, color: '#B8C2CB',
          lineHeight: 2.1, margin: '0 0 32px', maxWidth: 540,
        }}>
          不動産会社様、士業の先生方、ケアマネジャー・福祉施設様、葬儀社様。それぞれの業種に合わせた連携パッケージをご用意しています。産廃許可・特別国際種登録・酒類販売業免許など、法人取引で必要となる許認可を整備しています。
        </p>
        <a href="business.html" className="btn btn-cyan">
          法人のお客様へ
          <span style={{ fontSize: 18 }}>→</span>
        </a>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        padding: 32,
      }}>
        <div style={{
          fontFamily: 'var(--font-latin)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.28em',
          color: 'var(--tascal-cyan)', marginBottom: 16,
        }}>PARTNERSHIP PACKAGES</div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { label: '不動産会社様向け',           sub: 'お片付け + 遺品整理 + 買取' },
            { label: '士業の先生方向け',            sub: '相続関連・遺品整理 + 買取' },
            { label: 'ケアマネ・福祉施設様向け',    sub: '福祉整理 + 生前整理 + お片付け' },
            { label: '葬儀社様向け',                sub: 'ご遺族紹介での遺品整理 + 買取' },
          ].map(p => (
            <li key={p.label} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              gap: 16,
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 16, color: '#fff', marginBottom: 2 }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 12, color: '#7B8D98' }}>{p.sub}</div>
              </div>
              <span style={{ color: 'var(--tascal-cyan)', fontSize: 18 }}>→</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

window.BusinessIntro = BusinessIntro;
