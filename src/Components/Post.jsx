import { FiMoreVertical } from "react-icons/fi"
import { AiOutlineLike } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { BiComment } from "react-icons/bi"
import { users } from "../dunnmyData.js"
import { useState } from "react"

export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const handleLike = () => {
        setIsLiked(!isLiked)
        setLike(isLiked ? (like - 1) : (like + 1))
    }
    return (
        <div className='rounded-lg post my-5 bg-gray-50 px-2 py-3"'>
            {post &&
                <div className="postwrapper p-3 ">
                    <div className="top flex justify-between items-center">
                        <div className="left flex gap-3 justify-items-center">
                            <img src={require(`../${users.filter((u) => u.id == post.userId)[0].profilePicture}`)} className=" w-8 h-8 rounded-full object-cover" alt="" />
                            <span className="font-bold">{users.filter((u) => u.id == post.userId)[0].username}</span>
                            <span className="text-[10] text-gray-700">{post.date}</span>
                        </div>
                        <div className="right">
                            <FiMoreVertical />
                        </div>
                    </div>
                    <div className="center my-5 flex flex-col gap-3">
                        <div>
                            {post.desc}
                        </div>
                        <div>
                            <img src={require(`../${post.photo}`)} className="max-h-[500px] object-cover w-full" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between text-gray-700 border-b border-gray-200 ">
                        <div className="flex items-center gap-1">
                            <span className="text-xl">{like}</span>
                            <span className="text-sm">{post.like > 1 ? "likes" : "like"}</span>
                        </div>
                        <div className="flex items-center gap">
                            <span className="text-xl">{post.comment}</span>
                            <span className="text-sm">{post.comment > 1 ? "comments" : "comment"}</span>
                        </div>
                    </div>
                    <div className="flex  mt-2 ">
                        <div onClick={() => handleLike()} className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:bg-gray-200">
                            <AiOutlineLike className="text-xl" />
                            <div className="text-gray-700">Like</div>
                        </div>
                        <div className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:bg-gray-200">
                            <BiComment className="text-xl" />
                            <div>Comment</div>
                        </div>
                    </div>
                </div >
            }
        </div >
    )
}
