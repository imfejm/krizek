const images = ["img/bonsai1.jpg", "img/bonsai2.jpg", "img/bonsai3.jpg"];

let currentIndex = 0;
const header = document.querySelector(".header");
const dotsContainer = document.querySelector(".dots");

// Vytvoření teček
images.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active"); // První tečka aktivní
  dot.addEventListener("click", () => changeImage(index)); // Kliknutí na tečku
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function changeImage(index) {
  currentIndex = index;
  header.style.backgroundImage = `url(${images[currentIndex]})`;

  // Aktualizace aktivní tečky
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function autoChange() {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}

setInterval(autoChange, 5000); // Automatická změna každých 5 sekund
changeImage(currentIndex); // Nastavení prvního obrázku
