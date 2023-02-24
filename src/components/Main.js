import plus from "../images/plus.svg";
import pencil from "../images/pencil.svg";
// import avatar from '../images/avatar.png'

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onUserAvatar,
  onUserDescription,
  onUserName,
  children,
}) {
  return (
    <main className="main">
      <section className="profile">
        <div className="info">
          <button
            type="button"
            className="profile__buttonpict"
            onClick={() => onEditAvatar(true)}
          >
            <div className="profile__changeavatar"></div>
            <img className="profile__avatar" src={onUserAvatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{onUserName}</h1>
            <button
              type="button"
              className="profile__button"
              onClick={() => onEditProfile(true)}
            >
              <img
                className="profile__pencil"
                src={pencil}
                alt="Редактировать"
              />
            </button>
            <p className="profile__subtitle">{onUserDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="button"
          onClick={() => onAddPlace(true)}
        >
          <img className="profile__plus" src={plus} alt="добавить" />
        </button>
      </section>
      <section className="mesto">
        <ul className="mesto__ul">{children}</ul>
      </section>
    </main>
  );
}

export default Main;
