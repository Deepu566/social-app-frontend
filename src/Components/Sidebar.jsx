import { users } from "../dunnmyData"
import { MdOutlineRssFeed, MdGroups3 } from "react-icons/md"
import { BiSolidVideos } from "react-icons/bi"
import { BsFillQuestionSquareFill, BsFillBookmarksFill, BsBagCheck, BsFillChatFill } from "react-icons/bs"
import { SlCalender } from "react-icons/sl"
import { GiGraduateCap } from "react-icons/gi"
import CloseFreind from "./CloseFreind"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Sidebar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    return (
        <div className="flex-[3] h-[calc(100vh-48px)]  overflow-y-scroll sticky top-12">
            <div className="p-8">
                <ul>

                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <img className="h-8 w-8 rounded-full object-cover"
                            src={
                                user.profilePicture ?
                                    PF + user.profilePicture
                                    : PF + "noProfile.webp"}
                            alt="" />
                        <span className="font-extrabold capitalize text-lg">{user.username}</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <MdOutlineRssFeed className="text-2xl" />
                        <span>Feed</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <MdGroups3 className="text-2xl" />
                        <span>Groups</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <BiSolidVideos className="text-2xl" />
                        <span>Videos</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <BsFillQuestionSquareFill className="text-2xl" />
                        <span>Questions</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <BsFillBookmarksFill className="text-2xl" />
                        <span>Bookmarks</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <BsBagCheck className="text-2xl" />
                        <span>Jobs</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <BsFillChatFill className="text-2xl" />
                        <span>Chat</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <SlCalender className="text-2xl" />
                        <span>Events</span>
                    </li>
                    <li className="flex cursor-pointer items-center mb-5 gap-4 ">
                        <GiGraduateCap className="text-2xl" />
                        <span>Courses</span>
                    </li>
                </ul>
                <button className="bg-gray-200 cursor-pointer rounded-lg px-10 py-2">Show more</button>
                <hr className="my-5 color-gray-500 font-bold" />
                {
                    users.map((u) => (
                        <CloseFreind key={u.id} User={u} />
                    ))
                }
            </div>
        </div>
    )
}
