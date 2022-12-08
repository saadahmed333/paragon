import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import changanLogo from "../assets/customers/changanlogo.png";
import governmentLogo from "../assets/customers/governmentlogo.png";
import masterLogo from "../assets/customers/masterlogo.png";
import navyLogo from "../assets/customers/navylogo.png";

import profile from "../assets/about/aboutsliderprofile.png";


// import slider1 from "../assets/about/slider1.png"
import slider2 from "../assets/about/slider2.png"
import slider3 from "../assets/about/slider3.png"

class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      infinite: false,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };
    return (
        <>
        <div className="sm:px-[100px] px-[50px] pt-[100px]">
            <h1 className="text-[25px] sm:text-[30px] font-bold">OUR <span className="text-[#2B77C5]">CUSTOMERS</span></h1>
        </div>
         <div className="pt-[30px] pb-[30px] sm:px-[100px] px-[50px] flex justify-end">
          <div className="w-[80px] flex justify-evenly">
            <button
              className="button border bg-white p-[6px]"
              onClick={this.previous}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="button border bg-white p-[6px]"
              onClick={this.next}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      <div className="px-[80px] pb-[50px] overflow-x-hidden overflow-y-hidden object-contain">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className="mr-[40px] h-[250px] !flex items-center">
            <img src={changanLogo} style={{minWidth: "120px", minHeight: "180px"}} alt="" />
          </div>
          <div className="mr-[40px] h-[250px] !flex items-center justify-center">
            <img src={navyLogo} className="h-[30px]" style={{minWidth: "120px", minHeight: "180px"}} alt="" />
          </div>
          <div className="mr-[40px] h-[250px] !flex items-center justify-center pl-[60px] sm:pl-[20px]">
            <img src={governmentLogo} style={{minWidth: "120px", minHeight: "180px", marginRight: "50px"}} alt="" />
          </div>
          <div className="mr-[40px]  h-[250px] !flex items-center justify-center">
            <img src={masterLogo} style={{minWidth: "120px", minHeight: "180px"}} alt="" />
          </div>
          <div className="mr-[40px] h-[250px] !flex items-center justify-center">
            <img src={changanLogo} style={{minWidth: "120px", minHeight: "180px"}} alt="" />
          </div>
          <div className="mr-[40px] h-[250px] !flex items-center justify-center">
            <img src={navyLogo} className="h-[30px]" style={{minWidth: "120px", minHeight: "180px"}} alt="" />
          </div>
          <div className="mr-[40px] h-[250px] !flex items-center justify-center pl-[60px] sm:pl-[40px]">
            <img src={governmentLogo} style={{minWidth: "120px", minHeight: "180px", marginRight: "50px"}} alt="" />
          </div>
          <div className="mr-[40px] h-[250px] !flex items-center justify-center">
            <img src={masterLogo} style={{minWidth: "120px", minHeight: "180px"}} alt="" />
          </div>
        </Slider>
      </div>
        </>
    );
  }
}

export {PreviousNextMethods}





class Clientslider extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
          <>
          <div className="sm:px-[100px] px-[50px]  pt-[50px]">
            <div className="bg-[#E0B953] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]  flex justify-center items-center">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-[30px] sm:text-[40px] text-white" />
            </div>
            <div className="ml-[60px] sm:ml-[70px] mt-[-30px]">
                <span className="font-bold text-[16px] sm:text-[20px]">WHAT OUR CLIENTS</span>
                <br />
                <span className="text-[#4B53F8] text-[16px] sm:text-[20px] font-bold"> ARE SAYING </span>
            </div>
            <div>

            </div>
          </div>
           <div className="pt-[30px] pb-[50px] sm:px-[100px] px-[50px] flex justify-end">
            <div className="w-[80px] flex justify-evenly">
              <button
                className="button border bg-white p-[6px]"
                onClick={this.previous}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="button border bg-white p-[6px]"
                onClick={this.next}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        <div className="px-[20px] md:px-[80px] overflow-x-hidden overflow-y-hidden object-contain">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="mr-[40px] h-[200px]  !w-[full] sm:!w-[280px] text-white bg-[#4B53F8] p-[20px] ">
              <div className="border-l ml-[20px] pl-[10px]">
                <p className="text-[12px] font-extralight">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="flex mt-[20px]">
                <img src={profile} alt="" className="h-[40px]" />
                <div className="ml-[20px] flex flex-col">
                    <span className="text-[15px]">ALEXENDAR ELA</span>
                    <span className="text-[10px]">WAITER</span>
                </div>
              </div>
            </div>
            <div className="mr-[40px] h-[200px] !w-[full] sm:!w-[280px] text-white bg-[#4B53F8] p-[20px]">
              <div className="border-l ml-[20px] pl-[10px]">
                <p className="text-[12px] font-extralight">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="flex mt-[20px]">
                <img src={profile} alt="" className="h-[40px]" />
                <div className="ml-[20px] flex flex-col">
                    <span className="text-[15px]">ALEXENDAR ELA</span>
                    <span className="text-[10px]">WAITER</span>
                </div>
              </div>
            </div>
            <div className="mr-[40px] h-[200px] !w-[full] sm:!w-[280px] text-white bg-[#4B53F8] p-[20px]">
              <div className="border-l ml-[20px] pl-[10px]">
                <p className="text-[12px] font-extralight">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="flex mt-[20px]">
                <img src={profile} alt="" className="h-[40px]" />
                <div className="ml-[20px] flex flex-col">
                    <span className="text-[15px]">ALEXENDAR ELA</span>
                    <span className="text-[10px]">WAITER</span>
                </div>
              </div>
            </div>
            <div className="mr-[40px] h-[200px] !w-[full] sm:!w-[280px] text-white bg-[#4B53F8] p-[20px]">
              <div className="border-l ml-[20px] pl-[10px]">
                <p className="text-[12px] font-extralight">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="flex mt-[20px]">
                <img src={profile} alt="" className="h-[40px]" />
                <div className="ml-[20px] flex flex-col">
                    <span className="text-[15px]">ALEXENDAR ELA</span>
                    <span className="text-[10px]">WAITER</span>
                </div>
              </div>
            </div>
            <div className="mr-[40px] h-[200px] !w-[full] sm:!w-[280px] text-white bg-[#4B53F8] p-[20px]">
              <div className="border-l ml-[20px] pl-[10px]">
                <p className="text-[12px] font-extralight">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="flex mt-[20px]">
                <img src={profile} alt="" className="h-[40px]" />
                <div className="ml-[20px] flex flex-col">
                    <span className="text-[15px]">ALEXENDAR ELA</span>
                    <span className="text-[10px]">WAITER</span>
                </div>
              </div>
            </div>
            <div className="mr-[40px] h-[200px] !w-[full] sm:!w-[280px] text-white bg-[#4B53F8] p-[20px]">
              <div className="border-l ml-[20px] pl-[10px]">
                <p className="text-[12px] font-extralight">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="flex mt-[20px]">
                <img src={profile} alt="" className="h-[40px]" />
                <div className="ml-[20px] flex flex-col">
                    <span className="text-[15px]">ALEXENDAR ELA</span>
                    <span className="text-[10px]">WAITER</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
          </>
      );
    }
  }


  export {Clientslider}





  class Memberslider extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 945,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 862,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 696,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 596,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <>
        <div>
          <div className="pt-[30px] pb-[50px] sm:px-[50px] px-[50px] flex justify-end">
            <div className="w-[80px] flex justify-evenly]">
              <button
                className="button border bg-white p-[6px] mr-[10px]"
                onClick={this.previous}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="button border bg-white p-[6px]"
                onClick={this.next}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" !flex justify-center items-center ">

          <Slider className="w-[330px] md:w-[700px] lg:w-[500px]" ref={(c) => (this.slider = c)} {...settings}>
            <div className="!flex items-center justify-center">
              <img src={slider3} className="mr-[10px] h-[220px] sm:h-[220px] md:h-[200px]" alt="" />
            </div>
            <div className="!flex items-center justify-center">
            <img src={slider2} className="mr-[10px] h-[220px] sm:h-[220px] md:h-[200px]" alt="" />
            </div>
            <div className="!flex items-center justify-center">
            <img src={slider3} className="mr-[10px] h-[220px] sm:h-[220px] md:h-[200px]" alt="" />
            </div>
            <div className="!flex items-center justify-center">
              <img src={slider2} className="mr-[10px] h-[220px] sm:h-[220px] md:h-[200px]" alt="" />
            </div>
            <div className="!flex items-center justify-center">
            <img src={slider3} className="mr-[10px] h-[220px] sm:h-[220px] md:h-[200px]" alt="" />
            </div>
            <div className="!flex items-center justify-center">
            <img src={slider2} className="mr-[10px] h-[220px] sm:h-[220px] md:h-[200px]" alt="" />
            </div>
          </Slider>
          </div>
        </div>
        </>
      );
    }
  }
  
  export {Memberslider}

