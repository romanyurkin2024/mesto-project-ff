// @todo: Функция создания карточки
function createCard(item, { deleteCard, cardTemplate, openPopupImageModal }) {
  const newCardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCardElement.querySelector(".card__image");
  const cardTitle = newCardElement.querySelector(".card__title");
  const deleteCardButton = newCardElement.querySelector(".card__delete-button");
  const cardLikeButton = newCardElement.querySelector(".card__like-button");

  cardImage.src = item.link;
  cardImage.alt = "Изображение " + item.name;
  cardTitle.textContent = item.name;

  cardImage.addEventListener("click", () =>
    openPopupImageModal(item.link, item.name)
  );
  deleteCardButton.addEventListener("click", () => deleteCard(newCardElement));
  cardLikeButton.addEventListener("click", likeCard);

  return newCardElement;
}

// @todo: Функция удаления карточки
function deleteCard(card) {
  card.remove();
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard };
