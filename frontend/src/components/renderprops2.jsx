import React from "react";

const Renderprop2 = (props) => {
  const { count, handleCount } = props;
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
