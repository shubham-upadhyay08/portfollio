// js/typing.js

const phrases = ["Web Developer", "UI Designer", "Frontend Engineer", "Creative Coder"];
const typingText = document.querySelector(".typing-text");

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, letterIndex);

  typingText.textContent = currentText;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);