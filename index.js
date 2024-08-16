document.addEventListener("DOMContentLoaded", function () {
  // Signup Form Submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const firstName = document.getElementById("firstName").value;
          const lastName = document.getElementById("lastName").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Save user data in localStorage
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userPassword", password);

          // Redirect to login page
          window.location.href = "home.html";
      });
  }

  // Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Get stored user data from localStorage
          const storedEmail = localStorage.getItem("userEmail");
          const storedPassword = localStorage.getItem("userPassword");

          // Check if email and password match the stored data
          if (email === storedEmail && password === storedPassword) {
              // Redirect to dashboard page
              window.location.href = "dashboard.html";
          } else {
              alert("Invalid email or password. Please try again.");
          }
      });
  }
});