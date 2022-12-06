import React from 'react'
import cateogaryBackground from "../assets/categoury/catogerybackground.png";
import { Footer } from '../components/footer'
import { Backgroundimage } from '../components/backgroundimage'
import {Category} from "../components/categorycards"
import cap from "../assets/categoury/cap.png"
import brief from "../assets/categoury/briefcase.png"
import doctor from "../assets/categoury/doctor.png"
import engineer from "../assets/categoury/engineer.png"
import policeman from "../assets/categoury/policeman.png"
import sports from "../assets/categoury/sports.png"
import tray from "../assets/categoury/tray.png"
import worker from "../assets/categoury/worker.png"
const Categories = () => {
  return (
    <div>
        <div className="w-[100%] bg-[#2B77C5] px-[10px] py-[20px] text-[white]">
        <h1>Header</h1>
      </div>
        <div>
             <Backgroundimage title="EXPLORE CATEGORIES" backgroundimage={cateogaryBackground} />
        </div>

        <div className='px-5 py-[80px]'>
            <div className='text-[30px] font-bold px-4 pb-[50px]'>
                <h1>EXPLORE BY</h1>
                <h1 className='text-[#2B77C5]'>CATEGORY</h1>
            </div>
            <div className='flex justify-center flex-wrap '>
            <Category title="School" image={cap}/>
            <Category title="CORPORATE" image={brief}/>
            <Category title="EVENT & SPORTS" image={doctor} />
            <Category title="HOSPITAL / CLINIC" image={engineer} />
            <Category title="HOTEL & RESTAURANT" image={policeman} />
            <Category title="ENGINEERING & TECHNICIAN" image={sports} />
            <Category title="SECURITY" image={tray} />
            <Category title="SAFETY ITEMS" image={worker} />
            </div>
        </div>


        <div>
    <Footer />
        </div>
    </div>
  )
}

export {Categories}