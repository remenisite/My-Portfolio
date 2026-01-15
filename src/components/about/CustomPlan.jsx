import React from "react";
import CommonHead from "../common/CommonHead";
import { SiBasicattentiontoken } from "react-icons/si";

const CustomPlan = () => {
  return (
    <>
      {/* ------------- service-part */}
      <div
        data-aos="fade-up"
        className=" pt-[100px] text-center lg:pt-[180px] lg:pb-[50px]"
      >
        <div className="pb-[40px]">
          <CommonHead
            commonh2={"Choose a Plan"}
            commonp={"Get started with my services"}
          />
        </div>
        <div
          id="about2-row"
          className="   lg:flex justify-center items-center gap-[60px]"
        >
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-center flex justify-center"
          >
            <div className=" w-[340px] lg:w-[390px] h-[600px] text-center bg-[#161616]">
              <div className="flex justify-center pt-[50px] pb-[30px]">
                <SiBasicattentiontoken className="text-[#009e66] text-[80px]" />
              </div>
              <div className="mb-[30px]">
                <h3 className="text-[26px] font-bold font-main text-[#F0F0F0]">
                  Basic
                </h3>
                <h2 className="text-[24px] pt-[10px] font-light font-main text-[#F0F0F0]">
                  $25
                </h2>
              </div>
              <div>
                <ul className="flex flex-col gap-[20px]">
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    2-day delivery
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    1 page
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Design customization
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Unlimited Revision
                  </li>

                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    24/7 Support
                  </li>
                </ul>
              </div>

              {/* -------------- button */}
              <div className="mt-[50px]">
                <a
                  href="/cv.pdf"
                  download
                  className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                >
                  Get Standard
                </a>
              </div>
            </div>
          </div>
          <div className="text-center py-[50px] lg:py-0 flex justify-center">
            <div className=" w-[340px] lg:w-[390px] h-[600px] text-center bg-[#161616]">
              <div className="flex justify-center pt-[50px] pb-[30px]">
                <SiBasicattentiontoken className="text-[#009e66] text-[80px]" />
              </div>
              <div className="mb-[30px]">
                <h3 className="text-[26px] font-bold font-main text-[#F0F0F0]">
                  Standard
                </h3>
                <h2 className="text-[24px] pt-[10px] font-light font-main text-[#F0F0F0]">
                  $80
                </h2>
              </div>
              <div>
                <ul className="flex flex-col gap-[20px]">
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    4-day delivery
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    4-6 page
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Design customization
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Unlimited Revision
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    24/7 Support
                  </li>
                </ul>
              </div>

              {/* -------------- button */}
              <div className="mt-[50px]">
                <a
                  href="/cv.pdf"
                  download
                  className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                >
                  Get Standard
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-center flex justify-center"
          >
            <div className=" w-[340px] lg:w-[390px] h-[600px] text-center bg-[#161616]">
              <div className="flex justify-center pt-[50px] pb-[30px]">
                <SiBasicattentiontoken className="text-[#009e66] text-[80px]" />
              </div>
              <div className="mb-[30px]">
                <h3 className="text-[26px] font-bold font-main text-[#F0F0F0]">
                  Premium
                </h3>
                <h2 className="text-[24px] pt-[10px] font-light font-main text-[#F0F0F0]">
                  $200
                </h2>
              </div>
              <div>
                <ul className="flex flex-col gap-[20px]">
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    6-day delivery
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Multiple Page
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Responsive Design
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Unlimited Revision
                  </li>
                  <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    24/7 Support
                  </li>
                </ul>
              </div>

              {/* -------------- button */}
              <div className="mt-[50px]">
                <a
                  href="/cv.pdf"
                  download
                  className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                >
                  Get Standard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPlan;
