import React, { useReducer, useState } from "react";
import axios from "axios";

export const contactContexts = React.createContext();
const API = " http://localhost:8000/contacts";

const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload.data };
    case "EDIT_CONTACT":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllContacts() {
    let res = await axios.get(API);
    let action = {
      type: "GET_CONTACTS",
      payload: res,
    };
    dispatch(action);
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getAllContacts();
  }

  const handleAdd = async (newContact) => {
    await axios.post(API, newContact);
    getAllContacts();
  };

  const editContact = async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "EDIT_CONTACT",
      payload: data,
    });
  };

  return (
    <contactContexts.Provider
      value={{
        contacts: state.contacts,
        getAllContacts,
        deleteContact,
        handleAdd,
        editContact,
        contactToEdit: state.contactToEdit,
      }}
    >
      {children}
    </contactContexts.Provider>
  );
};
export default ContactsContextProvider;
