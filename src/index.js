import "./pages/index.css";
import { initialCards } from "./scripts/cards";
import { createCard, deleteCard } from "./components/card";
import {
  openModal,
  closeModal,
  addModalListeners,
} from "./components/modal";

const cardTemplate = document.querySelector("#card-template").content;
const popups = document.querySelectorAll(".popup");
const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const profileEditButton = document.querySelector(".profile__edit-button");
const AddCardButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileFormElement = document.forms["edit-profile"];
const nameInput = profileFormElement.name;
const jobInput = profileFormElement.description;
const newCardFormElement = document.forms["new-place"];
const newPlaceName = newCardFormElement["place-name"];
const newPlaceLink = newCardFormElement["link"];

popups.forEach((popup) => {
  addModalListeners(popup);
});

profileEditButton.addEventListener("click", (evt) => {
  jobInput.value = profileDescription.textContent;
  nameInput.value = profileTitle.textContent;

  openModal(popupEdit);
});

AddCardButton.addEventListener("click", function (evt) {
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

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(evt.target.closest(".popup"));
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = { name: newPlaceName.value, link: newPlaceLink.value };
  placesList.prepend(
    createCard(newCard, { deleteCard, cardTemplate, openPopupImageModal })
  );
  newCardFormElement.reset();
  closeModal(evt.target.closest(".popup"));
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
newCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(
    createCard(item, { deleteCard, cardTemplate, openPopupImageModal })
  );
});
