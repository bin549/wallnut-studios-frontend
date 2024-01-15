import classes from "./VideoList.module.css";
import Layout from "../../layout/Layout";

const VideoList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <h1>Video</h1>
        </Layout>
    )
}

export default VideoList
