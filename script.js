//add to cart//
 function addToCart(productName) {
      alert(`🛒 ${productName} added to cart!`);
    }

  // Handle subscribe
  function handleSubscribe(event) {
    event.preventDefault();
    const email = document.getElementById("subscriber-email").value.trim();

    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate a submission
    alert(`🎉 Subscribed successfully with: ${email}`);
    document.getElementById("subscriber-email").value = "";
  }

  // Basic email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Auto-update year
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  });

  