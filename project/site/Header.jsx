// Header.jsx — corporate header. 5-item nav + persistent tel.
const Header = ({ current = 'home' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NAV = [
    { id: 'about',    en: 'ABOUT',    jp: '会社概要',       href: 'about.html' },
    { id: 'services', en: 'SERVICES', jp: '事業内容',       href: 'services.html' },
    { id: 'business', en: 'BUSINESS', jp: '法人のお客様へ', href: 'business.html' },
    { id: 'recruit',  en: 'RECRUIT',  jp: '採用情報',       href: 'recruit.html' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250, 246, 238, 0.94)' : 'var(--cream)',
      backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-hair)' : '1px solid transparent',
      transition: 'all 280ms ease',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '16px 36px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="../assets/logo-tasukaru-green.png" alt="タスカル tasukaru" style={{ height: 44 }}/>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV.map(p => (
            <a key={p.id} href={p.href} style={{
              textDecoration: 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              position: 'relative', paddingBottom: 6,
            }}>
              <span style={{
                fontFamily: 'var(--font-latin)',
                fontSize: 10, fontWeight: 600,
                letterSpacing: '0.28em',
                color: 'var(--tascal-cyan-deep)',
                opacity: current === p.id ? 1 : 0.65,
              }}>{p.en}</span>
              <span style={{
                fontSize: 13, fontWeight: 700,
                color: 'var(--ink-1)',
              }}>{p.jp}</span>
              {current === p.id && (
                <span style={{
                  position: 'absolute', bottom: -2, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 24, height: 1.5,
                  background: 'var(--tascal-cyan)',
                }}/>
              )}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          {/* Phone — always visible */}
          <a href="tel:0120433233" style={{
            textDecoration: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
            lineHeight: 1.2,
          }}>
            <span style={{
              fontFamily: 'var(--font-latin)',
              fontSize: 9, fontWeight: 600,
              letterSpacing: '0.24em',
              color: 'var(--ink-3)',
            }}>TEL · 受付 9:00-18:00</span>
            <span style={{
              fontFamily: 'var(--font-latin)',
              fontSize: 22, fontWeight: 600,
              letterSpacing: '0.02em',
              color: 'var(--ink-1)',
            }}>0120-433-233</span>
          </a>
          <a href="contact.html" style={{
            textDecoration: 'none',
            fontSize: 13, fontWeight: 600,
            color: '#fff',
            background: current === 'contact' ? 'var(--tascal-cyan-deep)' : 'var(--ink-1)',
            padding: '12px 22px', borderRadius: 999,
            transition: 'background 200ms ease',
          }}>お問い合わせ</a>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
