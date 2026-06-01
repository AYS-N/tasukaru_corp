// common.js — injects shared header & footer, sets active nav, header scroll.
(function () {
  const NAV = [
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

  const LICENSES = [
    ['許認可', '古物商許可'],
    ['許認可', '産業廃棄物収集運搬業 (埼玉)'],
    ['許認可', '酒類販売業免許'],
    ['許認可', '特別国際種事業者登録'],
    ['資格', '遺品整理士'],
    ['資格', '3Rディレクター'],
  ];

  function headerHTML(current) {
    const navItems = NAV.map(p => `
      <a href="${p.href}" class="nav-item${current === p.id ? ' active' : ''}">
        <span class="nav-item-en">${p.en}</span>
        <span class="nav-item-jp">${p.jp}</span>
      </a>`).join('');

    return `
    <div class="header-inner">
      <a href="index.html" class="header-logo">
        <img src="assets/logo-tasukaru-green.png" alt="タスカル tasukaru">
      </a>
      <nav class="header-nav">${navItems}</nav>
      <div class="header-actions">
        <a href="tel:0120433233" class="header-tel">
          <span class="header-tel-label">TEL · 受付 9:00-18:00</span>
          <span class="header-tel-num">0120-433-233</span>
        </a>
        <a href="contact.html" class="header-contact-btn${current === 'contact' ? ' active' : ''}">お問い合わせ</a>
      </div>
    </div>`;
  }

  function footerHTML() {
    const badges = LICENSES.map(([kind, name]) => {
      const color = kind === '許認可' ? 'var(--tascal-cyan)' : 'var(--taupe)';
      return `<span class="license-badge" style="border:1px solid ${color}">
        <span class="dot" style="background:${color}"></span>${name}
      </span>`;
    }).join('');

    const cols = SITEMAP.map(col => `
      <div class="footer-col">
        <div class="footer-col-label">${col.en}</div>
        <ul>${col.items.map(([t, h]) => `<li><a href="${h}">— ${t}</a></li>`).join('')}</ul>
      </div>`).join('');

    return `
    <div class="footer-inner">
      <div class="footer-licenses">
        <div class="footer-licenses-label">LICENSES &amp; QUALIFICATIONS</div>
        <div class="footer-licenses-badges">${badges}</div>
      </div>
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/logo-tasukaru.png" alt="タスカル tasukaru" class="footer-logo">
          <div class="footer-address">
            株式会社タスカル<br>〒362-0035<br>埼玉県上尾市仲町1-7-25
          </div>
          <div class="footer-tel-wrap">
            <a href="tel:0120433233" class="footer-tel-num">0120-433-233</a>
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

    if (header) {
      const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
