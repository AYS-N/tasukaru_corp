// ConceptRow.jsx — three concept pillars flanked by angled green tick strokes
// (shakujii-dc's signature diagonal motif). Light, airy, generous whitespace.
const ConceptRow = () => {
  const ITEMS = [
    { jp: 'ていねいに、整える', en: 'WITH CARE',  sub: '暮らしのペースに寄り添い、ひとつずつ。' },
    { jp: '想いごと、引き継ぐ', en: 'RESPECT',    sub: '故人とご家族の気持ちを、何より大切に。' },
    { jp: '資源を、めぐらせる', en: 'REUSE',      sub: '「捨てる」前に、活かす選択肢を。' },
  ];
  return (
    <section style={{ padding: '88px 40px 96px', background: 'var(--cream)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 56,
      }}>
        {ITEMS.map((it) => (
          <div key={it.en} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="concept-ticks" style={{ marginBottom: 22 }}>
              <span/><span/><span/>
            </div>
            <h3 className="jp-spaced" style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 23, fontWeight: 500,
              color: 'var(--leaf-deep)',
              margin: '0 0 10px',
            }}>{it.jp}</h3>
            <div style={{
              fontFamily: 'var(--font-latin)',
              fontSize: 10, fontWeight: 600, letterSpacing: '0.34em',
              color: 'var(--ink-3)', marginBottom: 16,
            }}>{it.en}</div>
            <p style={{
              fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.9,
              margin: 0, maxWidth: 260,
            }}>{it.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

window.ConceptRow = ConceptRow;
