const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  freeMode: true,
  mousewheel: true,
  slidesPerView: "auto",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    loop: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
