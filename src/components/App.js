import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import { useCallback, useState, useEffect } from "react";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../App.css";
import api from "../utils/Api";

function App() {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleCardClick = useCallback((cardLink) => {
    setSelectedCard(cardLink);
    console.log("call")
  }, []);

  const closeAllPopups = useCallback(() => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  }, []);

  useEffect(() => {
    api.getProfileInformation().then((data) => {
      setUserAvatar(() => {
        return data.avatar;
      });
      setUserDescription(() => {
        return data.about;
      });
      setUserName(() => {
        return data.name;
      });
    });
  }, []);

  useEffect(() => {
    const getCardsData = async () => {
      const cards = await api.getInitialCards();

      setCards(() =>
        cards.map((item) => ({
          likes: item.likes.length,
          name: item.name,
          link: item.link,
          id: item._id,
        }))
      );
    };

    getCardsData();
  }, []);

  return (
    <div className="page">
      <Header></Header>
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onUserAvatar={userAvatar}
        onUserDescription={userDescription}
        onUserName={userName}
      >
        <>
          {cards.map((cardData) => (
            <Card
              key={cardData.id}
              card={cardData}
              onCardClick={handleCardClick}
            ></Card>
          ))}
        </>
      </Main>
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

      <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
    </div>
  );
}

export default App;
