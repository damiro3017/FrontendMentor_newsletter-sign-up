function validateForm(event) {
  const emailInput = document.getElementById("emailInput");
  if (!emailInput.checkValidity()) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  } else {
    window.location.href = "success.html";
  }
}
