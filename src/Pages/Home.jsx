import Sidebar from "../Components/Sidebar"
import Feed from "../Components/Feed"
import Topbar from "../Components/Topbar"
import Rightbar from "../Components/Rightbar"

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="flex">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>

        </>
    )
}

export default Home

