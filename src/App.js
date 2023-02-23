import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className='body'>
      <div className="page">
        <header className="header">
          <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип сайта" />
        </header>

        <main className="main">
          <section className="profile">
            <div className="info">
              <button type="button" className="profile__buttonpict">
                <div className="profile__changeavatar"></div>
                <img className="profile__avatar" src="<%=require('./images/avatar.png')%>" alt="Аватар" />
              </button>
              <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button type="button" className="profile__button">
                  <img className="profile__pencil" src="<%=require('./images/pencil.svg')%>" alt="Редактировать" />
                </button>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
            </div>
            <button type="button" className="button">
              <img className="profile__plus" src="<%=require('./images/plus.svg')%>" alt="добавить" />
            </button>
          </section>
          <section className="mesto">
            <ul className="mesto__ul">

            </ul>
          </section>
        </main>

        <footer className="footer">
          <h3 className="footer__text">© 2020 Mesto Russia</h3>
        </footer>

        <div className="popup profilePopup">
          <div className="popup__container">
            <button type="button" className="popup__close">
              <img className="popup__img" src="<%=require('./images/Close.png')%>" alt="Закрыть"/>
            </button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="profile__form" className="popup__form" novalidate>
              <section className="popup__section">
                <input type="text" name="name" className="popup__text popup__name" placeholder="Введите имя" required minlength="2" maxlength="40"/>
                <span className="popup__input-error"></span>
              </section>
              <section className="popup__section">
                <input type="text" name="about" className="popup__text popup__job" placeholder="Введите профессию" required minlength="2" maxlength="200"/>
                <span className="popup__input-error"></span>
              </section>
              <button type="submit" id="saveprofile" className="popup__button">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup cardPopup">
          <div className="popup__container popup__contcard">
            <button type="button" className="popup__close">
              <img className="popup__img" src="<%=require('./images/Close.png')%>" alt="Закрыть"/>
            </button>
            <h2 className="popup__title">Новое место</h2>
            <form name="card-form" className="popup__form">
              <section className="popup__section">
                <input type="text" name="name" className="popup__text popup__name" placeholder="Название" required minlength="2" maxlength="30"/>
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

        <div className="popup imagePopup">
          <div className="popup__picture">
            <button type="button" className="popup__close">
              <img className="popup__img" id="closepict" src="<%=require('./images/Close.png')%>" alt="Закрыть"/>
            </button>
            <img className="popup__screen" src="#"
              alt="Архыз" />
            <h2 className="popup__subname"></h2>
          </div>
        </div>

        <div className="popup deleteCardPopup">
          <div className="popup__container popup__contcard">
            <button type="button" className="popup__close">
              <img className="popup__img" src="<%=require('./images/Close.png')%>" alt="Закрыть"/>
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
              <img className="popup__img" src="<%=require('./images/Close.png')%>" alt="Закрыть"/>
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

      </div>
    </body>
  );
}

export default App;
