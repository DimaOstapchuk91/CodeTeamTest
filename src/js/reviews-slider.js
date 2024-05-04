window.addEventListener('resize', function () {
  if (window.innerWidth < 1279) {
    // Ініціалізуємо Swiper для мобільних пристроїв
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  } else {
    // Відключаємо Swiper для десктопних пристроїв
    // Можливо, ви захочете видалити існуючий Swiper, якщо він уже ініційований
    // наприклад, swiper.destroy()
  }
});
