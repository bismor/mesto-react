import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      name="cardPopup"
      buttonText="Сохранить"
    >
      <>
        <section className="popup__section">
          <input
            type="text"
            name="name"
            className="popup__text popup__name"
            placeholder="Название"
            required
            minLength={2}
            maxLength={30}
          />
          <span className="popup__input-error"></span>
        </section>
        <section className="popup__section">
          <input
            type="url"
            name="about"
            className="popup__text popup__job"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error"></span>
        </section>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;