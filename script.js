document.addEventListener("DOMContentLoaded", function() {
  // Toggle pour afficher/masquer la description d'un travail
  document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function() {
      const details = this.parentElement.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
        this.textContent = "▼";
      } else {
        details.style.display = "block";
        this.textContent = "▲";
      }
    });
  });

  // Gestion du slider principal pour les catégories (Mes Travaux)
  const categorieTitles = document.querySelectorAll(".categorie-titre");
  const slider = document.querySelector(".travaux-slider");

  categorieTitles.forEach((titre, index) => {
    titre.addEventListener("click", function() {
      categorieTitles.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
      slider.style.transform = `translateX(-${index * 100}%)`;
    });
  });

  // Gestion du slider des sous-catégories dans "Gaming Campus"
  const sousCategorieTitles = document.querySelectorAll(".sous-categorie-titre");
  const sousSlider = document.querySelector(".sous-travaux-slider");

  if (sousCategorieTitles && sousSlider) {
    sousCategorieTitles.forEach((titre, index) => {
      titre.addEventListener("click", function() {
        sousCategorieTitles.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        sousSlider.style.transform = `translateX(-${index * 100}%)`;
      });
    });
  }

  // Smooth scroll pour la navigation interne
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
