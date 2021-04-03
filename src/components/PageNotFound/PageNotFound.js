import './PageNotFound.css';

function PageNotFound(props) {
  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>

        <p className="page-not-found__text">Страница не найдена</p>

        <a className="page-not-found__link" href="/">
          Назад
        </a>
      </div>
    </main>
  );
}

export default PageNotFound;
