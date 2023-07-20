const toggleButton = document.querySelector(".mainNavHamburger");
const navbarLinks = document.querySelector(".menuWrapper");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("navbarButton--active");
  navbarLinks.classList.toggle("navbar--active");

  let el = document.getElementById("menuWrapper");
  if (el.getAttribute("aria-expanded") == "true") {
  } else {
    el.setAttribute("aria-expanded", "true");
  }
});
