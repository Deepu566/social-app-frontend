import Sidebar from "../Components/Sidebar"
import Feed from "../Components/Feed"
import Topbar from "../Components/Topbar"
import Rightbar from "../Components/Rightbar"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"


const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Topbar />
            <div className="flex">
                <Sidebar />
                <Feed username={user.username} />
                <Rightbar />
            </div>

        </>
    )
}

export default Home

