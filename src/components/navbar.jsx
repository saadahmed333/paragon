import { Link } from "react-router-dom"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"
import cartImg from "../assets/images/shopping-cart.png"

export default function Navbar() 
{
    const navbarRef = useRef()

    function openNav() {
        navbarRef.current.style.display = "block"
    }
    function closeNav() {
        navbarRef.current.style.display = "none"
    }

    return (
        <>
            <div className="fixed z-50">
                <div className={`flex md:hidden justify-between w-[100vw] py-[20px] bg-blue-500 items-center p-2 "bg-blue-500"`}>
                    <h1 className="font-bold text-white cursor-pointer">PARAGON</h1>
                    <FontAwesomeIcon icon={faBars} className="text-[20px] text-white pr-6 hover:cursor-pointer" onClick={() => openNav()} />
                </div>
                <div className={`"bg-blue-500" text-white hidden md:!block`} id="navbar" ref={navbarRef}>
                    <div className={`h-screen text-white bg-blue-500 w-[280px] md:py-[20px] fixed top-0 border shadow-2xl md:bg-blue-500 md:h-fit md:w-[100vw] md:border-0 md:p-3 md:flex md:justify-between items-center`}>
                       <h1 className="font-semibold md:pl-15 lg:pl-20 hidden md:!block cursor-pointer">PARAGON</h1>
                       <div className={`flex flex-col justify-between px-4 text-white h-[350px] md:items-center md:bg-blue-500 md:text-white md:flex-row md:h-fit sm:w-[500px] md:w-[600px]`}>
                            <div className="flex items-center  w-[280px] md:w-fit justify-between">
                                <Link to={"/"}>Home</Link>
                                <FontAwesomeIcon icon={faXmark} className="text-[25px] pr-6 md:hidden hover:cursor-pointer" onClick={() => closeNav()}/>
                            </div>
                            <Link to={"/categories"}>Categories</Link>
                            <Link to={"/customers"}>Customers</Link>
                            <Link to={"/about"}>About</Link>
                            <Link to={"/contact"}>Contact Us</Link>
                            <Link to={"/service"}>Services</Link>
                        </div>
                        <div className="hidden md:block md:mr-[20px] lg:mr-[80px] ">
                            <img src={cartImg} alt="" className="h-[30px] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}