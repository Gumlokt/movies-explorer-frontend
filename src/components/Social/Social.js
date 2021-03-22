import './Social.css';

function Social(props) {
  return (
    <nav className="social">
      <ul className="social__items">
        { props.data.map((item) => {
          return (
            <li className="social__item">
              <a
                href={ item.link || '#'}
                className="social__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                { item.title || 'title'}
              </a>
            </li>            
          );
        }) }
      </ul>
    </nav>
  );
}

export default Social;
