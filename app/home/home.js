angular.module("app").controller("homeController", function($scope, $timeout) {
  info("Home loaded");

  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true
  });

  $timeout(() => {
    const mainSwiper = document.querySelector(".swiper-container").swiper;
    $scope.contact = () => mainSwiper.slideTo(7);
  }, 1000);

  if (window.innerWidth <= 1220) {
    $scope.mobile = true;
  } else {
    $scope.mobile = false;
  }

  window.addEventListener("resize", e => {
    if (window.innerWidth <= 1220) {
      $scope.mobile = true;
    } else {
      $scope.mobile = false;
    }
  });

  $timeout(() => {
    //CATEGORIAS
    const since = new Swiper(".since", {
      direction: "horizontal",
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    const catering = new Swiper(".catering", {
      direction: "horizontal",
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    const gastrolab = new Swiper(".gastrolab", {
      direction: "horizontal",
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    const weare = new Swiper(".weare", {
      direction: "horizontal",
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    const spaces = new Swiper(".spaces", {
      direction: "horizontal",
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    //BG
    const bg = new Swiper(".bg", {
      direction: "horizontal",
      speed: 2000,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      autoplay: true
    });
  });

  let videoBg = document.getElementById("videoBg");

  $timeout(() => {
    if (window.innerWidth <= 1200) {
      videoBg.play();
    }
    videoBg.addEventListener("canplay", () => {
      videoBg.play();
    });
  }, 2000);

  $("#flipbook").turn({
    display: "single"
  });

  $scope.turnPrev = () => {
    $("#flipbook").turn("previous");
  };

  $scope.turnNext = () => {
    $("#flipbook").turn("next");
  };
});
