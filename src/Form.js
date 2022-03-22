import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import Counter from "./components/Counter/Counter";
import EditContact from "./components/EditContact/EditContact";
import Home from "./components/Home/Home";
import Ingredients from "./components/Ingredients/Ingredients";
import Reciepts from "./components/Reciepts/Reciepts";

const Form = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ContactList />
            </>
          }
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/reciepts" element={<Reciepts />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/edit" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Form;
