angular.module("app").controller("navController", function($scope) {
  info("Nav loaded");

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

  $scope.menu = false;

  $scope.openMenu = () => ($scope.menu = true);
  $scope.closeMenu = () => ($scope.menu = false);

  $scope.scrollTo = function(element) {
    _(".scroll").scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.getElementById(element).offsetTop
    });

    $scope.closeMenu();
  };
});
