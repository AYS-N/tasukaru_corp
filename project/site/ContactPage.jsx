// ContactPage.jsx — /contact full form
const ContactPage = () => {
  const [sent, setSent] = React.useState(false);
  // Read ?type= preselect from URL
  const initialType = (() => {
    if (typeof window === 'undefined') return 'service';
    const p = new URLSearchParams(window.location.search).get('type');
    return p || 'service';
  })();
  const [type, setType] = React.useState(initialType);

  return (
    <main style={{ background: 'var(--cream)', padding: '96px 40px 160px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>

          {/* Left — info */}
          <aside>
            <div className="eyebrow-jp" style={{ marginBottom: 24 }}>INFORMATION</div>
            <h2 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              fontWeight: 500, lineHeight: 1.45,
              letterSpacing: '0.06em',
              margin: '0 0 32px',
            }}>その他の<br/>お問い合わせ方法</h2>

            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontFamily: 'var(--font-latin)', fontSize: 10,
                fontWeight: 600, letterSpacing: '0.28em',
                color: 'var(--tascal-cyan-deep)', marginBottom: 8,
              }}>TEL</div>
              <a href="tel:0120433233" style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 26, fontWeight: 600,
                color: 'var(--ink-1)', textDecoration: 'none',
                letterSpacing: '0.02em',
              }}>0120-433-233</a>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>受付 10:00 - 19:00 / 年中無休</div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontFamily: 'var(--font-latin)', fontSize: 10,
                fontWeight: 600, letterSpacing: '0.28em',
                color: 'var(--tascal-cyan-deep)', marginBottom: 8,
              }}>EMAIL</div>
              <a href="mailto:info@tasukaru.example.com" style={{
                fontSize: 15, color: 'var(--ink-1)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--tascal-cyan)',
                textUnderlineOffset: 4,
              }}>info@tasukaru.example.com</a>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontFamily: 'var(--font-latin)', fontSize: 10,
                fontWeight: 600, letterSpacing: '0.28em',
                color: 'var(--tascal-cyan-deep)', marginBottom: 8,
              }}>OFFICE</div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.95 }}>
                〒362-0035<br/>
                埼玉県上尾市仲町1-7-25
              </div>
            </div>

            <div style={{
              padding: 24,
              background: 'var(--tascal-cyan-tint)',
              borderRadius: 8,
              border: '1px solid var(--tascal-cyan-soft)',
            }}>
              <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 16, color: 'var(--ink-1)', marginBottom: 8 }}>
                ご相談・お見積もりは無料です
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.85 }}>
                出張査定・お見積もりにかかる費用は一切ありません。お気軽にお問い合わせください。
              </p>
            </div>
          </aside>

          {/* Right — form */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            padding: 48,
            boxShadow: 'var(--shadow-1)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  fontFamily: 'var(--font-latin)', fontSize: 11,
                  fontWeight: 600, letterSpacing: '0.28em',
                  color: 'var(--tascal-cyan-deep)', marginBottom: 16,
                }}>THANK YOU</div>
                <h3 style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontSize: 28, fontWeight: 500,
                  letterSpacing: '0.06em', margin: '0 0 16px',
                }}>お問い合わせ<br/>ありがとうございます。</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 2, margin: 0 }}>
                  内容を確認のうえ、3営業日以内にご連絡いたします。
                </p>
                <button onClick={() => setSent(false)} className="btn btn-ghost" style={{ marginTop: 32 }}>
                  新しい問い合わせ
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

                {/* Type pulldown */}
                <div>
                  <label style={{
                    display: 'block', fontSize: 13, fontWeight: 600,
                    color: 'var(--ink-1)', marginBottom: 8,
                  }}>お問い合わせ種別 <span style={{ color: 'var(--error)', fontSize: 11, marginLeft: 4 }}>必須</span></label>
                  <select
                    className="input"
                    value={type}
                    onChange={e => setType(e.target.value)}
                    required
                    style={{
                      borderBottom: '1.5px solid var(--border-input)',
                      borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                      background: 'transparent',
                      paddingLeft: 0,
                    }}
                  >
                    <option value="service">サービスについて</option>
                    <option value="business">法人提携について</option>
                    <option value="recruit">採用応募について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* Service detail checkboxes — only show for type=service */}
                {type === 'service' && (
                  <div>
                    <label style={{
                      display: 'block', fontSize: 13, fontWeight: 600,
                      color: 'var(--ink-1)', marginBottom: 8,
                    }}>ご相談内容 (複数選択可)</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['遺品整理', '生前整理', '福祉整理', 'お片付け', '買取', 'その他'].map(t => (
                        <label key={t} style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          padding: '7px 14px', border: '1px solid var(--border-hair)',
                          borderRadius: 999, fontSize: 13, cursor: 'pointer',
                          background: '#fff',
                        }}>
                          <input type="checkbox" name="topic" value={t} style={{ accentColor: 'var(--tascal-cyan)' }}/>
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label style={{
                    display: 'block', fontSize: 13, fontWeight: 600,
                    color: 'var(--ink-1)', marginBottom: 8,
                  }}>お名前 <span style={{ color: 'var(--error)', fontSize: 11, marginLeft: 4 }}>必須</span></label>
                  <input className="input" placeholder="山田 太郎" required/>
                </div>

                {type === 'business' && (
                  <div>
                    <label style={{
                      display: 'block', fontSize: 13, fontWeight: 600,
                      color: 'var(--ink-1)', marginBottom: 8,
                    }}>貴社名</label>
                    <input className="input" placeholder="株式会社○○"/>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div>
                    <label style={{
                      display: 'block', fontSize: 13, fontWeight: 600,
                      color: 'var(--ink-1)', marginBottom: 8,
                    }}>電話番号</label>
                    <input className="input" placeholder="000-0000-0000" type="tel"/>
                  </div>
                  <div>
                    <label style={{
                      display: 'block', fontSize: 13, fontWeight: 600,
                      color: 'var(--ink-1)', marginBottom: 8,
                    }}>メールアドレス <span style={{ color: 'var(--error)', fontSize: 11, marginLeft: 4 }}>必須</span></label>
                    <input className="input" type="email" placeholder="example@email.com" required/>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block', fontSize: 13, fontWeight: 600,
                    color: 'var(--ink-1)', marginBottom: 8,
                  }}>ご住所 <span style={{ color: 'var(--ink-3)', fontSize: 11, marginLeft: 4 }}>任意</span></label>
                  <input className="input" placeholder="埼玉県◯◯市..."/>
                </div>

                <div>
                  <label style={{
                    display: 'block', fontSize: 13, fontWeight: 600,
                    color: 'var(--ink-1)', marginBottom: 8,
                  }}>お問い合わせ内容</label>
                  <textarea className="input" rows="5" placeholder="ご相談したい内容をご記入ください" style={{ resize: 'vertical' }}/>
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: 13, color: 'var(--ink-2)',
                }}>
                  <input type="checkbox" id="privacy" required style={{ accentColor: 'var(--tascal-cyan)' }}/>
                  <label htmlFor="privacy">
                    <a href="privacy.html" style={{ color: 'var(--ink-1)' }}>プライバシーポリシー</a>に同意する
                  </label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '16px 40px' }}>
                  送信する <span style={{ fontSize: 18 }}>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

window.ContactPage = ContactPage;
