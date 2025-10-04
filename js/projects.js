// js/projects.js

// Get all buttons and project cards
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

// Loop through each button
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Get the selected category
    const filterValue = button.getAttribute("data-filter");

    // Loop through each project card
    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");

      // Show or hide based on category
      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});