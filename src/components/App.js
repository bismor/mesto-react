import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useCallback, useState } from "react";

import PopupWithForm from "./PopupWithForm";
// import ImagePopup from './ImagePopup'
import "../App.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const closeAllPopups = useCallback(() => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }, [])
  return (
    <div className="page">
      <Header></Header>
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
      />
      <Footer></Footer>

      <PopupWithForm
        title="Редактировать профиль"
        name="profilePopup"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <section className="popup__section">
            <input
              type="text"
              name="name"
              className="popup__text popup__name"
              placeholder="Введите имя"
              required
              minLength={2}
              maxLength={40}
            />
            <span className="popup__input-error"></span>
          </section>
          <section className="popup__section">
            <input
              type="text"
              name="about"
              className="popup__text popup__job"
              placeholder="Введите профессию"
              required
              minLength={2}
              maxLength={200}
            />
            <span className="popup__input-error"></span>
          </section>
          <button type="submit" id="saveprofile" className="popup__button">
            Сохранить
          </button>
        </>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="cardPopup"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
          <button type="submit" id="addpicture" className="popup__button">
            Сохранить
          </button>
        </>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="changeAvatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <section className="popup__section">
            <input
              type="url"
              name="avatar"
              className="popup__text popup__job"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error"></span>
          </section>
          <button
            type="submit"
            id="changeavatarsubmit"
            className="popup__button"
          >
            Сохранить
          </button>
        </>
      </PopupWithForm>

      {/* <div className="popup deleteCardPopup">
        <div className="popup__container popup__contcard">
          <button type="button" className="popup__close">
            <img className="popup__img" src={close} alt="Закрыть" />
          </button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="card-form" className="popup__form">
            <button type="submit" id="" className="popup__button">
              Да
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default App;
