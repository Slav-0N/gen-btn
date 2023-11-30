const mainButton = document.querySelector("#messengers-float-button");
const hiddenClass = document.querySelector("#messengers-panel-content");

mainButton.addEventListener("click", cuca);

function cuca(event) {
  console.log("hello!");
  hiddenClass.classList.toggle("hidden-panel");
  mainButton.classList.toggle("rotatering-btn");
  mainButton.classList.toggle("hidden-rings");
}
