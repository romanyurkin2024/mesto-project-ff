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
    if(evt.target.classList.contains('popup')) {
      closeModal(modalItem);
    }
  });
}

function openPopupImageModal(link, name) {
  const imagePopup = document.querySelector(".popup_type_image");
  const imagePopupPicture = imagePopup.querySelector(".popup__image");
  const imagePopupCaption = imagePopup.querySelector(".popup__caption");
  
  imagePopupCaption.textContent = name;
  imagePopupPicture.src = link;
  imagePopupPicture.alt = "Изображение " + name;

  openModal(imagePopup);
}


export { openModal, closeModal, addModalListeners, openPopupImageModal };
