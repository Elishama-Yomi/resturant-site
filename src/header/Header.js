import {Link} from "react-router-dom";
import Logo from "../asset/logo.svg";
import Slogo from "../asset/logo.png";
import "./Header.css"
const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                      <div className="header">
                <div className="header__logo">
                            <img src={Slogo} alt="logo"  className="one"/>
                            <img src={Logo} alt="logo" />
                </div>
                <div className="header__menu">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                    </ul>
                </div>
            </div>
                </div>
            </header>
        </>
    )
}
export default Header;