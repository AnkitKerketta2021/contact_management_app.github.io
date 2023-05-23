import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DetailsModal = ({
  displayDetails,
  setdisplayDetails,
  detailModal,
  setdetailModal,
}) => {
  const [show, setShow] = useState(detailModal);

  const handleClose = () => {
    setShow(false);
    setdetailModal(false);
  };
  useEffect(() => {}, [show]);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {displayDetails.fname}: Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Full name:{" "}
          <span className="text-gray-500 text-sm mx-1">
            {displayDetails.fname} {displayDetails.lname}
          </span>
          <br />
          Contact:{" "}
          <span className="text-gray-500 text-sm mx-1">
            {displayDetails.number}
          </span>
          <br />
          status:{" "}
          <span className="text-gray-500 text-sm mx-1">
            {displayDetails.status}
          </span>
          <br />
          address:{" "}
          <span className="text-gray-500 text-sm mx-1">
            {displayDetails.address}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailsModal;
