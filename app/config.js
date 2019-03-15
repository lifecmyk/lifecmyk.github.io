const app = angular.module("app", [
  "oc.lazyLoad",
  "ui.router",
  "angularCSS",
  "ngAnimate",
  "ui.carousel"
]);

app.run([
  "Carousel",
  Carousel => {
    Carousel.setOptions({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease",
      dots: false,
      easing: "linear",
      fade: true,
      infinite: true,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
]);
