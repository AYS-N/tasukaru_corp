// common.js — injects shared header & footer, sets active nav, header scroll.
(function () {
  // ── Loading overlay: 箱が左→真ん中(頂点)→右に着地するホップアニメ ──
  const buildLoader = () => {
    if (!document.body || document.getElementById('loader-logo')) return;
    const w = document.createElement('div');
    w.id = 'loader-logo';
    w.setAttribute('aria-hidden', 'true');
    w.innerHTML =
      '<svg viewBox="0 0 480 200" role="img" aria-label="読み込み中">' +
        '<line class="loader-ground" x1="20" y1="170" x2="460" y2="170"/>' +
        '<g class="loader-hop-x">' +
          '<g class="loader-hop-y">' +
            '<rect class="loader-box" x="-30" y="124" width="60" height="46" rx="3"/>' +
            '<line class="loader-box-line" x1="-30" y1="146" x2="30" y2="146"/>' +
            '<line class="loader-box-line" x1="0" y1="124" x2="0" y2="146"/>' +
          '</g>' +
        '</g>' +
      '</svg>';
    document.body.appendChild(w);
  };
  buildLoader();

  // 読み込み完了でオーバーレイをフェードアウト
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    document.body.classList.add('loaded');
  };
  if (document.readyState === 'complete') setTimeout(reveal, 1100);
  else window.addEventListener('load', () => setTimeout(reveal, 1100));
  setTimeout(reveal, 4000); // safety: never block the page

  const NAV = [
    { id: 'home',     en: 'HOME',     jp: 'トップ',         href: 'index.html' },
    { id: 'about',    en: 'ABOUT',    jp: '会社概要',       href: 'about.html' },
    { id: 'services', en: 'SERVICES', jp: '事業内容',       href: 'services.html' },
    { id: 'business', en: 'BUSINESS', jp: '法人のお客様へ', href: 'business.html' },
    { id: 'recruit',  en: 'RECRUIT',  jp: '採用情報',       href: 'recruit.html' },
  ];

  const SITEMAP = [
    {
      en: 'ABOUT',
      items: [
        ['会社概要', 'about.html'],
        ['代表挨拶', 'about-greeting.html'],
        ['会社沿革', 'about-history.html'],
      ],
    },
    {
      en: 'SERVICES',
      items: [
        ['遺品整理', 'services-ihin-seiri.html'],
        ['生前整理', 'services-seizen-seiri.html'],
        ['福祉整理', 'services-fukushi-seiri.html'],
        ['お片付け', 'services-cleanup.html'],
        ['買取事業', 'services-kaitori.html'],
        ['インターネット販売', 'services-ec.html'],
      ],
    },
    {
      en: 'OTHERS',
      items: [
        ['法人のお客様へ', 'business.html'],
        ['採用情報', 'recruit.html'],
        ['お問い合わせ', 'contact.html'],
        ['プライバシーポリシー', 'privacy.html'],
      ],
    },
  ];

  function headerHTML(current) {
    const navItems = NAV.map(p => `
      <a href="${p.href}" class="nav-item${current === p.id ? ' active' : ''}">
        <span class="nav-item-en">${p.en}</span>
        <span class="nav-item-jp">${p.jp}</span>
      </a>`).join('');

    const mobileItems = NAV.map(p => `
        <a href="${p.href}" class="mobile-nav-item${current === p.id ? ' active' : ''}">
          <span class="en">${p.en}</span>
          <span class="jp">${p.jp}</span>
        </a>`).join('');

    return `
    <div class="header-inner">
      <a href="index.html" class="header-logo">
        <img src="assets/logo-tasukaru-green.png" alt="タスカル tasukaru">
      </a>
      <nav class="header-nav">${navItems}</nav>
      <div class="header-actions">
        <a href="tel:0487826606" class="header-tel">
          <span class="header-tel-label">TEL · 受付 10:00-19:00</span>
          <span class="header-tel-num">048-782-6606</span>
        </a>
        <a href="contact.html" class="header-contact-btn${current === 'contact' ? ' active' : ''}">お問い合わせ</a>
      </div>
      <button class="nav-toggle" type="button" aria-label="メニューを開く" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu">
      <nav class="mobile-menu-inner">
${mobileItems}
        <a href="contact.html" class="mobile-contact-btn">お問い合わせ</a>
        <a href="tel:0487826606" class="mobile-tel">
          <span class="label">TEL · 受付 10:00-19:00</span>
          <span class="num">048-782-6606</span>
        </a>
      </nav>
    </div>`;
  }

  function footerHTML() {
    const cols = SITEMAP.map(col => `
      <div class="footer-col">
        <div class="footer-col-label">${col.en}</div>
        <ul>${col.items.map(([t, h]) => `<li><a href="${h}">— ${t}</a></li>`).join('')}</ul>
      </div>`).join('');

    return `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/logo-tasukaru-green.png" alt="タスカル tasukaru" class="footer-logo">
          <div class="footer-address">
            株式会社タスカル<br>〒362-0035<br>埼玉県上尾市仲町1-7-25
          </div>
          <div class="footer-tel-wrap">
            <a href="tel:0487826606" class="footer-tel-num">048-782-6606</a>
            <div class="footer-tel-note">受付 10:00 - 19:00 / 年中無休</div>
          </div>
        </div>
        ${cols}
      </div>
      <div class="footer-bottom">
        <div>© 株式会社タスカル All Rights Reserved.</div>
        <div class="footer-bottom-links">
          <a href="privacy.html">プライバシーポリシー</a>
          <a href="contact.html">お問い合わせ</a>
        </div>
      </div>
    </div>`;
  }

  function init() {
    const current = document.body.dataset.page || '';
    const header = document.getElementById('site-header');
    const footer = document.getElementById('site-footer');
    if (header) header.innerHTML = headerHTML(current);
    if (footer) footer.innerHTML = footerHTML();

    const btt = createBackToTop();

    // Mobile hamburger menu
    if (header) {
      const toggle = header.querySelector('.nav-toggle');
      const closeMenu = () => {
        header.classList.remove('open');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'メニューを開く');
        }
        document.body.style.overflow = '';
      };
      if (toggle) {
        toggle.addEventListener('click', () => {
          const isOpen = header.classList.toggle('open');
          toggle.setAttribute('aria-expanded', String(isOpen));
          toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
          document.body.style.overflow = isOpen ? 'hidden' : '';
        });
      }
      // Close + unlock when leaving mobile width
      window.addEventListener('resize', () => {
        if (window.innerWidth > 820 && header.classList.contains('open')) closeMenu();
      }, { passive: true });
    }

    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 24);
      btt.classList.toggle('visible', window.scrollY > 400);
      // Brighten the button when it overlaps the dark footer
      if (footer) {
        const btnCenterY = window.innerHeight - 28 - 26;
        btt.classList.toggle('on-dark', footer.getBoundingClientRect().top < btnCenterY);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function createBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'ページ上部へ戻る');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(btn);
    return btn;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
