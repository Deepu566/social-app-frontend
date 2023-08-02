import image from "../Assets/img1.jpg"
import { IoMdImages } from "react-icons/io"
import { MdOutlineLiveTv } from "react-icons/md"
import { BsEmojiLaughing } from "react-icons/bs"
export default function Sharepost() {
    return (
        <div className="h-40 sharePost  rounded-lg bg-gray-50 px-5 py-3" >
            <div className="flex items-center py-2 gap-2">
                <img className="w-12 h-12 rounded-full object-cover" src={image} alt="" />
                <input className="w-full focus:outline-none rounded-full px-5 text-sm bg-gray-100 h-10" type="text" placeholder="What's on your mind?" />
            </div>
            <hr className="my-3" />
            <div className="flex justify-around py-2 ">
                <div className="flex items-center gap-1 cursor-pointer ">
                    <IoMdImages className="text-red-600 text-3xl" />
                    <span className="text-md">Images</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer ">
                    <MdOutlineLiveTv className="text-red-600 text-3xl" />
                    <span className="text-md">live video</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer ">
                    <BsEmojiLaughing className="text-red-600 text-3xl" />
                    <span className="text-md">feelings</span>
                </div>
                <div className="btn">
                    <button className="bg-blue-600 px-3 py-1 rounded-full text-white font-bold text-sm">Post</button>
                </div>
            </div>
        </div>
    )
}
