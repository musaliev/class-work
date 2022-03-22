import React, { useState } from "react";
import Account from "./components/Account/Account";
import ContactList from "./components/ContactList/ContactList";
import SignUp from "./components/SignUp/SignUp";
import ContactsContextProvider from "./Context/ContextContacts";
import Form from "./Form";

const App = () => {
  let [isLogin, setIsLogin] = useState(false);
  let [info, setInfo] = useState([]);

  function handleAddObj(newUser) {
    let newInfo = [...info];
    newInfo.push(newUser);
    setInfo(newInfo);
  }
  return (
    <ContactsContextProvider>
      <Form />
      {isLogin ? (
        <Account
          setIsLogin={setIsLogin}
          info={info}
          style={{ display: "none" }}
        />
      ) : (
        <SignUp
          setIsLogin={setIsLogin}
          handleAddObj={handleAddObj}
          style={{ display: "none" }}
        />
      )}
      {/* <ContactList /> */}
    </ContactsContextProvider>
  );
};

export default App;
