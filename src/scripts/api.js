const API_CONFIG = {
  baseUrl: `https://mesto.nomoreparties.co/v1/wff-cohort-33`,
  headers: {
    authorization: "55d1b029-4425-46a4-9f07-dcff1368dd95",
    "Content-Type": "application/json",
  },
};

function getInitialCards() {
  return fetch(`${API_CONFIG.baseUrl}/cards`, { headers: API_CONFIG.headers })
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
  return fetch(`${API_CONFIG.baseUrl}/users/me`, {
    headers: API_CONFIG.headers,
  })
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
  return fetch(`${API_CONFIG.baseUrl}/users/me`, {
    method: "PATCH",
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упссс... Ошибка: ${res.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createNewCard(name, link) {
  return fetch(`${API_CONFIG.baseUrl}/cards`, {
    method: "POST",
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упссс... Ошибка: ${res.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteCard(cardId) {
  return fetch(`${API_CONFIG.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: API_CONFIG.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упссс... Карточка не была удалена!`);
    })
    .catch((error) => {
      alert(error);
    });
}

function likeCard(cardId) {
  return fetch(`${API_CONFIG.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: API_CONFIG.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упссс... Ошибка: ${res.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

function unlikeCard(cardId) {
  return fetch(`${API_CONFIG.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: API_CONFIG.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Упссс... Ошибка: ${res.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

function changeAvatar(avatarLink) {
  return fetch(`${API_CONFIG.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

export {
  getInitialCards,
  getUserData,
  updateProfile,
  createNewCard,
  deleteCard,
  likeCard,
  unlikeCard,
  changeAvatar,
};
