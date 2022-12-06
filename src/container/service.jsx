import React from "react";
import cateogaryBackground from "../assets/categoury/catogerybackground.png";
import { Footer } from "../components/footer";
import { Backgroundimage } from "../components/backgroundimage";
import coat from "../assets/services/coat.png";
import embroidery from "../assets/services/embroidery.png";
import overlock from "../assets/services/overlock-sewing-machine.png";
import sublimation from "../assets/services/sublimation.png";

const Service = () => {
  return (
    <div>
      <div className="w-[100%] bg-[#2B77C5] px-[10px] py-[20px] text-[white]">
        <h1>Header</h1>
      </div>
      <div>
        <Backgroundimage
          title="SERVICES & PRICING"
          backgroundimage={cateogaryBackground}
        />
      </div>

      <div className="p-[50px] sm:p-[100px]">
        <div className="flex flex-col lg:pl-[100px] md:flex-row">
          <div className="sm:w-[50%] flex flex-col items-center sm:items-start w-[100%] mr-[100px]">
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

          <div className="sm:w-[50%] w-[100%]">
                <div className="flex mt-[200px] md:mt-[0px] pl-[40px] sm:pl-[50px] items-center h-full justify-center relative">
                  <img src={coat} alt="" className="h-[400px] absolute mr-[120px] md:mr-[200px]"/>
                  <div className="bg-[#6296ca] h-[200px] w-[200px] text-[#2B77C5]">s</div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Service };
