// @todo: Функция создания карточки
function createCard(item, { deleteCard, cardTemplate, openPopupImageModal }) {
  const newCardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCardElement.querySelector(".card__image");
  const cardTitle = newCardElement.querySelector(".card__title");
  const deleteCardButton = newCardElement.querySelector(".card__delete-button");
  const cardLikeButton = newCardElement.querySelector(".card__like-button");
  const cardLikeCounter = newCardElement.querySelector(".card__like-counter");

  cardImage.src = item.link;
  cardImage.alt = "Изображение " + item.name;
  cardTitle.textContent = item.name;
  cardLikeCounter.textContent = item.likes.length;

  cardImage.addEventListener("click", () =>
    openPopupImageModal(item.link, item.name)
  );
  deleteCardButton.addEventListener("click", () => deleteCard(item._id));
  cardLikeButton.addEventListener("click", likeCard);

  return newCardElement;
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export { createCard };
