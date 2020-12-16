const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", boxesEl);

boxesEl();

function boxesEl() {
  const trigger = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const pictures = document.querySelectorAll(".picture")

pictures.forEach((picture, index) => {
  picture.src = `https://loremflickr.com/320/240?random=${index}`
})