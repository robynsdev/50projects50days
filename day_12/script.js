const faqToggle = document.querySelectorAll(".faq-toggle");


faqToggle.forEach((tog) => {
  tog.addEventListener("click", () => {
      tog.parentNode.classList.toggle("active");
  });
});
