const tlacitko = document.querySelector("#ham");

tlacitko.addEventListener("click", () => {
  const rozbal = document.querySelector("#menu");
  rozbal.classList.toggle("hidden");
});
