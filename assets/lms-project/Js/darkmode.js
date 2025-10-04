const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Restore on load
window.addEventListener('DOMContentLoaded', () => {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }
});