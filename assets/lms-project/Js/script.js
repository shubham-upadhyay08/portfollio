const form = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const scoreboard = document.getElementById("scoreboard");
const scoreElement = document.getElementById("score");

let score = 0;

// Load questions dynamically
questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  const qTitle = document.createElement("h3");
  qTitle.textContent = q.question;
  div.appendChild(qTitle);

  q.options.forEach(opt => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = q${index};
    input.value = opt;
    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + opt));
    div.appendChild(label);
  });

  questionsContainer.appendChild(div);
});

// Form submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();
  score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(input[name="q${i}"]:checked);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  form.classList.add("hidden");
  scoreboard.classList.remove("hidden");
  scoreElement.textContent = score;
});