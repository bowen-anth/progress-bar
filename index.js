const button = document.querySelector(".button");
const percentSpan = document.querySelector(".percent-span");
const progressBar = document.querySelector(".progress-bar");

let randomNumber = 0;

button.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 101);
  percentSpan.textContent = randomNumber;
  progressBar.style.width = `${randomNumber}%`;
});
