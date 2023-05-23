import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import FormComponents from "./FormComponents";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const ModalComponent = ({
  showModal,
  setshowModal,
  buttonType,
  selectedData,
  setselectedData,
}) => {
  const contact = useSelector((store) => store.contact);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [show, setShow] = useState(showModal);

  
  const handleClose = () => {
    setshowModal(false);
    setselectedData("");
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {showModal && buttonType == "create" ? (
            <Modal.Title>Create Contact</Modal.Title>
          ) : (
            <Modal.Title>Edit Contact</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {buttonType == "create" ? (
            <FormComponents
              setshowModal={setshowModal}
              buttonType={buttonType}
            />
          ) : (
            <FormComponents
              setshowModal={setshowModal}
              buttonType={buttonType}
              selectedData={selectedData}
              setselectedData={setselectedData}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComponent;
