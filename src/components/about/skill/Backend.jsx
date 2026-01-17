import React from "react";

import _back1 from "../../../assets/images/back1.png";
import _back2 from "../../../assets/images/back2.png";
import _back3 from "../../../assets/images/back3.png";
import _back4 from "../../../assets/images/back4.png";
import _back5 from "../../../assets/images/back5.png";
import _back6 from "../../../assets/images/back6.png";
import _back7 from "../../../assets/images/back7.png";
import _back8 from "../../../assets/images/back8.png";
import _back9 from "../../../assets/images/back9.png";
import _back10 from "../../../assets/images/back10.png";
import _back11 from "../../../assets/images/back11.png";
import _back12 from "../../../assets/images/back12.png";

const Backend = () => {
  return (
    <>
      {/* ---------------- backend skill */}
      <div className="w-[500px] mt-[400px] lg:mt-[50px]   gap-[30px] ">
        <div
          data-aos="fade-left"
          className=" flex  items-center gap-[30px] p-[30px] bg-[#161616]"
        >
   
            <div data-aos="flip-down" className=" ">
              <img className="w-[50px] text-center" src={_back1} alt="logo" />
            </div>
            <div data-aos="flip-down" className=" ">
              <img className="w-[50px] text-center" src={_back2} alt="logo" />
            </div>
            <div data-aos="flip-down" className=" ">
              <img className="w-[50px] text-center" src={_back3} alt="logo" />
            </div>
            <div data-aos="flip-down" className=" ">
              <img className="w-[50px] text-center" src={_back4} alt="logo" />
            </div>
            <div data-aos="flip-down" className=" ">
              <img className="w-[50px] text-center" src={_back5} alt="logo" />
            </div>
        
         



        </div>
      </div>
    </>
  );
};

export default Backend;
