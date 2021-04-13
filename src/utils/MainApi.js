class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponseData(res, err) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}. ${err}`));
  }

  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  getFavouriteMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._getResponseData(res, 'Карточки не получены...');
      })
      .catch((err) => console.log(err));
  }

  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return this._getResponseData(res, 'Новая карточка не добавлена...');
      })
      .catch((err) => console.log(err));
  }

  removeMovie(id) {
    // return fetch(`${this._url}/movies/test4583q0d2574b5862test`, {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => {
        return this._getResponseData(res, 'Карточка не удалена...');
      })
      .catch((err) => console.log(err));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._getResponseData(res, 'Данные пользователя не получены...');
      })
      .catch((err) => console.log(err));
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return this._getResponseData(res, 'Данные пользователя не обновлены...');
      })
      .catch((err) => console.log(err));
  }
}

/** Object with methods to send and request all data on the server side. */
export const mainApi = new MainApi({
  // url: 'https://api.moviehunter.ru',
  url: 'http://localhost:4000',
  headers: {
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmMDQ1NDU3ZDk3MjIyOWNiOGVkMzUiLCJpYXQiOjE2MTgxOTg1NTQsImV4cCI6MTYxODgwMzM1NH0.DDgN2_9FkQohA0uRWqjvqp9iFKt4WcfCIov_Z-fMA_E`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
