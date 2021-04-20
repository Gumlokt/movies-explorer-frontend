import './EmptySearchResults.css';

function EmptySearchResults(props) {
  return (
    <div className={`empty-search-results${props.message ? ' empty-search-results_type_displayed' : ''}`}>
      <p className="empty-search-results__text">{props.message}</p>
    </div>
  );
}

export default EmptySearchResults;
