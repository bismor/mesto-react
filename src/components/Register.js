import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ name, button }) {
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formValue.password === formValue.confirmPassword){
  //     const { password, email } = formValue;
  //     auth.register( password, email).then((res) => {
  //       navigate('/login', {replace: true});
  //       }
  //     );
  //   }
  // }

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
    </div>
  );
}

export default Register;
