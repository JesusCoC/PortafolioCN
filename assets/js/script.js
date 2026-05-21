document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const menu = document.querySelector(".navbar-collapse");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menu.classList.contains("show")) {
        const bootstrapMenu = new bootstrap.Collapse(menu);
        bootstrapMenu.hide();
      }
    });
  });

  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 130;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});