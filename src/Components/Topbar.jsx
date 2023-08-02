import { AiOutlineSearch } from "react-icons/ai"
import { BsFillPersonFill, BsFillChatLeftTextFill } from "react-icons/bs"
import { IoIosNotifications } from "react-icons/io"
import profilePic from "../Assets/img1.jpg";


export default function Topbar() {
    return (
        <div className="bg-blue-500 h-12 flex sticky top-0 z-50">
            <div className="left flex-1 flex  pl-12 font-bold text-2xl text-white items-center">
                <div className="cursor-pointer">
                    Social App
                </div>
            </div>
            <div className="flex-[2] flex justify-center items-center ">
                <div className="w-full py-1 gap-3  rounded-2xl overflow-hidden pl-2  bg-white flex items-center">
                    <AiOutlineSearch />
                    <input type="text" className="text-sm w-full focus:outline-none" placeholder="Search for freinds,post and video" />
                </div>
            </div>
            <div className="flex-[2] flex  ">
                <div className=" text-white font-bold text-sm flex items-center px-5 gap-4 ">
                    <span className="cursor-pointer">Homepage</span>
                    <span className="cursor-pointer">Timeline</span>
                </div>
                <div className="center flex items-center text-lg pl-10 gap-5 text-white">
                    <div className="relative cursor-pointer">
                        <BsFillPersonFill />
                        <span className="absolute top-[-5px] right-[-7px] bg-red-600 text-sm flex items-center justify-center h-4 w-4 rounded-full"
                        >1</span>
                    </div>
                    <div className="relative cursor-pointer">
                        <BsFillChatLeftTextFill />
                        <span className="absolute top-[-5px] right-[-7px] bg-red-600 text-sm flex items-center justify-center h-4 w-4 rounded-full"
                        >
                            1</span>
                    </div>
                    <div className="relative cursor-pointer">
                        <IoIosNotifications />
                        <span className="absolute top-[-5px] right-[-7px] bg-red-600 text-sm flex items-center justify-center h-4 w-4 rounded-full"
                        >1</span>
                    </div>
                </div>
                <div className="right flex items-center pl-16 cursor-pointer">
                    <img className="h-11 w-11 rounded-full object-cover" src={profilePic} alt="" />
                </div>
            </div>
        </div>
    )
}
