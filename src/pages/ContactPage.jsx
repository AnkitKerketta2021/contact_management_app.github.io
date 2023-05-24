import React, { useState } from "react";
import ModalComponent from "./../components/ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../components/ReducerSlice";
import "./ContactPage.css";
import DetailsModal from "../components/DetailsModal";

const ContactPage = () => {
  const dispatch = useDispatch();
  const contact = useSelector((store) => store.contact);
  const [showModal, setshowModal] = useState(false);
  const [selectedData, setselectedData] = useState();
  const [buttonType, setbuttonType] = useState("");
  const [detailModal, setdetailModal] = useState(false);
  const [displayDetails, setdisplayDetails] = useState();

  // ! ==================== Open Modal ====================
  const handleCreateContact = () => {
    setbuttonType("create");
    setshowModal(true);
  };

  // ! ==================== Edit Contact Modal ====================
  const handleEdit = (index) => {
    setselectedData(contact[index]);
    setbuttonType("edit");
    setshowModal(true);
  };
  // ! ==================== Delete Contact ====================
  const handleDelete = (id) => {
    dispatch(deleteContact({ id }));
  };

  // ! ==================== View Contact Details Modal ====================
  const viewDetails = (index) => {
    setdetailModal(true);
    setdisplayDetails(contact[index]);
  };

  return (
    <div>
      {/*?//?========================= Details Modal ===================================  */}
      {detailModal && (
        <DetailsModal
          displayDetails={displayDetails}
          detailModal={detailModal}
          setdetailModal={setdetailModal}
          setdisplayDetails={setdisplayDetails}
        />
      )}

      {/*?//?========================= Edit and Create Modal ===================================  */}
      {showModal && (
        <ModalComponent
          buttonType={buttonType}
          selectedData={selectedData}
          showModal={showModal}
          setselectedData={setselectedData}
          setshowModal={setshowModal}
        />
      )}
      <button
        className="createBtn createButton"
        onClick={() => handleCreateContact()}
      >
        Create Contact
      </button>
      <div className="contactsContainer gridContent  place-content-center gap-28 justify-evenly">
        {/*?//?========================= Fetch Rdux Store data and loop ===================================  */}
        {contact.length ? (
          contact.map((value, index) => (
            <div className="contacts" key={value.id}>
              <div className="">
                <img
                  className="rounded-[5%] aspect-[2/3] m-auto mb-3"
                  src={value.avatar}
                  alt="avatar1"
                />
                <h5>{value.fname + " " + value.lname}</h5>
              </div>

              {/*?//?========================= Action Buttons ===================================  */}
              <div className="mt-2 grid">
                <button
                  className="btn mb-2 w-[90px] mx-auto btn-info"
                  onClick={() => viewDetails(index)}
                >
                  Details
                </button>
                <button
                  className="btn mb-2 w-[90px] mx-auto btn-warning"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn mb-2 w-[90px] mx-auto btn-danger"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="w-[500px] mx-[50%] mt-14">
            No Contact available click☝️ on Create COntact to add contact
          </h3>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
