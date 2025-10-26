const boxes = document.querySelectorAll(".animation");

boxes.forEach((box) => {
  const percent = parseFloat(box.dataset.showPercent) || 0.2;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: percent }
  );

  observer.observe(box);
});

document.addEventListener("scroll", () => {
  const elemento = document.querySelector(".interprise");
  if (!elemento) return;

  const rect = elemento.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  if (windowWidth < 748) {
    const start = windowHeight * 0.8;
    const end = windowHeight * 0.2;

    let progress = (start - rect.top) / (start - end);
    progress = Math.min(Math.max(progress, 0), 1);

    const maxMove = -16 * 16;
    const currentMove = maxMove * progress;

    elemento.style.marginTop = `${currentMove}px`;
    elemento.style.marginLeft = `0`;
  } else {
    const start = windowHeight * 0.5;
    const end = windowHeight * 0.2;

    let progress = (start - rect.top) / (start - end);
    progress = Math.min(Math.max(progress, 0), 1);

    const maxMove = -22 * 16;
    const currentMove = maxMove * progress;

    elemento.style.marginLeft = `${currentMove}px`;
    elemento.style.marginTop = `0`;
  }
});
