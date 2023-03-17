import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <Link to="/sign-in" className="header__button">Войти</Link>
    </header>
  );
}

export default Header;
