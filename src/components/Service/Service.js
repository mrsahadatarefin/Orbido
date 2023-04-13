import React from "react";

const Service = () => {
  return (
    <div className="max-w-[1440px]  m-auto mt-32  bg-gradient-to-r from-black to-gray-800 rounded-2xl  ">
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-start lg:justify-items-center   h-[400px]">
      <div className="p-8">
        <h1 className="text-white text-5xl font-medium  ">Let’s try our service now!</h1>
        <p className="text-gray-400 text-xl pt-8">
          Everything you need to accept card payments <br /> 
          and grow your  business anywhere on the planet.
        </p>
      </div>
      <div className="p-8" >
        <button className="  mb-20 lg:mb-0  bg-gradient-to-t from-[#33BBCF] to-[#A7FCFF] cursor-pointer group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold hover:text-white   "> GetStarted </button>
      </div>
      </div>
    </div>
  );
};

export default Service;
