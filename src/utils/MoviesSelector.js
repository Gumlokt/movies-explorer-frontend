class MoviesSelector {
  select(initialMovies, term, selectShort) {
    if(selectShort) {
      return initialMovies.filter((movie) => {
        if(movie.duration && +movie.duration <= 40) {
          if (movie.nameRU && movie.nameRU.toLowerCase().indexOf(term.toLowerCase()) > -1) return true;
          if (movie.nameEN && movie.nameEN.toLowerCase().indexOf(term.toLowerCase()) > -1) return true;
        }
  
        return false;
      });
    }

    return initialMovies.filter((movie) => {
      if (movie.nameRU && movie.nameRU.toLowerCase().indexOf(term.toLowerCase()) > -1) return true;
      if (movie.nameEN && movie.nameEN.toLowerCase().indexOf(term.toLowerCase()) > -1) return true;

      return false;
    });
  }
}

export const moviesSelector = new MoviesSelector();
