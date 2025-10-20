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
