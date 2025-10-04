document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value.trim();
  const password = document.querySelector('input[type="password"]').value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields!");
  } else {
    alert("Login successful! (Demo only)");
    // You can redirect to dashboard.html here
    // window.location.href = "dashboard.html";
  }
});