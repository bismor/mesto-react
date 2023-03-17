import React, { useState } from "react";
import InfoTooltip from "./InfoTooltip";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../utils/Api";
import Header from "./Header";

function Register({ name, button }) {
  const [infoTooltip, setInfoTooltip] = useState({
    visible: 'popup InfoTooltip',
    pict: "",
    status: ""
  })

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    api.signUp( password, email).then((res) => {
      navigate('/sign-in', {replace: true})
      setInfoTooltip({
        status: "Вы успешно зарегистрировались!",
        visible: "popup popup_opened InfoTooltip"
      })
    })
    .catch(() => {
    });
  }

  function navRegister(){
    navigate('/sign-in', {replace: true});
  }

  return (
    <>
      <Header onClick={navRegister} nameClick="Войти"></Header>
      <div className="authorization">
        <p className="authorization__name">{name}</p>
        <form className="authorization__form" onSubmit={handleSubmit}>
          <section className="authorization__section">
            <input
              name="email"
              type="email"
              className="authorization__input"
              placeholder="Email"
              value={formValue.email}
              onChange={handleChange}
            ></input>
            <input
              name="password"
              type="password"
              className="authorization__input"
              placeholder="Пароль"
              value={formValue.password}
              onChange={handleChange}
            ></input>
          </section>
          <button className="authorization__submit">{button}</button>
        </form>
        <Link to="/sign-in" className="authorization__link">
          Уже зарегистрировались? Войти
        </Link>

        <InfoTooltip status={infoTooltip.status} visible={infoTooltip.visible}></InfoTooltip>
      </div>
    </>
  );
}

export default Register;
