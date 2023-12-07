
export default function CloseFreind({ User }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div>
            <ul>
                <li className="  cursor-pointer flex py-2 items-center gap-5">
                    <div className="relative">
                        <img src={PF + User.profilePicture} alt="" className="h-11 w-11 rounded-full object-cover" />
                    </div>
                    <span className="font-bold">{User.username}</span>
                </li>
            </ul>
        </div>
    )
}
