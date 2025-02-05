const images = ["img/bonsai1.jpg", "img/bonsai2.jpg", "img/bonsai3.jpg"];

let currentIndex = 0;
const slidesContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".dots");

// Vytvoření slide divů
images.forEach((image, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.style.backgroundImage = `url(${image})`;
  slidesContainer.appendChild(slide);

  // Vytvoření teček
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => changeSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
  currentIndex = index;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Aktualizace aktivní tečky
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  changeSlide(currentIndex);
}

setInterval(autoSlide, 5000); // Automatická změna každých 5 sekund
changeSlide(currentIndex); // Nastavení prvního obrázku
