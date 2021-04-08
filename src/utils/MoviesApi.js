class MoviesApi {
  getInitialMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          new Error(`Ошибка: ${res.status}. Проблемы с сервисом beatfilm-movies. Карточки не получены...`),
        );
      })
      .catch((err) => console.log(err));
  }
}

export const moviesApi = new MoviesApi();
