function Card({ card }) {
  return (
    <section className="mesto__element" >
      <button type="button" className="mesto__delete"></button>
      <img className="mesto__img" src={card.link} type="button" alt="Архыз" />
      <div className="reaction">
        <h2 className="mesto__title">{card.name}</h2>
        <div className="like">
          <button type="button" className="mesto__like"></button>
          <div className="like__score">{card.likes}</div>
        </div>
      </div>
    </section>
  );
}

export default Card;