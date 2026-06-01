// BusinessPage.jsx — /business 法人のお客様へ (最重要ページ)
const PACKAGES = [
  {
    target: '不動産会社様向け',
    en: 'REAL ESTATE',
    use: '残置物処理 / 相続物件 / 空き家管理',
    body: '不動産売買・賃貸物件における残置物の処理、相続不動産の整理、空き家管理など。発生した品物を当社で買い取り、お見積もり金額から相殺することで、貴社・買主様双方のご負担を軽減します。',
    items: ['お片付け', '遺品整理', '買取事業'],
  },
  {
    target: '士業の先生方向け',
    en: 'LEGAL · TAX',
    use: '相続案件 / 後見業務 / 任意整理',
    body: '相続案件・後見業務に伴う遺品整理、生前整理のご相談に対応します。古物商として適法な買取、特別国際種事業者として象牙等の合法処理など、法的に整った形でお引き受けいたします。',
    items: ['遺品整理', '生前整理', '買取事業'],
  },
  {
    target: 'ケアマネジャー・福祉施設様向け',
    en: 'WELFARE',
    use: '入居前整理 / 在宅環境整備 / ゴミ屋敷対応',
    body: 'ご利用者様の介護施設入居前のお片付け、在宅生活継続のための住環境整備、ゴミ屋敷状態の改善など。ケアマネジャー様・ソーシャルワーカー様と直接連携した実績が豊富です。',
    items: ['福祉整理', '生前整理', 'お片付け'],
  },
  {
    target: '葬儀社様向け',
    en: 'FUNERAL',
    use: 'ご遺族紹介 / 遺品整理 / 遺品買取',
    body: 'ご葬儀後のご遺族へのご紹介サービスとして、遺品整理・買取をパッケージで提供します。お焚き上げ・供養手配まで一括対応可能で、ご遺族のお手間を最小限に抑えます。',
    items: ['遺品整理', '買取事業'],
  },
];

const BusinessPage = () => (
  <main style={{ background: 'var(--cream)' }}>

    {/* Lead */}
    <section style={{ padding: '96px 40px 80px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.65,
          letterSpacing: '0.06em',
          margin: '0 0 32px', color: 'var(--ink-1)',
        }}>
          整理・買取・再販売を一貫して扱う事業者として、<br/>
          法人のお客様の協業パートナーを目指します。
        </h2>
        <p style={{
          fontSize: 15.5, color: 'var(--ink-2)',
          lineHeight: 2.1, margin: 0, maxWidth: 720,
        }}>
          タスカルは、整理・買取・再販売の垂直統合モデルを軸に、各業種の協業パートナーとして機能できる体制を整えています。古物商許可・産業廃棄物収集運搬業許可・酒類販売業免許・特別国際種事業者登録に加え、遺品整理士・3Rディレクターなどの専門資格を持つスタッフが対応。法人取引で必要となるコンプライアンス要件を満たし、安心してお取引いただける環境をご提供します。
        </p>
      </div>
    </section>

    {/* Packages */}
    <section style={{ padding: '40px 40px 96px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>PACKAGES</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em',
          margin: '0 0 56px',
        }}>業種別 連携パッケージ</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {PACKAGES.map(p => (
            <div key={p.target} style={{
              background: '#fff', borderRadius: 12,
              padding: 36, boxShadow: 'var(--shadow-1)',
            }}>
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 10, fontWeight: 600, letterSpacing: '0.28em',
                color: 'var(--tascal-cyan-deep)',
                marginBottom: 10,
              }}>{p.en}</div>
              <h3 style={{
                fontFamily: 'var(--font-jp-serif)',
                fontSize: 22, fontWeight: 500,
                letterSpacing: '0.04em',
                margin: '0 0 8px',
              }}>{p.target}</h3>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: 20, letterSpacing: '0.04em' }}>
                {p.use}
              </div>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 2.05, margin: '0 0 20px' }}>
                {p.body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 16, borderTop: '1px solid var(--border-hair)' }}>
                {p.items.map(it => (
                  <span key={it} style={{
                    fontSize: 12, fontWeight: 600,
                    color: 'var(--tascal-cyan-deep)',
                    background: 'var(--tascal-cyan-tint)',
                    padding: '4px 12px', borderRadius: 999,
                  }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Strengths */}
    <section style={{ padding: '96px 40px', background: 'var(--ink-1)', color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-latin)',
          fontSize: 12, fontWeight: 600, letterSpacing: '0.32em',
          color: 'var(--tascal-cyan)',
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginBottom: 20,
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--tascal-cyan)' }}/>
          OUR STRENGTHS
        </div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em',
          color: '#fff', margin: '0 0 56px',
        }}>法人取引における当社の強み</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {[
            {
              num: '01',
              title: '産業廃棄物収集運搬業 (埼玉県) 取得',
              body: '法人取引で発生する事業活動廃棄物を、適法に運搬できる許認可を取得しています。不動産・士業案件で発生する大量物件にも対応可能です。',
            },
            {
              num: '02',
              title: '特別国際種事業者登録',
              body: '象牙・べっ甲などワシントン条約該当品の取り扱いに必要な登録を保有。骨董案件・相続案件で出てくる特殊品にも安心してご相談いただけます。',
            },
            {
              num: '03',
              title: '酒類販売業免許',
              body: '相続案件等で出てくる古酒・高級酒を、適法に買取・再販売できる体制があります。',
            },
            {
              num: '04',
              title: 'コンプライアンス体制',
              body: '古物商許可をはじめとする許認可・専門資格を組み合わせ、法令遵守の体制を整備。法人取引で必要となる証憑類の発行にも対応します。',
            },
          ].map(s => (
            <div key={s.num} style={{
              padding: 28,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
            }}>
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 11, fontWeight: 600, letterSpacing: '0.24em',
                color: 'var(--tascal-cyan)',
                marginBottom: 12,
              }}>NO. {s.num}</div>
              <h3 style={{
                fontFamily: 'var(--font-jp-serif)',
                fontSize: 18, fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#fff', margin: '0 0 12px',
              }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: '#B8C2CB', lineHeight: 2.05, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Flow */}
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>FLOW</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.45,
          letterSpacing: '0.06em',
          margin: '0 0 56px',
        }}>提携・取引の流れ</h2>

        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { n: '01', t: 'お問い合わせ', b: '専用フォーム・お電話にて、業種・想定案件をお伝えください。' },
            { n: '02', t: '個別お打ち合わせ', b: '貴社のご業務内容に合わせた連携プランをご提案させていただきます。' },
            { n: '03', t: '取引契約', b: 'NDA・基本契約書を締結。継続的なお取引の枠組みを整えます。' },
            { n: '04', t: '案件ごとのご依頼・対応', b: '案件発生のたびにご依頼いただき、その都度お見積もりの上で対応いたします。' },
          ].map(s => (
            <li key={s.n} style={{
              background: '#fff', borderRadius: 12,
              padding: '24px 32px', boxShadow: 'var(--shadow-1)',
              display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, alignItems: 'center',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#fff',
                border: '1.5px solid var(--tascal-cyan)',
                color: 'var(--tascal-cyan-deep)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-latin)', fontWeight: 500, fontSize: 18,
              }}>{s.n}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 19, fontWeight: 500, letterSpacing: '0.04em', marginBottom: 6 }}>{s.t}</div>
                <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: '0 40px 160px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{
          background: 'var(--cream-deep)',
          borderRadius: 12, padding: '48px 56px',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 'clamp(24px, 2.6vw, 30px)',
              fontWeight: 500, lineHeight: 1.45,
              letterSpacing: '0.06em', margin: '0 0 14px',
            }}>法人専用 お問い合わせ窓口</h2>
            <p style={{ fontSize: 14.5, color: 'var(--ink-2)', margin: 0, lineHeight: 1.95 }}>
              業務提携・継続取引のご相談は、こちらからご連絡ください。担当者よりご連絡を差し上げます。
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <a href="contact.html?type=business" className="btn btn-primary" style={{ width: '100%' }}>
              法人取引のご相談 <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a href="tel:0120433233" className="btn btn-ghost" style={{ width: '100%' }}>
              0120-433-233 (法人専用)
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

window.BusinessPage = BusinessPage;
