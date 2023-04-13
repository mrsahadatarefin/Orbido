import React from "react";

import apple from '../../assets/apple.png'
import google from '../../assets/google.png'
const Billing = () => {
  return (
    <div className="max-w-[1440px]  m-auto mt-32">
      <div className="grid grid-cols-1 lg:gap-32 lg:grid-cols-2 p-4">
      <div>hhfdifhf</div>
        <div>
          <h1 className="text-white  text-4xl font-medium  space-y-10">
            Easily control your <br />
             billing & invoicing.
          </h1>
          <p className="text-gray-400 text-lg mt-8">
            Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
            ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor
            integer platea placerat.
          </p>
          <div className="flex mt-8">
            <img src={apple} alt=""  className="w-[150px] h-[70px] mx-4 "  />
            <img src={google} alt="" className="w-[150px] h-[70px]  "/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Billing;
