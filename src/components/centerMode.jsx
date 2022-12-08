import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import uncleImg from "../assets/images/uncle.png"
import navyImg from "../assets/images/pak-navy.png"
import automobileImg from "../assets/images/automobile.png"
import corporateImg from "../assets/images/corporate.png"


export default class MultipleItems extends Component {
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
      speed: 500,
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
            dots: true,
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
      <div className="px-[100px] overflow-x-hidden overflow-y-hidden object-contain">
        <div className="py-[50px] flex justify-end active:border-0 focus:border-0 md:justify-start">
          <div className="flex items-center justify-between w-[80%] md:w-[200px] md:justify-start">
            <p className="font-bold text-blue-500">Categories</p>
          <div className="w-[80px] flex justify-evenly lg:hidden">
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
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <div>
              <img src={corporateImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
              <p className="font-semibold capitalize text-center">CORPORATE</p>
            </div>
          </div>
          <div>
            <div>
              <img src={navyImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
              <p className="font-semibold capitalize text-center">PAKISTAN <br />
                NAVY</p>
            </div>
          </div>
          <div>
            <div>
              <img src={uncleImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
              <p className="font-semibold capitalize text-center">SUPREME COURT <br />
                PAKISTAN</p>
            </div>
          </div>
           
          <div>
            <div>
              <img src={automobileImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
              <p className="font-semibold capitalize text-center">CHANGAN <br />
                AUTOMOBILE</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
    
    // export default class MultipleItems extends Component {
    //   render() {
    //     const settings = {
    //       dots: true,
    //       infinite: false,
    //       speed: 500,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     };
    //     return (
    //       <>
    //         <div className="px-[5%] md:px-[10%] lg:flex md:flex justify-between md:w-[69%] md:m-auto ">
    //           <div className="text-blue-500 font-bold md:min-w-[100px] relative md:-top-[30px] mb-4">Categories</div>
    //           <div className="w-full  active:border-0">
    //             <Slider {...settings}>
    //               <div>
    //                 <div>
    //                   <img src={corporateImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
    //                   <p className="font-semibold capitalize pl-6">CORPORATE</p>
    
    //                 </div>
    //               </div>
    //               <div>
    //                 <div>
    //                   <img src={navyImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
    //                   <p className="font-semibold capitalize pl-6">PAKISTAN <br />
    //                     NAVY</p>
    //                 </div>
    //               </div>
    //               <div>
    //                 <div>
    //                   <img src={automobileImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
    //                   <p className="font-semibold capitalize pl-6">CHANGAN <br />
    //                     AUTOMOBILE</p>
    //                 </div>
    //               </div>
    //               <div>
    //                 <div>
    //                   <img src={uncleImg} alt="" style={{ minWidth: "120px", minHeight: "180px" }} />
    //                   <p className="font-semibold capitalize pl-6">SUPREME COURT <br />
    //                     PAKISTAN</p>
    //                 </div>
    //               </div>
    //             </Slider>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   }
    // }
