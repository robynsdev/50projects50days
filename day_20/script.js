const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function(e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xIn = x - buttonLeft;
    const yIn = y - buttonTop;

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yIn + "px"
    circle.style.left = xIn + "px"

    // `this` has to have function (e) to work!
    this.appendChild(circle)

    setTimeout(() => circle.remove(), 1000)
  });
});
