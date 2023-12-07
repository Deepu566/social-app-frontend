import { IoMdImages } from "react-icons/io"
import { MdOutlineLiveTv } from "react-icons/md"
import { BsEmojiLaughing } from "react-icons/bs"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
export default function Sharepost() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const desc = useRef();
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            newPost.img = fileName;
            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log(error)
            }
        }

        try {
            await axios.post("/posts", newPost)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    return (

        <div className="h-40 sharePost  rounded-lg bg-gray-50 px-5 py-3" >
            <div className="flex items-center py-2 gap-2">
                <img className="w-12 h-12 rounded-full object-cover"
                    src={user.profilePicture ?
                        PF + user.profilePicture
                        :
                        PF + "noProfile.webp"
                    }
                    alt="" />
                <input ref={desc} className="w-full focus:outline-none rounded-full px-5 text-sm bg-gray-100 h-10" type="text" placeholder={"what's on your mind " + user.username + "?"} />
            </div>
            <hr className="my-3" />
            <form className="flex justify-around py-2" onSubmit={handleSubmit}>
                <div className="flex items-center gap-1 cursor-pointer ">
                    <label htmlFor="file" className="text-md">
                        <IoMdImages className="text-red-600 text-3xl" />
                        Images
                        <input className="hidden" type="file" id="file" accept=".jpeg,.jpg,.png" onChange={(e) => setFile(e.target.files[0])} />
                    </label>
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
                    <button type="submit" className="bg-blue-600 px-3 py-1 rounded-full text-white font-bold text-sm">Post</button>
                </div>
            </form >
        </div >
    )
}
