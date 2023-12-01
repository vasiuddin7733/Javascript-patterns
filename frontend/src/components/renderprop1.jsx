import React, { useState } from "react";
import "../../src/globals.css";

const Renderprop1 = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="py-10">
      <p>Count: {count}</p>
      <button
        onClick={handleCount}
        className="border-2 border-red-500 p-2 border-redius-50"
      >
        Increment
      </button>
    </div>
  );
};

export default Renderprop1;
