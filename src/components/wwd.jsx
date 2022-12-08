import menImg from "../assets/images/wwdMen.svg"
import womanImg from "../assets/images/wwdGirl.svg"
import profileImg from "../assets/images/profile.png"
import starsImg from "../assets/images/stars.svg"

export default function Wwd() {
    return (
        <>
            <div className="flex flex-col md:flex-row px-[10%] justify-between">
                <div className="md:w-1/2">
                    <div className="flex m-auto justify-between">
                        <img src={menImg} alt="" className="w-[47%]" />
                        <img src={womanImg} alt="" className="w-[47%]" />
                    </div>
                    <div className="h-[155px] shadow-lg pl-4 pr-1 w-[220px] py-2 relative -top-[50px] left-2 bg-white rounded flex flex-col justify-between  lg:-top-[100px] lg:w-72 lg:h-36 lg:left-[160px]">
                        <p className="text-[10px] border-0 border-l-gray-500 border-l-[3px] pl-1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        </p>
                        <div className="flex justify-between pr-2">
                            <div>
                                <img src={profileImg} className="rounded-[50px]" alt="" width={"50px"} height={"50px"} />
                            </div>
                            <div>
                                <img src={starsImg} alt="" />
                                <h2 className="font-semibold text-[75%]">LORENS LIPZA</h2>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="md:w-1/2 md:mt-4 lg:mt-6 md:pl-20">
                    <h2 className="font-bold text-center md:text-left">WHAT WE <span className="text-blue-500">DO?</span></h2>
                    <p className="text-left md:w-[75%] lg:w-[68%] xl:w-1/2 py-5">
                        We have dealt with various kinds of garments, be it school, office or hotel uniforms, labor & security, fashion & casual wear, or any other kind of fabrics. Moreover, we offer embroidery and printing on all of our products. We use only the finest material and are sourcing our raw materials all over the world.
                    </p>

                    <div className="flex items-center justify-center md:justify-start">
                        <button className="font-semibold border-2 border-gray-600 border-r-0 p-[1.5px] px-2 hover:bg-blue-500 text-blue-500 hover:text-white rounded-l">EXPLORE NOW</button>
                        <button className="bg-blue-500 border-2 border-gray-600 rounded-r">
                            <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.1668 13.5L1.8335 13.5M17.2085 25.4583L29.1668 13.5L17.2085 1.54166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}