import React from "react";
import CommonHead from "../components/common/CommonHead";
import { Link } from "react-router";
import { RxCross1 } from "react-icons/rx";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className=" bg-[#101010] min-h-screen relative">
      <div className="container ">
        <div className="pt-[70px] text-center">  <CommonHead  commonp={"Feel free to contact me anytimes"}  commonh2={"Get in Touch"}  /> </div>
       {/* <!--   Start Code --> */}
  <div class="wrap">
    <div class="animated-bar"></div>
  </div>
        <div id="contact-row" className=" pt-[50px] lg:pt-[150px] lg:flex justify-center gap-[100px]">
            {/* ---------------- cross button */}
            <div className="fixed top-4 right-4 lg:absolute lg:top-[30px] lg:right-[60px] z-50">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>
            </div>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
