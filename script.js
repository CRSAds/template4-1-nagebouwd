// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.info("Flow-script geladen, initialisatie gestart");

  const sections = Array.from(document.querySelectorAll(".section-content"));
  const surveySections = sections.filter(sec => sec.id === "survey_question");
  const shortForm = document.getElementById("short-form-1");

  let currentStep = 0;

  function hideAllSections() {
    sections.forEach(section => {
      section.style.display = "none";
    });
  }

  function showSection(el) {
    el.style.display = "block";
    el.scrollIntoView({ behavior: "smooth" });
  }

  function initFlow() {
    hideAllSections();

    const prelander = document.getElementById("prelander");
    if (!prelander) {
      console.error("Prelander sectie niet gevonden");
      return;
    }

    showSection(prelander);

    const button = prelander.querySelector("button");
    if (!button) {
      console.error("Button in prelander niet gevonden");
      return;
    }

    button.addEventListener("click", () => {
      showNextStep();
    });
  }

  function showNextStep() {
    hideAllSections();

    if (currentStep < surveySections.length) {
      showSection(surveySections[currentStep]);
      setupSurveyButtons(surveySections[currentStep]);
      currentStep++;
    } else {
      showSection(shortForm);
    }
  }

  function setupSurveyButtons(section) {
    const buttons = section.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.addEventListener("click", showNextStep);
    });
  }

  initFlow();
});
