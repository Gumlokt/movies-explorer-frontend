import './Footer.css';

import Social from '../Social/Social';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h4>

        <div className="footer__social">
          <p className="footer__copyright">&copy; 2021</p>

          <Social data={[
            { link: 'https://praktikum.yandex.ru/profile/web/', title: 'Яндекс.Практикум' },
            { link: 'https://github.com/Gumlokt', title:'Github' },
            { link: 'https://facebook.com', title:'Facebook' }
          ]} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
