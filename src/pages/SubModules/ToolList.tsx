import Layout from "../../layout/Layout";
import {Link} from "react-router-dom"

const ToolList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <Link to={"/"}>Tool</Link>
        </Layout>
    )
}

export default ToolList
