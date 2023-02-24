import close from '../images/Close.png'

function ImagePopup ({onClose, card}) {
  
  return(
    <div className="popup imagePopup ">
      <div className="popup__picture">
        <button type="button" className="popup__close" onClick={onClose}>
          <img className="popup__img" id="closepict" src={close} alt="Закрыть"/>
        </button>
        <img className="popup__screen" src={card} 
          alt="Архыз" />
        <h2 className="popup__subname"></h2>
      </div>
    </div>
  )
}

export default ImagePopup;