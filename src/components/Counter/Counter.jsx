import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  function sum() {
    let res = count + 1;
    setCount(res);
  }

  function minus() {
    let res = count - 1;
    setCount(res);
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <button onClick={sum}>+</button>
      <button onClick={minus}>-</button>
      <p>You pressed {count} time</p>
    </div>
  );
};

export default Counter;
