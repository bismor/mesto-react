function PopupWithForm ({title, name, children}) {
  return(
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close">
          <img className="popup__img" src={close} alt="Закрыть"/>
        </button>
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form" noValidate>
          {children}
        </form>
      </div>
    </div>

  )
}

export default PopupWithForm;