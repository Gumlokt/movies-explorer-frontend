import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {
  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm />
      </div>
    </main>
  );
}

export default Movies;
