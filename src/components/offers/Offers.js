import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BsFillCloudCheckFill } from "react-icons/bs";

const Offers = () => {
  return (
    <div className="max-w-[1440px] m-auto mt-32">
      <div className="grid grid-cols-1 lg:gap-32 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl p-4 ">
            You do the business,
            <br /> we’ll handle the money.
          </h1>
          <p className="text-gray-400 text-xl p-4 ">
            With the right credit card, you can improve your financial life{" "}
            <br /> by building credit, earning rewards and saving money. But{" "}
            <br /> with hundreds of credit cards on the market.
          </p>
          <div className="p-4">
            <button className="bg-gradient-to-t from-[#33BBCF] to-[#A7FCFF] cursor-pointer group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold hover:text-white  ">
              GetStarted
            </button>
          </div>
        </div>
        <div>
          <div className="flex p-4">
            <AiTwotoneStar size={30} className="text-[#56c0c3]" />
            <div className="px-4">
              <h1 className="text-white">Rewards</h1>
              <p className="text-gray-400">
                The best credit cards offer some 
                <br /> tantalizing combinations of promotions and prizes
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <FiSend size={30} className="text-[#56c0c3]" />
            <div className="px-4">
              {" "}
              <h1 className="text-white">100% Secured</h1>
              <p className="text-gray-400">
                We take proactive steps make sure your
                <br /> information and transactions are secure.
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <BsFillCloudCheckFill size={30} className="text-[#56c0c3]" />
            <div className="px-4">
              {" "}
              <h1 className="text-white">Balance Transfer</h1>
              <p className="text-gray-400">
                A balance transfer credit card can save <br /> you a lot of
                money in interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
