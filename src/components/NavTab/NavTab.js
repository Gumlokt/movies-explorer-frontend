import './NavTab.css';

function NavTab(props) {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a href="/" className="nav__link">
          О проекте
        </a>
      </li>
      <li className="nav__item">
        <a href="/" className="nav__link">
          Технологии
        </a>
      </li>
      <li className="nav__item">
        <a href="/" className="nav__link">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
