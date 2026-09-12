(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const mobile = window.matchMedia('(max-width: 900px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  function setMenu(open, focusToggle = false) {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    header.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    document.body.style.overflow = open ? 'hidden' : '';
    if (main) main.inert = open;
    if (footer) footer.inert = open;
    if (focusToggle) toggle.focus();
  }
  toggle?.addEventListener('click', () => setMenu(menu.hidden));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (!menu || menu.hidden) return;
    if (e.key === 'Escape') setMenu(false, true);
    if (e.key === 'Tab') {
      const links = [toggle, ...menu.querySelectorAll('a')];
      const first = links[0], last = links.at(-1);
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  mobile.addEventListener('change', () => { if (!mobile.matches) setMenu(false); });
  const back = document.createElement('button');
  back.className = 'back-to-top'; back.type = 'button';
  back.setAttribute('aria-label', 'ページ上部へ戻る'); back.textContent = '↑';
  back.addEventListener('click', () => window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'}));
  document.body.append(back);
  const onScroll = () => { header?.classList.toggle('scrolled', scrollY > 20); back.classList.toggle('visible', scrollY > 500); };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // Link the existing contact controls to their visible labels.
  document.querySelectorAll('#contact-form .field-label').forEach((label, index) => {
    const field = label.parentElement.querySelector('input:not([type="checkbox"]), select, textarea');
    if (field) {
      field.id ||= `contact-field-${index}`;
      label.htmlFor = field.id;
    }
  });
})();
