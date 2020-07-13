import React, { useEffect } from "react";
import {
  formAuthContainer,
  inputsContainer,
  buttonContainer,
} from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import SimpleInput from "../../components/input/SimpleInput";
import SimpleButton from "../../components/button/SimpleButton";
import { useHistory } from "react-router-dom";
import { isAuth } from "../../utils/auth";

const Register = () => {
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("authToken", data.emailField);
    history.push("/");
  };
  useEffect(() => {
    let auth = isAuth();
    if (auth) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={formAuthContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={inputsContainer}>
          <SimpleInput
            autoFocus={true}
            name={"nameField"}
            type="text"
            refe={register({ required: true, maxLength: 20 })}
            label={"Nombre"}
          />
          {errors.emailField && <p>El email es requerido</p>}
          <SimpleInput
            autoFocus={true}
            name={"emailField"}
            type="email"
            refe={register({ required: true })}
            label={"Email"}
          />
          {errors.emailField && <p>El email es requerido</p>}
          <SimpleInput
            name={"passwordField"}
            type="password"
            refe={register({ required: true })}
            label={"Contraseña"}
          />
          {errors.passwordField && <p>La contraseña es requerida</p>}
          <SimpleInput
            name={"rePasswordField"}
            type="password"
            refe={register({ required: true })}
            label={"Escribe Nuevamente la Contraseña"}
          />
          {errors.passwordField && (
            <p>La contraseña es requerida y debe coincidir</p>
          )}
        </div>
        <div className={buttonContainer}>
          <SimpleButton buttonText="Registrarse" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;
