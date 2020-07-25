import React from "react";
import {
  bussinesContainer,
  bussinesList,
  businessDetail,
  businessDetailImage,
  businessDetailText,
} from "./Bussines.module.scss";

const Bussines = () => {
  const businessDetailRender = () => {
    return (
      <>
        <div className={businessDetail}>
          <div className={businessDetailImage}>
            <img
              src="https://source.unsplash.com/featured/?business,1"
              alt="business"
            />
          </div>
          <div className={businessDetailText}>
            <h2>name</h2>
            <h3>direction</h3>
            <p>description</p>
          </div>
        </div>
        <div className={businessDetail}>
          <div className={businessDetailImage}>
            <img
              src="https://source.unsplash.com/weekly?business,2"
              alt="business"
            />
          </div>
          <div className={businessDetailText}>
            <h2>name</h2>
            <h3>direction</h3>
            <p>description</p>
          </div>
        </div>
        <div className={businessDetail}>
          <div className={businessDetailImage}>
            <img
              src="https://source.unsplash.com/featured/?business"
              alt="business"
            />
          </div>
          <div className={businessDetailText}>
            <h2>name</h2>
            <h3>direction</h3>
            <p>description</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={bussinesContainer}>
      <h3>Negocios</h3>
      <div className={bussinesList}>{businessDetailRender()}</div>
    </div>
  );
};

export default Bussines;
