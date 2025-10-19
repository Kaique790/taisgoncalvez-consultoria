const mobileNavbar = document.getElementById("mobile-navbar");
const mobileOverlay = document.getElementById("mobile-overlay");

function toggleNavbar() {
  mobileNavbar.classList.toggle("active");
  mobileOverlay.classList.toggle("active");
}

const carousel = document.getElementById("carousel");
const cardsCarousel = carousel.getElementsByClassName("card");

let activeCard = 0;
cardsCarousel[activeCard].classList.add("active");

const navigationCarousel = document.getElementById("navigation");

for (const _ of cardsCarousel) {
  const navigator = document.createElement("div");
  navigationCarousel.appendChild(navigator);
}

const navigators = navigationCarousel.getElementsByTagName("div");
navigators[activeCard].classList.add("active");

for (let i = 0; i < navigators.length; i++) {
  navigators[i].onclick = () => selectActiveCard(i);
}

function removeActiveCard() {
  for (let i = 0; i < cardsCarousel.length; i++) {
    cardsCarousel[i].classList.remove("active");
    navigators[i].classList.remove("active");
  }
}

function nextCarousel() {
  removeActiveCard();

  activeCard = (activeCard + 1) % cardsCarousel.length;
  cardsCarousel[activeCard].classList.add("active");
  navigators[activeCard].classList.add("active");
}

function previousCarousel() {
  removeActiveCard();

  activeCard = (activeCard - 1 + cardsCarousel.length) % cardsCarousel.length;
  cardsCarousel[activeCard].classList.add("active");
  navigators[activeCard].classList.add("active");
}

function selectActiveCard(index) {
  removeActiveCard();

  activeCard = index;
  cardsCarousel[activeCard].classList.add("active");
  navigators[activeCard].classList.add("active");
}
