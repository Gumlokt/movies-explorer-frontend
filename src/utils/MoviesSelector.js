class MoviesSelector {
  select(initialMovies, term) {
    return initialMovies.filter((movie) => {
      if (movie.nameRU && movie.nameRU.toLowerCase().indexOf(term.toLowerCase()) > -1) return true;
      if (movie.nameEN && movie.nameEN.toLowerCase().indexOf(term.toLowerCase()) > -1) return true;

      return false;
    });
  }
}

export const moviesSelector = new MoviesSelector();
