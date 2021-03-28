import './AboutMe.css';
import photo from '../../images/photo.jpg';

import Caption from '../Caption/Caption';
import Social from '../Social/Social';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <Caption title="Студент" />

        <article className="person">
          <div className="person__info">
            <h3 className="person__title">Игорь</h3>

            <p className="person__activity">Фронтенд-разработчик, 43 года</p>

            <p className="person__biography">
              Я живу в городе Губкинском. Увлекаюсь веб-разработкой. Так сложилось, что моим первым скриптовым языком
              оказался PERL. На нём я написал несколько пэт-проектов. Позже переключился на php и изучил Laravel. А
              примерно в 2017 году переключился на JavaScript и с тех пор уделяю ему больше внимания.
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
                { link: 'https://www.facebook.com/igor.kakupshevabaza', title: 'Facebook' },
                { link: 'https://github.com/Gumlokt', title: 'Github' },
              ]}
            />
          </div>

          <img src={photo} className="person__photo" alt="Фотография ученика" />
        </article>

        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
