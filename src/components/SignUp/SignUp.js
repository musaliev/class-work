import React, { useState } from "react";

const SignUp = (props) => {
  let [account, setAccount] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");

  function handleAdd() {
    if (account === "") {
      alert("Please enter your email!");
      return;
    }
    if (password === "" && password.length > 4) {
      alert(
        "Please enter your password!password must be more than 4 characters!"
      );
      return;
    }
    if (password2 === "" && password2.length > 4) {
      alert(
        "Please enter your confirm password! password must be more than 4 characters!"
      );
      return;
    }
    let infos = {
      email: account,
      password: password,
      secondPass: password2,
    };

    if (password !== password2) {
      return alert("Пароли не совпадают!");
    } else {
      props.handleAddObj(infos);
      props.setIsLogin(true);
    }
  }

  return (
    <div>
      <br />
      <h1>Enter your details</h1>
      <input
        type="text"
        placeholder="Account"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Confirm password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button onClick={handleAdd}>Войти</button>
    </div>
  );
};

export default SignUp;
