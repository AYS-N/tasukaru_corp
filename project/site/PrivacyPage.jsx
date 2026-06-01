// PrivacyPage.jsx — /privacy
const PrivacyPage = () => (
  <main style={{ background: 'var(--cream)', padding: '96px 40px 160px' }}>
    <article style={{ maxWidth: 800, margin: '0 auto' }}>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 2.1, margin: '0 0 32px' }}>
        株式会社タスカル(以下、「当社」といいます)は、お客様の個人情報を適切に取り扱うことの重要性を認識し、個人情報の保護に関する法律および関連法令を遵守するとともに、以下のプライバシーポリシーに基づき個人情報を取り扱います。
      </p>

      {[
        {
          n: '1', t: '個人情報の取得について',
          body: '当社は、お問い合わせフォーム、お電話、お見積もりのご依頼等を通じて、お客様より個人情報を取得することがあります。取得する情報は、お名前、ご住所、お電話番号、メールアドレス、お問い合わせ内容等です。',
        },
        {
          n: '2', t: '個人情報の利用目的',
          body: '取得した個人情報は、以下の目的で利用いたします。\n・お問い合わせへの回答\n・お見積もりの作成およびご提示\n・サービス提供および契約履行\n・サービス向上のための情報提供\n・採用応募者への連絡',
        },
        {
          n: '3', t: '個人情報の第三者提供',
          body: '当社は、ご本人の同意を得ることなく、個人情報を第三者に提供することはありません。ただし、法令に基づく場合、人の生命・身体・財産の保護に必要な場合等、個人情報保護法に定められた例外に該当する場合は除きます。',
        },
        {
          n: '4', t: '個人情報の管理',
          body: '当社は、お客様の個人情報を正確かつ最新の状態に保ち、漏洩・滅失・改ざんを防止するため、適切な安全管理措置を講じます。',
        },
        {
          n: '5', t: '個人情報の開示・訂正・削除',
          body: 'お客様ご本人から個人情報の開示、訂正、削除、利用停止のご請求があった場合、合理的な範囲で速やかに対応いたします。',
        },
        {
          n: '6', t: 'Cookie等の利用について',
          body: '当社のウェブサイトでは、サービス向上およびアクセス分析のためにCookieを利用する場合があります。お客様はブラウザの設定によりCookieを無効化することができます。',
        },
        {
          n: '7', t: 'プライバシーポリシーの改定',
          body: '当社は、必要に応じて本プライバシーポリシーを改定することがあります。改定後の内容は、当社ウェブサイトに掲載した時点から効力を生じるものとします。',
        },
        {
          n: '8', t: 'お問い合わせ窓口',
          body: '個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。\n株式会社タスカル\n〒362-0035 埼玉県上尾市仲町1-7-25\nTEL: 0120-433-233\nE-mail: info@tasukaru.example.com',
        },
      ].map(s => (
        <section key={s.n} style={{ marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontSize: 19, fontWeight: 500,
            letterSpacing: '0.06em',
            margin: '0 0 14px',
            color: 'var(--ink-1)',
            display: 'flex', gap: 14, alignItems: 'baseline',
          }}>
            <span style={{
              fontFamily: 'var(--font-latin)',
              color: 'var(--tascal-cyan-deep)',
              fontSize: 16, fontWeight: 600,
            }}>{s.n}.</span>
            {s.t}
          </h2>
          <p style={{
            fontSize: 14, color: 'var(--ink-2)',
            lineHeight: 2.05, margin: 0,
            whiteSpace: 'pre-line',
          }}>{s.body}</p>
        </section>
      ))}

      <div style={{
        marginTop: 56, paddingTop: 24,
        borderTop: '1px solid var(--border-hair)',
        fontSize: 12.5, color: 'var(--ink-3)',
      }}>
        制定日: ◯◯◯◯年◯月◯日<br/>
        最終改定日: ◯◯◯◯年◯月◯日<br/>
        株式会社タスカル 代表取締役 竹井 信二
      </div>
    </article>
  </main>
);

window.PrivacyPage = PrivacyPage;
