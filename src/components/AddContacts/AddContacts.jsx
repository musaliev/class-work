import React, { useContext } from "react";
import { contactContexts } from "../../Context/ContextContacts";
import "./AddContacts.css";
import { Link } from "react-router-dom";

const AddContacts = ({ item }) => {
  const { deleteContact, editContact } = useContext(contactContexts);

  return (
    <div className="contacts">
      <div className="card">
        <img src={item.img} alt="image" width={"200px"} />
        <div>{item.name}</div>
        <div>{item.phone}</div>
        <div>{item.email}</div>
        <button onClick={() => deleteContact(item.id)}>Delete</button>
        <Link to="/edit">
          <button onClick={() => editContact(item.id)}>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default AddContacts;
