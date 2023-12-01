import React from "react";
import Person1 from "@/components/hoc/person1";
import Person2 from "@/components/hoc/person2";

const PersonsHOC = () => {
  return (
    <div>
      <Person1 />
      <Person2 />
    </div>
  );
};

export default PersonsHOC;
