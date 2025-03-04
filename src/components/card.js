const handleLikeClick =
  (likeCard, unlikeCard) => (card, userId, likeElement, cardLikeCounter) => {
    if (card.likes.some((like) => like._id === userId)) {
      unlikeCard(card._id)
        .then((res) => {
          likeElement.classList.remove("card__like-button_is-active");
          cardLikeCounter.textContent = res.likes.length;
          card.likes = res.likes;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      likeCard(card._id)
        .then((res) => {
          likeElement.classList.add("card__like-button_is-active");
          cardLikeCounter.textContent = res.likes.length;
          card.likes = res.likes;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

// @todo: Функция создания карточки
function createCard(
  item,
  userId,
  { cardTemplate, openPopupImageModal, openPopupConfirmationModal, handleLikeClick }
) {
  const newCardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCardElement.querySelector(".card__image");
  const cardTitle = newCardElement.querySelector(".card__title");
  const deleteCardButton = newCardElement.querySelector(".card__delete-button");
  const cardLikeButton = newCardElement.querySelector(".card__like-button");
  const cardLikeCounter = newCardElement.querySelector(".card__like-counter");
  const isOwner = item.owner._id === userId;

  !isOwner && deleteCardButton.remove();
  if (item.likes.some((like) => like._id === userId)) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }
  cardImage.src = item.link;
  cardImage.alt = "Изображение " + item.name;
  cardTitle.textContent = item.name;
  cardLikeCounter.textContent = item.likes.length;

  cardImage.addEventListener("click", () =>
    openPopupImageModal(item.link, item.name)
  );

  deleteCardButton.addEventListener("click", () => openPopupConfirmationModal(item._id));

  cardLikeButton.addEventListener("click", () =>
    handleLikeClick(item, userId, cardLikeButton, cardLikeCounter)
  );

  return newCardElement;
}

export { createCard, handleLikeClick };
