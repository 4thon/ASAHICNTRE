// =====================
// MODERNONG AUTO-SLIDING CAROUSEL
// =====================

(function() {
  'use strict';

  const carousel = document.getElementById('productCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.product-track');
  const cards = Array.from(track.querySelectorAll('.product-card'));
  const prevBtn = carousel.querySelector('.product-arrow.prev');
  const nextBtn = carousel.querySelector('.product-arrow.next');
  const dotsContainer = carousel.querySelector('.product-dots');

  if (!track || cards.length === 0) return;

  let currentIndex = 0;
  let autoSlideInterval = null;
  const AUTO_SLIDE_DELAY = 3000; // 3 seconds
  const ANIMATION_DURATION = 600; // 0.6 seconds

  // Gumawa ng mga tuldok
  function createMga tuldok() {
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'product-dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      if (index === 0) dot.classList.add('is-active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  // I-update ang mga tuldok
  function updateMga tuldok() {
    const dots = dotsContainer.querySelectorAll('.product-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
    });
  }

  // I-update ang mga card na may tamang pag-loop
  function updateCards() {
    const totalCards = cards.length;
    
    cards.forEach((card, index) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      
      // Kalkulahin ang posisyon na may pag-wrap
      const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
      const nextIndex = (currentIndex + 1) % totalCards;
      
      if (index === currentIndex) {
        card.classList.add('is-active');
      } else if (index === prevIndex) {
        card.classList.add('is-prev');
      } else if (index === nextIndex) {
        card.classList.add('is-next');
      } else {
        card.classList.add('is-hidden');
      }
    });
  }

  // Pumunta sa partikular na slide
  function goToSlide(index) {
    currentIndex = index;
    updateCards();
    updateMga tuldok();
    resetAutoSlide();
  }

  // Susunod na slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
    updateMga tuldok();
  }

  // Nakaraang slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
    updateMga tuldok();
  }

  // Simulan ang auto slide
  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_DELAY);
  }

  // Ihinto ang auto slide
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  // I-reset ang auto slide
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Mga tagapakinig ng event
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  // I-pause kapag naka-hover
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  // Suporta sa touch
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // Nabigasyon gamit ang keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoSlide();
    }
  });

  // I-initialize
  createMga tuldok();
  updateCards();
  startAutoSlide();

  console.log('✅ Modern Carousel initialized with auto-slide!');

})();

