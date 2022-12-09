import React from "react";
import contactBackground from "../assets/contactUs/contactUs.png";
import contactMap from "../assets/contactUs/contactMap.png";
import pin from "../assets/contactUs/pin.png";
import paragon from "../assets/contactUs/paragon.png";
import { Footer } from "../components/footer";
import { Backgroundimage } from "../components/backgroundimage";
import Navbar from "../components/navbar";
const ContactUs = () => {
  return (
    <div>
        <Navbar />
      <div>
        <Backgroundimage
          title="CONTACT US"
          backgroundimage={contactBackground}
        />
      </div>

      <div style={{ backgroundImage: `url(${contactMap})` }} className="flex justify-center items-center h-[300px]" >
        <span className="p-[10px] mt-[40px] bg-white"><img src={paragon} alt="" className="h-[10px]" /></span>
        <span><img src={pin} alt="" className="h-[100px]" /></span>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">OUR <span className="text-[#2B77C5]">ADDRESS</span>
              </h1>
              <div className="mb-[10px]">
                <h1 className="pb-[2px] font-semibold">UAE ADDRESS</h1>
                <span className="text-[12px]">C-10 Gate No 2, Ajman Free Zone, Ajman, U.A.E.</span>
              </div>
              <div className="mb-[10px]">
                <h1 className="pb-[2px] font-semibold">USA ADDRESS</h1>
                <span className="text-[12px]">Myriad Trading LLC 25322 Saint James City Southfield  48075 Michigan, USA</span>
              </div>
              <div className="mb-[10px]">
                <h1 className="pb-[2px] font-semibold">EMAIL</h1>
                <span className="text-[12px]">info@paragon-uae.com</span>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <span className="text-[15px]">Please use the form below to send us any questions or comments regarding our site and products.</span>
              <div className="flex flex-col justify-between h-[300px] mt-[10px]">
                <input type="text" placeholder="YOUR NAME" className="h-[30px] text-[15px]" />
                <input type="email" placeholder="YOUR EMAIL" className="h-[30px] text-[15px]" />
                <textarea name="YOUR MESSEGE" id="" cols="10" rows="8"></textarea>
              </div>
              <div className="mt-[10px] w-[100%]">
                <button className="border px-[10px] py-[5px] text-white bg-[#2B77C5]">CONTACT US</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="text-gray-600 body-font mb-[100px]">
          <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-[30px] text-3xl mb-4 font-semibold text-gray-900">CONTACT <span className="text-[#2B77C5]">DETAILS</span>
              </h1>
              <div className="flex justify-center sm:justify-between flex-wrap w-[280px]">
                <div className="w-[120px]">
                  <h1 className="font-semibold">UAE OFFICE</h1>
                  <p>06-740-4300</p>
                  <p>06-740-8607</p>
                  <p>50-477-2456</p>
                </div>
                <div className="w-[120px]">
                  <h1 className="font-semibold">USA OFFICE</h1>
                  <p>06-740-4300</p>
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
};

export { ContactUs };



