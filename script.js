document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll(".section-content"));
  const surveySections = sections.filter(section => section.id === "survey_question");
  const shortForm = document.getElementById("short-form-1");

  let current = 0;

  function showSection(section) {
    sections.forEach(s => s.style.display = "none");
    if (section) section.style.display = "block";
  }

  function handleSurvey(sectionIndex) {
    const answers = sectionIndex.querySelectorAll("button, a");
    answers.forEach(btn => {
      btn.addEventListener("click", () => {
        current++;
        if (surveySections[current]) {
          showSection(surveySections[current]);
        } else {
          showSection(shortForm);
        }
      });
    });
  }

  if (surveySections.length > 0) {
    showSection(surveySections[0]);
    surveySections.forEach(handleSurvey);
  }
});
