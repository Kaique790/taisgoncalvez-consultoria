const navbar = document.getElementById("navbar");

function toggleNavbar() {
  navbar.classList.toggle("active");
}

function scrollToTop() {
  document.body.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
