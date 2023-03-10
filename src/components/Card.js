import React from "react";
import { CardContext } from "../contexts/CardContext";
import {CurrentUserContext} from "../contexts/CurrentUserContext"

function Card({ onCardClick }) {
  const card = React.useContext(CardContext);
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `mesto__like ${isLiked && 'mesto__like-active'}` 
  );

  function handleClick() {
    const cardInfo = { link: card.link, name: card.name };
    onCardClick(cardInfo);
  }
  return (
    <section className="mesto__element">
      {isOwn &&<button type="button" className="mesto__delete" onClick={""}/>}
      <img
        className="mesto__img"
        src={card.link}
        type="button"
        alt={card.name}
        onClick={handleClick}
      />
      <div className="reaction">
        <h2 className="mesto__title">{card.name}</h2>
        <div className="like">
          <button type="button" className={cardLikeButtonClassName}></button>
          <div className="like__score">{card.likes.length}</div>
        </div>
      </div>
    </section>
  );
}

export default Card;
