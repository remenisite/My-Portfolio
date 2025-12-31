import React, { useEffect } from "react";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import { SiBasicattentiontoken } from "react-icons/si";
import ServiceCommon from "../components/common/ServiceCommon";
import fnt1 from "../assets/images/bootstrap.png";
import fnt2 from "../assets/images/css-3.png";
import fnt3 from "../assets/images/vercel.png";
import fnt4 from "../assets/images/twcss.png";
import fnt5 from "../assets/images/physics.png";
import fnt6 from "../assets/images/node-js.png";
import fnt7 from "../assets/images/next.js.png";
import fnt8 from "../assets/images/git.png";
import fnt9 from "../assets/images/github.png";
import fnt10 from "../assets/images/gitlab.png";
import fnt11 from "../assets/images/html-5.png";
import fnt12 from "../assets/images/netlify.png";
import fnt13 from "../assets/images/js.png";
import fnt14 from "../assets/images/saas.png";
import fnt15 from "../assets/images/Vite.png";
import fnt16 from "../assets/images/social.png";
import fnt17 from "../assets/images/redux.png";
import fnt18 from "../assets/images/axious.png";
import fnt20 from "../assets/images/fatch.png";
import fnt21 from "../assets/images/figma.png";
import fnt22 from "../assets/images/jsn.png";
import fnt23 from "../assets/images/npm.png";
import fnt24 from "../assets/images/wordpress.png";
import fnt25 from "../assets/images/elementor.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Profile from "../components/about/Profile";
import Service from "../components/about/Service";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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

              <div className="flex justify-center gap-[100px]">
                {/* ---------------- frontend skill */}
                <div className=" w-[500px]  ">
                  <div
                    data-aos="fade-right"
                    className="flex mt-[50px] p-[30px] flex-wrap justify-center gap-[30px] bg-[#161616]"
                  >
                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt11}
                        alt="logo"
                      />
                    </div>
                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt2}
                        alt="logo"
                      />
                    </div>
                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt13}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt1}
                        alt="logo"
                      />
                    </div>
                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[70px] text-center"
                        src={fnt4}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt3}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt5}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt6}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt7}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt8}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt9}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt10}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-left" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt12}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-right" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt14}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-up" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt15}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt16}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[80px] text-center"
                        src={fnt17}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt18}
                        alt="logo"
                      />
                    </div>
                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[110px] text-center"
                        src={fnt20}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[60px] text-center"
                        src={fnt21}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[65px] text-center"
                        src={fnt22}
                        alt="logo"
                      />
                    </div>

                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[50px] text-center"
                        src={fnt23}
                        alt="logo"
                      />
                    </div>
                    <div data-aos="flip-down" className="text-center ">
                      <img
                        className="w-[60px] text-center"
                        src={fnt24}
                        alt="logo"
                      />
                    </div>
                    <div
                      data-aos="flip-down"
                      className=" text-center flex justify-center flex-col"
                    >
                      <img
                        className="w-[60px] text-center"
                        src={fnt25}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>

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
