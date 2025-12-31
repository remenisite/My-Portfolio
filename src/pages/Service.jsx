import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoPulseOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import ServiceCommon from "../components/common/ServiceCommon";

const Service = () => {
  return (
    <>
      <section id="services" className="bg-[#101010] min-h-screen relative">
        <div className="container">
          <div className="pt-[70px] text-center">
            <CommonHead
              commonp={"Services i offer to my clients"}
              commonh2={"My Services"}
            />
          </div>
          <div id="service-row" className="">
            {/* <!--   Start Code --> */}
            <div class="wrap">
              <div class="animated-bar"></div>
            </div>

            {/* ---------------- cross button */}
            <div className=" absolute top-[30px] right-[60px]">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>{" "}
            </div>

            {/* ------------ skill part */}
            <div className="pt-[250px] pb-[50px] ">
              <div className="flex pt-[70px] justify-between">
                {/* -------- hard-skill */}
                <div className="w-[1100px]">
                  <div className="w-[100px] border-b border-[#ffff] mb-[40px] pb-[5px]">
                    <h1 className="text-[20px]  font-medium font-main text-[#F3F3F3]">
                      hard-Skill
                    </h1>
                  </div>
                  <div className="flex justify-center  gap-[30px] ">
                    <div>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        HTML5
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        CSS3
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        JavaScript (ES6+)
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        TypeScript
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        React.js
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Vue.js
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Next.js
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Tailwind CSS
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Bootstrap
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Material UI
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Responsive Design
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        CSS Flexbox & Grid
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        DOM Manipulation
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        RESTful API integration
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Form handling and validation
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Cross-browser compatibility
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Vite
                      </h2>
                    </div>

                    <div>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Accessibility (a11y)
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        CRUD operations
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Git (essential)
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        GitHub / GitLab / Bitbucket
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Branching, merging, pull requests
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Code reviews and team workflows
                      </h2>
                    </div>

                    <div>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Vercel / Netlify (frontend)
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        Firebase (auth, database, hosting)
                      </h2>
                      <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                        OAuth (Google, GitHub, etc.)
                      </h2>
                    </div>
                  </div>
                </div>
                {/* -------------- soft-skill */}
                <div>
                  <div className="w-[90px] border-b border-[#ffff] mb-[20px] pb-[5px]">
                    {" "}
                    <h1 className="text-[20px]  font-medium font-main text-[#F3F3F3]">
                      Soft-Skill
                    </h1>{" "}
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Problem-solving
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Debugging & troubleshooting
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Communication
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Documentation
                    </h2>
                  </div>
                </div>
              </div>

              {/* ----------- learning */}
              <div className="pt-[100px]">
                <div className="w-[70px] border-b border-[#ffff] mb-[20px] pb-[5px]">
                  {" "}
                  <h1 className="text-[20px]  font-medium font-main text-[#F3F3F3]">
                    Learn...
                  </h1>{" "}
                </div>

                <div className="w-[1100px] flex pt-[30px] gap-[50px]">
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Node.js
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Angular js
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Node.js + Express
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      RESTful API development
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Authentication & Authorization
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      MVC architecture
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Error handling & logging
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Rate limiting / throttling
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      API security best practices
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Server-side rendering
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      PostgreSQL
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      MySQL
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      SQLite{" "}
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      MongoDB
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Redis{" "}
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Firebase
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Data modeling and relationships
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Indexing and query optimization
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      ORMs
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Branching, merging, pull requests
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Code reviews and team workflows
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Render / Heroku / Railway
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      RAWS / Azure / GCP{" "}
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      CI/CD{" "}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Domain & DNS setup
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Postman / Insomnia for testing
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      REST & GraphQL APIs
                    </h2>
                    <h2 className="text-[16px] font-normal font-main text-[#CECECE]">
                      Nginx / Apache
                    </h2>
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

export default Service;
