import './EmptySearchResults.css';

function EmptySearchResults(props) {
  return (
    <div className="empty-search-results">
      <p className="empty-search-results__text">{props.message}</p>
    </div>
  );
}

export default EmptySearchResults;
