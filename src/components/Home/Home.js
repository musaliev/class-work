import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>All tasks here</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/reciepts">Reciepts</Link>
      </div>
    </div>
  );
};

export default Home;
