const Sliders = (function () {
  "use strict";
  const reviewsSlider = $(".js-reviews-slider");
  const reviewInfo = $(".js-info-review");
  const reviewBtn = $(".js-btn-review");
  return {
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
          $(".reviews__slider:not(.slick-initialized)").slick({
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
        } else {
          $(".reviews__slider.slick-initialized").slick("unslick");
        }
      });
      Sliders.showInfoReview();
    },
  };
})();

export default Sliders;
