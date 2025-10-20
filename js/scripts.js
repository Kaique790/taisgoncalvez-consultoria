const mobileNavbar = document.getElementById("mobile-navbar");
const mobileOverlay = document.getElementById("mobile-overlay");

function toggleNavbar() {
  mobileNavbar.classList.toggle("active");
  mobileOverlay.classList.toggle("active");
}

const carousel = document.getElementById("carousel");
const cardsCarousel = carousel.getElementsByClassName("card");

let activeCard = 0;
let activeCount = getActiveCount();

const navigationCarousel = document.getElementById("navigation");

initCarousel();

window.addEventListener("resize", () => {
  const newCount = getActiveCount();
  if (newCount !== activeCount) {
    activeCount = newCount;
    initCarousel();
  }
});

function initCarousel() {
  rebuildNavigation();
  updateActiveCards();
}

function getActiveCount() {
  const total = cardsCarousel.length;

  if (window.innerWidth >= 950) return Math.min(3, total);
  if (window.innerWidth >= 650) return Math.min(2, total);
  return 1;
}

function rebuildNavigation() {
  navigationCarousel.innerHTML = "";

  const total = cardsCarousel.length;
  const groupCount = Math.ceil(total / activeCount);

  for (let i = 0; i < groupCount; i++) {
    const navigator = document.createElement("div");
    navigator.classList.add("navigator");
    navigator.onclick = () => selectGroup(i);
    navigationCarousel.appendChild(navigator);
  }
}

function removeActiveCard() {
  for (let i = 0; i < cardsCarousel.length; i++) {
    cardsCarousel[i].classList.remove("active");
  }

  const navigators = navigationCarousel.getElementsByClassName("navigator");
  for (let n of navigators) {
    n.classList.remove("active");
  }
}

function updateActiveCards() {
  removeActiveCard();

  for (let i = 0; i < activeCount; i++) {
    const index = activeCard + i;
    if (index < cardsCarousel.length) {
      cardsCarousel[index].classList.add("active");
    }
  }

  const activeGroup = Math.floor(activeCard / activeCount);
  const navigators = navigationCarousel.getElementsByClassName("navigator");
  if (navigators[activeGroup]) {
    navigators[activeGroup].classList.add("active");
  }
}

function nextCarousel() {
  const groupCount = Math.ceil(cardsCarousel.length / activeCount);
  const activeGroup = Math.floor(activeCard / activeCount);
  const nextGroup = (activeGroup + 1) % groupCount;

  activeCard = nextGroup * activeCount;
  updateActiveCards();
}

function previousCarousel() {
  const groupCount = Math.ceil(cardsCarousel.length / activeCount);
  const activeGroup = Math.floor(activeCard / activeCount);
  const prevGroup = (activeGroup - 1 + groupCount) % groupCount;

  activeCard = prevGroup * activeCount;
  updateActiveCards();
}

function selectGroup(groupIndex) {
  activeCard = groupIndex * activeCount;
  updateActiveCards();
}
