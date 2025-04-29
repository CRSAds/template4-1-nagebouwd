document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll(".section-content"));
  if (sections.length === 0) return;

  let currentIndex = sections.findIndex((s) => s.id === "prelander");
  if (currentIndex === -1) currentIndex = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.style.display = i === index ? "block" : "none";
    });
  }

  function goToNextSection() {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      showSection(currentIndex);
    }
  }

  // Init: toon alleen de eerste
  showSection(currentIndex);

  // Zet eventListeners op buttons in elke sectie
  sections.forEach((section) => {
    const button = section.querySelector("button");
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        goToNextSection();
      });
    }
  });
});
