import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo192.png";

import { navContainer, rightMenu } from "./Navigation.module.scss";

const NavigationBar = ({ auth, setAuth }) => {
  const handleClose = () => {
    localStorage.removeItem("authToken");
    setAuth();
  };

  const authMenu = () => {
    if (auth) {
      return (
        <>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/">
              Cerrar sesion
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/login">Iniciar sesion</Link>
          </li>
          <li>
            <Link to="/register">Registrarme</Link>
          </li>
        </>
      );
    }
  };
  return (
    <nav className={navContainer}>
      <ul>
        <li>
          <Link to="/">
            <img className="animated" src={Logo} alt="logo" />
            Inicio
          </Link>
        </li>
        <div className={rightMenu}>{authMenu()}</div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
