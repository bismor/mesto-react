import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ name, button }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  return (
    <div className="authorization">
      <p className="authorization__name">{name}</p>
      <form className="authorization__form">
        <section className="authorization__section">
          <input
            type="email"
            className="authorization__input"
            placeholder="Email"
            value={formValue.email}
            onChange={handleChange}
          ></input>
          <input
            type="password"
            className="authorization__input"
            placeholder="Пароль"
            value={formValue.password}
            onChange={handleChange}
          ></input>
        </section>
        <button className="authorization__submit">{button}</button>
      </form>
      <Link to="/sign-up" className="authorization__link">
        Уже зарегистрировались? Войти
      </Link>
    </div>
  );
}

export default Login;
