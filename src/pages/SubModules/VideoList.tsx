import Layout from "../../layout/Layout";
import {Link} from "react-router-dom"

const VideoList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <Link to={"/"}>Video</Link>
        </Layout>
    )
}

export default VideoList
