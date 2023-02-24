
class Api {
  constructor({apiKey, baseUrl}) {
    this._baseUrl = baseUrl;
    this._authorization = apiKey;
    this._headers = {
      authorization: this._authorization,
      'Content-Type': 'Application/JSON',
    }
  }

  _resToJSON(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Произошла ошибка")
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    }).then(this._resToJSON)
  }

  getProfileInformation() {
    return fetch("https://nomoreparties.co/v1/cohort-57/users/me", {
      headers: this._headers,
    }).then(this._resToJSON)
  }

  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._headers
    }).then(this._resToJSON)
  }

  changeProfileInfo(formvalue) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: formvalue.name,
        about: formvalue.about
      })
    })
    .then(this._resToJSON)
  }

  changeProfileAvatar(link) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link
      }),
      headers: {
        authorization: this._authorization,
        'Content-Type': 'Application/JSON',
      },
    })
    .then(this._resToJSON)
  }

  deleteCardServer(id) {
    return fetch (`${this._baseUrl}cards/`+id, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._resToJSON)
  }

  addLikeCard(id) {
    return fetch(`${this._baseUrl}cards/"+id+"/likes`, {
      method: "PUT",
      headers: this._headers
    }).then(this._resToJSON)
  }

  removeLikeCard(id) {
    return fetch(`${this._baseUrl}cards/"+id+"/likes`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._resToJSON)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57/',
  apiKey: '2c0e8e40-9bc8-4cbb-b338-6dd82b568a54'
});

export default api;