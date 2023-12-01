import React, { useState } from "react";

const HOC = (OriginalComponent) => {
  function updateValue() {
    const [money, setMoney] = useState(10);
    const handleIncrease = () => {
      setMoney(money * 2);
    };
    return <OriginalComponent money={money} handleIncrease={handleIncrease} />;
  }

  return updateValue;
};

export default HOC;
