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

const Login = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = async (data) => {
    if (loading) return;
    const objToSend = {
      email: data.emailField,
      password: data.passwordField,
    };
    setLoading(true);
    try {
      const resp = await post("login", objToSend);
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
        </div>
        <div className={buttonContainer}>
          <SimpleButton
            loading={loading}
            disabled={!formState.isValid}
            buttonText="Iniciar sesion"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
