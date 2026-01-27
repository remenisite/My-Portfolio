import React from "react";
import profileImg from "../../assets/images/MyImages.png";

const Profile = () => {
  return (
    <>
      {/* ---------- images part */}
      <div className=" lg:flex mx-auto lg:mx-0 justify-center gap-[100px]  items-center mt-[50px]  lg:mt-[140px]">
        {/* ------------ left-side */}

        <div class=" flex items-center justify-center">
          {/* <!-- Oval Frame --> */}
          <div class="relative">
            {/* <!-- Border --> */}
            <div class="w-[350px] h-[450px] rounded-[999px] border-[2px] overflow-hidden border-teal-400 flex items-center justify-center bg-neutral-800">
              {/* <!-- Image --> */}
 
                  <img
                            className="max-w-[500px]"
                            src={profileImg}
                            alt="Antor Karmaker portrait"
                          />
            </div>
          </div>
        </div>

        {/* ----------- right-side */}
        <div className="">
          <div className=" pt-[50px] lg:pt-0">
            <p className=" pl-[30px] lg:pl-0 text-[18px] mx-auto lg:text-[24px] font-medium font-main text-[#009e66]">
              Who am i?
            </p>
            <div className=" text-center lg:text-start  lg:w-[690px] my-[20px]">
              <h2 className="text-[31px]  font-bold font-main text-[#F0F0F0]">
                I'm Antor, a Javascript Developer
              </h2>
            </div>
            <div className=" mx-[20px] lg:mx-0 lg:w-[667px] border-b border-[#9f9f9f22] pb-[40px]">
              <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                JavaScript Development focuses on building fast, dynamic, and
                interactive web applications that deliver an excellent user
                experience across all devices. JavaScript is one of the most
                powerful and widely used programming languages for modern web
                development, enabling both frontend and backend solutions.{" "}
              </p>
            </div>
          </div>
          {/* ------------ address part */}
          <address>
            <div className="pt-[30px] pb-[40px]">
              <div className=" pl-[30px] lg:pl-0  gap-[40px] lg:flex  lg:gap-[107px]">
                <div className=" flex gap-[10px]">
                  <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                    Name:
                  </h3>
                  <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                    Antor Web Dev
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-0 flex  gap-[10px]">
                  <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                    Email:
                  </h3>
                  <a
                    href=""
                    className="text-[15px] font-normal font-main text-[#9F9F9F]"
                  >
                    antor.web.bd@gmail.com
                  </a>
                </div>
              </div>
              <div className=" pl-[30px] lg:pl-0 lg:flex gap-[221px] pt-[20px]">
                <div className="flex gap-[10px]">
                  <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                    Age:
                  </h3>
                  <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                    21
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-0 lg:pl-0 flex gap-[10px]">
                  <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                    From:
                  </h3>
                  <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </address>
          {/* -------------- button */}
          <div className="mt-[20px] text-center lg:text-start">
            <a
              href="/My_cv.pdf"
              download
              className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
