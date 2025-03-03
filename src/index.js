import "./pages/index.css";
import { createCard } from "./components/card";
import { openModal, closeModal, addModalListeners } from "./components/modal";
import { clearValidation, enableValidation } from "./scripts/validation";
import {
  getAllCards,
  getUserData,
  updateProfile,
  createNewCard,
  deleteCard,
} from "./scripts/api";

const cardTemplate = document.querySelector("#card-template").content;
const popups = document.querySelectorAll(".popup");
const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const profileEditButton = document.querySelector(".profile__edit-button");
const AddCardButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileImage = document.querySelector(".profile__image");
const profileDescription = document.querySelector(".profile__description");
const profileFormElement = document.forms["edit-profile"];
const nameInput = profileFormElement.name;
const jobInput = profileFormElement.description;
const newCardFormElement = document.forms["new-place"];
const newPlaceName = newCardFormElement["place-name"];
const newPlaceLink = newCardFormElement["link"];
const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

getUserData().then((data) => {
  profileTitle.textContent = data.name;
  profileDescription.textContent = data.about;
  profileImage.style.backgroundImage = `url(${data.avatar})`;
});

popups.forEach((popup) => {
  addModalListeners(popup);
});

profileEditButton.addEventListener("click", () => {
  clearValidation(profileFormElement, formConfig);

  jobInput.value = profileDescription.textContent;
  nameInput.value = profileTitle.textContent;

  openModal(popupEdit);
});

AddCardButton.addEventListener("click", () => {
  clearValidation(newCardFormElement, formConfig);
  openModal(popupNewCard);
});

function openPopupImageModal(link, name) {
  const imagePopupPicture = imagePopup.querySelector(".popup__image");
  const imagePopupCaption = imagePopup.querySelector(".popup__caption");

  imagePopupCaption.textContent = name;
  imagePopupPicture.src = link;
  imagePopupPicture.alt = "Изображение " + name;

  openModal(imagePopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  updateProfile(nameInput.value, jobInput.value).then(() => {
    profileDescription.textContent = jobInput.value;
    profileTitle.textContent = nameInput.value;
  });
  closeModal(evt.target.closest(".popup"));
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  createNewCard(newPlaceName.value, newPlaceLink.value).then((res) => {
    placesList.prepend(
      createCard(res, { deleteCard, cardTemplate, openPopupImageModal })
    );
  });

  newCardFormElement.reset();
  closeModal(evt.target.closest(".popup"));
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
newCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

Promise.all([getAllCards(), getUserData()]).then((res) => {
  const [cards, userData] = res;
  cards.forEach((item) => {
    if (userData._id === item.owner._id) {
      placesList.append(
        createCard(item, { deleteCard, cardTemplate, openPopupImageModal })
      );
    }
  });
});

enableValidation(formConfig);
