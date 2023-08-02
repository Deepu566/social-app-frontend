import gift from "../Assets/gift.png"
import ad from "../Assets/ad.jpg"
import OnlineFreinds from "./OnlineFreinds"
import { users } from "../dunnmyData"
export default function Rightbar() {
    return (
        <div className="flex-[3.5]">
            <div className="pt-5 pl-5 pr-5 ">
                <div className="  flex items-center ">
                    <img className="mr-5  h-10 w-10" src={gift} alt="" />
                    <span className="bdTetx">
                        <b>Ragini </b> and
                        <b> 3 freinds </b>
                        have birthday today.
                    </span>
                </div>
                <img className="my-5 rounded-xl" src={ad} alt="" />
                <div>
                    <span className="font-bold">Online Freinds</span>
                    {users.map((u) => (
                        <OnlineFreinds key={u.id} User={u} />
                    ))
                    }
                </div>
            </div>
        </div >
    )
}
