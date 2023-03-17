import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Authorization from "./Authorization";
import PopupWithAccess from "./PopupWithAccess";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useCallback, useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../App.css";
import api from "../utils/Api";

function App() {
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setloggedIn] = useState(false);

  const handleCardClick = useCallback((CardInfo) => {
    setSelectedCard(CardInfo);
  }, []);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(() => {
        return data;
      });
    });
  }, []);

  const closeAllPopups = useCallback(() => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }, []);

  useEffect(() => {
    const getCardsData = async () => {
      try {
        const cards = await api.getInitialCards();
        setCards(cards);
      } catch (err) {
        console.log(err);
      }
    };
    getCardsData();
  }, []);

  function handleCardLike(card) {
    api
      .addLikeCard(card.id)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c.id === card.id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleCardDisLike(card) {
    api
      .removeLikeCard(card.id)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c.id === card.id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleCardDelete(newCard) {
    api
      .deleteCardServer(newCard.id)
      .then(() => {
        setCards(cards.filter((card) => card.id !== newCard.id));
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleUpdateUser(userInfo) {
    api
      .setUserInfo(userInfo)
      .then((data) => {
        setCurrentUser(() => {
          return data;
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleUpdateAvatar(userAvatar) {
    api
      .setUserAvatar(userAvatar)
      .then((data) => {
        setCurrentUser(() => {
          return data;
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleAddPlaceSubmit(newcard) {
    api
      .addCard(newcard)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header></Header>
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? (
                  <>
                    <Main
                      onEditAvatar={setIsEditAvatarPopupOpen}
                      onEditProfile={setIsEditProfilePopupOpen}
                      onAddPlace={setIsAddPlacePopupOpen}
                      onCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                      onCarDislike={handleCardDisLike}
                      onCardDelete={handleCardDelete}
                      cards={cards}
                    ></Main>
                    <Footer></Footer>
                  </>
                ) : (
                  <Navigate to="/sign-in" replace />
                )
              }
            />
            <Route path="/sign-in" element={<Authorization name="Войти" button="Войти"></Authorization>} />
            <Route path="/sign-up" element={<Authorization name="Регистрация" button="Зарегистрироваться"/>} />
          </Routes>

          <PopupWithAccess></PopupWithAccess>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
