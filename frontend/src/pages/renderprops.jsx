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
