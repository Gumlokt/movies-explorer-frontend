import './Techs.css';

import Caption from '../Caption/Caption';

function Techs(props) {
  return (
    <section className="techs">
      <div className="techs__container">
        <Caption title="Технологии" />

        <h3 className="techs__title">7 технологий</h3>

        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
