angular.module("app").controller("homeController", function($scope, $timeout) {
  info("Home loaded");

  let mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true
  });

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

  $scope.slidesFriends = [
    {
      image: "./assets/img/ferran.jpg",
      title: "Ferran Adrià"
    },
    {
      image: "./assets/img/pedro.jpg",
      title: "Pedro Subijana"
    },
    {
      image: "./assets/img/victor.jpg",
      title: "Victor Quintilla"
    },
    {
      image: "./assets/img/ruben.jpg",
      title: "Ruben Trincado"
    }
  ];

  $scope.slidesHigh = [
    {
      image: "./assets/img/high1.jpg",
      title: "High level catering"
    },
    {
      image: "./assets/img/high2.jpg",
      title: "High level catering"
    },
    {
      image: "./assets/img/high3.jpg",
      title: "High level catering"
    },
    {
      image: "./assets/img/high4.jpg",
      title: "High level catering"
    }
  ];

  $scope.slidesServ = [
    {
      image: "./assets/img/service1.jpg",
      title: "Service"
    },
    {
      image: "./assets/img/service2.jpg",
      title: "Service"
    },
    {
      image: "./assets/img/service3.jpg",
      title: "Service"
    }
  ];

  $scope.slidesFood = [
    {
      image: "./assets/img/food1.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food2.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food3.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food4.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food5.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food6.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food7.jpg",
      title: "Food"
    },
    {
      image: "./assets/img/food8.jpg",
      title: "Food"
    }
  ];

  $scope.slidesLab = [
    {
      image: "./assets/img/lab1.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab2.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab3.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab4.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab5.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab6.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab7.jpg",
      title: "Gastrolab"
    },
    {
      image: "./assets/img/lab8.jpg",
      title: "Gastrolab"
    }
  ];

  $scope.slidesRes = [
    {
      image: "./assets/img/responsable1.jpg",
      title: "Responsable"
    },
    {
      image: "./assets/img/responsable2.jpg",
      title: "Responsable"
    },
    {
      image: "./assets/img/responsable3.jpg",
      title: "Responsable"
    },
    {
      image: "./assets/img/responsable4.jpg",
      title: "Responsable"
    },
    {
      image: "./assets/img/responsable5.jpg",
      title: "Responsable"
    },
    {
      image: "./assets/img/responsable6.jpg",
      title: "Responsable"
    }
  ];

  $scope.slidesSpace = [
    {
      image: "./assets/img/space1.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space2.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space7.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space4.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space5.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space6.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space3.jpg",
      title: "Spaces & Colaborations"
    },
    {
      image: "./assets/img/space8.jpg",
      title: "Spaces & Colaborations"
    }
  ];

  if (window.innerWidth <= 1220) {
    $("#flipbook").turn({
      display: "single"
    });
  } else {
    $("#flipbook").turn({
      autoCenter: true
    });
  }
});
