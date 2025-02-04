import { useState } from "react";
import { Hamburger } from "../components/HeaderFolder/Hamburger";
import "./Header.css";
import logo from "../assets/logo.svg";
import { Buttons } from "../components/Buttons/Buttons";
import button from "../assets/Button.svg";
import buttonHover from "../assets/ButtonHover.svg";
import logout from "../assets/icons/logout.svg";
import logoutHover from "../assets/icons/logoutHover.svg";
import { Link } from "react-router-dom";
// import { ButtonStyled } from "../components/Buttons/ButtonStyled";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Family Fitness Logo" />
      </Link>
      <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
        <Link to="/membership" className="menu-link">
          MemberShip
        </Link>
        <Link to="/minifit" className="menu-link">
          MiniFit
        </Link>
        <Link to="/about" className="menu-link">
          AboutUs
        </Link>
      </ul>
      <div className="header-button">
        {/* <ButtonStyled text="Become a member" /> */}
        <div className="member-button">
          <Buttons
            buttonText=""
            url="https://example.com"
            icon={button}
            hoverIcon={buttonHover}
            alt="LogIn"
            // tabletHidden={false}
          />
        </div>
        <div className="logout-button">
          <Buttons
            buttonText=""
            url="https://example.com"
            icon={logout}
            hoverIcon={logoutHover}
            alt="Button Icon"
            // tabletHidden={true}
          />
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <Hamburger showMenu={showMenu} />
      </div>
    </div>
  );
};
