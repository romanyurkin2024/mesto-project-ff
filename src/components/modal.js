const handleEscKeyUp = function (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
};

function closeModal(modalItem) {
  modalItem.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscKeyUp);
}

function openModal(modalItem) {
  modalItem.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscKeyUp);
}

function addModalListeners(modalItem) {
  const closeButton = modalItem.querySelector(".popup__close");
  closeButton.addEventListener("click", () => closeModal(modalItem));

  modalItem.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeModal(modalItem);
    }
  });
}

export { openModal, closeModal, addModalListeners };
