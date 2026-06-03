// common.js — injects shared header & footer, sets active nav, header scroll.
(function () {
  // ── Loading overlay: 「タスカル」ロゴが線で描かれ→塗りで完成するアニメ ──
  const LOGO_PATH = "M 950 39 L 950 58 910.046 58 L 870.091 58 875.365 67.250 C 881.380 77.802, 892.030 96.732, 900.400 111.750 L 906.113 122 928.056 122 L 950 122 950 232 L 950 342 982 342 L 1014 342 1014 232 L 1014 122 1083.500 122 L 1153 122 1153 200 L 1153 278 1115.917 278 C 1095.521 278, 1078.983 278.354, 1079.167 278.787 C 1079.350 279.220, 1089.175 293.602, 1101 310.747 L 1122.500 341.920 1169.250 341.960 L 1216 342 1216 200 L 1216 58 1115 58 L 1014 58 1014 39 L 1014 20 982 20 L 950 20 950 39 M 1279 183 L 1279 341 1311 341 L 1343 341 1343 183 L 1343 25 1311 25 L 1279 25 1279 183 M 1386 183 L 1386 341 1494.887 341 L 1603.773 341 1609.207 334.250 C 1612.196 330.538, 1619.081 321.875, 1624.507 315 C 1629.934 308.125, 1638.870 296.875, 1644.365 290 L 1654.357 277.500 1551.179 277.245 L 1448 276.991 1448 150.995 L 1448 25 1417 25 L 1386 25 1386 183 M 188.659 33.750 C 186.278 37.462, 172.704 58.500, 158.493 80.500 C 144.282 102.500, 129.195 125.900, 124.966 132.500 C 120.737 139.100, 111.337 153.725, 104.078 165 L 90.879 185.500 94.189 186 C 96.010 186.275, 112.125 186.372, 130 186.216 L 162.500 185.931 168.460 176.716 C 171.737 171.647, 179.846 159.175, 186.480 149 C 193.113 138.825, 204.156 121.841, 211.020 111.257 L 223.500 92.013 305.750 92.007 L 388 92 388 129 L 388 166 339.750 166.006 L 291.500 166.012 274.354 190.756 L 257.207 215.500 322.604 215.757 L 388 216.014 388 247.004 L 388 277.994 221.888 278.247 L 55.776 278.500 38.429 309 C 28.888 325.775, 21.064 339.837, 21.041 340.250 C 21.019 340.663, 117.975 341, 236.500 341 L 452 341 452 184 L 452 27 322.493 27 L 192.987 27 188.659 33.750 M 553.677 59.011 L 537.853 90 637.427 90 C 692.192 90, 737 90.346, 737 90.769 C 737 91.192, 733.063 96.494, 728.250 102.552 C 723.438 108.609, 715.231 118.951, 710.014 125.533 C 692.709 147.364, 629.838 226.304, 620.043 238.500 C 614.742 245.100, 605.559 256.680, 599.636 264.234 L 588.868 277.969 561.244 278.234 L 533.619 278.500 516.356 309 C 506.862 325.775, 499.072 339.837, 499.047 340.250 C 499.021 340.663, 526.876 341, 560.946 341 L 622.893 341 640.230 318.750 C 649.765 306.512, 666.552 284.930, 677.533 270.790 C 688.515 256.649, 697.743 245.061, 698.039 245.040 C 698.335 245.018, 702.245 249.163, 706.727 254.250 C 711.209 259.338, 715.931 264.625, 717.220 266 C 718.510 267.375, 734.084 284.813, 751.830 304.750 L 784.096 341 833.503 341 L 882.911 341 879.811 333.750 C 878.106 329.762, 872.110 315.700, 866.486 302.500 L 856.261 278.500 835.347 278 L 814.432 277.500 807.466 270.008 C 803.635 265.888, 798.436 260.263, 795.913 257.508 C 793.390 254.754, 785.558 246.200, 778.510 238.500 C 771.461 230.800, 763.396 222.025, 760.587 219 C 757.778 215.975, 751.506 209.128, 746.648 203.784 L 737.816 194.068 746.658 182.841 C 751.521 176.665, 756.400 170.388, 757.500 168.890 C 758.600 167.392, 772.888 149.051, 789.250 128.131 L 819 90.095 819 59.047 L 819 28 694.250 28.011 L 569.500 28.022 553.677 59.011 M 504 427 L 504 441 498.500 441 L 493 441 493 446 L 493 451 498.500 451 L 504 451 504 481 L 504 511 508.500 511 L 513 511 513 481 L 513 451 524.500 451 L 536 451 536 446 L 536 441 524.500 441 L 513 441 513 427 L 513 413 508.500 413 L 504 413 504 427 M 871 462 L 871 511 875.976 511 L 880.953 511 881.226 493.910 L 881.500 476.820 894.375 493.910 L 907.251 511 913.125 511 C 916.356 511, 919 510.807, 919 510.572 C 919 510.337, 912.510 501.576, 904.579 491.104 C 896.647 480.632, 889.814 471.508, 889.394 470.829 C 888.891 470.014, 893.721 464.727, 903.565 455.317 L 918.500 441.040 912.799 441.020 L 907.098 441 894.049 452.570 L 881 464.140 881 438.570 L 881 413 876 413 L 871 413 871 462 M 591.782 439.882 C 570.429 448.481, 560.830 472.992, 570.846 493.339 C 581.733 515.453, 610.340 521.571, 630.010 505.992 C 634.844 502.164, 635.221 502.223, 634.827 506.750 L 634.500 510.500 639.334 510.808 L 644.168 511.116 643.834 488.808 L 643.500 466.500 640.400 460 C 636.615 452.062, 630.044 445.340, 622.310 441.494 C 614.590 437.654, 599.317 436.848, 591.782 439.882 M 696 440.084 C 684.726 445.195, 680.278 455.410, 684.897 465.580 C 687.617 471.569, 692.177 474.573, 704.652 478.593 C 718.507 483.058, 721.500 485.625, 721.500 493.046 C 721.500 500.102, 717.415 504.135, 709.615 504.782 C 706.578 505.034, 702.955 504.954, 701.565 504.606 C 697.448 503.572, 692.131 498.202, 690.975 493.909 C 689.951 490.105, 689.803 490, 685.461 490 C 681.160 490, 681 490.109, 681 493.032 C 681 503.071, 691.788 513.240, 703.968 514.683 C 719.400 516.510, 733.063 505.417, 731.783 492.098 C 730.720 481.030, 725.147 475.811, 707.790 469.627 C 696.173 465.488, 692.667 462.785, 692.667 457.970 C 692.667 451.374, 701.860 445.001, 709.348 446.406 C 713.315 447.150, 719 451.381, 719 453.589 C 719 454.633, 720.432 455, 724.500 455 C 730.760 455, 730.639 455.162, 728.092 450.210 C 722.419 439.182, 708.015 434.637, 696 440.084 M 978.332 439.806 C 949.106 450.162, 944.173 490.778, 970.028 508.184 C 983.568 517.299, 1002.530 516.763, 1014.991 506.913 C 1021.075 502.104, 1021 502.103, 1021 507 L 1021 511 1025.568 511 L 1030.135 511 1029.818 488.250 L 1029.500 465.500 1026.569 459.522 C 1022.836 451.907, 1016.114 445.184, 1008.487 441.440 C 1000.719 437.626, 986.638 436.863, 978.332 439.806 M 1069 475 L 1069 511 1073.926 511 L 1078.853 511 1079.176 490.750 C 1079.535 468.337, 1079.701 467.657, 1086.738 459.868 C 1090.986 455.166, 1095.975 452.413, 1102.967 450.914 L 1108 449.834 1108 445.279 L 1108 440.725 1102.309 441.393 C 1095.959 442.140, 1085.364 446.919, 1081.910 450.596 C 1079.085 453.603, 1077.804 453.654, 1078.039 450.750 C 1078.139 449.512, 1078.172 446.363, 1078.111 443.750 L 1078 439 1073.500 439 L 1069 439 1069 475 M 769.185 464.750 C 769.498 488.329, 769.519 488.537, 772.195 493.608 C 784.580 517.084, 817.402 516.870, 829.146 493.236 C 831.386 488.729, 831.515 487.350, 831.815 464.750 L 832.131 441 827.650 441 L 823.169 441 822.835 462.750 C 822.522 483.058, 822.348 484.810, 820.200 489.170 C 813.904 501.951, 797.070 505.467, 786.746 496.159 C 779.550 489.671, 779.047 487.495, 779.022 462.750 L 779 441 773.935 441 L 768.869 441 769.185 464.750 M 1145.175 464.750 C 1145.505 488.301, 1145.530 488.543, 1148.199 493.608 C 1160.557 517.066, 1193.493 516.959, 1205.077 493.423 C 1207.403 488.697, 1207.512 487.550, 1207.801 464.750 L 1208.101 441 1203.551 441 L 1199 441 1199 459.951 C 1199 470.374, 1198.518 481.151, 1197.928 483.900 C 1194.187 501.345, 1173.083 507.281, 1160.803 494.342 C 1155.511 488.765, 1155 485.966, 1155 462.532 L 1155 441 1149.921 441 L 1144.841 441 1145.175 464.750 M 598.332 447.959 C 586.013 450.894, 576.740 462.868, 576.619 476 C 576.382 501.693, 607.419 514.712, 625.589 496.542 C 646.179 475.951, 626.686 441.206, 598.332 447.959 M 983.173 448.484 C 961.529 455.239, 955.611 482.924, 972.612 497.889 C 991.164 514.220, 1020.156 500.948, 1020.429 476 C 1020.638 456.885, 1001.514 442.760, 983.173 448.484";
  const buildLoader = () => {
    if (!document.body || document.getElementById('loader-logo')) return;
    const w = document.createElement('div');
    w.id = 'loader-logo';
    w.setAttribute('aria-hidden', 'true');
    w.innerHTML =
      '<svg viewBox="0 0 1674 534" role="img" aria-label="株式会社タスカル">' +
      '<path class="loader-fill" d="' + LOGO_PATH + '"/>' +
      '<path class="loader-line" pathLength="1" d="' + LOGO_PATH + '"/>' +
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
