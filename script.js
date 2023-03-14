const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressBar = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

let increaseBlueLine = 70;
// for circle color
let active = 1;

const goNext = function () {
  if (active > circles.length) active = circles.length;
  if (active < circles.length) circles[active].classList.add("active");

  active++;

  const actives = document.querySelectorAll(".active");
  increaseBlueLine = ((actives.length - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = `${increaseBlueLine}%`;

  if (active > circles.length - 1) {
    nextBtn.disabled = true;
  }
  if (active > 1) {
    prevBtn.disabled = false;
  }
};

const goBack = function () {
  if (active > circles.length - 1) active = circles.length - 1;
  console.log(active);
  if (active < 0) active = 0;
  if (active >= 0) circles[active].classList.remove("active");

  active--;

  const actives = document.querySelectorAll(".active");
  increaseBlueLine = ((actives.length - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = `${increaseBlueLine}%`;

  if (active == 0) {
    prevBtn.disabled = true;
  }
  if (active < circles.length - 1) nextBtn.disabled = false;
};
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goBack);
