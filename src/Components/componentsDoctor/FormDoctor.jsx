import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";

export const FormDoctor = ({ isGetData = {} }) => {

  const {
    setDataUserDoctor,
    handleCloseModal,
    actionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
    setGetDataFromTable,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = (data) => {
    setDataUserDoctor(data);
    console.log(data);
    handleCloseModal();
    setTextAlert("Datos Guardados");
    handleShowFloatAlter();
  };
  
  
  
    return (
      
  <div>
        <form onSubmit={handleSubmit(onSubmitClick)}>
    <div className="form-group">
      <label>Nombre Completo</label>
      <input
             defaultValue={isGetData.name}
              type="text"
              className="form-control"
              placeholder="Nombre Completo"
              autoComplete="off"
              {...register("nombre", { required: true })}
            />
      {errors.nombre && (
        <span className="text-danger">El dato es requerido</span>
      )}
    </div>
  
    <div className="form-group">
      <label>Especialidad</label>
      <input
        type="text"
        className="form-control"
        placeholder="Especialización"
        autoComplete="off"
        {...register("especializacion", { required: true })}
        defaultValue={isGetData.specialization}
      />
      {errors.especializacion && (
        <span className="text-danger">El dato es requerido</span>
      )}
    </div>
  
    <div className="form-group">
      <label>Dirección</label>
      <input
        type="text"
        className="form-control"
        placeholder="Calle, Numero, Colonia"
        autoComplete="off"
        {...register("direccion", { required: true })}
        defaultValue={isGetData.address}
      />
      {errors.direccion && (
        <span className="text-danger">El dato es requerido</span>
      )}
    </div>
  
    <div className="form-group">
  <label>Teléfono</label>
  <input
    type="tel"
    className="form-control"
    placeholder="Número de teléfono"
    autoComplete="off"
    {...register("telefono", {
      required: true,
      pattern: /^[0-9]+$/,
      minLength: 10,
      maxLength: 10,
    })}
    defaultValue={isGetData.phoneNumber}
  />
  {errors.telefono?.type === "required" && (
    <span className="text-danger">El número de teléfono es requerido</span>
  )}
  {errors.telefono?.type === "pattern" && (
    <span className="text-danger">Ingrese solo números</span>
  )}
  {errors.telefono?.type === "minLength" && (
    <span className="text-danger">
      El número de teléfono debe tener al menos 10 dígitos
    </span>
  )}
  {errors.telefono?.type === "maxLength" && (
    <span className="text-danger">
      El número de teléfono debe tener 10 dígitos
    </span>
  )}
</div>

  
<div className="form-group">
  <label>Correo Electrónico</label>
  <input
    type="email"
    className="form-control"
    autoComplete="off"
    placeholder="Agregar su correo electrónico"
    {...register("email", {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    })}
    defaultValue={isGetData.email}
  />
  {errors.email?.type === "required" && (
    <span className="text-danger">El correo electrónico es requerido</span>
  )}
  {errors.email?.type === "pattern" && (
    <span className="text-danger">
      Ingrese un correo electrónico válido (ejemplo: ejemplo@example.com)
    </span>
  )}
</div>

  
    <div>
      <Modal.Footer>
      <Button
              type="submit"
              onClick={() => {
                setGetDataFromTable({});
              }}
              disabled={!isValid}
            >
              {actionButtonModal}
            </Button>
      </Modal.Footer>
    </div>
  </form>
  </div>
    );
  };

  