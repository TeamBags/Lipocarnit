const Controls = (function () {
  "use strict";
  const buttonOpenQuestion = document.querySelector(".question__button");
  const open = document.querySelector(".js-question-open");
  const close = document.querySelector(".js-question-close");
  const questionVissible = document.querySelectorAll(".js-question-vissible");
  const label = $(".js-label");
  return {
    openQuestion: function () {
      buttonOpenQuestion.addEventListener("click", function () {
        open.classList.toggle("active");
        close.classList.toggle("active");
        for (let index = 0; index < questionVissible.length; index++) {
          questionVissible[index].classList.toggle("active");
        }
      });
    },
    scrollToTarget: function () {
      label.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const target = $(_this.data("target"));
        const top = target.offset().top;
        $("html, body").animate(
          {
            scrollTop: top,
          },
          800
        );
      });
    },
    init: function () {
      Controls.openQuestion();
      Controls.scrollToTarget();
    },
  };
})();
export default Controls;
