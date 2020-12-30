const data = {
    "quizcontent": [
        { "question": "Milyen ételt NEM lopott még el Ciceró?", "correct": 3, "answers": ["sajtos stangli", "uborka", "krumplipüré", "bejgli"] },
        { "question": "Hány kilogrammot nyomott Porci 2020 decemberében?", "correct": 4, "answers": ["3,5", "3,1", "4,8", "4,2"] },
        { "question": "Hány kölykös alomból származnak macskáink?", "correct": 2, "answers": ["4", "5", "6", "7"] },
        { "question": "Melyik a kedvenc eledelük?", "correct": 4, "answers": ["Whiskas", "Kitekat", "Száraztáp", "Attól függ, mikor!"] },
        { "question": "Melyik macska szeret dobozokba bújni?", "correct": 3, "answers": ["Ciceró", "Porci", "Mindkettő", "Egyik sem"] },
        { "question": "Az alábbiak közül melyik Porci kedvenc játéka?", "correct": 1, "answers": ["madzag", "kupak", "játékegér", "karácsonyfadísz"] },
        { "question": "Ciceró melyik testrészét lehet simogatni anélkül, hogy ideges lenne?", "correct": 1, "answers": ["a hátát", "a lábát", "a hasát", "a farkát"] },
        { "question": "Melyik macska szeret emberek vállára felugrani?", "correct": 2, "answers": ["Ciceró", "Porci", "Nózi a szomszédból", "Buster, a zsarnok macska"] },
    ]
};

let selectQuestion;
let qNumber = -1;
const nextButton = document.querySelector("button");
const previousButton = document.querySelector("button + button");
let question = document.querySelector("#question");
let answers = document.querySelectorAll(".answers>div");
let message = document.querySelector("#message");
let testPoints = 0;

previousButton.remove();

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    if (qNumber < data.quizcontent.length -1) {
    qNumber = qNumber + 1;
    selectQuestion = data.quizcontent[qNumber];
    nextButton.innerText = "Következő kérdés";
    loadQuestion();
  } else {
    message.innerText = "";
    message.classList.remove("message");
    answers.forEach(answer => {
        answer.innerText = "";
        answer.classList.remove("singleanswer", "correctanswer" , "wronganswer")});
    question.innerText = "Vége a kvíznek. Helyes válaszaid száma: " + testPoints + "/8. Köszönjük a játékot!";
    nextButton.innerText = "Újra szeretném játszani!";
    nextButton.addEventListener("click", repeatQuiz);
  }
}

function loadQuestion() {
  question.innerText = selectQuestion.question;
  question.classList.add("question");

  let i = 0;
  answers.forEach(answer => {
    answer.innerText = selectQuestion.answers[i++];
    answer.classList.add("singleanswer");
    })

  answers.forEach(answer => {
      answer.addEventListener("click", checkAnswer,);
      answer.classList.remove("correctanswer" , "wronganswer");
    });
  message.innerText = "";
  message.classList.remove("message");
}

function checkAnswer() {
  if (selectQuestion.correct == this.getAttribute("id")) {
    event.target.classList.add("correctanswer");
    message.innerText = "Így van, ez a helyes válasz!";
    message.style.background = "#33cc00";
    testPoints = testPoints + 1;
   } else {
    event.target.classList.add("wronganswer");
    message.innerText = "Sajnos ez helytelen válasz...";
    message.style.background = "#e62e00";
   }
   message.classList.add("message");
   answers.forEach(answer => {answer.removeEventListener("click", checkAnswer,)});
}

function repeatQuiz() {
    qNumber = -1;
    nextButton.removeEventListener("click", repeatQuiz);
    nextQuestion();
}
