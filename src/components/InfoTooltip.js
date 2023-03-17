import close from "../images/Close.png";
import sign from "../images/checkmark.png"

function InfoTooltip ({status, visible}) {
  console.log(visible)
  return (
    <div className={visible}>
      <div className="popup__access">
        <button type="button" className="popup__close">
          <img className="popup__img" src={close} alt="Закрыть" />
        </button>
        <img className="popup__sign" src={sign} alt="Статус" />
        <h2 className="popup__status">{status}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip 