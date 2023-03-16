import React from 'react';

function Authorization() {
  return(
    <div className="authorization">
      <div className="authorization__name">Регистрация</div>
      <form className="authorization__form">
        <section className="authorization__section">
          <input type="email" className="authorization__input" placeholder="Email"></input>
          <input type="password" className="authorization__input" placeholder="Пароль"></input>
        </section>
        <button className="authorization__submit">Зарегистрироваться</button>
      </form>
      <button className="authorization__link">Уже зарегистрировались? Войти</button>
    </div>
  );
}

export default Authorization