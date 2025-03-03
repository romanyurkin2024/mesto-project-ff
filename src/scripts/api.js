const TOKEN = "55d1b029-4425-46a4-9f07-dcff1368dd95";
const GROUP_ID = "wff-cohort-33";
const PATH = `https://mesto.nomoreparties.co/v1/${GROUP_ID}`;
const API_CONFIG = {
  headers: {
    authorization: `${TOKEN}`,
  },
};

function getAllCards() {
  return fetch(`${PATH}/cards`, API_CONFIG)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упссс... Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getUserData() {
  return fetch(`${PATH}/users/me`, API_CONFIG)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упссс... Пользователь не найден: ${res.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateProfile(name, about) {
  return fetch(`${PATH}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(res => res.json())
  .catch((error) => {
    console.log(error);
  });
}

function createNewCard(name, link) {
  return fetch(`${PATH}/cards`, {
    method: "POST",
    headers: {
      authorization: `${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(res => res.json())
  .catch((error) => {
    console.log(error);
  });
}

function deleteCard(cardId) {
  return fetch(`${PATH}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: `${TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then(res => res.json())
  .catch((error) => {
    console.log(error);
  });
}

export { getAllCards, getUserData, updateProfile, createNewCard, deleteCard };
