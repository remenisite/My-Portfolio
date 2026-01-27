import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import ec5 from "../assets/images/nexton (ec).png";
import urlImg from "../assets/images/urlImg.png";
import firebase from "../assets/images/firebase copy.png";
import todo from "../assets/images/to-do.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(3);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        id="portfolio"
        className="bg-[#101010] min-h-screen pb-[50px] relative"
      >
        <div className="container ">
          <div className="pt-[70px] text-center">
            {" "}
            <CommonHead
              commonp={"Showcasing some of my best work"}
              commonh2={"Portfolio"}
            />
          </div>
          <div id="portfolio-row" className="">
            {/* <!--   Start Code --> */}
            <div className="wrap">
              {" "}
              <div className="animated-bar"></div>{" "}
            </div>
            {/* ---------------- cross button */}
            <div className="fixed top-4 right-4 lg:absolute lg:top-[30px] lg:right-[60px] z-50">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>{" "}
            </div>

            {/* Tab Navigation */}
            <div className="mt-[80px]">
              {/* --------------- tab-button */}
              <ul
                className="nav nav-tabs flex justify-center gap-[15px] mb-[20px] "
                role="tablist"
              >
                <li
                  role="presentation"
                  className={`pb-[10px] cursor-pointer ${
                    activeTab === 3 ? "border-b-2 border-green-400" : ""
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  <a href="#messages" className="text-white">
                    Frontend
                  </a>
                </li>
                <li
                  role="presentation"
                  className={`pb-[10px] cursor-pointer ${
                    activeTab === 1 ? "border-b-2 border-green-400" : ""
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  <a href="#home" className="text-white">
                    {" "}
                    Backend
                  </a>
                </li>
                <li
                  role="presentation"
                  className={`pb-[10px] cursor-pointer ${
                    activeTab === 2 ? "border-b-2 border-green-400" : ""
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  <a href="#profile" className="text-white">
                    Full Stack
                  </a>
                </li>
                <li
                  role="presentation"
                  className={`pb-[10px] cursor-pointer ${
                    activeTab === 4 ? "border-b-2 border-green-400" : ""
                  }`}
                  onClick={() => setActiveTab(4)}
                >
                  <a href="#settings" className="text-white">
                    Firebase
                  </a>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === 1 && (
                  <div id="messages" className="text-white p-[20px]">
                    {/* --------------nexton ------------- */}

                    <div className="flex items-center gap-10 justify-center max-lg:flex-col max-lg:gap-6">
                      {/* Content Section */}
                      <div
                        data-aos="fade-left"
                        className="bg-gradient-to-br from-[#1b1b1b] to-[#111] rounded-2xl p-6 w-[520px] shadow-lg max-md:w-full"
                      >
                        <h2 className="text-[24px] font-semibold font-main text-white">
                          Url Shortner
                        </h2>

                        <div className="pt-4 pb-6">
                          <p className="text-[15px] leading-6 font-normal font-main text-[#bdbdbd]">
                      A URL shortener is a simple tool that turns long, messy web links into short, clean, and easy-to-share URLs—perfect for social media, messaging, and tracking clicks.
                          </p>
                        </div>

                        <div className="flex max-md:justify-center">
                          <a
                            href="https://nex-ton.vercel.app"
                            target="_blank"
                            className="px-8 py-2 text-sm font-semibold font-main text-white bg-[#009e66] rounded-full border border-[#009e66] hover:bg-transparent hover:text-[#009e66] duration-300"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                      {/* Image Section */}
                      <div
                        data-aos="fade-right"
                        className="w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-lg max-md:w-full max-md:h-[240px]"
                      >
                        <img
                          src={urlImg}
                          alt="portfolio img"
                          className="w-full h-full object-cover hover:scale-105 duration-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="flex gap-[40px] my-[50px] justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
                    <div
                      data-aos="zoom-in-left"
                      className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]"
                    >
                      <h2 className="text-[21px] font-medium font-main text-[#fff]">
                        Js-To-do
                      </h2>
                      <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
                        <p className="text-[16px] font-normal font-main text-[#9F9F9F]">
                          {" "}
                          I make a to-do list project where user
                          add,delete,update & chnage his/him to-do.{" "}
                        </p>{" "}
                      </div>

                      <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
                        <Link to={"/"}>View</Link>
                      </div>
                    </div>
                    <div
                      data-aos="zoom-in-right"
                      className="w-[400px] h-[350px] bg-red-300 max-md:w-full max-md:h-[220px]"
                    >
                      <img
                        src={todo}
                        alt="portfolio img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div id="messages" className="text-white p-[20px]">
                    {/* --------------nexton ------------- */}

                    <div className="flex items-center gap-10 justify-center max-lg:flex-col max-lg:gap-6">
                      {/* Image Section */}
                      <div
                        data-aos="fade-right"
                        className="w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-lg max-md:w-full max-md:h-[240px]"
                      >
                        <img
                          src={ec5}
                          alt="portfolio img"
                          className="w-full h-full object-cover hover:scale-105 duration-500"
                        />
                      </div>

                      {/* Content Section */}
                      <div
                        data-aos="fade-left"
                        className="bg-gradient-to-br from-[#1b1b1b] to-[#111] rounded-2xl p-6 w-[520px] shadow-lg max-md:w-full"
                      >
                        <h2 className="text-[24px] font-semibold font-main text-white">
                          E-commarce (Nex-ton)
                        </h2>

                        <div className="pt-4 pb-6">
                          <p className="text-[15px] leading-6 font-normal font-main text-[#bdbdbd]">
                            This is a React.js based e-commerce website built
                            using React.js, Tailwind CSS, Vanilla JavaScript,
                            npm packages, and a fully responsive design.
                          </p>
                        </div>

                        <div className="flex max-md:justify-center">
                          <a
                            href="https://nex-ton.vercel.app"
                            target="_blank"
                            className="px-8 py-2 text-sm font-semibold font-main text-white bg-[#009e66] rounded-full border border-[#009e66] hover:bg-transparent hover:text-[#009e66] duration-300"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div className="flex items-center gap-10 justify-center max-lg:flex-col max-lg:gap-6">
                    {/* Image Section */}
                    <div
                      data-aos="fade-right"
                      className="w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-lg max-md:w-full max-md:h-[240px]"
                    >
                      <img
                        src={firebase}
                        alt="portfolio img"
                        className="w-full h-full object-cover hover:scale-105 duration-500"
                      />
                    </div>

                    {/* Content Section */}
                    <div
                      data-aos="fade-left"
                      className="bg-gradient-to-br from-[#1b1b1b] to-[#111] rounded-2xl p-6 w-[520px] shadow-lg max-md:w-full"
                    >
                      <h2 className="text-[24px] font-semibold font-main text-white">
                        Firebase-Note
                      </h2>

                      <div className="pt-4 pb-6">
                        <p className="text-[15px] leading-6 font-normal font-main text-[#bdbdbd]">
                          This is firebase note app project where user create
                          delete update there note.
                        </p>
                      </div>

                      <div className="flex max-md:justify-center">
                        <a
                          href="https://nex-ton.vercel.app"
                          target="_blank"
                          className="px-8 py-2 text-sm font-semibold font-main text-white bg-[#009e66] rounded-full border border-[#009e66] hover:bg-transparent hover:text-[#009e66] duration-300"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
