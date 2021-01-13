const screens = document.querySelectorAll(".screen");
const chooseBtns = document.querySelectorAll(".choose-btn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

let seconds = 0;
let score = 0;
let selectedAnimal = {};

startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

chooseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    selectedAnimal = { src, alt };
    screens[1].classList.add("up");

    setTimeout(createAnimal, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createAnimal() {
  const animal = document.createElement("div");
  animal.classList.add("animal");

  const { x, y } = getRandomLocation();

  animal.style.top = `${y}px`;
  animal.style.left = `${x}px`;

  animal.innerHTML = `
    <img 
      src="${selectedAnimal.src}" 
      alt="${selectedAnimal.alt}" 
      style="transform: rotate(${Math.random() * 360}deg)" 
    />
  `;

  animal.addEventListener("click", catchAnimal());

  gameContainer.appendChild(animal);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchAnimal() {
  console.log(123);
}
