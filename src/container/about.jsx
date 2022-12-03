import "../css/about.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stiches from "../assets/svg/stiches.png";
import personal from "../assets/svg/personal.png";
import custom from "../assets/svg/custom.png";
import tailor1 from "../assets/svg/tailor1.png";
import tailor2 from "../assets/svg/tailor2.png";
import laptop from "../assets/svg/laptop.png";
import clothShop from "../assets/svg/clothshop.png";

import Slider from "react-slick";
function About() {  
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  return (
    <div>
      <div className="w-[100%] bg-[#2B77C5] px-[10px] py-[20px] text-[white]">
        <h1>Header</h1>
      </div>
      {/* background Image  */}
      <div className="About-Background h-[400px]">
        <div className="flex justify-center h-[400px] flex-col items-center text-white">
          <h1 className="text-[35px] mb-[10px] font-bold ">ABOUT US</h1>
          <span className="w-[290px] text-[15px] text-center">
            imply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </span>
        </div>
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

      {/* About 4th Part Slider  */}

    <div className="bg-yellow-100 mx-[20px] my-[100px]"> 
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>


      {/* <div className="relative">
     <div>
     <button
            className="bg-black carousel-control-prev  flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="bg-black carousel-control-next  flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
     </div>
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
         
        </div>
      </div> */}

      {/* aboute 6th part  */}

      {/* <div>
            <div>
                <img src={clothShop} alt="" />
            </div>
        </div> */}
    </div>
  );
}

export { About };
