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
  }
});
