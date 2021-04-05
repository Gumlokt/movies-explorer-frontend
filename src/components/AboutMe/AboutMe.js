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
              оказался PERL. На нём я написал несколько пэт-проектов. Позже увлекся php и изучил Laravel. А примерно в
              2017 году переключился на JavaScript и с тех пор начал уделять ему больше внимания.
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
