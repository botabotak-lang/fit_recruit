document.addEventListener('DOMContentLoaded', () => {

  // ========== 機器スライダー ==========
  document.querySelectorAll('.equip-slider').forEach(slider => {
    const track   = slider.querySelector('.equip-slider__track');
    const slides  = slider.querySelectorAll('.equip-slider__slide');
    const dots    = slider.querySelectorAll('.equip-slider__dot');
    const btnPrev = slider.querySelector('.equip-slider__btn--prev');
    const btnNext = slider.querySelector('.equip-slider__btn--next');
    const total   = slides.length;
    const interval = parseInt(slider.dataset.interval || '2000', 10);
    let current = 0;
    let timer;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
    }

    function startAuto() {
      timer = setInterval(() => goTo(current + 1), interval);
    }

    function stopAuto() {
      clearInterval(timer);
    }

    btnPrev.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
    btnNext.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));

    // タッチスワイプ対応
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) { stopAuto(); goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
    }, { passive: true });

    // ページ非表示時は停止
    document.addEventListener('visibilitychange', () => {
      document.hidden ? stopAuto() : startAuto();
    });

    goTo(0);
    startAuto();
  });

  // ========== ハンバーガーメニュー ==========
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.12)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    }
    lastScroll = currentScroll;
  });

  // ========== スクロールリビール ==========
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');

  if (revealEls.length && !prefersReduced && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ========== ナンバーカウンターアップ ==========
  const counterEls = document.querySelectorAll('[data-count]');

  if (counterEls.length && !prefersReduced && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.innerHTML.replace(/^\d+/, '');
        const duration = 1000;
        const startTime = performance.now();

        function step(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.innerHTML = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.6 });

    counterEls.forEach(el => counterObserver.observe(el));
  }
});
