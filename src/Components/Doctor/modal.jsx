import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormDoctor } from "./FormDoctor";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalDoctor = ({ show, handleClose }) => {
  const { setGetDataFromTable, getDataFromTable, actionButtonModal } =
  useContext(GetTheAppContext);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
        setGetDataFromTable({});
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{actionButtonModal} Médico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormDoctor isGetData={getDataFromTable} />
      </Modal.Body>
    </Modal>
  );
};