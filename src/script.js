const buttons = document.querySelectorAll(".button");
const submit = document.getElementById("submit");
const container = document.querySelector(".container");
const containerRate = document.querySelector(".container-rate");
const selectedSpan = document.querySelector(".container-rate span");

let selectedNumber = null;

function afficherNombre(e) {
   selectedNumber = e.target.textContent;
}

function display() {
   if (selectedNumber) {
      selectedSpan.textContent = selectedNumber;
      container.style.display = "none";
      containerRate.style.display = "flex";
   } else {
      alert("Veuillez sélectionner une note avant de soumettre !");
   }
}

buttons.forEach((button) => {
   button.addEventListener("click", afficherNombre);
});

submit.addEventListener("click", display);
