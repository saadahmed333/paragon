import {Footer} from "../components/footer.jsx"
import Wwd from "../components/wwd"
import Hww from "../components/hww"
import Pt from "../components/pt"
import MultipleItems from "../components/centerMode"
import UniAndAcc from "../components/uni&a"
import { Clientslider } from "../components/slider.jsx"
import { PreviousNextMethods } from "../components/slider.jsx"
import clothShop from "../assets/svg/clothshop.png";
import circle from "../assets/svg/circle.png";
import dot from "../assets/svg/dot.png";
import aboutMap from "../assets/about/aboutMap.png";
import glass from "../assets/categoury/glass.png";
import Navbar from "../components/navbar.jsx"
export default function Home(){
    return(
        <>
        <Navbar />
        <Wwd/>
        <UniAndAcc/>
        <Hww/>
        <MultipleItems/>
        <Pt/>
        <Clientslider />
        <PreviousNextMethods />
        {/* <Beltcircle /> */}
        <div>
        <div className=" lg:pl-[20px] mb-[50px] mt-[50px]">
          <div className="md:flex">
            <img
            data-aos="zoom-out-right"
              src={clothShop}
              alt=""
              className="md:h-[400px] lg:h-[500px] sm:h-[400px] my-[0] mx-auto"
            />
            <div
            
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
              style={{ backgroundImage: `url(${aboutMap})` }}
              className="bg-[#87aedf] flex justify-center w-[100%] lg:h-[300px] md:mt-[150px] lg:mt-[200px] sm:flex md:justify-center"
            >
              <div
                style={{ backgroundImage: `url(${glass})` }}
                className="flex  justify-center items-center w-[100%] sm:h-[250px] md:h-full sm:w-[100%]  md:pt-[30px] h-[230px] md:w-[100%] lg:w-[100%] "
              >
                <div className="flex justify-center items-center">
                  <div className="relative mt-[-130px] ml-[10px] hidden sm:block">
                    <img
                      src={circle}
                      alt=""
                      className="h-[40px] sm:h-[50px] md:h-[50px] lg:h-[60px] md:mr-[40px] md:mt-[10px]"
                    />
                    <img
                      src={dot}
                      alt=""
                      className="absolute top-[12px] left-[10px] sm:top-[18px] sm:left-[15px] md:top-[25px] md:left-[15px] lg:top-[32px] lg:left-[22px]"
                    />
                  </div>
                  <div className="w-[300px] pl-[20px] sm:pl-[0px] sm:w-[400px] md:w-[350px] lg:w-[400px] md:my-[40px] md:mx-auto">
                    <h1 className="text-white lg:font-bold md:text-[20px] lg:text-[30px] sm:text-[20px] mb-[10px]">
                      LET’S START SOMETHING BIG TOGETHER
                    </h1>
                    <div className="md:flex md:justify-between">
                      <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL ADDRESS"
                        className="h-[35px] w-[150px] sm:w-[180px] lg:w-[260px]"
                      />
                      <button className="border bg-[#2B77C5]  text-white text-[15px] md:px-[8px] py-[5px] sm:py-[5px] md:py-[5px] px-[10px] lg:py-[8px]">
                        SUBSCRIBE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
        </>
    )
}