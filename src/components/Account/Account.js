import React, { useState } from "react";
import "./Account.css";

const Account = ({ info, setIsLogin }) => {
  return (
    <div>
      {info.map((item) => (
        <h1>Hello {item.email}</h1>
      ))}
      <button onClick={() => setIsLogin(false)}>Выйти</button>
    </div>
  );
};

export default Account;
