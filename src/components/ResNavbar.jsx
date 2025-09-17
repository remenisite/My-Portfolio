import React, { useState } from 'react'
import { PiShoppingCart } from 'react-icons/pi';
import { RiSearch2Line, RiUserLine } from 'react-icons/ri';
import { Link } from 'react-router';

const ResNavbar = () => {
      const [showNav, setShownav] = useState(false);
  return (
    <>
    
    
          <nav id="resNavbar" className="lg:hidden py-5 px-4 dark:bg-primary">
        <div className="container">
          <div className="nav_row flex items-center justify-between">
            <Link to={"/"} className="NavIcon w-[24px]">
            </Link>
  
            <button
              onClick={() => setShownav(!showNav)}
              className="NavItem w-[25px] h-[20px] text-primary  relative"
            >
              <span
                className={`w-full h-[3px] bg-primary dark:bg-white absolute top-0 left-0 rounded-full ${
                  showNav
                    ? "rotate-45 duration-[.3s] top-[8px]"
                    : "rotate-0 duration-[.3s] top-0"
                }`}
              ></span>
              <span
                className={`w-full h-[3px] bg-primary dark:bg-white absolute top-1/2 -translate-y-[50%] left-0 rounded-full ${
                  showNav ? "hidden duration-[.3s]" : "block duration-[.3s]"
                }`}
              ></span>
              <span
                className={`w-full h-[3px] bg-primary dark:bg-white absolute  left-0 rounded-full ${
                  showNav ? "rotate-[-45deg] top-[45%]" : "rotate-0 top-[90%]"
                }`}
              ></span>
            </button>
            <div
              className={`p-3 h-[500px] w-[200px]   z-[1] flex flex-col justify-center items-center gap-[20px] 
             dark:bg-amber-600 bg-primary rounded-[10px] mt-[20px] absolute top-10 duration-[.3s] ${
               showNav ? "right-5 block " : "right-[-100%] hidden "
             }`}
            >

            </div>
          </div>
        </div>
      </nav>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ResNavbar