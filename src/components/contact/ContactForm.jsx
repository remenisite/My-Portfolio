import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="w-full max-w-[900px] mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-[22px] sm:text-[24px] font-medium font-main text-[#F0F0F0]">
          Message Me
        </h2>
        <div className="pt-[20px]">
          <form className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="w-full md:w-1/2">
                <input
                  className="w-full h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  className="w-full h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            {/* ------------ subject */}
            <div className="w-full">
              <input
                className="w-full h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                type="text"
                placeholder="Subject"
              />
            </div>
            {/* --------------text-area */}
            <div className="w-full">
              <textarea
                className="w-full h-32 border resize-none bg-[#161616] text-[15px] font-normal font-main text-[#777777] border-none pl-5 pt-4  outline-none  mb-2"
                placeholder="Your Message"
              ></textarea>
            </div>
            {/* ---------------button */}
            <button className="py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border w-full sm:w-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
