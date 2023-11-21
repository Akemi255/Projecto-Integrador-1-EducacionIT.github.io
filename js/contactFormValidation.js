// Function to display toast alert
function showToast(message, type) {
    Toastify({
      text: message,
      duration: 1500,
      close: true,
      gravity: "bottom", // Available options: 'top', 'bottom', 'middle'
      position: "left", // Available options: 'left', 'right', 'center'
      backgroundColor: type === "error" ? "#ff5c5c" : "#4CAF50", // Red for error, green for success
    }).showToast();
  }
  
  // Function to validate the email format using regular expression
  function isValidEmail(email) {
    // Regular expression for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to handle form submission
  function submitForm() {
    // Get form inputs
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    // Get values from inputs
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
  
    // Validate name
    if (name === "") {
      showToast("Por favor, ingrese su nombre.", "error");
      return;
    }
  
    // Validate email
    if (!isValidEmail(email)) {
      showToast("Por favor, ingrese un correo electrónico válido.", "error");
      return;
    }
  
    // Validate message
    if (message === "") {
      showToast("Por favor, ingrese su consulta.", "error");
      return;
    }
  
    // If all validations pass, show success toast and reset the form
    showToast("Consulta enviada con éxito. ¡Gracias!", "success");
    document.getElementById("contactForm").reset();
  }
  