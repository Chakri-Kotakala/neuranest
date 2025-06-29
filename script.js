// Toggle Mobile Nav Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Success message on form submit
const form = document.querySelector(".contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        message.style.display = "block";
      }
    })
    .catch((error) => {
      alert("Oops! Something went wrong.");
    });
});
