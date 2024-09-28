let currentUser = null; // Track logged-in user

// Registration form submission
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const phone = document.getElementById("signup-phone").value;
    const password = document.getElementById("signup-password").value;

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return; // Stop execution if validation fails
    }

    // Create user object
    const user = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    // Store user in local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Clear the form and show success message
    document.getElementById("signup-form").reset();
    alert("Registration successful!");
    $("#signupModal").modal("hide");
  });

// Login form submission
document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    // Retrieve user from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and credentials match
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      currentUser = storedUser;
      // Redirect to next.html after successful login
      window.location.href = "next.html";

      // Hide the modal after updating UI
      $("#signinModal").modal("hide");
    } else {
      alert("Invalid email or password.");
    }
  });

// Function to update UI after login
function updateUI() {
  const navLinks = document.getElementById("navbarNav"); // Get navbar element
  const profileSection = document.getElementById("profile-section");
  const userNameElement = document.getElementById("user-name");

  // Hide the Sign In and Sign Up buttons
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    if (link.innerText === "Sign In" || link.innerText === "Sign Up") {
      link.parentElement.style.display = "none"; // Hide buttons
    }
  });

  // Show the profile section
  profileSection.style.display = "block";
  userNameElement.innerText = currentUser.name; // Display the user's name
}

// Logout function
function logout() {
  currentUser = null; // Clear the logged-in user
  localStorage.removeItem("user"); // Remove user data from local storage
  const navLinks = document.getElementById("navbarNav");
  const profileSection = document.getElementById("profile-section");

  // Show the Sign In and Sign Up buttons again
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    if (link.innerText === "Sign In" || link.innerText === "Sign Up") {
      link.parentElement.style.display = "block"; // Show buttons
    }
  });

  // Hide the profile section
  profileSection.style.display = "none";
}

// Keep Sign In and Sign Up buttons visible until a successful login
if (localStorage.getItem("user")) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  // Uncomment the following line if you want to auto-login after refresh
  // currentUser = storedUser; updateUI();
}
