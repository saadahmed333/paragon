import React from 'react'
import arrow from "../assets/categoury/arrow.png"

function Category(props) {
  return (
      <div className='shadow-2xl  w-[230px]  py-[20px] pl-[20px] ml-[10px] mr-[10px] mb-[20px]'>
        <img src={props.image} alt="" />
        <div className='mt-[20px] h-[120px]'>
          <h1 className='font-bold text-[20px] pb-[20px]'>{props.title}</h1>
          <p className='text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
        </div>
        <div className='flex items-center mt-[50px] justify-end pr-[20px]'>
          <button className='border mr-[5px] bg-[#2B77C5] text-[12px] font-medium text-white px-[10px] py-[5px]'>VIEW MORE</button>
          <img src={arrow} alt=""  className='h-[20px]'/>
        </div>
      </div>
  )
}


export {Category}