"use strict";var app=angular.module("app",["oc.lazyLoad","ui.router","angularCSS","ngAnimate"]);app.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){$ocLazyLoadProvider.config({debug:!1,events:!1}),$urlRouterProvider.otherwise("/home"),$stateProvider.state("home",{name:"home",url:"/home",controller:"homeController",templateUrl:"./app/home/home.html",resolve:{loadCss:function($css){return $css.add([{href:"./assets/css/home.css"},{href:"./assets/css/m.home.css",media:"screen and (max-width : 1220px)"}])},loadCtrl:function($ocLazyLoad){return $ocLazyLoad.load("./assets/js/home.js")}}})}),angular.module("app").controller("navController",function($scope,$timeout){info("Nav loaded"),$scope.welcome=!0,$timeout(function(){$scope.welcome=!1},3e3),$scope.switchMenu=function(){_(".mob-menu").tog("active")},window.innerWidth<=1220?$scope.mobile=!0:$scope.mobile=!1,window.addEventListener("resize",function(e){window.innerWidth<=1220?$scope.mobile=!0:$scope.mobile=!1});new Swiper(".swiper-container",{direction:"vertical",speed:800,slidesPerView:1,spaceBetween:0,mousewheel:!0});$timeout(function(){var mainSwiper=document.querySelector(".swiper-container").swiper;$scope.scrollTo=function(i){return mainSwiper.slideTo(i)},mainSwiper.on("slideChange",function(){$scope.slide=mainSwiper.activeIndex,0===mainSwiper.activeIndex?_(".menu li").del("active"):1===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[0].add("active")):2===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[1].add("active")):3===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[2].add("active")):4===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[3].add("active")):5===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[4].add("active")):6===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[5].add("active")):7===mainSwiper.activeIndex?(_(".menu li").del("active"),_(".menu li")[6].add("active")):_(".menu li").del("active")})},1e3)});
//# sourceMappingURL=bundle.js.map