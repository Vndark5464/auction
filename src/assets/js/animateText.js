export const animateText = (elementId, delay) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const element = document.getElementById(elementId);

  if (element) {
    const text = element.innerText;
    element.innerHTML = '';

    [...text].forEach((c, i) => {
      const span = document.createElement('span');
      span.innerText = c;
      span.style.animationDelay = `${i * delay}s`;
      element.append(span);
    });
  }
};