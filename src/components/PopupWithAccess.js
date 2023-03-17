import close from "../images/Close.png";
import sign from "../images/checkmark.png"

function PopupWithAccess() {
  return (
    <div className="popup">
      <div className="popup__access">
        <button type="button" className="popup__close">
          <img className="popup__img" src={close} alt="Закрыть" />
        </button>
        <img className="popup__sign" src={sign} alt="Статус" />
        <h2 className="popup__status">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  )
}

export default PopupWithAccess