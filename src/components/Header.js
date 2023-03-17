import logo from "../images/logo.svg";
import { useNavigate  } from 'react-router-dom';

function Header({setloggedIn}) {
  const navigate = useNavigate();
  
  function signOut(){
    localStorage.removeItem('token');
    setloggedIn(false)
    navigate('/', {replace: true});
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <button onClick={signOut} className="header__button">Выйти</button>
    </header>
  );
}

export default Header;
