import React from "react";
import ServiceCommon from "../common/ServiceCommon";
import CommonHead from "../common/CommonHead";
import { GrOptimize } from "react-icons/gr";
import { MdDynamicFeed } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { FaFigma } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Service = () => {
  return (
    <>
      {/* ------------- div-cart */}
      <div data-aos="fade-up" className="mt-[100px] mb-[20px]">
        <div className="pb-[40px] text-center">
          <CommonHead
            commonh2={"My Services"}
            commonp={"Services i offer to my clients"}
          />
        </div>
        <div className="w-[1450px] flex flex-wrap justify-center items-center  gap-[30px] max-w-full max-lg:mt-[50px] max-md:w-full">
          <ServiceCommon
            serLogo={<MdOutlineWeb className="text-5xl text-[#009e66]" />}
            serH2={"Responsive Web Design"}
            serP={
              "Instead of using fixed-width responsive design uses relative according to the screen size."
            }
          />
          <ServiceCommon
            serLogo={<FaFigma className="text-5xl text-[#009e66]" />}
            serH2={"UI/UX Design Integration"}
            serP={
              "UI/UX Design Integration refers to the process of seamlessly functionally effective."
            }
          />
          <ServiceCommon
            serLogo={<GrOptimize className="text-5xl text-[#009e66]" />}
            serH2={"Frontend Optimization"}
            serP={
              "Frontend Optimization is the process of , improve responsiveness, and deliver a smooth user experience."
            }
          />
          <ServiceCommon
            serLogo={<MdOutlineWeb className="text-5xl text-[#009e66]" />}
            serH2={"API Integration"}
            serP={
              "API Integration is the process of connecting your authentication services, or third-party apps."
            }
          />
          <ServiceCommon
            serLogo={<GoBrowser className="text-5xl text-[#009e66]" />}
            serH2={"Cross-Browser Compatibility"}
            serP={
              "Cross-Browser Compatibility refers to the ability of a website or  and operating systems."
            }
          />
          <ServiceCommon
            serLogo={<MdDynamicFeed className="text-5xl text-[#009e66]" />}
            serH2={"Building dynamic SPAs"}
            serP={
              "Building Dynamic Single Page Application dynamically update content via JavaScript reloading the entire page."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Service;
