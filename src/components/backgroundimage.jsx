import React from 'react'
import glass from "../assets/categoury/glass.png"

function Backgroundimage(props) {
  return (
    <div style={{ backgroundImage: `url(${props.backgroundimage})` }} className="About-Background h-[400px] ">
    <div style={{ backgroundImage: `url(${glass})` }} className="flex justify-center h-[400px] flex-col items-center text-white">
      <h1 className="text-[23px] sm:text-[35px] mb-[10px] font-bold ">{props.title}</h1>
      <span className="px-[10px] text-[15px] text-center">
        imply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's
      </span>
    </div>
  </div>
  )
}

export  {Backgroundimage}