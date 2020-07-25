import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import SimpleInput from "../../components/input/SimpleInput";
import SimpleButton from "../../components/button/SimpleButton";
import { useHistory } from "react-router-dom";
import { post } from "../../utils/axios";
import { formBussines, buttonContainer } from "./Form.module.scss";

const FormBussines = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    if (loading) return;
    const objToSend = {
      email: data.nameField,
      password: data.directionField,
    };
    console.log(data)
    setLoading(true);
    try {
      /* const resp = await post("login", objToSend);
      localStorage.setItem("authToken", resp.data.accessToken);
      history.push("/"); */
      toast.success("negocio creado!")
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={formBussines}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <SimpleInput
            autoFocus={true}
            name={"nameField"}
            type="text"
            refe={register({ required: true })}
            label={"Nombre de negocio"}
          />
          {errors.nameField && <p>El nombre es requerido</p>}
          <SimpleInput
            name={"directionField"}
            type="text"
            refe={register({ required: true })}
            label={"Dirección"}
          />
          {errors.directionField && <p>La dirección es requerida</p>}
          <SimpleInput
            name={"descriptionField"}
            type="text"
            refe={register({ required: true })}
            label={"Descripción"}
          />
          {errors.descriptionField && <p>La descripción es requerida</p>}
        </div>
        <div className={buttonContainer}>
          <SimpleButton
            loading={loading}
            disabled={!formState.isValid}
            buttonText="Agregar"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default FormBussines;
