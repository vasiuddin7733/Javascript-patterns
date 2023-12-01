import Renderingprops from "@/components/renderingprops";
import Renderprop1 from "@/components/renderprop1";
import Renderprop2 from "@/components/renderprops2";
import React from "react";

const Renderprops = () => {
  return (
    <div className="flex justify-center align-middle">
      <div>
        <h1 className="text-red-400 text-center">Rendering Props</h1>
      </div>
      <div className="py-10">
        <Renderprop1 />
        <Renderprop2 />
      </div>
      <div></div>
    </div>
  );
};

export default Renderprops;
