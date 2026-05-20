document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      const menu = document.querySelector(".navbar-collapse");

      if (menu.classList.contains("show")) {
        const bootstrapMenu = new bootstrap.Collapse(menu);
        bootstrapMenu.hide();
      }
    });
  });

  const cards = document.querySelectorAll(".evidencia-card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.cursor = "pointer";
    });
  });
});