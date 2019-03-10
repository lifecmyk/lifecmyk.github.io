app.config(($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) => {
  $ocLazyLoadProvider.config({
    debug: false,
    events: false
  });

  $urlRouterProvider.otherwise("/home");

  $stateProvider.state("home", {
    name: "home",
    url: "/home",
    controller: "homeController",
    templateUrl: "./app/home/home.html",
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/home.css"
          },
          {
            href: "./assets/css/m.home.css",
            media: "screen and (max-width : 1200px)"
          }
        ]);
      },
      loadCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/home.js");
      }
    }
  });
  
  $stateProvider.state("legal", {
    name: "legal",
    url: "/legal",
    controller: "legalController",
    templateUrl: "./app/legal/legal.html",
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/legal.css"
          },
          {
            href: "./assets/css/m.legal.css",
            media: "screen and (max-width : 1200px)"
          }
        ]);
      },
      loadCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/legal.js");
      }
    }
  });
});
