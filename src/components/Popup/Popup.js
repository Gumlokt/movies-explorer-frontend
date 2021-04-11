import './Popup.css';

function Popup(props) {
  return (
    <div className={`popup${props.isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container">
        <button onClick={props.onClose} className="popup__btn-close" type="button" aria-label="Закрыть окно"></button>

        <p className="popup__message">{props.message}</p>
      </div>
    </div>
  );
}

export default Popup;
