app.config(($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) => {
  $ocLazyLoadProvider.config({
    debug: false,
    events: false
  });

  $urlRouterProvider.otherwise("/home");

  $stateProvider.state("home", {
    name: "home",
    url: "/home",
    views: {
      navbar: {
        templateUrl: "./app/navbar/navbar.html",
        controller: "navController"
      },
      content: {
        templateUrl: "./app/home/home.html",
        controller: "homeController"
      }
    },
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/home.css"
          },
          {
            href: "./assets/css/m.home.css",
            media: "screen and (max-width : 1220px)"
          }
        ]);
      },
      navCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/navbar.js");
      },
      contentCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/home.js");
      }
    }
  });
});
