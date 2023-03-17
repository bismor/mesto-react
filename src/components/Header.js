import logo from "../images/logo.svg";

function Header({onClick, nameClick}) {
  
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <button onClick={onClick} className="header__button">{nameClick}</button>
    </header>
  );
}

export default Header;
