// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(item, { deleteCard }) {
  const newCardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCardElement.querySelector(".card__image");
  const cardTitle = newCardElement.querySelector(".card__title");
  const deleteCardButton = newCardElement.querySelector(".card__delete-button");

  cardImage.src = item.link;
  cardImage.alt = "Изображение " + item.name;
  cardTitle.textContent = item.name;
  deleteCardButton.addEventListener("click", () => deleteCard(newCardElement));

  return newCardElement;
}

// @todo: Функция удаления карточки
function deleteCard(card) {
  card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(createCard(item, { deleteCard }));
});
