import './EmptySearchResults.css';

function EmptySearchResults(props) {
  return (
    <div className={`empty-search-results${props.moviesNumber ? '' : ' empty-search-results_displayed'}`}>
      <p className="empty-search-results__text">
        Фильма, содержащего в названии набранную фразу, нет в базе данных ...
      </p>
    </div>
  );
}

export default EmptySearchResults;
