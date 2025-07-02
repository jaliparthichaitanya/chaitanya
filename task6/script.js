document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      isValid = false;
    }
  
    // Message validation
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      isValid = false;
    }
  
    // If valid, show success message
    if (isValid) {
      document.getElementById("successMessage").textContent = "Form submitted successfully!";
      // Reset form
      document.getElementById("contactForm").reset();
    }
  });
  