import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalConfirmation from "./Modal";

const Home = ({ contacts, deleteContact }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirmation(true);
  };
  const handleConfirmClick = () => {
    deleteContact(deleteId);
    setDeleteId(null);
    setShowConfirmation(false);
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Contact
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Phone Type</th>
                <th scope="col">WhatsApp</th>
                <th scope="col">Avatar</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.phoneType}</td>
                    <td>{contact.whatsApp ? "✓" : "X"}</td>
                    <td>
                      {contact.selectedImage && (
                        <div>
                          <img alt="not found" width={"50px"} src={contact.selectedImage} />
                        </div>
                      )}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteClick(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ModalConfirmation
        show={showConfirmation}
        handleClose={() => setShowConfirmation(false)}
        title="Are you sure?"
        handleConfirm={handleConfirmClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
