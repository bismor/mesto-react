import plus from '../images/plus.svg'
import pencil from '../images/pencil.svg'
import avatar from '../images/avatar.png'

function Main ({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {
  return (
    <main className="main">
      <section className="profile">
        <div className="info">
          <button type="button" className="profile__buttonpict" onClick={handleEditAvatarClick}>
            <div className="profile__changeavatar"></div>
            <img className="profile__avatar" src={avatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__button" onClick={handleEditProfileClick}>
              <img className="profile__pencil" src={pencil} alt="Редактировать" />
            </button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="button" onClick={handleAddPlaceClick}>
          <img className="profile__plus" src={plus} alt="добавить" />
        </button>
      </section>
      <section className="mesto">
        <ul className="mesto__ul">

        </ul>
      </section>
    </main>
  )
};

export default Main;