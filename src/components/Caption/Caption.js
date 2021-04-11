import './Caption.css';

function Caption(props) {
  return (
    <div className={`caption${props.darkTheme ? ' caption_theme_dark': ''}`}>
      <h2 className="caption__title">{props.title}</h2>
    </div>
  );
}

export default Caption;
