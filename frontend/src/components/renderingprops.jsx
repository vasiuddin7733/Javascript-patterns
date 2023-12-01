import React, { useState } from "react";

const Renderingprops = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return <div className="py-10">{props.rendering(count, handleCount)}</div>;
};

export default Renderingprops;
