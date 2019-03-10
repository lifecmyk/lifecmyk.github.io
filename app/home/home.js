angular.module("app").controller("homeController", function($scope, $timeout) {
  info("Home loaded");

  _(".menu-left").del("menu-hide");

  let landVideo = document.getElementById("bg");
  let bgVideo = document.getElementById("bgDust");
  let ambient = document.getElementById("ambient");

  $scope.acceptCookies = () => {
    $scope.hideCookies = true;
    localStorage.cookies = true;
  };

  $scope.hideCookies = localStorage.cookies;

  $timeout(() => {
    landVideo.setAttribute("playsinline", "");
    landVideo.play();

    bgVideo.setAttribute("playsinline", "");
    bgVideo.play();

    ambient.setAttribute("playsinline", "");
    ambient.volume = 0.1;
    $scope.audioOn = true;
    ambient.play();
  }, 2000);

  $scope.switchAudio = () => {
    if (ambient.paused) {
      ambient.play();
    } else {
      ambient.pause();
    }
    $scope.audioOn = !$scope.audioOn;
    _(".audio").tog("animated");
  };

  if (window.innerWidth <= 1200) {
    $scope.mobile = true;
    $scope.audioOn = false;
    _(".audio").tog("animated");
  } else {
    $scope.mobile = false;
  }

  window.addEventListener("resize", e => {
    if (window.innerWidth <= 1200) {
      $scope.mobile = true;
      $scope.audioOn = true;
      _(".audio").tog("animated");
    } else {
      $scope.mobile = false;
    }
  });

  $scope.scrollTo = function(element) {
    _(".scroll").scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.getElementById(element).offsetTop
    });
  };
});
