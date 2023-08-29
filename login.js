function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form data
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;
  var rememberMe = document.getElementById("rememberCheckbox").checked;

  // Perform client-side validation (example)
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // TODO: Send the form data to the server for server-side validation and processing
  // You will need to implement the server-side code to handle the login request

  // Example: Display the form data for testing
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Remember Me:", rememberMe);

  // Store the email in localStorage
  localStorage.setItem("loggedInUserEmail", email);

  // Redirect to index.html with email query parameter
  window.location.href = "index.html?email=" + email;
}
