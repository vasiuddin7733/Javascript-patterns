import React from "react";
import HOC from "./hoc";

const person1 = ({ money, handleIncrease }) => {
  return (
    <div>
      <h2> John is offering {money}</h2>
      <button onClick={handleIncrease}>Increse Money</button>
    </div>
  );
};

export default HOC(person1);
