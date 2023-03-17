import React from 'react';
import { Link } from 'react-router-dom';

function Authorization({name, button}) {
  return(
    <div className="authorization">
      <h2 className="authorization__name">{name}</h2>
      <form className="authorization__form">
        <section className="authorization__section">
          <input type="email" className="authorization__input" placeholder="Email"></input>
          <input type="password" className="authorization__input" placeholder="Пароль"></input>
        </section>
        <button className="authorization__submit">{button}</button>
      </form>
      <Link to="/sign-up" className="authorization__link">Уже зарегистрировались? Войти</Link>
    </div>
  );
}

export default Authorization