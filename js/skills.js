// Animate skill bars when visible
window.addEventListener("scroll", () => {
  document.querySelectorAll('.skill').forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (skillTop < screenHeight - 100) {
      const percent = skill.getAttribute('data-percent');
      const level = skill.querySelector('.skill-level');
      level.style.width = percent;
      level.textContent = percent;
    }
  });
});