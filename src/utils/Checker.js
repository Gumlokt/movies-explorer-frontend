class Checker {
  checkMovie(movie, term) {
    if (!movie.nameRU || !movie.nameEN) return false;

    if (
      movie.nameRU.toLowerCase().indexOf(term.toLowerCase()) < 0 ||
      movie.nameEN.toLowerCase().indexOf(term.toLowerCase()) < 0
    )
      return false;

    return movie;
  }
}

export const checker = new Checker();
