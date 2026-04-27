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
});
