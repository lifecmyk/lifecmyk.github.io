angular.module("app").controller("homeController", function($scope) {
  info("Home loaded");

  let mobilevideo = document.getElementById("bg");
  mobilevideo.setAttribute("playsinline", "");
  mobilevideo.setAttribute("muted", "");

  let ambient = document.getElementById("ambient");
  ambient.volume = 0.1;
  $scope.audioOn = true;

  $scope.switchAudio = () => {
    ambient.volume = ambient.volume ? 0 : 0.1;
    $scope.audioOn = !$scope.audioOn;
    _(".audio").tog("animated");
  };

  if (window.innerWidth <= 1200) {
    $scope.mobile = true;
  } else {
    $scope.mobile = false;
  }

  window.addEventListener("resize", e => {
    if (window.innerWidth <= 1200) {
      $scope.mobile = true;
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
