import React from 'react'
import rectangleImage from "../assets/images/Rectangle.png"
import belt from "../assets/images/belt.png"
import beltCircle from "../assets/images/beltCircle.png"
const Beltcircle = () => {
  return (
   <div className=' my-[200px] md:px-[50px]'>
     <div style={{ backgroundImage: `url(${rectangleImage})`}} className="mx-[20px] h-[300px] bg-no-repeat flex justify-between flex-wrap">
        <div className='w-[50%] pl-[30px] py-[30px]'>
            <h1 className='text-[30px] font-bold text-white'>BUY OUR SPECIAL</h1>
            <h1 className='text-[30px] font-bold text-white'>PRODUCT</h1>
            <div className='w-[400px]'>
                <p className='text-white'>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
            <div className='mt-[10px]'>
                <button className='bg-white font-bold px-[10px] py-[5px] border-[1px] border-black'>SHOP NOW</button>
            </div>
        </div>
        <div className='w-[50%]'>
                <div style={{ backgroundImage: `url(${beltCircle})`}} className="md:h-[455px] md:w-[435px] rounded-[40%]">
                <div>
            <div className="md:h-[455px] md:w-[435px]  rounded-[50%] mt-[-105px]" >
                    {/* <span>saad</span> */}
                </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
  export default Beltcircle
  // style={{ backgroundImage: `url(${beltCircle})`,}} 