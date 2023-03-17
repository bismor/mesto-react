import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import api from "../utils/Api";



function Login({ name, button, setloggedIn}) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password){
      return;
    }
    api.signIn(formValue.email, formValue.password)
      .then((data) => {
        if (data.token){
          setloggedIn(true)
          setFormValue({email: '', password: ''});
          navigate('/', {replace: true});
          localStorage.setItem('token', data.token);
        } 
      })
      .catch(err => console.log(err));
  }

  function navRegister(){
    navigate('/sign-up', {replace: true});
  }

  return (
    <>
      <Header onClick={navRegister} nameClick="Регистрация" setUserEmail=""></Header>
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
      </div>
    </>
  );
}

export default Login;
