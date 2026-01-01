import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <>
      <div className="w-full max-w-[500px] mx-auto mt-[100px] pb-[50px] lg:mt-0 px-2 ">
        <h2 className="text-[22px] sm:text-[24px] font-medium font-main text-[#F0F0F0]">
          {" "}
          Contact Info{" "}
        </h2>
        <div className="w-full py-[30px]">
          {" "}
          <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>{" "}
        </div>
        {/* -------------- contact details */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[20px] sm:gap-[40px]">
            <div>
              <FaUserCircle className="text-[#009e66] text-[26px] sm:text-[30px]" />
            </div>
            <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                Name
              </h3>
              <p className="text-[14px] font-normal font-main text-[#9F9F9F]">
                Antor web-Dev
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px] sm:gap-[40px]">
            <div>
              <FaMapLocationDot className="text-[#009e66] text-[26px] sm:text-[30px]" />
            </div>
            <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                Location
              </h3>
              <p className="text-[14px] font-normal font-main text-[#9F9F9F]">
                Gazipur Dhaka Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px] sm:gap-[40px]">
            <div>
              <FaPhone className="text-[#009e66] text-[26px] sm:text-[30px]" />
            </div>
            <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                Call Me
              </h3>
              <p className="text-[14px] font-normal font-main text-[#9F9F9F]">
                +880-176-878-0954
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px] sm:gap-[40px]">
            <div>
              <IoPaperPlane className="text-[#009e66] text-[26px] sm:text-[30px]" />
            </div>
            <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                Email Me
              </h3>
              <a
                href="EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQABhDGIMBGLEDGIAEGIoFMgwIAhAAGEMYgAQYigUyDwgDEAAYQxixAxiABBiKBTIKCAQQABixAxiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBCDEzMjdqMGo3qAIAsAIA"
                className="text-[14px] hover:text-[#797979] font-normal font-main text-[#9F9F9F]"
              >
                antor.web.bd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
