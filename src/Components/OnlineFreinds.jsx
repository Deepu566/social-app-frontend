
export default function OnlineFreinds({ User }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div>
            <ul className="my-5">
                <li className="flex my-4 items-center gap-3">
                    <div className="relative h-11 w-11">
                        <img src={PF + User.profilePicture} alt="" className="h-full w-full rounded-full object-cover" />
                        <span className="h-3 w-3  border-white rounded-full absolute bg-green-500 top-0 right-0"></span>
                    </div>
                    <span className="font-bold">{User.username}</span>
                </li>
            </ul>
        </div >
    )
}
