import React from "react";
import { Footer } from "../components/footer";
import { Backgroundimage } from "../components/backgroundimage";
import cateogaryBackground from "../assets/categoury/catogerybackground.png";
import {PreviousNextMethods} from "../components/slider";
import Navbar from "../components/navbar";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import sports from "../assets/categoury/sports.png";
// import tray from "../assets/categoury/tray.png";
// import worker from "../assets/categoury/worker.png";
function Customers(props) {
  return (
    <div>
        <Navbar/>
      <div>
        <Backgroundimage
          title="OUR CUSTOMERS"
          backgroundimage={cateogaryBackground}
        />
      </div>
        <PreviousNextMethods />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-[40px]">
              <h1 className="sm:text-[25px] text-2xl font-semibold title-font text-gray-900">
                FOLLOW US ON SOCIAL NETWORKS
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center sm:justify-between  flex-wrap w-[600px]">
                <div>
                  <button className="bg-[#2B77C5] mr-[10px] mb-[20px] shadow-sm shadow-black  w-[160px] text-white py-[5px] px-[10px]">
                    FACEBOOK
                  </button>
                </div>
                <div>
                  <button className="bg-[#2B77C5] mr-[10px] mb-[20px] shadow-sm shadow-black   w-[160px] text-white py-[5px] px-[10px]">
                    TWITTER
                  </button>
                </div>
                <div>
                  <button className="bg-[#2B77C5] mr-[10px] mb-[20px] shadow-sm shadow-black   w-[160px] text-white py-[5px] px-[10px]">
                    INSTAGRAM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export { Customers };
