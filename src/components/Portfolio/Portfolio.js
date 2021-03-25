import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>

      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://gumlokt.github.io/how-to-learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://gumlokt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="http://gumlokt.students.nomoredomains.icu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
