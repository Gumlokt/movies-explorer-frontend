import './AboutMe.css';
import photo from '../../images/photo.jpg';

import Caption from '../Caption/Caption';
import Social from '../Social/Social';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <Caption title="Студент" />

        <article className="person">
          <div className="person__info">
            <h3 className="person__title">Игорь</h3>

            <p className="person__activity">Фронтенд-разработчик, 43 года</p>

            <p className="person__biography">
              Я живу в городе Губкинском, ЯНАО. Давно увлекаюсь веб-разработкой.
              Так сложилось, что моим самым первым скриптовым языком
              программирования оказался PERL. На нём я написал несколько
              пэт-проектов. Позже переключился на php и изучил такой фреймворк
              как Laravel
              {/* (ещё во времена 4-й версии). Laravel мне очень
              нравится и по сей день и я относительно активно использую его в
              работе в настоящее время. Поскольку я не делал сильного упора в
              изучении вёрстки, для разметки страницы обходился такими
              CSS-фреймворками как Bootstrap, Semantic UI, Materialize и
              другими. Недавно стал присматриваться к обретающему популярность
              tailwindcss. Для сайтов, которым порядка 4-5 лет и старше, чистый
              JavaScript почти не применял, а использовал популярную библиотеку
              jQuery. В конце 2017 года занялся углублённым изучением JS по
              книге Дэвида Флэнагана "JavaScript: The Definitive Guide" (читал
              на языке оригинала). Это помогло мне легко освоить фреймворк
              Vue.js, который кстати мне очень нравится и на котором у меня
              написан не один проект. В части управления базами данных я являюсь
              сторонником классических реляционок. Теорию баз данных изучал по
              книге Дэвида Крёнке: "Теория и практика построения баз данных". Из
              СУБД активно использую MariaDB - давний форк MySQL. В качестве
              администратора БД регулярно приходится иметь делос с MS SQL
              Server. Холивар поинт :-) Из операционных систем Windows, Linux и
              Mac, выбираю FreeBSD. Да да, так уж исторически сложилось, что
              залип я именно на ней. Нахожу её особенно удобной для
              использования в качестве файлового и веб-серверов. В мире Linux
              комфортно себя чувствую с дистрибутивами основанными на Debian. Ну
              а в качестве среды разработки почти всегда использую винду. */}
            </p>

            <Social
              data={[
                { link: 'https://facebook.com', title: 'Facebook' },
                { link: 'https://github.com/Gumlokt', title: 'Github' },
              ]}
            />
          </div>

          <img src={photo} className="person__photo" alt="Фотография ученика" />
        </article>

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
                <p className="portfolio__link-text">
                  Одностраничное приложение
                </p>
                <p className="portfolio__link-icon">↗</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
