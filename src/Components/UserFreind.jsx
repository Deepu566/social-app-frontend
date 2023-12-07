import React from 'react'

export default function UserFreind({ friend }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className=" flex flex-col items-center">
            <img className="h-24 w-24 rounded-md object-cover"
                src={
                    friend.profilePicture ?
                        PF + friend.profilePicture
                        : PF + "noProfile.webp"
                } alt="" />
            <div className="text-sm font-bold ">
                {friend.username}
            </div>
        </div>
    )
}
