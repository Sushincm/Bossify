$(".bossify-related-carousel").owlCarousel({
  loop: true,
  margin: 18,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  navText: [
    '<i class="ri-arrow-left-s-line"></i>',
    '<i class="ri-arrow-right-s-line"></i>',
  ],
  responsive: {
    0: { items: 1.1 },
    576: { items: 2 },
    992: { items: 4 },
  },
});
