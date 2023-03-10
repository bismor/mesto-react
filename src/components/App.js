import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import {CardContext} from "../contexts/CardContext"
import React, { useCallback, useState, useEffect } from "react";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../App.css";
import api from "../utils/Api";

function App() {
  const [cards, setCards] = useState([]);
  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("")

  const handleCardClick = useCallback((CardInfo) => {
    setSelectedCard(CardInfo);
  }, []);

  useEffect(() => {
    api.getUserInfo()
    .then((data) =>{
      setCurrentUser(() => {
        return data
      })
    })
  }, []);

  const closeAllPopups = useCallback(() => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }, []);

  useEffect(() => {
    const getCardsData = async () =>  {
      try {
        const cards = await api.getInitialCards();
        setCards(() =>
          cards.map((item) => ({
            likes: item.likes,
            name: item.name,
            link: item.link,
            id: item._id,
            owner: item.owner
          }))
        );
      } catch(err) {
        console.log(err);
      }
    }
    getCardsData();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header></Header>
        <Main
          onEditAvatar={setIsEditAvatarPopupOpen}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
        >
          <>
            {cards.map((cardData) => (
              <CardContext.Provider value={cardData}>
              <Card
                onCardClick={handleCardClick}
              ></Card>
              </CardContext.Provider >
            ))}
          </>
        </Main>
        <Footer></Footer>

        <PopupWithForm
          title="Редактировать профиль"
          name="profilePopup"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
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
          </>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="cardPopup"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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

        <PopupWithForm
          title="Обновить аватар"
          name="changeAvatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
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
          </>
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
