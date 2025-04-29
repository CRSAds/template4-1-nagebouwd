// flow logic script.js

// Selecteer alle secties die meedoen aan de flow
const sections = [...document.querySelectorAll(".section-content")];

// Verberg alle secties behalve de eerste (bijv. prelander)
sections.forEach((section, index) => {
  section.style.display = index === 0 ? "block" : "none";
});

let currentIndex = 0;

function showSection(index) {
  sections.forEach((section, i) => {
    section.style.display = i === index ? "block" : "none";
  });
}

// Event listeners op buttons
sections.forEach((section, index) => {
  const buttons = section.querySelectorAll("button, a.go-to-next, div.go-to-next");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Als terms-sectie: check of checkbox is aangevinkt
      const termsCheckbox = section.querySelector("input[type='checkbox']");
      if (termsCheckbox && !termsCheckbox.checked) {
        alert("Je moet akkoord gaan met de voorwaarden.");
        return;
      }

      // Toon volgende sectie
      const nextIndex = currentIndex + 1;
      if (nextIndex < sections.length) {
        currentIndex = nextIndex;
        showSection(currentIndex);
      }
    });
  });
});
