let button = document.querySelector("button");
let modal = document.querySelector(".modal-wrapper");

button.addEventListener("click", (event) => {
  console.log(event);
  modal.classList.remove("invisible");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("invisible");
  }
});
