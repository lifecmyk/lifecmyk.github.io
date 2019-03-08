angular.module("app").controller("navController", function($scope) {
  info("Nav loaded");

  $scope.menu = false;

  $scope.openMenu = () => $scope.menu = true;
  $scope.closeMenu = () => $scope.menu = false;
});
