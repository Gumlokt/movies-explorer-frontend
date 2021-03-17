import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>

      <div className="footer__social">
        <p className="footer__copyright">&copy; 2021</p>

        <div className="footer__bar">
          <a href="/" className="footer__link">
            Яндекс.Практикум
          </a>
          <a href="/" className="footer__link">
            Github
          </a>
          <a href="/" className="footer__link">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
