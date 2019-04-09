angular.module("app").controller("homeController", function($scope, $timeout, $parse) {
  info("Home loaded");

  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    hashNavigation: true
  });

  let videoBg = document.querySelector("#videoBg");

  $timeout(() => {
    const mainSwiper = document.querySelector(".swiper-container").swiper;
    $scope.contact = () => mainSwiper.slideTo(7);

    mainSwiper.on("slideChange", () => {
      let actual = mainSwiper.activeIndex;
      mainSwiper.slides[actual].del("none");

      // show from +/- 1 slides
      if (mainSwiper.slides[actual - 1] !== undefined) {
        mainSwiper.slides[actual - 1].del("none");
      }
      if (mainSwiper.slides[actual + 1] !== undefined) {
        mainSwiper.slides[actual + 1].del("none");
      }

      // hide from +/- 2 slides
      if (mainSwiper.slides[actual + 2] !== undefined) {
        mainSwiper.slides[actual + 2].add("none");
      }
      if (mainSwiper.slides[actual - 2] !== undefined) {
        mainSwiper.slides[actual - 2].add("none");
      }
      if (mainSwiper.slides[actual + 3] !== undefined) {
        mainSwiper.slides[actual + 3].add("none");
      }
      if (mainSwiper.slides[actual - 3] !== undefined) {
        mainSwiper.slides[actual - 3].add("none");
      }
      if (mainSwiper.slides[actual + 4] !== undefined) {
        mainSwiper.slides[actual + 4].add("none");
      }
      if (mainSwiper.slides[actual - 4] !== undefined) {
        mainSwiper.slides[actual - 4].add("none");
      }
      if (mainSwiper.slides[actual + 5] !== undefined) {
        mainSwiper.slides[actual + 5].add("none");
      }
      if (mainSwiper.slides[actual - 5] !== undefined) {
        mainSwiper.slides[actual - 5].add("none");
      }
      if (mainSwiper.slides[actual + 6] !== undefined) {
        mainSwiper.slides[actual + 6].add("none");
      }
      if (mainSwiper.slides[actual - 6] !== undefined) {
        mainSwiper.slides[actual - 6].add("none");
      }
      if (mainSwiper.slides[actual + 7] !== undefined) {
        mainSwiper.slides[actual + 7].add("none");
      }
      if (mainSwiper.slides[actual - 7] !== undefined) {
        mainSwiper.slides[actual - 7].add("none");
      }
      if (mainSwiper.slides[actual + 8] !== undefined) {
        mainSwiper.slides[actual + 8].add("none");
      }
      if (mainSwiper.slides[actual - 8] !== undefined) {
        mainSwiper.slides[actual - 8].add("none");
      }
      if (mainSwiper.slides[actual + 9] !== undefined) {
        mainSwiper.slides[actual + 9].add("none");
      }
      if (mainSwiper.slides[actual - 10] !== undefined) {
        mainSwiper.slides[actual - 10].add("none");
      }

      //play on video slide & pause on out
      if (actual === 3) {
        videoBg.play();
      } else {
        videoBg.pause();
      }
    });
  }, 1000);

  $scope.textParadis = false;
  $scope.textSince = false;
  $scope.textCatering = false;
  $scope.textGastrolab = false;
  $scope.textWeare = false;
  $scope.textSpaces = false;

  $scope.switchText = text => {
    $parse(text);
    $scope[text] = !$scope[text];
  };

  if (window.innerWidth <= 1220) {
    $scope.mobile = true;

    $timeout(() => {
      $("#flipbook").turn({
        duration: 1200,
        autoCenter: true,
        display: "single"
      });
    }, 2000);
  } else {
    $scope.mobile = false;

    $timeout(() => {
      $("#flipbook").turn({
        duration: 1200,
        autoCenter: true
      });
    }, 2000);
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
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    $timeout(() => {
      const labSwiper = document.querySelector(".gastrolab").swiper;

      labSwiper.on("slideChange", () => {
        let actual = labSwiper.activeIndex;

        if (actual === 0) {
          videoBg.play();
        } else {
          videoBg.pause();
        }
      });
    }, 1000);

    const weare = new Swiper(".weare", {
      direction: "horizontal",
      speed: 800,
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
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      autoplay: {
        delay: 1500
      }
    });
  });

  $scope.catering = true;
  $scope.classic = false;
  $scope.pomal = false;

  $scope.cateringEvents = () => {
    $scope.classic = false;
    $scope.pomal = false;
    $scope.catering = true;
    _(".classic-btn").del("selected");
    _(".vina-btn").del("selected");
    _(".catering-btn").add("selected");
  };
  $scope.theClassic = () => {
    $scope.catering = false;
    $scope.pomal = false;
    $scope.classic = true;
    _(".catering-btn").del("selected");
    _(".vina-btn").del("selected");
    _(".classic-btn").add("selected");
  };
  $scope.vinaPomal = () => {
    $scope.catering = false;
    $scope.classic = false;
    $scope.pomal = true;
    _(".catering-btn").del("selected");
    _(".classic-btn").del("selected");
    _(".vina-btn").add("selected");
  };

  $scope.turnPrev = () => {
    $("#flipbook").turn("previous");
  };

  $scope.turnNext = () => {
    $("#flipbook").turn("next");
  };
});
