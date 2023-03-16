import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <button className="header__button">Войти</button>
    </header>
  );
}

export default Header;
