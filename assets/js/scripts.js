const navbar = document.getElementById("navbar");
const scrollToTopBtn = document.getElementById("scroll-to-top");

function toggleNavbar() {
  navbar.classList.toggle("active");
}

function scrollToTop() {
  document.body.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.body.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.setAttribute("aria-hidden", "false");
  } else {
    scrollToTopBtn.classList.remove("show");
    scrollToTopBtn.setAttribute("aria-hidden", "true");
  }
});
