//hover nadpisu na img odkazu mobilni verze
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector("h2").classList.add("show");
        } else {
          entry.target.querySelector("h2").classList.remove("show");
        }
      });
    },
    { threshold: 0.5 }
  ); // Spustí se, když je 50 % prvku viditelné

  images.forEach((image) => observer.observe(image));
});
