import Sidebar from "../Components/Sidebar"
import Feed from "../Components/Feed"
import Topbar from "../Components/Topbar"
import Rightbar from "../Components/Rightbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/users?username=${username}`)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [username])
    return (
        <>
            <Topbar />
            <div className="content flex">
                <div className="left flex-[3]">
                    <Sidebar />
                </div>
                <div className="right  flex-[9]">
                    <div className="top relative h-64">
                        <img
                            src={user?.coverPicture ?
                                PF + user.coverPicture
                                :
                                PF + "noCover.jpg"
                            }
                            className="h-full w-full object-cover" alt="" />
                        <div className="w-full flex flex-col gap-2  items-center absolute -bottom-24  ">
                            <img src=
                                {user.profilePicture ?
                                    PF + user.profilePicture
                                    :
                                    PF + "noProfile.webp"
                                }
                                className="h-40 w-40 border-2 border-white  object-cover rounded-full" alt="" />
                            <h1 className="font-extrabold text-xl">{user.username} </h1>
                        </div>
                    </div>
                    <div className="bottom mt-24 flex">
                        <div className="left flex-[5.5]">
                            <Feed username={username} />
                        </div>
                        <div className="right flex-[3.5]">
                            <Rightbar user={user} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
