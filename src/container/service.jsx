import React , {useEffect} from "react";
import cateogaryBackground from "../assets/categoury/catogerybackground.png";
import { Backgroundimage } from "../components/backgroundimage";
import coat from "../assets/services/coat.png";
import embroidery from "../assets/services/embroidery.png";
import overlock from "../assets/services/overlock-sewing-machine.png";
import sublimation from "../assets/services/sublimation.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Footer } from "../components/footer";
import Navbar from "../components/navbar.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <Navbar/>
      <div>
        <Backgroundimage
          title="SERVICES & PRICING"
          backgroundimage={cateogaryBackground}
        />
      </div>

      <div className="p-[50px] sm:p-[100px]">
        <div  className="flex flex-col lg:pl-[100px] sm:items-center md:flex-row">
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="sm:w-[50%] flex flex-col items-center sm:items-start w-[100%] mr-[100px]">
            <div className="pr-[10px] sm:pl-[0px]">
              <div className="flex items-center">
                <img src={overlock} alt="" className="h-[60px] mr-[10px]" />
                <span className="font-bold">STITCHING</span>
              </div>
              <div className="mt-[10px]  w-[250px] sm:w-[300px]">
                <span className="text-[12px]">
                  We have dealt with various kinds of garments, be it school,
                  office or hotel uniforms, labor & security, fashion{" "}
                </span>
              </div>
            </div>
            <div className="pr-[10px] sm:pl-[0px] mt-[30px]">
              <div className="flex items-center">
                <img src={embroidery} alt="" className="h-[60px] mr-[10px]" />
                <span className="font-bold">EMBRIODERY</span>
              </div>
              <div className="mt-[10px]  w-[250px] sm:w-[300px]">
                <span className="text-[12px]">
                  We have dealt with various kinds of garments, be it school,
                  office or hotel uniforms, labor & security, fashion{" "}
                </span>
              </div>
            </div>
            <div className="pr-[10px] sm:pl-[0px] mt-[30px]">
              <div className="flex items-center">
                <img src={sublimation} alt="" className="h-[60px] mr-[10px]" />
                <span className="font-bold">STITCHING</span>
              </div>
              <div className="mt-[10px]  w-[250px] sm:w-[300px]">
                <span className="text-[12px]">
                  We have dealt with various kinds of garments, be it school,
                  office or hotel uniforms, labor & security, fashion{" "}
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="sm:w-[50%] w-[100%]">
                <div className="flex mt-[200px] md:mt-[0px] pl-[40px] sm:pl-[50px] items-center h-full justify-center relative">
                  <img src={coat} alt="" className="h-[400px] absolute mr-[120px] md:mr-[200px]"/>
                  <div className="bg-[#6296ca] h-[200px] w-[200px] text-[#2B77C5]">s</div>
                </div>
          </div>
        </div>
      </div>
      
      <div className="py-[50px] px-[0px]  mt-[80px] sm:mt-[0px] sm:p-[100px] ">
        <div className="flex justify-center md:justify-start lg:pl-[97px]">
          <h1 className="text-[40px] font-bold">OUR <span className="text-[#2B77C5]">PRICES</span></h1>
        </div>
        <div className="lg:px-[97px]">
          <div className="flex justify-center md:justify-between flex-wrap py-[50px]">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="group w-[280px] border-[2px] border-black flex flex-col items-center p-[20px] mb-[20px] hover:text-white hover:bg-[#2B77C5] hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.69)] cursor-pointer">
              <div className="p-[5px]">
                <h1 className="font-bold border-b-[2px] text-[20px] shadow-lg border-[#275A53]">STANDARD</h1>
              </div>
                <h1 className=" font-extrabold text-[40px] text-[#2B77C5] group-hover:text-white mt-[20px]">$90</h1>
              <div className="flex flex-col justify-between py-[40px]">
                <div className="price flex items-center mb-[10px]">
                  <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                  <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
              </div>
              <div className="bg-slate-500 mb-[20px]">
                <button className="bg-[#2B77C5] group-hover:bg-white border-[1px] border-black text-white group-hover:text-[#2B77C5] text-[15px] px-[50px] py-[5px] font-bold">BUY NOW</button>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="group w-[280px] border-[2px] border-black flex flex-col items-center p-[20px]  hover:text-white hover:bg-[#2B77C5] hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.69)] mb-[20px] cursor-pointer">
              <div className="p-[5px]">
                <h1 className="font-bold border-b-[2px] text-[20px] shadow-lg border-[#275A53]">POPULAR</h1>
              </div>
                <h1 className="text-[#2B77C5] group-hover:text-white font-extrabold text-[40px] mt-[20px]">$120</h1>
              <div className="flex flex-col justify-between py-[40px]">
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
              </div>
              <div className="bg-slate-500 mb-[20px]">
              <button className="bg-[#2B77C5] group-hover:bg-white border-[1px] border-black text-white group-hover:text-[#2B77C5] text-[15px] px-[50px] py-[5px] font-bold">BUY NOW</button>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="group w-[280px] border-[2px] border-black flex flex-col items-center p-[20px]  hover:text-white hover:bg-[#2B77C5] hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.69)] mb-[20px] cursor-pointer">
              <div className="p-[5px]">
                <h1 className="font-bold border-b-[2px] text-[20px] shadow-lg border-[#275A53]">PROFESSIONAL</h1>
              </div>
              <div>
                <h1 className="text-[#2B77C5] group-hover:text-white font-extrabold text-[40px] mt-[20px]">$190</h1>
              </div>
              <div className="flex flex-col justify-between py-[40px]">
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                  <span>dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
                <div className="flex items-center mb-[10px]">
                <span className="bg-[#2B77C5] group-hover:bg-white mr-[10px] rounded-[50%] py-[0px] px-[6px] hover:bg-white"><FontAwesomeIcon icon={faCheck} className="text-white group-hover:text-[#2B77C5] text-[10px]" /></span>
                <span className="text-[15px] sm:text-[16px]">dummy text of the printing </span>
                </div>
              </div>
              <div className="bg-slate-500 mb-[20px]">
                <button className="bg-[#2B77C5] group-hover:bg-white border-[1px] border-black text-white group-hover:text-[#2B77C5] text-[15px] px-[50px] py-[5px] font-bold">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
      <Footer />
    </div>

    </div>
  );
};

export { Service };
