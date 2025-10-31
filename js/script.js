document.getElementById("contactForm").addEventListener("submit", function(event) {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!email.includes("@") || name.trim() === "" || message.trim() === "") {
    alert("Please fill all fields correctly before submitting!");
    event.preventDefault();
  } else {
    alert("Message sent successfully! Thank you for reaching out, " + name + ".");
  }
});
