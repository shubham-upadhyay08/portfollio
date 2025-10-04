// script.js

// ✅ HIDE PRELOADER AFTER PAGE LOAD
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
});

// ✅ LIVE CLOCK
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = now.toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);
updateClock();

