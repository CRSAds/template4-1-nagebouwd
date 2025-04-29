document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll(".section-content"));
  let currentIndex = sections.findIndex((el) => el.id === "prelander");

  if (currentIndex === -1) currentIndex = 0;

  function showOnly(index) {
    sections.forEach((el, i) => {
      el.style.display = i === index ? "block" : "none";
    });
  }

  function goToNext() {
    let nextIndex = currentIndex + 1;

    while (
      nextIndex < sections.length &&
      sections[nextIndex].style.display === "none"
    ) {
      nextIndex++;
    }

    if (nextIndex < sections.length) {
      currentIndex = nextIndex;
      showOnly(currentIndex);
    }
  }

  // Init
  showOnly(currentIndex);

  // Event listeners op buttons
  sections.forEach((section, index) => {
    const buttons = section.querySelectorAll("button, a[class*='button'], .go-to-next");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        // Als terms-sectie: check of checkbox is aangevinkt
        const termsCheckbox = section.querySelector("input[type='checkbox']");
        if (termsCheckbox && !termsCheckbox.checked) {
          alert("Je moet akkoord gaan met de voorwaarden.");
          return;
        }

        goToNext();
      });
    });
  });
});
