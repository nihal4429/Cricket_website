<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve the form data
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Perform server-side validation and processing
  // You can check the email and password against your user database
  // and perform authentication logic here

  // Example: Authenticate the user (placeholder logic)
  if ($email === "1@abc.com" && $password === "12345678") {
    // Login successful
    echo json_encode(["success" => true]);
  } else {
    // Login failed
    echo json_encode(["success" => false, "message" => "Invalid email or password"]);
  }
}
?>
