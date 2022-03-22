import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ingredients from "../Ingredients/Ingredients";

const Reciepts = () => {
  const [meal, setMeal] = useState([]);

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <input
        type="radio"
        value="лагман"
        onChange={(e) => setMeal(e.target.value)}
        id="lagman"
        name="meal"
      />
      <label for="lagman">Лагман</label>
      <input
        type="radio"
        value="манты"
        onChange={(e) => setMeal(e.target.value)}
        id="manty"
        name="meal"
      />
      <label for="manty">Манты</label>
      <input
        type="radio"
        value="лобио"
        onChange={(e) => setMeal(e.target.value)}
        id="logio"
        name="meal"
      />
      <label for="ramen">Рамен</label>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Reciepts;
