"use strict";angular.module("app").controller("homeController",function($scope,$timeout){info("Home loaded");new Swiper(".swiper-container",{direction:"vertical",speed:800,slidesPerView:1,spaceBetween:0,mousewheel:!0});$timeout(function(){var mainSwiper=document.querySelector(".swiper-container").swiper;$scope.contact=function(){return mainSwiper.slideTo(7)}},1e3),window.innerWidth<=1220?$scope.mobile=!0:$scope.mobile=!1,window.addEventListener("resize",function(e){window.innerWidth<=1220?$scope.mobile=!0:$scope.mobile=!1}),$timeout(function(){new Swiper(".since",{direction:"horizontal",speed:800,loop:!0,slidesPerView:1,spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".catering",{direction:"horizontal",speed:800,loop:!0,slidesPerView:1,spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".gastrolab",{direction:"horizontal",speed:800,loop:!0,slidesPerView:1,spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".weare",{direction:"horizontal",speed:800,loop:!0,slidesPerView:1,spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".spaces",{direction:"horizontal",speed:800,loop:!0,slidesPerView:1,spaceBetween:0,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".bg",{direction:"horizontal",speed:2e3,loop:!0,slidesPerView:1,spaceBetween:0,effect:"fade",autoplay:!0})});var videoBg=document.getElementById("videoBg");$timeout(function(){window.innerWidth<=1200&&videoBg.play(),videoBg.play(),videoBg.addEventListener("canplay",function(){videoBg.play()})},2e3),$("#flipbook").turn({display:"single"}),$scope.turnPrev=function(){$("#flipbook").turn("previous")},$scope.turnNext=function(){$("#flipbook").turn("next")}});
//# sourceMappingURL=home.js.map