angular.module("app").controller("homeController", function($scope) {
  info("Home loaded");

  let mobilevideo = document.getElementById("bg");
  mobilevideo.setAttribute("playsinline", "");

  let ambient = document.getElementById("ambient");
  ambient.setAttribute("playsinline", "");
  ambient.volume = 0.1;
  $scope.audioOn = true;

  $scope.switchAudio = () => {
    if(ambient.paused) {
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
      ambient.volume = 0.1;
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
