import React, { useContext, useEffect, useState } from "react";
import { contactContexts } from "../../Context/ContextContacts";
import AddContacts from "../AddContacts/AddContacts";
import "./ContactList.css";

const ContactList = () => {
  const { getAllContacts, contacts, handleAdd } = useContext(contactContexts);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    getAllContacts();
  }, []);

  function handleAddContact() {
    if (name === "" && phone === "" && email === "" && img === "") {
      alert("Fill in all the fields");
      return;
    }
    let newContact = {
      name: name,
      phone: phone,
      email: email,
      img: img,
    };
    handleAdd(newContact);
    setName("");
    setPhone("");
    setEmail("");
    setImg("");
  }

  return (
    <div className="addContact">
      <input
        className="inp"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inp"
        type="text"
        value={phone}
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="inp"
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inp"
        type="text"
        value={img}
        placeholder="Image"
        onChange={(e) => setImg(e.target.value)}
      />
      <button onClick={handleAddContact}>Add Contacts</button>
      {contacts.map((item) => (
        <AddContacts key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
