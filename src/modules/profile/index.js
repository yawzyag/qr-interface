import React, { useEffect, useState } from "react";
import { isAuth } from "../../utils/auth";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { get } from "../../utils/axios";
import avatar from "../../assets/img/avatar.svg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import {
  headerUser,
  qrCode,
  profileUser,
  qrTitle,
  formBussines,
  clickText,
} from "./Profile.module.scss";
import FormBussines from "../bussines/FormBussines";

const Profile = ({ history }) => {
  const [data, setData] = useState();
  const [showBussinesForm, setShowBussinesForm] = useState(false);
  const handleClick = () => {
    toast.success(data.name);
  };
  useEffect(() => {
    if (!isAuth()) {
      history.push("/");
    }
    const getData = async () => {
      try {
        const resp = await get("user");
        setData(resp.data);
      } catch (error) {
        console.log(error.response.data.error);
        toast.error(error.response.data.error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={headerUser}>
      {data && (
        <>
          <div onClick={handleClick} className={profileUser}>
            <img src={avatar} alt="test" />
            <h1>Hola {data.name}</h1>
            <p>Email: {data.email}</p>
          </div>
          <div className={formBussines}>
            <div>
              <p className={qrTitle}>Agrega tu negocio</p>

              <p
                className={clickText}
                onClick={() => setShowBussinesForm(!showBussinesForm)}
                style={{textDecoration:`${showBussinesForm ? "none" : "underline"}`}}
              >
                puedes agregar tu negocio justo aca!{" "}
                {showBussinesForm ? <FaArrowUp /> : <FaArrowDown />}
              </p>
            </div>
           {showBussinesForm && <FormBussines />}
          </div>
          <div className={qrCode}>
            <p className={qrTitle}>Tu codigo personal unico</p>
            <img src={data?.qrId} alt="qr-code" />
            <p>puedes usar este codigo en cualquier sitio!</p>
          </div>
          
        </>
      )}
    </div>
  );
};

export default withRouter(Profile);
