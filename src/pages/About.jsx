import React, { useEffect } from "react";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import { SiBasicattentiontoken } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../components/about/Profile";
import Service from "../components/about/Service";
import Frontend from "../components/about/skill/Frontend";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      {/* --------- profile-part */}
      <section id="about" className="bg-[#101010] min-h-screen   relative">
        <div className="container">
          <div className="pt-[70px] text-center">
            <CommonHead commonp={"Get to know me"} commonh2={"About Me"} />
          </div>
          <div id="about-row">
            {/* <!--   Start Code --> */}
            <div class="wrap">
              <div class="animated-bar"></div>
            </div>
            {/* ---------------- cross button */}
            <div className="fixed top-4 right-4 lg:absolute lg:top-[30px] lg:right-[60px] z-50">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>{" "}
            </div>

            <Profile />
            <Service />

            {/* ----------- skill part */}

            <div className="pt-[70px]  text-center">
              <CommonHead
                commonp={" My level of knowledge in some tools"}
                commonh2={" My Skills"}
              />
            </div>

            {/* --------------- skill part */}

            <div data-aos="fade-up" className=" ">
              <div className="flex justify-center mt-[50px] gap-[637px]">
                <h2 className="w-[234px] ml-[60px] lg:ml-0 text-[20px] font-medium font-main text-[#F0F0F0] border-[#009e66] border-b pb-[5px]">
                  Frontend Development
                </h2>
                <h2 className="w-[234px]  text-[20px] font-medium font-main text-[#F0F0F0] border-[#009e66] border-b pb-[5px]">
                  Backend Development
                </h2>
              </div>
              <Frontend />

              <div className="flex justify-center gap-[100px]">
                {/* ---------------- backend skill */}
                <div className="w-[500px] mt-[400px] lg:mt-[50px]   gap-[30px] ">
                  <div
                    data-aos="fade-left"
                    className=" flex justify-center items-center gap-[30px] p-[30px] bg-[#161616]"
                  >
                    <div className=" pr-[136px] lg:pr-0 flex flex-col justify-center items-center">
                      <h2 className="text-[36px] font-bold font-main text-white">
                        Learning
                      </h2>
                      <h2 className=" text-[20px] font-medium font-main text-[#F0F0F0] pb-[5px]">
                        Backend Development with Node.js
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
