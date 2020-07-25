import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
import { post } from "../../utils/axios";

const Register = () => {
  let history = useHistory();
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onChange"
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    if (loading) return;

    if (data.passwordField !== data.rePasswordField) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    const objToSend = {
      name: data.nameField,
      email: data.emailField,
      password: data.passwordField,
    };
    setLoading(true);
    try {
      const resp = await post("signup", objToSend);
      localStorage.setItem("authToken", resp.data.accessToken);
      history.push("/");
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
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
            autoFocus={false}
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
          <SimpleButton
            loading={loading}
            disabled={!formState.isValid}
            buttonText="Registrarse"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
