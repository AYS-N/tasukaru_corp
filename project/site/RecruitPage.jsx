// RecruitPage.jsx — /recruit
const POSITIONS = [
  {
    name: '遺品整理スタッフ',
    en: 'ESTATE CLEANUP STAFF',
    type: '正社員 / アルバイト・パート',
    summary: 'ご遺族のご自宅で、お品物の仕分け・搬出を担当。経験よりも丁寧さを重視します。',
  },
  {
    name: '買取査定スタッフ',
    en: 'APPRAISAL STAFF',
    type: '正社員',
    summary: '買取現場・店頭で、お品物の査定を担当。骨董・着物・時計・カメラの知識を活かせます。',
  },
  {
    name: 'ドライバー',
    en: 'DRIVER',
    type: '正社員 / アルバイト・パート',
    summary: '搬出搬入と現場間移動を担当。準中型・中型免許保持者歓迎、普通免許も可。',
  },
];

const RecruitPage = () => (
  <main style={{ background: 'var(--cream)' }}>

    <section style={{ padding: '96px 40px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(26px, 2.8vw, 34px)',
          fontWeight: 500, lineHeight: 1.65,
          letterSpacing: '0.06em',
          margin: '0 0 32px',
        }}>
          一緒に働いてくださる<br/>
          仲間を募集しています。
        </h2>
        <p style={{
          fontSize: 15, color: 'var(--ink-2)',
          lineHeight: 2.1, margin: 0, maxWidth: 720,
        }}>
          整理・買取という仕事は、お客様の人生の節目に立ち会う仕事です。経験よりも、お客様のお気持ちに寄り添える丁寧さを大切にしています。未経験の方も、丁寧にお伝えしますのでご安心ください。
        </p>
      </div>
    </section>

    {/* Positions */}
    <section style={{ padding: '56px 40px 96px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>OPEN POSITIONS</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(24px, 2.6vw, 30px)',
          fontWeight: 500, lineHeight: 1.4,
          letterSpacing: '0.06em', margin: '0 0 32px',
        }}>募集職種</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {POSITIONS.map(p => (
            <div key={p.name} style={{
              background: '#fff', borderRadius: 12,
              padding: 28, boxShadow: 'var(--shadow-1)',
            }}>
              <div style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 10, fontWeight: 600,
                letterSpacing: '0.24em',
                color: 'var(--tascal-cyan-deep)',
                marginBottom: 10,
              }}>{p.en}</div>
              <h3 style={{
                fontFamily: 'var(--font-jp-serif)',
                fontSize: 20, fontWeight: 500,
                letterSpacing: '0.04em',
                margin: '0 0 8px', color: 'var(--ink-1)',
              }}>{p.name}</h3>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 16 }}>{p.type}</div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.95, margin: 0 }}>{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Details */}
    <section style={{ padding: '96px 40px', background: 'var(--cream-deep)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div className="eyebrow-jp" style={{ marginBottom: 24 }}>DETAILS</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(24px, 2.6vw, 30px)',
          fontWeight: 500, lineHeight: 1.4,
          letterSpacing: '0.06em', margin: '0 0 32px',
        }}>募集要項</h2>

        <dl style={{ margin: 0, padding: 0 }}>
          {[
            { label: '雇用形態',   value: '正社員 / アルバイト・パート' },
            { label: '給与',       value: '正社員: 月給 ◯◯万円〜 (経験により優遇)\nアルバイト・パート: 時給 ◯,◯◯◯円〜' },
            { label: '勤務地',     value: '埼玉県上尾市 (現場業務は埼玉・東京・千葉・神奈川を中心とした関東圏)' },
            { label: '勤務時間',   value: '9:00 - 18:00 (休憩60分)\n※現場により多少前後する場合があります' },
            { label: '休日・休暇', value: '日曜・祝日、年末年始、夏季休暇、有給休暇' },
            { label: '応募資格',   value: '・学歴不問・未経験歓迎\n・普通自動車免許 (AT限定可)' },
            { label: '福利厚生',   value: '各種社会保険完備、交通費支給、制服貸与、資格取得支援制度' },
          ].map(row => (
            <div key={row.label} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr',
              gap: 24,
              padding: '20px 0',
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
                color: 'var(--ink-2)', lineHeight: 1.95,
                whiteSpace: 'pre-line',
              }}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Apply */}
    <section style={{ padding: '96px 40px 160px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow-jp" style={{ display: 'inline-flex', marginBottom: 24 }}>APPLY</div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontSize: 'clamp(28px, 3.2vw, 40px)',
          fontWeight: 500, lineHeight: 1.4,
          letterSpacing: '0.06em', margin: '0 0 20px',
        }}>応募方法</h2>
        <p style={{
          fontSize: 14.5, color: 'var(--ink-2)',
          lineHeight: 2.05, margin: '0 0 32px',
          maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
        }}>
          お問い合わせフォームより、「採用応募について」を選択の上、ご連絡ください。担当者より折り返しご連絡いたします。
        </p>
        <a href="contact.html?type=recruit" className="btn btn-primary" style={{ padding: '16px 36px' }}>
          応募する <span style={{ fontSize: 18 }}>→</span>
        </a>
      </div>
    </section>
  </main>
);

window.RecruitPage = RecruitPage;
