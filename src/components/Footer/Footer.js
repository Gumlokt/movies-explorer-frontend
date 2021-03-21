import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h4>

        <div className="footer__social">
          <p className="footer__copyright">&copy; 2021</p>

          <nav className="footer__nav-bar">
            <ul className="footer__nav-items">
              <li className="footer__nav-item">
                <a
                  href="https://praktikum.yandex.ru/profile/web/"
                  className="footer__nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  href="https://github.com/Gumlokt"
                  className="footer__nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  href="https://facebook.com"
                  className="footer__nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
