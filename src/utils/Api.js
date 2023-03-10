class Api {
  constructor({ apiKey, baseUrl }) {
    this._baseUrl = baseUrl;
    this._authorization = apiKey;
    this._headers = {
      authorization: this._authorization,
      "Content-Type": "Application/JSON",
    };
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
    }).then(this._resToJSON);
  }

  getUserInfo () {
    return fetch("https://nomoreparties.co/v1/cohort-57/users/me", {
      headers: this._headers,
    }).then(this._resToJSON);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57/",
  apiKey: "2c0e8e40-9bc8-4cbb-b338-6dd82b568a54",
});

export default api;
