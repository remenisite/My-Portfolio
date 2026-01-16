import React from "react";

import _back1 from "../../../assets/images/back1.png";
import _back2 from "../../../assets/images/back2.png";
import _back3 from "../../../assets/images/back3.png";
import _back4 from "../../../assets/images/back4.png";
import _back5 from "../../../assets/images/back5.png";

const Backend = () => {
  return (
    <>
      {/* ---------------- backend skill */}
      <div className="w-[500px] mt-[400px] lg:mt-[50px]   gap-[30px] ">
        <div
          data-aos="fade-left"
          className=" flex justify-center items-center gap-[30px] p-[30px] bg-[#161616]"
        >
          <div data-aos="flip-down" className="text-center ">
            <img className="w-[50px] text-center" src={_back1} alt="logo" />
          </div>
          <div data-aos="flip-down" className="text-center ">
            <img className="w-[50px] text-center" src={_back2} alt="logo" />
          </div>
          <div data-aos="flip-down" className="text-center ">
            <img className="w-[50px] text-center" src={_back3} alt="logo" />
          </div>
          <div data-aos="flip-down" className="text-center ">
            <img className="w-[50px] text-center" src={_back4} alt="logo" />
          </div>
          <div data-aos="flip-down" className="text-center ">
            <img className="w-[50px] text-center" src={_back5} alt="logo" />
          </div>


        </div>
      </div>
    </>
  );
};

export default Backend;
