
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import close from '../images/Close.png'
// import ImagePopup from './ImagePopup'
import '../App.css';

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main
        handleEditAvatarClick={() => document.querySelector('.changeAvatar').classList.add("popup_opened")}
        handleEditProfileClick={() => document.querySelector('.profilePopup').classList.add("popup_opened")}
        handleAddPlaceClick={() => document.querySelector('.cardPopup').classList.add("popup_opened")}
      />
      <Footer></Footer>

      <div className="popup profilePopup">
        <div className="popup__container">
          <button type="button" className="popup__close">
            <img className="popup__img" src={close} alt="Закрыть"/>
          </button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="profile__form" className="popup__form" noValidate>
            <section className="popup__section">
              <input type="text" name="name" className="popup__text popup__name" placeholder="Введите имя" required minLength={2} maxLength={40}/>
              <span className="popup__input-error"></span>
            </section>
            <section className="popup__section">
              <input type="text" name="about" className="popup__text popup__job" placeholder="Введите профессию" required minLength={2} maxLength={200}/>
              <span className="popup__input-error"></span>
            </section>
            <button type="submit" id="saveprofile" className="popup__button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup cardPopup">
        <div className="popup__container popup__contcard">
          <button type="button" className="popup__close">
            <img className="popup__img" src={close} alt="Закрыть"/>
          </button>
          <h2 className="popup__title">Новое место</h2>
          <form name="card-form" className="popup__form">
            <section className="popup__section">
              <input type="text" name="name" className="popup__text popup__name" placeholder="Название" required minLength={2} maxLength={30}/>
              <span className="popup__input-error"></span>
            </section>
            <section className="popup__section">
              <input type="url" name="about" className="popup__text popup__job" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error"></span>
            </section>
            <button type="submit" id="addpicture" className="popup__button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup deleteCardPopup">
        <div className="popup__container popup__contcard">
          <button type="button" className="popup__close">
            <img className="popup__img" src={close} alt="Закрыть"/>
          </button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="card-form" className="popup__form">
            <button type="submit" id="" className="popup__button">Да</button>
          </form>
        </div>
      </div>

      <div className="popup changeAvatar">
        <div className="popup__container popup__contcard">
          <button type="button" className="popup__close">
            <img className="popup__img" src={close} alt="Закрыть"/>
          </button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="card-form" className="popup__form">
            <section className="popup__section">
              <input type="url" name="avatar" className="popup__text popup__job" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error"></span>
            </section>
            <button type="submit" id="changeavatarsubmit" className="popup__button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup imagePopup">
        <div className="popup__picture">
          <button type="button" className="popup__close">
            <img className="popup__img" id="closepict" src={close} alt="Закрыть"/>
          </button>
          <img className="popup__screen" src="#"
            alt="Архыз" />
          <h2 className="popup__subname"></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
