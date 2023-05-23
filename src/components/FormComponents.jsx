import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { createContact, editContact } from "./ReducerSlice";

// ? ============================== avatar image urls for generating random avatars ==============================
const avatarUrls = [
  "https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?w=740",
  "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684772937~exp=1684773537~hmac=ba3e563fd80df9014ce82a05a8d5ed87cb170c6fcdaf1abf8ae505770cc3a0da",
  "https://img.freepik.com/premium-photo/person-wearing-glasses_500927-366.jpg?w=360",
  "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
  "https://img.freepik.com/premium-psd/3d-illustration-business-man-with-glasses_23-2149436193.jpg?w=740",
  "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?w=740&t=st=1684773401~exp=1684774001~hmac=a3c9b10f1a2556a4845c717ddae8e3636f3db39fb75bc79138faea5193f27e62",
  "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://cdn-icons-png.flaticon.com/512/527/527489.png?w=740&t=st=1684773502~exp=1684774102~hmac=a86f6080544b5c5b8b24ce5d3057b6372b9fe57f48680a476e91bf396edca925",
  "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=740&t=st=1684773508~exp=1684774108~hmac=cdaac1ca23fce00b6051f1d10a00e256abaa65541561623e0a2a4409e7439f26",
  "https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=740",
  "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
];

const FormComponents = ({
  selectedData,
  setselectedData,
  buttonType,
  setshowModal,
  newContact,
}) => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [state, setstate] = useState(selectedData ? selectedData : "");
  console.log(state, "CREATE");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setstate("");
    }
    event.preventDefault();

    // ? ============================== Create Contact ==============================

    if (buttonType == "create") {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setstate("");
      }
      dispatch(
        createContact({
          id: uuidv4(),
          fname: state.fname,
          lname: state.lname,
          number: `+1 ${(Math.random(10) * 10000000000).toFixed(0)}`,
          status: "Active",
          address: `${(Math.random(10) * 10000).toFixed(
            0
          )} Morgan Street, Alaska, Nikolski-84111`,
          avatar: avatarUrls[(Math.random(10) * 10).toFixed(0)],
        })
      );
      setValidated(true);
    }

    // ? ============================== Edit Contact ==============================
    else if (buttonType == "edit") {
      dispatch(
        editContact({
          id: selectedData.id,
          fname: state.fname,
          lname: state.lname,
        })
      );
      setshowModal(false);
    }
    setshowModal(false);
  };
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
    setselectedData(state);
  };
  console.log();

  return (
    // ! =============================== FORM ===============================
    <div>
      <Form
        className="flex-row mx-[20%] w-[800px]"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            name={"fname"}
            value={state.fname}
            onChange={(event) => handleChange(event)}
            required
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name={"lname"}
            value={state.lname}
            onChange={(event) => handleChange(event)}
            required
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
        <div className="flex mt-4">
          <div className="mx-3 my-3">Status: </div>
          <Form.Group className="mb-3">
            <div className="form-check">
              <input
                name={"status"}
                value={state.statue}
                onChange={() => handleChange("Active")}
                className="form-check-input"
                type="radio"
                id="flexRadioDefault1"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Active
              </label>
            </div>
            <div className="form-check">
              <input
                name={"status"}
                value={state.statue}
                onChange={() => handleChange("Inctive")}
                className="form-check-input"
                type="radio"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Inactive
              </label>
            </div>
          </Form.Group>
        </div>
        {buttonType == "edit" ? (
          <Button className="my-2 mx-5" type="submit">
            Save Editted Contact
          </Button>
        ) : (
          <Button className="my-2 mx-5" type="submit">
            Save Contact
          </Button>
        )}
      </Form>
    </div>
  );
};

export default FormComponents;
