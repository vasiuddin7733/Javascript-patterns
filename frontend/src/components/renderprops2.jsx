import React, { useState } from "react";

const Renderprop2 = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="py-10">
      <p>Count: {count}</p>
      <button
        onMouseEnter={handleCount}
        className="border-2 border-red-500 p-2 border-redius-50"
      >
        Text hover
      </button>
    </div>
  );
};

export default Renderprop2;
