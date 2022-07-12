let modal;
let backdrop;

const button = document.querySelector("button");
button.addEventListener("click", showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
  modalText.textContent =
    "Framework providing a declarative and component-based programming model that helps you efficiently develop user interfaces";

  const modalCloseAction = document.createElement("button");
  modalCloseAction.textContent = "Close";
  modalCloseAction.className = "btn";
  modalCloseAction.addEventListener("click", closeModalHandler);

  modal.append(modalText);
  modal.append(modalCloseAction);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}
