import React from "react";

const Filter = () => {
  const arrNum = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7];
  const duplications = arrNum.filter(
    (ele, ind, arr) => arr.indexOf(ele) !== ind && console.log(arr)
  );

  return <div>{duplications}</div>;
};

export default Filter;
