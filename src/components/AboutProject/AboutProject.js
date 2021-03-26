import './AboutProject.css';

import Caption from '../Caption/Caption';

function AboutProject(props) {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <Caption title="О проекте" />

        <div className="description">
          <h3 className="description__heading">
            Дипломный проект включал 5 этапов
          </h3>

          <p className="description__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>

          <h3 className="description__heading">
            На выполнение диплома ушло 5 недель
          </h3>

          <p className="description__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>

        <div className="progress">
          <div className="progress__bar progress__bar_theme_backend">
            <p className="progress__duration">1 неделя</p>
          </div>

          <div className="progress__bar progress__bar_theme_frontend">
            <p className="progress__duration">1 неделя</p>
          </div>

          <h4 className="progress__title">Back-end</h4>

          <h4 className="progress__title">Back-end</h4>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
