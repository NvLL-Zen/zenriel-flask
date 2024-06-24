export function glitchText(elementId, text) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let interval = null;

  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID '${elementId}' not found.`);
      clearInterval(interval);
      return;
    }

    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }

        return letters[Math.floor(Math.random() * 62)];
      })
      .join("");

    if (iteration >= text.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

