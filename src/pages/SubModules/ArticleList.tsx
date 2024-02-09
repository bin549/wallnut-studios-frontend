import Layout from "../../layout/Layout";
import {Link} from "react-router-dom"

const ArticleList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <Link to={"/"}>article</Link>
        </Layout>
    )
}

export default ArticleList
