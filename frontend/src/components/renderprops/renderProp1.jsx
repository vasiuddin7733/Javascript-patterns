import React from "react";

const Renderprop1 = (props) => {
  const { count, handleCount } = props;
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
