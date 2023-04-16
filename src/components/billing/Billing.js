import React, { useState } from "react";

import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import img1 from "../../assets/New folder/pay.svg";
import img2 from "../../assets/New folder/dribbble-icon-1-logo-svgrepo-com.svg";
import img3 from "../../assets/New folder/Netflix-Logo-11.svg";
import img4 from "../../assets/New folder/Manulife Logo Vector.png";
import imgzero from "../../assets/New folder/Polygon 2.png";
import imgzero1 from "../../assets/New folder/Polygon 4.png";
const Billing = () => {
 
 
  return (
    <div className="max-w-[1440px]  m-auto  lg:mt-32">
      <div className="grid grid-cols-1 lg:gap-32 lg:grid-cols-2 p-4  ">
        <div>
        <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-6  lg:w-[227px] lg:h-[216px] block lg:absolute  rounded-md ml-0 lg:ml-52  lG:ml-52  z-10 mb-10 lg:mt-0">
            <div className="flex justify-between">
              <div>
                <img src={img1} alt="" srcset="" className=" h-[50px]" />
              </div>
              <div>
                <h1 className="text-white text-2xl">Paypal</h1>
                <p className="text-gray-400">Checkout</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="p-2 pt-4">
                <h1 className="text-gray-400">Total</h1>
                <p className="text-2xl text-white">$210</p>
              </div>
              <div className="p-2 pt-4">
                <button className="border border-cyan-400 px-4 py-2 rounded-md  text-cyan-400 ">
                  Change
                </button>
              </div>
            </div>
            <div className=" ">
              <button onClick={()=>{alert('Great! Your Payment is succesfully.')}} className="bg-gradient-to-t from-[#33BBCF] to-[#A7FCFF] cursor-pointer group text-black w-fit px-8 py-2 my-2  flex items-center rounded-xl font-semibold hover:text-white ">
                Make Payment
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-600 to-black p-6   w-[335px] h-[280px]  rounded-md block lg:relative  top-0 lg:top-36 ">
            <h1 className="text-2xl text-white font-bold">Last Transaction</h1>
            <div className="flex justify-between">
              <div className="flex pt-4">
                <img src={img2} alt="" srcset="" className="h-[50px] " />
                <div className="mx-2">
                  <h1 className="text-white">Dribbble Pro</h1>
                  <p className="text-white">15 Days ago</p>
                </div>
              </div>

              <div className="flex pt-6">
                <div className="mx-2">
                  <img src={imgzero} alt="" srcset="" className="pt-2" />
                </div>
                <div className="">
                  <p className="text-white">-$250,93</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex pt-4">
                <img src={img3} alt="" srcset="" className="h-[60px] " />
                <div className="mx-2">
                  <h1 className="text-white">Netflix</h1>
                  <p className="text-white">4 Days ago</p>
                </div>
              </div>

              <div className="flex pt-6">
                <div className="mx-2">
                  <img src={imgzero} alt="" srcset="" className="pt-2" />
                </div>
                <div className="">
                  <p className="text-white">-$250,93</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex pt-4">
                <img src={img4} alt="" srcset="" className="h-[60px] " />
                <div className="mx-2">
                  <h1 className="text-white">Manulife Cash</h1>
                  <p className="text-white">4 Days ago</p>
                </div>
              </div>

              <div className="flex pt-6">
                <div className="mx-2">
                  <img src={imgzero1} alt="" srcset="" className="pt-2" />
                </div>
                <div className="">
                  <p className="text-white">-$250,93</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div className="mt-20 lg:mt-0">
          <h1 className="text-white  text-4xl font-medium  space-y-10">
            Easily control your <br />
            billing & invoicing.
          </h1>
          <p className="text-gray-400 text-lg mt-8">
            Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
            ametodio aenean neque. Fusce ipsum <br /> orci rhoncus aliporttitor
            integer platea placerat.
          </p>
          <div className="flex mt-8">
            <img src={apple} alt="" className="w-[150px] h-[70px] mx-4 " />
            <img src={google} alt="" className="w-[150px] h-[70px]  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
