

export default function CloseFreind({ User }) {
    return (
        <div>
            <ul>
                <li className="  cursor-pointer flex py-2 items-center gap-5">
                    <div className="relative">
                        <img src={require(`../${User.profilePicture}`)} alt="" className="h-11 w-11 rounded-full object-cover" />
                    </div>
                    <span className="font-bold">{User.username}</span>
                </li>
            </ul>
        </div>
    )
}
