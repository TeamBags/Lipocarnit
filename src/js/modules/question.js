function openQuestion() {
    let buttonOpenQuestion = document.querySelector(".question__button");
    let open = document.querySelector(".question__open");
    let close = document.querySelector(".question__close");
    let questionVissible = document.querySelectorAll(".list-q__item--vissible");
    buttonOpenQuestion.addEventListener('click', function () {
     open.classList.toggle("active");
     close.classList.toggle("active");
      for (let index = 0; index < questionVissible.length; index++) {
        questionVissible[index].classList.toggle("active");
  
      }
    })
  }
  openQuestion()