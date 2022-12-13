import React,{useEffect} from "react";
import glass from "../assets/categoury/glass.png"
import AOS from 'aos';
import 'aos/dist/aos.css'
function Backgroundimage(props) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div style={{ backgroundImage: `url(${props.backgroundimage})` }} className="About-Background md:mt-[70px] h-[400px] ">
    <div style={{ backgroundImage: `url(${glass})` }} className="flex justify-center h-[400px] flex-col items-center text-white">
      <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="text-[23px] sm:text-[35px] mb-[10px] font-bold">{props.title}</h1>
      <span data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="px-[10px] text-[15px] text-center">
        imply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's
      </span>
    </div>
  </div>
  )
}

export  {Backgroundimage}