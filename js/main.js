const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });
  const reviewsSlider = new Swiper('.reviews-swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-swiper__button--next',
      prevEl: '.reviews-swiper__button--prev',
    },
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click" , function () {
    console.log("Клик по кнопке меню");
    document.querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
  });
