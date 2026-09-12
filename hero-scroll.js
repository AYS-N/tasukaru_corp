(() => {
  'use strict';
  const story = document.querySelector('.hero-story');
  if (!story) return;
  const header = document.querySelector('#site-header');
  const stage = story.querySelector('.hero-stage');
  const track = story.querySelector('.hero-track');
  const slides = [...story.querySelectorAll('.story-slide')];
  const controls = story.querySelector('.story-controls');
  const buttons = [...story.querySelectorAll('[data-story-index]')];
  const progressBar = story.querySelector('.story-progress > span');
  const hint = story.querySelector('.story-hint-label');
  const finalCopy = story.querySelector('.final-copy');
  const finalImage = story.querySelector('.story-reuse .main-hero-photo');
  const revealItems = [...story.querySelectorAll('[data-reveal]')];
  const photos = [...story.querySelectorAll('[data-drift]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
  const smooth = n => n * n * (3 - 2 * n);
  let enabled = false, frame = 0, active = -1, start = 0, width = 0;
  let travel = 0, panDistance = 0, introHold = 0, revealStart = 0, revealLength = 1;
  let measuredHeader = -1, offsets = [], photoMetrics = [], hintPhase = '';

  function setCurrent(current) {
    if (current === active) return;
    active = current;
    slides.forEach((slide, i) => {
      slide.inert = i !== current;
      slide.setAttribute('aria-hidden', String(i !== current));
      if (i === current) buttons[i].setAttribute('aria-current', 'step');
      else buttons[i].removeAttribute('aria-current');
    });
  }

  function paint() {
    frame = 0;
    if (!enabled) return;
    const distance = clamp(scrollY - start, 0, travel);
    // One continuous rail: no scene-by-scene easing or stops during the pan.
    const pan = clamp(distance - introHold, 0, panDistance);
    const reveal = clamp((distance - revealStart) / revealLength);
    track.style.transform = 'translate3d(' + (-pan) + 'px,0,0)';
    progressBar.style.transform = 'scaleX(' + (distance / travel) + ')';
    story.classList.toggle('is-pinned', scrollY <= start + travel);
    story.classList.toggle('is-final-stage', pan >= panDistance - 1);
    const current = pan < offsets[1] - width * .45 ? 0 : pan < offsets[2] - width * .45 ? 1 : 2;
    setCurrent(current);
    photoMetrics.forEach(({node, left, photoWidth, drift}) => {
      const passage = clamp((width + pan - left) / (width + photoWidth));
      node.style.transform = 'translate3d(0,' + ((passage - .5) * drift) + 'px,0)';
    });
    // The final photograph settles first; copy enters in the following phase.
    revealItems.forEach(node => {
      const p = smooth(clamp((reveal - Number(node.dataset.reveal)) / .4));
      node.style.opacity = String(p);
      node.style.transform = 'translate3d(0,' + ((1 - p) * 38) + 'px,0)';
      node.inert = p < .98;
    });
    finalCopy.inert = reveal === 0;
    finalCopy.setAttribute('aria-hidden', String(reveal === 0));
    finalImage.style.transform = 'scale(' + (1.04 - smooth(reveal) * .04) + ')';
    const nextHint = pan < panDistance ? 'SCROLL TO EXPLORE' : reveal < 1 ? 'SCROLL TO REVEAL' : 'SCROLL TO CONTINUE';
    if (nextHint !== hintPhase) { hint.textContent = nextHint; hintPhase = nextHint; }
  }

  function queuePaint() {
    if (enabled && !frame) frame = requestAnimationFrame(paint);
  }

  function measure() {
    if (header?.classList.contains('open')) return;
    const headerHeight = Math.round(header?.getBoundingClientRect().height || 0);
    measuredHeader = headerHeight;
    story.style.setProperty('--story-header', headerHeight + 'px');
    enabled = !reducedMotion.matches && innerHeight - headerHeight >= 440;
    story.classList.toggle('is-scroll-story', enabled);
    controls.hidden = !enabled;
    if (!enabled) {
      story.classList.remove('is-pinned', 'is-final-stage');
      track.style.removeProperty('transform');
      story.style.removeProperty('--story-travel');
      slides.forEach(slide => { slide.inert = false; slide.removeAttribute('aria-hidden'); });
      [...photos, ...revealItems, finalImage].forEach(node => {
        node.style.removeProperty('transform');
        node.style.removeProperty('opacity');
        node.inert = false;
      });
      finalCopy.inert = false;
      finalCopy.removeAttribute('aria-hidden');
      active = -1;
      return;
    }
    width = stage.clientWidth;
    const height = stage.getBoundingClientRect().height;
    offsets = slides.map(slide => slide.offsetLeft);
    panDistance = Math.max(0, track.scrollWidth - width);
    introHold = Math.min(90, height * .1);
    const photoHold = Math.max(90, height * .12);
    revealLength = Math.max(420, height * .75);
    revealStart = introHold + panDistance + photoHold;
    travel = revealStart + revealLength + Math.max(180, height * .27);
    story.style.setProperty('--story-travel', travel + 'px');
    start = story.getBoundingClientRect().top + scrollY - headerHeight;
    const trackLeft = track.getBoundingClientRect().left;
    photoMetrics = photos.map(node => ({node, left:node.getBoundingClientRect().left - trackLeft, photoWidth:node.offsetWidth, drift:Number(node.dataset.drift)}));
    paint();
  }

  buttons.forEach((button, i) => button.addEventListener('click', () => {
    if (!enabled) return;
    const destination = i === 0 ? 0 : i === slides.length - 1 ? revealStart + revealLength + 20 : introHold + offsets[i] + (slides[i].offsetWidth - width) / 2;
    window.scrollTo({top:start + destination, behavior:'smooth'});
  }));
  addEventListener('scroll', queuePaint, {passive:true});
  addEventListener('resize', measure, {passive:true});
  addEventListener('pageshow', measure);
  reducedMotion.addEventListener('change', measure);
  const resizeObserver = new ResizeObserver(() => {
    if (Math.round(header?.getBoundingClientRect().height || 0) !== measuredHeader) measure();
  });
  if (header) resizeObserver.observe(header);
  document.fonts?.ready.then(measure);
  measure();
})();
