import "../css/about.css";
import contactBackground from "../assets/contactUs/contactUs.png"
import stiches from "../assets/svg/stiches.png";
import personal from "../assets/svg/personal.png";
import custom from "../assets/svg/custom.png";
import tailor1 from "../assets/svg/tailor1.png";
import tailor2 from "../assets/svg/tailor2.png";
import laptop from "../assets/svg/laptop.png";
import clothShop from "../assets/svg/clothshop.png";
import circle from "../assets/svg/circle.png";
import dot from "../assets/svg/dot.png";
import aboutMap from "../assets/about/aboutMap.png";
import glass from "../assets/categoury/glass.png";
import {Footer} from "../components/footer";
import {Backgroundimage} from "../components/backgroundimage";

function About() {
  return (
    <div>

      <div className="w-[100%] bg-[#2B77C5] px-[10px] py-[20px] text-[white]">
        <h1>Header</h1>
      </div>
      <div>
        <Backgroundimage title="About Us" backgroundimage={contactBackground}/>
      </div>

      {/* About Boxes */}
      <div className="py-[70px]">
        <div className="flex justify-center flex-wrap">
          <div className="w-[300px] flex mb-[35px] mr-[20px]">
            <img
              src={stiches}
              alt=""
              className="h-[60px] mr-[10px] sm:h-[40px]"
            />
            <div>
              <p className="font-bold mb-[10px]">STITCHING</p>
              <span>
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy
              </span>
            </div>
          </div>
          <div className="w-[300px] flex mb-[35px] mr-[20px]">
            <img
              src={personal}
              alt=""
              className="h-[60px] mr-[10px] sm:h-[40px]"
            />
            <div>
              <p className="font-bold mb-[10px]">PERSONAL BRANDING</p>
              <span>
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy
              </span>
            </div>
          </div>
          <div className="w-[300px] flex  mb-[35px] mr-[20px]">
            <img
              src={custom}
              alt=""
              className="h-[60px] mr-[10px] sm:h-[40px]"
            />
            <div>
              <p className="font-bold mb-[10px]">CUSTOM MEASUREMENT</p>
              <span>
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:flex lg:justify-center  md:flex md:justify-between mb-[70px] lg:h-[250px] md:h-[240px]">
        <div className="p-[20px] bg-[#ecebfa] h-[200px] lg:w-[50%] flex justify-center items-center  md:w-[50%] md:h-[250px] lg:flex md:flex  sm:p-[30px] sm:w-[100%]">
          <div className=" w-[300px] lg:w-[300px] md:w-[300px] md:ml-[50px] lg:ml-[20px]  h-[150px]">
            <h1 className="text-[25px] text-center font-bold lg:mb-[10px]">
              WHO WE <span className="text-[#2B77C5]">ARE ?</span>
            </h1>
            <div className="text-center  md:w-[300px] md:text-left text-[12px] ">
              <span className="lg:w-[300px] md:w-[250px] font-semibold ">
                We have dealt with various kinds of garments, be it school,
                office or hotel uniforms, labor & security, fashion & casual
                wear, or any other kind of fabrics. Moreover, we offer
                embroidery and printing on all of our products. We use only the
                finest material and are sourcing our raw materials all over the
                world.
              </span>
            </div>
          </div>
        </div>
        <div className=" bg-[#2B77C5] flex justify-center sm:p-[10px] h-[200px]  md:h-[250px] lg:flex lg:justify-center  lg:w-[50%] md:w-[50%] relative ">
          <img
            src={tailor1}
            alt=""
            className="h-[210px]  sm:h-[280px] lg:h-[300px] lg:w-[250px] md:h-[250px] sm:absolute sm:left-[160px] sm:top-[30px] md:left-[20px] md:top-[30px] lg:left-[-80px] lg:top-[40px] "
          />
          <img
            src={tailor2}
            alt=""
            className="h-[210px]  sm:h-[280px] lg:h-[300px] lg:w-[250px] md:h-[250px] sm:absolute  md:left-[180px] sm:left-[360px] sm:top-[80px] md:top-[90px] lg:left-[150px] lg:top-[80px]"
          />
        </div>
      </div>

      {/* About Laptop 3rd part */}

      <div>
        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="container px-5 pb-[20px] mx-auto mt-[0px] sm:mt-[100px]">
            <div className="flex items-center flex-wrap  mb-[0px]">
              <div className="p sm:p-12 pt-[0px] md:w-1/2 flex flex-col items-start">
                <h2 className="sm:text-[20px] text-[18px] font-bold text-black mt-4 mb-4">
                  WELCOME TO <span className="text-[#2B77C5]">PARAGON</span>
                </h2>
                <p className="leading-relaxed  text-[12px] ">
                  We have dealt with various kinds of garments, be it school,
                  office or hotel uniforms, labor & security, fashion & casual
                  wear, or any other kind of fabrics. Moreover, we offer
                  embroidery and printing on all of our products.{" "}
                </p>
              </div>
              <div className=" xl:mt-[50px] md:w-1/2 flex flex-col items-start">
                <img src={laptop} alt="" className="mt-[10px]" />
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* aboute 6th part  */}

     
<div>
  <div className=" lg:pl-[20px] mb-[50px] mt-[50px]">
<div className="md:flex">
  <img src={clothShop} alt="" className="md:h-[400px] lg:h-[500px] sm:h-[400px] my-[0] mx-auto" />
  <div style={{ backgroundImage: `url(${aboutMap})` }}  className="bg-[#87aedf] flex justify-center w-[100%] lg:h-[300px] md:mt-[150px] lg:mt-[200px] sm:flex md:justify-center">
   <div style={{ backgroundImage: `url(${glass})` }} className="flex  justify-center items-center w-[100%] sm:h-[250px] md:h-full sm:w-[100%]  md:pt-[30px] h-[230px] md:w-[100%] lg:w-[100%] ">
   <div className="flex justify-center items-center">
   <div className="relative mt-[-130px] ml-[10px] hidden sm:block">
      <img src={circle} alt="" className="h-[40px] sm:h-[50px] md:h-[50px] lg:h-[60px] md:mr-[40px] md:mt-[10px]" />
      <img src={dot} alt="" className="absolute top-[12px] left-[10px] sm:top-[18px] sm:left-[15px] md:top-[25px] md:left-[15px] lg:top-[32px] lg:left-[22px]" />
    </div>
    <div className="w-[300px] pl-[20px] sm:pl-[0px] sm:w-[400px] md:w-[350px] lg:w-[400px] md:my-[40px] md:mx-auto">
      <h1 className="text-white lg:font-bold md:text-[20px] lg:text-[30px] sm:text-[20px] mb-[10px]">LET’S START SOMETHING BIG TOGETHER</h1>
      <div className="md:flex md:justify-between text-white">
        <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="h-[35px] w-[150px] sm:w-[180px] lg:w-[260px]" />
        <button className="border bg-[#2B77C5] text-[15px] md:px-[8px] py-[5px] sm:py-[5px] md:py-[5px] px-[10px] lg:py-[8px]">SUBSCRIBE</button>
      </div>
    </div>
   </div>
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
}

export { About };


