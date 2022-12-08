import tailorImg from "../assets/images/tailor.svg"
import ideaImg from "../assets/images/idea (1).png"
import tournamentImg from "../assets/images/tournament (1).png"
import truckImg from "../assets/images/delivery (1).png"


export default function Hww() {
    return (
        <>
            <div className="flex flex-col px-[2%] py-4 lg:flex-row items-center">
                <div className=" m-auto">
                    {/* <section class="text-gray-600 body-font relative top-2 ">
                        <div class="container px-5 py-24 mx-auto flex flex-wrap">
                            <div class="flex flex-wrap w-full">
                                <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                    <div class="flex relative pb-12">
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                                            <FontAwesomeIcon icon={faLightbulb} className="text-gray-600 text-[26px] pb-3" />

                                        </div>
                                    </div>
                                    <div class="flex relative pb-12">
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                            <img src={factoryImg} alt="" className="h-[26px] w-[26px]" />
                                        </div>

                                    </div>
                                    <div class="flex relative">
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                                            <FontAwesomeIcon icon={faTruckFast} className="text-gray-600 text-[26px] pb-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <div className="h-[300px]">
                    <img src={tailorImg} alt="" className="h-[300px]" />
                    </div>
                    <div className="mb-8 w-[80%] m-auto">
                        <div className=" border-gray-500 relative top-[6px] -z-10 border-b-2">
                            <div className="flex justify-between  pb-[6px]">
                            <img src={ideaImg} width={"25px"} height={"25px"} alt="" className="relative right-1"/>
                            <img src={tournamentImg} width={"25px"} height={"25px"} alt="" />
                            <img src={truckImg} width={"25px"} height={"25px"} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span className="h-3 w-3  bg-black rounded-[50%] inline-block"></span>
                            <span className="h-3 w-3 bg-black rounded-[50%] inline-block"></span>
                            <span className="h-3 w-3 bg-indigo-500 rounded-[50%] inline-block"></span>
                        </div>
                            {/* <div className="absolute h-[1px] border border-black w-[250px] top-0"></div> */}
                    </div>
                </div>
                <div className=" w-full lg:w-[58%] ">
                    <h1 className="font-bold text-center lg:text-left pl-10 -mt-5">HOW <span className="text-blue-500">WE WORK</span></h1>

                    <div className="px-3 md:m-auto md:w-fit lg:w-full">
                        <div className="flex pt-4">
                            <div className="pr-3">
                                <span className="w-[35px] h-[35px] rounded-[50%] bg-blue-500 font-bold text-white text-center flex justify-center text-[22px]">1</span>
                            </div>
                            <div>
                                <h2 className="font-bold">SELECTION</h2>
                                <p className="text-[12px] md:m-auto lg:max-w-[550px]">
                                    Choose from our impressive collection, or send us your own design and specifications for manufacturing.
                                </p>
                            </div>
                        </div>
                        <div className="flex pt-4">
                            <div className="pr-3">
                                <span className="w-[35px] h-[35px] rounded-[50%] bg-blue-500 font-bold text-white text-center flex justify-center text-[20px]">2</span>
                            </div>
                            <div>
                                <h2 className="font-bold">FINALIZING</h2>
                                <p className="text-[12px] md:m-auto lg:max-w-[550px]">
                                    Choose from our impressive collection, or send us your own design and specifications for manufacturing.
                                </p>
                            </div>
                        </div>
                        <div className="flex pt-4">
                            <div className="pr-3">
                                <span className="w-[35px] h-[35px] rounded-[50%] bg-blue-500 font-bold text-white text-center flex justify-center text-[20px]">3</span>
                            </div>
                            <div className="">
                                <h2 className="font-bold">SELECTION</h2>
                                <p className="text-[12px] md:m-auto lg:max-w-[550px]">
                                    Choose from our impressive collection, or send us your own design and specifications for manufacturing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

