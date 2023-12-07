import { FiMoreVertical } from "react-icons/fi"
import { AiOutlineLike } from "react-icons/ai"
import { AiFillLike } from "react-icons/ai"
import { BiComment } from "react-icons/bi"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
// import { format } from "timeago.js"
import TimeAgo from 'react-timeago'
import { AuthContext } from "../context/AuthContext"

export default function Post({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, SetUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)
    const time = new Date(post.createdAt)


    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/users?userId=${post.userId}`)
                SetUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [post.userId])


    const handleLike = () => {
        try {
            axios.put(`/posts/${post._id}/like`, { userId: currentUser._id })
        } catch (error) {
            console.log(error)
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
        console.log(isLiked)
    }



    return (
        <div className='rounded-lg post my-5 bg-gray-50 px-2 py-3"'>
            {post &&
                (
                    <div className="postwrapper p-3 ">
                        <div className="top flex justify-between items-center">
                            <div className="left flex gap-3 items-center">
                                <Link to={`/profile/${user.username}`}>
                                    <img
                                        src={
                                            user.profilePicture ?
                                                PF + user.profilePicture
                                                :
                                                PF + "noProfile.webp"
                                        }
                                        className=" w-8 h-8 rounded-full object-cover" alt="" />
                                </Link>
                                <span className="font-bold ">{user.username}</span>
                                {/* <span className="text-[12px] text-gray-700">{format(post.createdAt)}</span> */}

                                <TimeAgo className="text-[12px] text-gray-700" date={time} />
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
                                <img src={post.img ?
                                    PF + post.img :
                                    PF + "noCover.jpg"
                                } className="max-h-[500px] object-cover w-full" alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between text-gray-700 border-b border-gray-200 ">
                            <div className="flex items-center gap-1">
                                <span className="text-sm flex gap-1">
                                    {
                                        like === 0 ? "" : like + " like"
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="flex  mt-2 ">
                            <div onClick={() => handleLike()} className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:bg-gray-200">
                                {
                                    isLiked ?
                                        <AiFillLike className="text-xl text-blue-500" />
                                        :
                                        <AiOutlineLike className="text-xl" />
                                }
                                <div className="text-gray-700">{isLiked ? "liked" : "like"}</div>
                            </div>
                            <div className="flex flex-1 justify-center items-center gap-2 cursor-pointer hover:bg-gray-200">
                                <BiComment className="text-xl" />
                                <div>Comment</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
