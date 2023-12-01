import React from "react";
import HOC from "./hoc";

const Person2 = ({ money, handleIncrease }) => {
  return (
    <div>
      <h2> Jimmy is offering {money}</h2>
      <button onClick={handleIncrease}>Increse Money</button>
    </div>
  );
};

export default HOC(Person2);
