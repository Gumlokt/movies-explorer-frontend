import { useHistory } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  function goBack() {
    if (history.length > 1) {
      history.goBack();
    }
  }

  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>

        <p className="page-not-found__text">Страница не найдена</p>

        <button className="page-not-found__link" onClick={goBack}></button>
      </div>
    </main>
  );
}

export default PageNotFound;
