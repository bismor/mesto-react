class Api {
  constructor({ apiKey, baseUrl }) {
    this._baseUrl = baseUrl;
    this._authorization = apiKey;
    this._headers = {
      authorization: this._authorization,
      "Content-Type": "Application/JSON",
    };
  }

  //Эта функция заменяет в объекте ID с нижним подчеркиванием на обычное id. используется только для карточек
  fixIdProperty(obj) {
    return { ...obj, id: obj._id };
  } 

  _resToJSON(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Произошла ошибка");
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    })
      .then(this._resToJSON)
      .then((res) => res.map(this.fixIdProperty));
  }

  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-57/users/me", {
      headers: this._headers,
    }).then(this._resToJSON);
  }

  addLikeCard(id) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-57/cards/" + id + "/likes",
      {
        method: "PUT",
        headers: this._headers,
      }
    )
      .then(this._resToJSON)
      .then(this.fixIdProperty);
  }

  removeLikeCard(id) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-57/cards/" + id + "/likes",
      {
        method: "DELETE",
        headers: this._headers,
      }
    )
      .then(this._resToJSON)
      .then(this.fixIdProperty);
  }

  deleteCardServer(id) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-57/cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._resToJSON)
      .then(this.fixIdProperty);
  }

  addCard(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-57/cards", {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._headers,
    })
      .then(this._resToJSON)
      .then(this.fixIdProperty);
  }

  setUserInfo(formvalue) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-57/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: formvalue.name,
        about: formvalue.about,
      }),
    }).then(this._resToJSON);
  }

  setUserAvatar(link) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-57/users/me/avatar",
      {
        method: "PATCH",
        body: JSON.stringify(link),
        headers: {
          authorization: this._authorization,
          "Content-Type": "Application/JSON",
        },
      }
    ).then(this._resToJSON);
  }

  addCard(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-57/cards", {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._headers,
    })
      .then(this._resToJSON)
      .then(this.fixIdProperty);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57/",
  apiKey: "2c0e8e40-9bc8-4cbb-b338-6dd82b568a54",
});

export default api;
