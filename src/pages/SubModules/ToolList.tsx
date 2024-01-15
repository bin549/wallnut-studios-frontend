import classes from "./ToolList.module.css";
import Layout from "../../layout/Layout";

const ToolList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <h1>Tool</h1>
        </Layout>
    )
}

export default ToolList
