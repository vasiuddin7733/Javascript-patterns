import React from "react";
import "../../src/globals.css";
import Renderingprops from "@/components/renderprops/renderingprops";
import Renderprop1 from "@/components/renderprops/renderprop1";
import Renderprop2 from "@/components/renderprops/renderprops2";

const Renderprops = () => {
  return (
    <div className="flex justify-center align-middle">
      <div>
        <h1 className="text-red-400 text-center">Rendering Props</h1>
      </div>
      <div>
        <Renderingprops
          rendering={(count, handleCount) => (
            <Renderprop1 count={count} handleCount={handleCount} />
          )}
        />
        <Renderingprops
          rendering={(count, handleCount) => (
            <Renderprop2 count={count} handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
};

export default Renderprops;
