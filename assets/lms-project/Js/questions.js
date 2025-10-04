let currentQuestion = 0;
const questions = document.querySelectorAll(".question");

function showQuestion(index) {
  questions.forEach(q => q.style.display = "none");
  if (questions[index]) {
    questions[index].style.display = "block";
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

showQuestion(currentQuestion);