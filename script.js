// === CONFIG ===
const sectionSelector = ".section-content";
const progressFillId = "progress-fill";

// === FLOW ===
const sections = [...document.querySelectorAll(sectionSelector)].filter(
  (el) => el.id !== "progressbar"
);
let currentIndex = 0;

function showSection(index) {
  sections.forEach((section, i) => {
    section.style.display = i === index ? "block" : "none";
  });

  // Progressbar alleen tonen vanaf de 2e stap
  const progressSection = document.getElementById("progressbar");
  if (progressSection) {
    progressSection.style.display = index >= 1 ? "block" : "none";
  }

  updateProgress(index + 1, sections.length);
}

function updateProgress(current, total) {
  const progress = Math.round((current / total) * 100);
  const fill = document.getElementById(progressFillId);
  if (fill) fill.style.width = `${progress}%`;
}

// Initial setup
showSection(currentIndex);

// === BUTTON LOGIC ===
sections.forEach((section, index) => {
  const buttons = section.querySelectorAll("button, .go-to-next");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Terms-checkbox check
      const termsCheckbox = section.querySelector("input[type='checkbox']");
      if (termsCheckbox && !termsCheckbox.checked) {
        alert("Je moet akkoord gaan met de voorwaarden.");
        return;
      }

      // Volgende sectie tonen
      if (index + 1 < sections.length) {
        currentIndex = index + 1;
        showSection(currentIndex);
      }
    });
  });
});
