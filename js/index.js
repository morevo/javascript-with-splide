/* Apply splide */
document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    classes: {
      arrows: "splide__arrows-position",
      arrow: "splide__arrow",
      prev: "splide__arrow--prev",
      next: "splide__arrow--next",
    },
    type: "slide",
    autoplay: true,
    interval: 5000,
    resetProgress: true,
    pauseOnHover: false,
    waitForTransition: false,
    pagination: false,
    width: "820px",
    gap: "26px",
  }).mount();
});
