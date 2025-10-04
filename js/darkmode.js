// js/darkmode.js

// Select the toggle button
const toggleBtn = document.getElementById("toggle-theme");

// Check for saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Listen for button click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save user preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});