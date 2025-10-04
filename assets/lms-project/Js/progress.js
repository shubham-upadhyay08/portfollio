// progress.js

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-progress");
    bar.style.width = percentage + "%";

    // Tooltip text inside bar
    bar.innerText = percentage + "%";
  });
});