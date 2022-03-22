import React, { useContext, useState } from "react";
import { contactContexts } from "../../Context/ContextContacts";

const EditContact = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [img, setImg] = useState("");
  const { contactToEdit } = useContext(contactContexts);
  return (
    <div>
      <input
        type="text"
        // value={name}
        placeholder="Name"
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        // value={phone}
        placeholder="Phone"
        // onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        // value={email}
        placeholder="Email"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        // value={img}
        placeholder="Image"
        // onChange={(e) => setImg(e.target.value)}
      />
    </div>
  );
};

export default EditContact;
