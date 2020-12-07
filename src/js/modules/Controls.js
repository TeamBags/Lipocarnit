const Controls = (function () {
  "use strict";
  const buttonOpenQuestion = document.querySelector('.question__button');
  const open = document.querySelector('.js-question-open');
  const close = document.querySelector('.js-question-close');
  const questionVissible = document.querySelectorAll('.js-question-vissible');
  return {
    openQuestion: function () {
      buttonOpenQuestion.addEventListener('click', function () {
        open.classList.toggle('active');
        close.classList.toggle('active');
        for (let index = 0; index < questionVissible.length; index++) {
          questionVissible[index].classList.toggle('active');
        }
      });
    },
    init: function () {
      Controls.openQuestion();
    }
  }

})();
export default Controls;
