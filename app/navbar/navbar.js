angular.module("app").controller("navController", function($scope, $timeout) {
  info("Nav loaded");

  $scope.welcome = false;
  
  $timeout(()=> {
    $scope.welcome = false;
  }, 3000);

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

  $scope.switchMenu = () => {
    _(".mob-menu").tog("active");
  };

  $scope.scrollTo = (element) => {
    _(".scroll  ").scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.getElementById(element).offsetTop - 50
    });

    _(".mob-menu").del("active");
  }

});
