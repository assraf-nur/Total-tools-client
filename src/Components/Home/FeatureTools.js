import React from "react";
import Iframe from "react-iframe";

const FeatureTools = () => {
  return (
    <div className="mt-12 grid grid-cols-1 justify-items-center">
      <h2 className="text-center text-4xl font-semibold">Our Latest Tools</h2>
      <div className="mt-12">
        <Iframe
          url="https://www.youtube.com/embed/T47dJDzxDF0"
          width="720px"
          height="450px"
          id="myId"
          className="rounded-2xl"
          display="initial"
          position="relative"
        />
      </div>
    </div>
  );
};

export default FeatureTools;

// https://www.youtube.com/embed/T47dJDzxDF0
