// GreetingPage.jsx — 代表挨拶
const GreetingPage = () => (
  <main style={{ background: 'var(--cream)', padding: '96px 40px 160px' }}>
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div style={{
            width: '100%', aspectRatio: '4 / 5',
            background: 'var(--sand)',
            borderRadius: 12, boxShadow: 'var(--shadow-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--bark)', fontSize: 11,
            fontFamily: 'var(--font-latin)', letterSpacing: '0.24em', fontWeight: 600,
          }}>PORTRAIT</div>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: 18, color: 'var(--ink-1)', marginBottom: 4 }}>
              代表取締役 竹井 信二
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>
              CEO, Tasukaru Inc.
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow-jp" style={{ marginBottom: 16 }}>GREETING</div>
          <h2 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontSize: 'clamp(28px, 3.2vw, 40px)',
            fontWeight: 500, lineHeight: 1.45,
            letterSpacing: '0.06em',
            margin: '0 0 32px',
          }}>「助かった」と<br/>言っていただけるその瞬間まで。</h2>

          <p style={{
            fontFamily: 'var(--font-jp-serif)',
            fontSize: 17, fontWeight: 400,
            lineHeight: 2.3, letterSpacing: '0.04em',
            color: 'var(--ink-1)', margin: '0 0 24px',
          }}>
            ホームページをご覧いただき、ありがとうございます。<br/>
            株式会社タスカル代表取締役の竹井と申します。
          </p>

          <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 2.1, margin: '0 0 20px' }}>
            私たちタスカルは、埼玉県上尾市を拠点に、ご家庭の整理・買取・再販売を一貫してお引き受けする会社です。遺品整理、生前整理、福祉整理、お片付け、買取、そしてインターネット販売まで、お客様の暮らしと向き合うあらゆる場面を、責任を持ってお手伝いいたします。
          </p>

          <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 2.1, margin: '0 0 20px' }}>
            私たちが大切にしているのは、モノを片付けるという行為が、単に空間を整える作業ではないということです。一つひとつのお品物には、ご家族の物語があり、思い出があります。乱暴に「処分」するのではなく、必要なものは残し、使えるものは次の方の手へ、そうでないものは丁寧に手放す。その判断のすべてに、お客様への敬意を込めてお取り組みしています。
          </p>

          <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 2.1, margin: '0 0 20px' }}>
            また、法人のお客様との連携にも力を入れています。不動産会社様、士業の先生方、福祉施設様、葬儀社様。それぞれの業種で発生する整理・処分のご相談に、コンプライアンス体制を整えた上でお応えできるよう、必要な許認可・資格を順次取得してまいりました。
          </p>

          <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 2.1, margin: '0 0 20px' }}>
            「助かった」とお客様に言っていただけるその瞬間まで、私たちは伴走します。ご相談だけでも構いません。お気軽にお問い合わせください。
          </p>

          <p style={{
            fontFamily: 'var(--font-jp-serif)',
            fontSize: 15, marginTop: 40,
            color: 'var(--ink-1)', letterSpacing: '0.04em',
          }}>
            株式会社タスカル<br/>
            代表取締役 竹井 信二
          </p>
        </div>
      </div>
    </div>
  </main>
);

window.GreetingPage = GreetingPage;
