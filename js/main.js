$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on("click" , function () {
    console.log("Клик по кнопке меню");
    $(".navbar-bottom").addClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(".modal__form").validate({
    messages: {
      name: {
        required: "Укажите ваше имя",
        minlength: "Имя должно быть не короче 2 символов",
      },
      email: {
        required: "Укажите свой email",
        email: "Ваш email адрес должен быть в формате name@domain.com",
      },
      phone: {
        required: "Пожалуйста, укажите ваш номер телефона",
      },
    },
  });
  $(".phone").mask("+7 (999) 999-99-99");
  AOS.init();
  });

