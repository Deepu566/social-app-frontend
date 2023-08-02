import Post from "./Post";
import Sharepost from "./Sharepost";
import { Posts } from "../dunnmyData"

export default function Feed() {
    return (
        <div className="flex-[5.5]">
            <div className="px-5 py-5">
                <Sharepost />
                {
                    Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    )
                    )}

            </div>
        </div>
    )
}
