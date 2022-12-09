import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import cartImg from "../assets/images/shopping-cart.png";

export default function Navbar({ home }) {
  const navbarRef = useRef();

  function openNav() {
    navbarRef.current.style.display = "block";
  }
  function closeNav() {
    navbarRef.current.style.display = "none";
  }

  return (
    <>
      <div className="fixed w-[100%] z-[999]">
        <div className="py-[20px] bg-[#2B77C5] text-white md:flex md:justify-between md:px-[50px]">
          <div className="flex items-center justify-between px-[20px] sm:px-[100px] md:px-[0px]">
            <h1 className="font-bold">PARAGON</h1>
            <FontAwesomeIcon
              icon={faBars}
              className="lg:hidden text-[20px] mx-[3px] cursor-pointer md:hidden"
            />
          </div>
         <div className="flex flex-col md:flex-row justify-between md:justify-between h-[280px] w-[80%]  pl-[20px] md:pl-[0px] pt-[20px]">
         <div>
            <ul className="flex flex-col md:flex-row md:justify-between w-[480px] text-[18px]">
              <li className="pb-[10px]">Home</li>
              <li className="pb-[10px]">About</li>
              <li className="pb-[10px]">Category</li>
              <li className="pb-[10px]">Customers</li>
              <li className="pb-[10px]">Service</li>
              <li className="pb-[10px]">Contact Us</li>
            </ul>
          </div>
          <div className="border-[1px] p-[2px] shadow-lg w-[30px] bg-[#397DD3]">
            <img src={cartImg} alt="" className="h-[20px]" />
          </div>
        </div>
         </div>
      </div>
    </>
  );
}

{
  /* <div className="fixed w-[100%] z-[999]">
                <div className="flex justify-between px-[50px] items-center py-[20px] w-[100%] bg-[#2B77C5] text-white">
                   <div className="flex justify-between items-center md:w-[540px] lg:w-[670px]">
                   <div className="flex">
                        <h1 className="font-bold">PARAGON</h1>
                        <FontAwesomeIcon icon={faBars} className="lg:hidden mx-[3px] " />
                    </div>
                    <div>
                        <ul className="flex md:w-[420px] lg:w-[500px] items-center justify-around text-[16px]"> 
                            <li>Home</li>
                            <li>About</li>
                            <li>Cateagory</li>
                            <li>Customers</li>
                            <li>Service</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                   </div>
                    <div className="border-[1px] p-[2px] shadow-lg bg-[#397DD3]">
                        <img src={cartImg} alt="" className="h-[20px] hidden lg:block"/>
                    </div>
                </div>
            </div> */
}
