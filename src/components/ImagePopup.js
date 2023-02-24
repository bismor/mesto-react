import close from "../images/Close.png";
import { useMemo } from "react";

function ImagePopup({ onClose, card }) {
  const popUpClassName = useMemo(() => {
    const baseClasses = `popup imagePopup`;
    return (card != undefined) ? `${baseClasses} popup_opened` : baseClasses;
  }, [card]);

  return (
    <div className={popUpClassName}>
      <div className="popup__picture">
        <button type="button" className="popup__close" onClick={onClose}>
          <img
            className="popup__img"
            id="closepict"
            src={close}
            alt="Закрыть"
          />
        </button>
        <img className="popup__screen" src={card} alt="Архыз" />
        <h2 className="popup__subname"></h2>
      </div>
    </div>
  );
}

export default ImagePopup;
