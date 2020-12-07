import "slick-carousel";
const Sliders = (function () {
  "use strict";
  const reviewsSlider = $(".js-reviews-slider");
  return {
    initReviewsSlider: function () {
      reviewsSlider.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    init: function () {
      Sliders.initReviewsSlider();
    },
  };
})();

export default Sliders;
