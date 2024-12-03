document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".informacao, .senha, .endereco"); 
  const sections = document.querySelectorAll(".opcoes__informacao, .opcoes__senha, .opcoes__endereco"); 

  function hideAllSections() {
    sections.forEach((section) => {
      section.classList.remove("show");
      section.style.height = "0";
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  }

  sections[0].classList.add("show");
  sections[0].style.height = sections[0].scrollHeight + "px";
  buttons[0].classList.add("active");

  function toggleSection(index) {
    hideAllSections();
    sections[index].classList.add("show");
    sections[index].style.height = sections[index].scrollHeight + "px";
    buttons[index].classList.add("active");
  }
  
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      toggleSection(index);
    });
  });
});