import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Sharepost from "./Sharepost";
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import { AiOutlineLoading } from "react-icons/ai"

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = username ?
                    await axios.get(`/posts/profile/${username}`)
                    :
                    await axios.get(`/posts/timeline/${user._id}`)
                setPosts(res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                })
                )

            } catch (err) {
                console.log(err)
            }
            setIsLoading(false)

        }
        fetchData()
    }, [username, user._id])
    return (
        <div className="flex-[5.5]">
            <div className="px-5 py-5">
                {username === user.username && <Sharepost />}
                {
                    isLoading ?
                        (<div className="h-48 w-full  flex justify-center items-center">
                            <AiOutlineLoading className="text-2xl text-blue-600 font-extrabold animate-spin" />
                        </div>)
                        :
                        (
                            posts.length === 0 ?
                                (
                                    <div className="h-96 flex justify-center items-center">
                                        <div className="text-lg text-blue-700">
                                            No posts yet
                                        </div>
                                    </div>
                                )
                                :
                                posts.map((post) => (
                                    <Post key={post._id} post={post} />
                                ))
                        )
                }
            </div>
        </div>
    )
}
