angular.module("app").controller("navController", function($scope, $timeout) {
  info("Nav loaded");

  $scope.welcome = true;

  $timeout(() => {
    $scope.welcome = false;
  }, 4000);

  $scope.switchMenu = () => {
    _(".mob-menu").tog("active");
  };

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

  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true
  });

  $timeout(() => {
    const mainSwiper = document.querySelector(".swiper-container").swiper;
    $scope.scrollTo = i => {
      mainSwiper.slideTo(i)
      _(".mob-menu").tog("active");
    };

    mainSwiper.on("slideChange", () => {
      $scope.slide = mainSwiper.activeIndex;

      if (mainSwiper.activeIndex === 0) {
        _(".menu li").del("active");
      } else if (mainSwiper.activeIndex === 1) {
        _(".menu li").del("active");
        _(".menu li")[0].add("active");
      } else if (mainSwiper.activeIndex === 2) {
        _(".menu li").del("active");
        _(".menu li")[1].add("active");
      } else if (mainSwiper.activeIndex === 3) {
        _(".menu li").del("active");
        _(".menu li")[2].add("active");
      } else if (mainSwiper.activeIndex === 4) {
        _(".menu li").del("active");
        _(".menu li")[3].add("active");
      } else if (mainSwiper.activeIndex === 5) {
        _(".menu li").del("active");
        _(".menu li")[4].add("active");
      } else if (mainSwiper.activeIndex === 6) {
        _(".menu li").del("active");
        _(".menu li")[5].add("active");
      } else if (mainSwiper.activeIndex === 7) {
        _(".menu li").del("active");
        _(".menu li")[6].add("active");
      } else if (mainSwiper.activeIndex === 8) {
        _(".menu li").del("active");
        _(".menu li")[7].add("active");
      } else {
        _(".menu li").del("active");
      }
    });
  }, 4000);
});
