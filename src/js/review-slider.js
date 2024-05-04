const swiper = new Swiper('.swiper-container', {
  loop: true,
  sliderPerViev: 1,
  spaceBetween: 14,
  breakpoints: {
    // when window width is >= 480px
    798: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
