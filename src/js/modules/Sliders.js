const Sliders = (function () {
  "use strict";
  const reviewsSlider = $(".js-reviews-slider");
  const reviewInfo = $(".js-info-review");
  const reviewBtn = $(".js-btn-review");
  return {
    initMobileReviewSlider: function () {
      $(".js-reviews-slider:not(.slick-initialized)").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
      reviewsSlider.on("beforeChange", function () {
        reviewInfo.removeClass("active");
      });
    },
    destroyReviewSlider: function () {
      $(".js-reviews-slider.slick-initialized").slick("unslick");
    },
    initMobileTableSlider: function () {
      $(".js-table-slider:not(.slick-initialized)").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    destroyTableSlider: function () {
      $(".js-table-slider.slick-initialized").slick("unslick");
    },
    showInfoReview: function () {
      reviewBtn.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const targetInfo = _this.prev(".js-info-review");
        targetInfo.toggleClass("active");
      });
    },
    init: function () {
      $(window).on("load resize", function () {
        if ($(window).width() < 1024) {
          Sliders.initMobileReviewSlider();
          Sliders.initMobileTableSlider();
        } else {
          Sliders.destroyReviewSlider();
          Sliders.destroyTableSlider();
        }
      });
      Sliders.showInfoReview();
    },
  };
})();

export default Sliders;
