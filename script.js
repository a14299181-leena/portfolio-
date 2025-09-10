document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting me, " + document.getElementById("name").value + "!");
});
