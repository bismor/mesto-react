import closeIcon from "../images/Close.png";

function ImagePopup({onClose, card}) {
  if (!card) {
    return null
  }
  
  return (
    <div className='popup imagePopup popup_opened'>
      <div className="popup__picture">
        <button type="button" className="popup__close" onClick={onClose}>
          <img
            className="popup__img"
            id="closepict"
            src={closeIcon}
            alt="Закрыть"
          />
        </button>
        <img className="popup__screen" src={card.link} alt={card.name} />
        <h2 className="popup__subname">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
