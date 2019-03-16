angular.module("app").controller("homeController", function($scope, $timeout) {
  info("Home loaded");

  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true
  });

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
  });

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
