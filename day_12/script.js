const active = document.querySelectorAll(".active");
const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((tog) => {
  tog.addEventListener("click", () => {
    // if
    // faq.classList.remove("active")
    tog.parentNode.classList.toggle("active");
  });
});
