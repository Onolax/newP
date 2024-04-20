import { useState } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { SiFramework } from "react-icons/si";
import { MdContacts } from "react-icons/md";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a href="#main" className="w-[75%] flex justify-center bg-grey-100 items-center rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiFillHome size={20} />
                            <span className="pl-4">About</span>
                        </a>
                        <a href="#main" className="w-[75%] flex justify-center bg-grey-100 items-center rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <IoSchoolSharp size={20} />
                            <span className="pl-4">Education</span>
                        </a>
                        <a href="#main" className="w-[75%] flex justify-center bg-grey-100 items-center rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <SiFramework size={20} />
                            <span className="pl-4">Projects</span>
                        </a>
                        <a href="#main" className="w-[75%] flex justify-center bg-grey-100 items-center rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <MdContacts size={20} />
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                )
                    : (
                        <div className="md:block hidden fixed top-[25%] z-10">
                            <div className="flex flex-col">
                                <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                                    <AiFillHome size={20} />
                                </a>
                                <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                                    <IoSchoolSharp size={20} />
                                </a>
                                <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                                    <SiFramework size={20} />
                                </a>
                                <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                                    <MdContacts size={20} />
                                </a>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default NavBar