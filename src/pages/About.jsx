import React, { useEffect } from "react";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../components/about/Profile";
import Service from "../components/about/Service";
import Frontend from "../components/about/skill/Frontend";
import Backend from "../components/about/skill/Backend";
import CustomPlan from "../components/about/CustomPlan";

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
              <div className="flex justify-between">
                <Frontend />
                <Backend />
              </div>
            </div>

            {/* --------------------- plan ------------------ */}

            <CustomPlan />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
