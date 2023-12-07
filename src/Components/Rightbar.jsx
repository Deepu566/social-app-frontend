import OnlineFreinds from "./OnlineFreinds"
import { users } from "../dunnmyData"
import UserFreind from "./UserFreind"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const { user: currentUser } = useContext(AuthContext)
    const [isFollowed, setIsfollowed] = useState(false)

    useEffect(() => {
        setIsfollowed(currentUser.followings.includes(user?.id))
    }, [user.id, currentUser])
    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id)
                setFriends(friendList.data)
            } catch (error) {
                console.log(error)
            }
        }
        getFriends();
    }, [user])

    const handleClick = async () => {
        try {
            if (isFollowed) {
                await axios.put("users/" + user._id + "/unfollow", {
                    userId: currentUser.Id,
                });
            } else {
                await axios.put("users/" + user._id + "/follow", {
                    userId: currentUser.Id,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }


    const Homerightbar = () => {
        return (
            <div className="pt-5 pl-5 pr-5 ">
                <div className="  flex items-center ">
                    <img className="mr-5  h-10 w-10" src={PF + "gift.png"} alt="" />
                    <span className="bdTetx">
                        <b>Ragini </b> and
                        <b> 3 freinds </b>
                        have birthday today.
                    </span>
                </div>
                <img className="my-5 rounded-xl" src={PF + "ad.jpg"} alt="" />
                <div>
                    <span className="font-bold">Online Freinds</span>
                    {users.map((u) => (
                        <OnlineFreinds key={u.id} User={u} />
                    ))
                    }
                </div>
            </div>
        )
    }

    const Profilerightbar = () => {
        return (
            <div>
                {user.username !== currentUser.username && (
                    <button onClick={handleClick}
                        className="bg-blue-400 px-3 py text-white text-lg mt-10 mb-5 "
                    >
                        {
                            isFollowed ? "Unfollow - " : "Follow +"
                        }
                    </button>
                )}
                <div className="mb-5">
                    <h1 className="font-extrabold text-lg mb-4">User Information</h1>
                    <div className="font-bold text-gray-600 mb-3 ">
                        <span>City : </span>
                        <span className="font-normal ml-3 text-gray-500">{user.city} </span>
                    </div>
                    <div className="font-bold text-gray-600 mb-3 ">
                        <span>Country : </span>
                        <span className="font-normal ml-3 text-gray-500">{user.country} </span>
                    </div>
                    <div className="font-bold text-gray-600 mb-3 ">
                        <span>Age : </span>
                        <span className="font-normal ml-3 text-gray-500">{user.age}</span>
                    </div>
                </div>
                <div>
                    <h1 className="font-extrabold text-lg mb-4">User freinds</h1>
                    <div className="flex flex-wrap gap-6">
                        {
                            friends?.map((friend) => (
                                <Link to={"/profile/" + friend.username}>
                                    <UserFreind key={friend._id} friend={friend} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-[3.5]">
            {

                user ? <Profilerightbar /> : <Homerightbar />
            }

        </div >
    )
}






