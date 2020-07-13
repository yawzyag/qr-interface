import React, { useEffect } from "react";
import { homeContainer, textContainer, textDetail } from "./Home.module.scss";
import Icon from "../../assets/img/qr-code.svg";
import { isAuth } from "../../utils/auth";

const Home = ({ setAuth }) => {
  useEffect(() => {
    setAuth(isAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{ backgroundImage: "url(https://source.unsplash.com/daily)" }}
      className={homeContainer}
    >
      <div className={textContainer}>
        <img src={Icon} alt="icon" />
        <div className={textDetail}>
          <h1>Ingresa a tus lugares favoritos</h1>
          <ul>
            <li>un solo codigo</li>
            <li>una solo identificacion</li>
            <li>facil y rapido</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
