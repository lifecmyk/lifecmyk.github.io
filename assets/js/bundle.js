"use strict";var app=angular.module("app",["oc.lazyLoad","ui.router","angularCSS","ngAnimate"]);app.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){$ocLazyLoadProvider.config({debug:!1,events:!1}),$urlRouterProvider.otherwise("/home"),$stateProvider.state("home",{name:"home",url:"/home",controller:"homeController",templateUrl:"./app/home/home.html",resolve:{loadCss:function($css){return $css.add([{href:"./assets/css/home.css"},{href:"./assets/css/m.home.css",media:"screen and (max-width : 1200px)"}])},loadCtrl:function($ocLazyLoad){return $ocLazyLoad.load("./assets/js/home.js")}}})}),angular.module("app").controller("navController",function($scope){info("Nav loaded"),window.innerWidth<=1200?$scope.mobile=!0:$scope.mobile=!1,window.addEventListener("resize",function(e){window.innerWidth<=1200?$scope.mobile=!0:$scope.mobile=!1}),$scope.menu=!1,$scope.openMenu=function(){return $scope.menu=!0},$scope.closeMenu=function(){return $scope.menu=!1},$scope.scrollTo=function(element){_(".scroll").scrollTo({behavior:"smooth",left:0,top:document.getElementById(element).offsetTop}),$scope.closeMenu()}});
//# sourceMappingURL=bundle.js.map