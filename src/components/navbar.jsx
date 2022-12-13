import { Link } from "react-router-dom"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"
import cartImg from "../assets/images/shopping-cart.png"

export default function Navbar() {
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
                <div className={`flex md:hidden justify-between w-[100vw] items-center p-2 "bg-blue-500"`}>
                    <h1 className="font-bold text-white">PARAGON</h1>
                    <FontAwesomeIcon icon={faBars} className="text-[20px] text-white pr-6 hover:cursor-pointer" onClick={() => openNav()} />
                </div>
                <div className={`"bg-blue-500" text-white hidden md:!block`} id="navbar" ref={navbarRef}>
                    <div className={`bg-white h-screen w-[280px] fixed top-0 border shadow-2xl md:bg-blue-500 md:h-fit md:w-[100vw] md:border-0 md:p-3 md:flex md:justify-between`}>
                       <h1 className="font-semibold pl-20 hidden md:!block">PARAGON</h1>
                       <div className={`flex flex-col justify-between px-4 text-blue-500 h-[250px] md:items-center md:bg-blue-500 md:text-white md:flex-row md:h-fit md:w-[600px]`}>
                            <div className="flex items-center w-[280px] md:w-fit justify-between">
                                <Link to={"/"}>Home</Link>
                                <FontAwesomeIcon icon={faXmark} className="text-[25px] pr-6 md:hidden hover:cursor-pointer" onClick={() => closeNav()}/>
                            </div>
                            <Link to={"/categories"}>Categories</Link>
                            <Link to={"/customers"}>Customers</Link>
                            <Link to={"/about"}>About</Link>
                            <Link to={"/contact"}>Contact Us</Link>
                            <Link to={"/service"}>Services</Link>
                        </div>
                        <div className="hidden md:block">
                            <img src={cartImg} alt="" className="pr-5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}