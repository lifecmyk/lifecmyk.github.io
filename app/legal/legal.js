angular.module("app").controller("legalController", function($scope) {
  info("Legal loaded");

  _(".menu-left").add("menu-hide");
  
  $scope.showMenu = () => {
    _(".menu-left").del("menu-hide");
  }
});
